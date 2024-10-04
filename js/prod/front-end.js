(() => {
  'use strict';
  var e = {
      7048: (e) => {
        var t = (function () {
          var e = {
            tolerance: 0,
            duration: 800,
            easing: 'easeOutQuart',
            container: window,
            callback: function () {},
          };
          function t(e, t, n, o) {
            return (e /= o), -n * (--e * e * e * e - 1) + t;
          }
          function n(e, t) {
            var n = {};
            return (
              Object.keys(e).forEach(function (t) {
                n[t] = e[t];
              }),
              Object.keys(t).forEach(function (e) {
                n[e] = t[e];
              }),
              n
            );
          }
          function o(e) {
            return e instanceof HTMLElement ? e.scrollTop : e.pageYOffset;
          }
          function r() {
            var o =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            (this.options = n(e, o)),
              (this.easeFunctions = n({ easeOutQuart: t }, r));
          }
          return (
            (r.prototype.registerTrigger = function (e, t) {
              var o = this;
              if (e) {
                var r = e.getAttribute('href') || e.getAttribute('data-target'),
                  i =
                    r && '#' !== r
                      ? document.getElementById(r.substring(1))
                      : document.body,
                  a = n(
                    this.options,
                    (function (e, t) {
                      var n = {};
                      return (
                        Object.keys(t).forEach(function (t) {
                          var o = e.getAttribute(
                            'data-mt-'.concat(
                              t.replace(/([A-Z])/g, function (e) {
                                return '-' + e.toLowerCase();
                              })
                            )
                          );
                          o && (n[t] = isNaN(o) ? o : parseInt(o, 10));
                        }),
                        n
                      );
                    })(e, this.options)
                  );
                'function' == typeof t && (a.callback = t);
                var c = function (e) {
                  e.preventDefault(), o.move(i, a);
                };
                return (
                  e.addEventListener('click', c, !1),
                  function () {
                    return e.removeEventListener('click', c, !1);
                  }
                );
              }
            }),
            (r.prototype.move = function (e) {
              var t = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              if (0 === e || e) {
                r = n(this.options, r);
                var i,
                  a = 'number' == typeof e ? e : e.getBoundingClientRect().top,
                  c = o(r.container),
                  s = null;
                a -= r.tolerance;
                window.requestAnimationFrame(function n(l) {
                  var d = o(t.options.container);
                  s || (s = l - 1);
                  var u = l - s;
                  if (i && ((a > 0 && i > d) || (a < 0 && i < d)))
                    return r.callback(e);
                  i = d;
                  var g = t.easeFunctions[r.easing](u, c, a, r.duration);
                  r.container.scroll(0, g),
                    u < r.duration
                      ? window.requestAnimationFrame(n)
                      : (r.container.scroll(0, a + c), r.callback(e));
                });
              }
            }),
            (r.prototype.addEaseFunction = function (e, t) {
              this.easeFunctions[e] = t;
            }),
            r
          );
        })();
        e.exports = t;
      },
    },
    t = {};
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var i = (t[o] = { exports: {} });
    return e[o](i, i.exports, n), i.exports;
  }
  function o(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
    return o;
  }
  function r(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return o(e);
      })(e) ||
      (function (e) {
        if (
          ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (e) {
          if ('string' == typeof e) return o(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? o(e, t)
              : void 0
          );
        }
      })(e) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function i(e) {
    return void 0 === window.EquiCore_screenReaderText ||
      void 0 === window.EquiCore_screenReaderText[e]
      ? (console.error('Missing translation for '.concat(e)), '')
      : window.EquiCore_screenReaderText[e];
  }
  function a(e) {
    var t = r(e.children);
    if (0 === t.length) return '';
    var n = t.filter(function (e) {
      return 'img' === e.tagName.toLowerCase();
    });
    if (t.length !== n.length) return '';
    var o = n
      .filter(function (e) {
        return e.alt && '' !== e.alt;
      })
      .map(function (e) {
        return e.alt;
      });
    return o.length ? o.join(', ') : '';
  }
  function c() {
    var e = [window.location.host];
    void 0 !== window.EquiCore_externalLinkDomains &&
      (e = e.concat(window.EquiCore_externalLinkDomains));
    var t = r(document.querySelectorAll('a')).filter(function (t) {
      return (function (e, t) {
        if (!e.length) return !1;
        var n;
        if (
          ['#', 'tel:', 'mailto:', '/'].some(function (t) {
            return new RegExp('^'.concat(t), 'g').test(e);
          })
        )
          return !1;
        try {
          n = new URL(e);
        } catch (t) {
          return console.log('Invalid URL: '.concat(e)), !1;
        }
        return !t.some(function (e) {
          return n.host === e;
        });
      })(t.href, e);
    });
    t.forEach(function (e) {
      if (
        1 === e.childElementCount &&
        'img' === e.children[0].tagName.toLowerCase()
      )
        return !1;
      if (!e.classList.contains('no-external-link-label')) {
        var t = e.textContent.trim().length ? e.textContent.trim() : a(e);
        if (t && !e.getAttribute('aria-label')) {
          var n =
            '_blank' === e.target
              ? ''
                  .concat(t, ': ')
                  .concat(i('external_link'), ', ')
                  .concat(i('target_blank'))
              : ''.concat(t, ': ').concat(i('external_link'));
          e.setAttribute('aria-label', n);
        }
      }
      ['no-external-link-indicator', 'global-link', 'button'].some(
        function (t) {
          return e.classList.contains(t);
        }
      ) ||
        (e.insertAdjacentHTML(
          'beforeend',
          '<svg class="external-link-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 9 9"><path d="M4.499 1.497h4v4m0-4l-7 7" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
        ),
        e.classList.add('is-external-link'));
    });
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
  var s = n(7048),
    l = n.n(s);
  const d = function () {
    for (
      var e = new (l())(
          { ease: 'easeInQuad' },
          {
            easeInQuad: function (e, t, n, o) {
              return n * (e /= o) * e + t;
            },
            easeOutQuad: function (e, t, n, o) {
              return -n * (e /= o) * (e - 2) + t;
            },
          }
        ),
        t = document.querySelectorAll('a[href*="#"]:not([href="#"]):not(#top)'),
        n = function (n) {
          e.registerTrigger(t[n]);
          var o = document.getElementById(t[n].hash.substring(1));
          t[n].classList.contains('nav-link') &&
            document.body.classList.remove('js-nav-active'),
            t[n].addEventListener('click', function () {
              t[n].classList.contains('nav-link') &&
                document.body.classList.remove('js-nav-active'),
                o &&
                  setTimeout(function () {
                    o.setAttribute('tabindex', '-1'), o.focus();
                  }, 500);
            });
        },
        o = 0;
      o < t.length;
      o++
    )
      n(o);
  };
  const u = function () {
    var e = new (l())({ duration: 300, easing: 'easeOutQuart' }),
      t = document.getElementById('top'),
      n = document.querySelectorAll(
        'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
    function o(t) {
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? n[0].focus({ focusVisible: t })
        : (e.move(n[0]), n[0].focus({ preventScroll: !0, focusVisible: t }));
    }
    t &&
      (t.addEventListener('click', function (e) {
        e.preventDefault(), o(!1);
      }),
      t.addEventListener('keydown', function (e) {
        e.preventDefault(), o(!0);
      })),
      window.addEventListener('scroll', function () {
        var e = window.pageYOffset,
          n = document.documentElement.clientHeight;
        e > n && t.classList.add('is-visible'),
          e < n && t.classList.remove('is-visible');
      });
  };
  const g = function () {
    var e = document.querySelectorAll('h1, h2, h3, h4, h5, h6')[0],
      t = document.querySelectorAll('.skip-link')[0],
      n = new (l())();
    t &&
      t.addEventListener('click', function () {
        e.setAttribute('tabindex', '-1'), e.focus(), n.move(e);
      });
  };
  const m = function () {
    var e = window.location.search;
    if (new URLSearchParams(e).has('s')) {
      var t = document.querySelector('main input[name="s"]');
      t && t.focus({ preventScroll: !0 });
    }
  };
  const p = function (e, t, n) {
    t.forEach(function (t) {
      return e.addEventListener(t, n);
    });
  };
  const f = function () {
    if (
      document.getElementById('nav-toggle') &&
      document.querySelector('.site-header') &&
      document.getElementById('menu-items-wrapper')
    ) {
      var e = document.documentElement.clientWidth || document.body.clientWidth,
        t = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--width-max-mobile'
          ),
          10
        ),
        n = document.querySelector('.site-header').offsetHeight;
      if (e <= t) {
        if (
          ((document.getElementById('menu-items-wrapper').style.top = ''.concat(
            n,
            'px'
          )),
          (document.getElementById('menu-items-wrapper').style.height =
            'calc(100vh - '.concat(n, 'px)')),
          document.querySelector('.air-notification'))
        ) {
          var o = document.querySelectorAll('.air-notification'),
            r = 0;
          o.forEach(function (e) {
            r = e.offsetHeight + r;
          }),
            (document.getElementById('menu-items-wrapper').style.height =
              'calc(100vh - '.concat(n + r, 'px)')),
            (document.getElementById('menu-items-wrapper').style.top =
              ''.concat(n + r, 'px')),
            o.forEach(function (e) {
              var t = e.querySelector('button'),
                o = e.offsetHeight;
              t &&
                t.addEventListener('click', function () {
                  (r -= o),
                    (document.getElementById(
                      'menu-items-wrapper'
                    ).style.height = 'calc(100vh - '.concat(n + r, 'px)')),
                    (document.getElementById('menu-items-wrapper').style.top =
                      ''.concat(n + r, 'px'));
                });
            });
        }
      } else
        (document.getElementById('menu-items-wrapper').style.top = '0'),
          (document.getElementById('menu-items-wrapper').style.height = 'auto');
    } else console.log('Warning: No nav-toggle or site-header found.');
  };
  const v = function (e) {
    var t,
      n = document.getElementById('nav'),
      o = document.getElementById('nav-toggle'),
      i = getComputedStyle(document.documentElement).getPropertyValue(
        '--width-max-mobile'
      ),
      a = window.matchMedia('(max-width: '.concat(i, ')')).matches;
    if (n && o && a) {
      var c = (t = r(
          n.querySelectorAll(
            'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
          )
        )
          .filter(function (e) {
            return !e.hasAttribute('disabled');
          })
          .filter(function (e) {
            return !!(
              e.offsetWidth ||
              e.offsetHeight ||
              e.getClientRects().length
            );
          }))[0],
        s = t[t.length - 1];
      c === e.target &&
        'Tab' === e.code &&
        e.shiftKey &&
        (e.preventDefault(), s.focus()),
        s !== e.target ||
          'Tab' !== e.code ||
          e.shiftKey ||
          (e.preventDefault(), c.focus());
    }
  };
  const h = function () {
    document.querySelectorAll('.dropdown-toggle')
      ? document.querySelectorAll('.dropdown-toggle').forEach(function (e) {
          var t = e.previousElementSibling;
          if (t) {
            var n = t.offsetHeight;
            e.style.height = ''.concat(n, 'px');
          }
        })
      : console.log('Warning: No dropdown-toggles found.');
  };
  const y = function (e) {
    var t = e.getBoundingClientRect(),
      n = {};
    return (
      (n.top = t.top < 0),
      (n.left = t.left < 0),
      (n.bottom =
        t.bottom >=
        (document.documentElement.clientHeight || document.body.clientHeight)),
      (n.right =
        t.right >=
        (document.documentElement.clientWidth || document.body.clientWidth)),
      (n.any = n.top || n.left || n.bottom || n.right),
      n
    );
  };
  const b = function (e) {
    e
      ? e.forEach(function (e) {
          var t = e.querySelectorAll('.sub-menu');
          t.forEach(function (e) {
            void 0 !== t && y(e).right && e.classList.add('is-out-of-viewport');
          });
        })
      : console.log('Warning: No items for sub-menus found.');
  };
  const w = function (e) {
    e.forEach(function (e) {
      e.addEventListener('mouseover', function () {
        var t = this,
          n = getComputedStyle(document.documentElement).getPropertyValue(
            '--width-max-mobile'
          ),
          o = window.matchMedia('(max-width: '.concat(n, ')')).matches;
        e.classList.contains('removing-hover') ||
          o ||
          (this.classList.add('hover-intent'),
          this.classList.add('hovering'),
          this.parentNode.classList.add('hover-intent'),
          this.parentNode.classList.add('hovering'),
          setTimeout(function () {
            t.classList.remove('hovering'),
              t.parentNode.classList.remove('hovering');
          }, 500),
          document.addEventListener('keydown', function (n) {
            !t.classList.contains('removing-hover') &&
              t.classList.contains('hovering') &&
              t.parentNode.classList.contains('hovering') &&
              'Escape' === n.key &&
              (e.classList.remove('hover-intent'),
              e.parentNode.classList.remove('hover-intent'),
              e.parentNode.parentNode.classList.remove('hover-intent'),
              e.classList.add('removing-hover'),
              e.parentNode.classList.add('removing-hover'),
              setTimeout(function () {
                t.classList.remove('removing-hover'),
                  t.parentNode.classList.remove('removing-hover');
              }, 500));
          }),
          setTimeout(function () {
            t.classList.remove('removing-hover'),
              t.parentNode.classList.remove('removing-hover');
          }, 500));
      }),
        e.addEventListener('mouseleave', function () {
          var e = this;
          setTimeout(function () {
            e.classList.remove('hover-intent'),
              e.parentNode.classList.remove('hover-intent'),
              e.querySelectorAll('.dropdown-toggle').forEach(function (e) {
                if (
                  (e.setAttribute('aria-expanded', 'false'),
                  e.parentNode.querySelector('.dropdown'))
                ) {
                  var t = e.parentNode.querySelector('.dropdown').textContent;
                  e.setAttribute(
                    'aria-label',
                    ''
                      .concat(EquiCore_screenReaderText.expand_for, ' ')
                      .concat(t)
                  );
                }
              });
          }, 0),
            setTimeout(function () {
              e.classList.remove('removing-hover'),
                e.parentNode.classList.remove('removing-hover');
            }, 500);
        });
    });
  };
  const N = function (e) {
    e.forEach(function (e) {
      if (e.querySelector('.dropdown')) {
        var t = e.querySelector('.dropdown-toggle'),
          n = e.querySelector('.dropdown').innerText;
        t.setAttribute(
          'aria-label',
          ''.concat(EquiCore_screenReaderText.expand_for, ' ').concat(n)
        );
      }
    });
  };
  const x = function (e, t) {
    t.forEach(function (e) {
      e.addEventListener('keyup', function (e) {
        var t = e.target;
        if (
          ('main-menu' === t.parentNode.parentNode.id ||
            (t.classList.contains('button-nav') &&
              'main-menu' === t.parentNode.parentNode.id)) &&
          t.parentNode.previousElementSibling
        ) {
          var n = t.parentNode.previousElementSibling;
          if (
            (n.classList.remove('toggled-on'),
            n.classList.remove('hover-intent'),
            n.querySelector('.sub-menu'))
          ) {
            var o = n.querySelector('.sub-menu');
            o.classList.remove('toggled-on'),
              o.classList.remove('hover-intent'),
              n
                .querySelector('.dropdown-toggle')
                .setAttribute(
                  'aria-label',
                  ''
                    .concat(EquiCore_screenReaderText.expand_for, ' ')
                    .concat(n.querySelector('.dropdown-item').innerText)
                ),
              n
                .querySelector('.dropdown-toggle')
                .setAttribute('aria-expanded', 'false'),
              n
                .querySelector('.dropdown-toggle')
                .classList.remove('toggled-on');
          }
        }
      }),
        p(e, ['click', 'keydown', 'keypress'], function (e) {
          var t = e.target,
            n = t.parentNode,
            o = t.parentNode.parentNode.parentNode.querySelector('.sub-menu'),
            r = t.nextElementSibling,
            i =
              t.parentNode.parentNode.parentNode.querySelector(
                '.dropdown-toggle'
              );
          if (
            (t.classList.remove('removing-hover'),
            n.parentNode.classList.remove('removing-hover'),
            'Enter' === e.key || 'click' === e.type)
          ) {
            if ('A' === t.tagName) return;
            if (!t.parentNode.querySelector('.dropdown-item')) return;
            var a = t.parentNode.querySelector('.dropdown-item').innerText;
            t.classList.toggle('toggled-on'),
              'false' === t.getAttribute('aria-expanded')
                ? (t.setAttribute('aria-expanded', 'true'),
                  t.setAttribute(
                    'aria-label',
                    ''
                      .concat(EquiCore_screenReaderText.collapse_for, ' ')
                      .concat(a)
                  ))
                : (t.setAttribute('aria-expanded', 'false'),
                  t.setAttribute(
                    'aria-label',
                    ''
                      .concat(EquiCore_screenReaderText.expand_for, ' ')
                      .concat(a)
                  )),
              r && !r.classList.contains('toggled-on')
                ? (n.classList.add('hover-intent'),
                  r.classList.add('toggled-on'))
                : (n && n.classList.remove('hover-intent'),
                  r && r.classList.remove('toggled-on'));
          }
          if ('Escape' === e.key) {
            if (
              ('main-menu' !== t.parentNode.parentNode.id ||
                t.parentNode.classList.contains('toggled-on') ||
                (document.body.classList.remove('js-nav-active'),
                document.getElementById('nav-toggle').focus()),
              'main-menu' === t.parentNode.parentNode.id &&
                !t.parentNode.classList.contains('hover-intent'))
            )
              return;
            o.classList.remove('toggled-on'),
              n.classList.remove('hover-intent'),
              n.parentNode.parentNode.classList.remove('hover-intent'),
              i.setAttribute('aria-expanded', 'false'),
              i.classList.remove('toggled-on');
            var c = t.parentNode.querySelector('.dropdown-item').innerText;
            i.setAttribute(
              'aria-label',
              ''.concat(EquiCore_screenReaderText.expand_for, ' ').concat(c)
            ),
              t.classList.contains('dropdown-toggle') &&
                (t.setAttribute('aria-expanded', 'false'),
                t.setAttribute(
                  'aria-label',
                  ''.concat(EquiCore_screenReaderText.expand_for, ' ').concat(c)
                )),
              'main-menu' !== t.parentNode.parentNode.id &&
                setTimeout(function () {
                  i.focus();
                }, 100);
          }
          if (
            'ArrowUp' === e.key ||
            'ArrowDown' === e.key ||
            'ArrowLeft' === e.key ||
            'ArrowRight' === e.key
          )
            switch (e.code) {
              case 'ArrowUp':
                if (
                  (e.stopPropagation(),
                  e.preventDefault(),
                  t.parentNode.parentNode.previousElementSibling &&
                    t.parentNode.parentNode.previousElementSibling.classList.contains(
                      'dropdown-toggle'
                    ) &&
                    t.parentNode.parentNode.previousElementSibling.focus(),
                  t.classList.contains('dropdown-toggle') &&
                    'true' === t.getAttribute('aria-expanded'))
                ) {
                  n.classList.remove('hover-intent'),
                    r.classList.remove('toggled-on'),
                    t.setAttribute('aria-expanded', 'false');
                  var s =
                    t.parentNode.querySelector('.dropdown-item').innerText;
                  t.setAttribute(
                    'aria-label',
                    ''
                      .concat(EquiCore_screenReaderText.expand_for, ' ')
                      .concat(s)
                  ),
                    i.focus();
                }
                if ('A' === t.tagName || 'BUTTON' === t.tagName) {
                  if (!t.parentNode.previousElementSibling) return;
                  var l =
                      t.parentNode.previousElementSibling.querySelector('a'),
                    d =
                      t.parentNode.previousElementSibling.querySelector(
                        '.dropdown-toggle'
                      );
                  d && !t.querySelector('.dropdown-toggle')
                    ? d.focus()
                    : l.focus();
                }
                break;
              case 'ArrowDown':
                if (
                  (e.stopPropagation(),
                  e.preventDefault(),
                  t.parentNode.parentNode.nextElementSibling &&
                    t.parentNode.parentNode.nextElementSibling.classList.contains(
                      'dropdown-toggle'
                    ) &&
                    t.parentNode.parentNode.nextElementSibling.focus(),
                  t.classList.contains('dropdown-toggle') &&
                    'true' === t.getAttribute('aria-expanded') &&
                    t.parentNode
                      .querySelector('.sub-menu')
                      .querySelector('li:first-child')
                      .querySelector('a')
                      .focus(),
                  t.classList.contains('dropdown-toggle') &&
                    'false' === t.getAttribute('aria-expanded') &&
                    !t.parentNode.parentNode.classList.contains('sub-menu'))
                )
                  return (
                    t.click(),
                    void t.parentNode
                      .querySelector('.sub-menu')
                      .querySelector('li:first-child')
                      .querySelector('a')
                      .focus()
                  );
                if (
                  (t.parentNode.parentNode.classList.contains('sub-menu') &&
                    t.parentNode.nextElementSibling.querySelector('a').focus(),
                  ('A' === t.tagName || 'BUTTON' === t.tagName) &&
                    !t.classList.contains('dropdown-toggle'))
                ) {
                  if (!t.parentNode.nextElementSibling) return;
                  var u = t.parentNode.nextElementSibling.querySelector('a'),
                    g =
                      t.parentNode.nextElementSibling.querySelector(
                        '.dropdown-toggle'
                      );
                  t.classList.contains('dropdown-item') &&
                    t.nextElementSibling &&
                    (g = t.nextElementSibling) &&
                    g.focus(),
                    g && !t.querySelector('.dropdown-toggle')
                      ? g.focus()
                      : u.focus();
                }
                break;
              case 'ArrowLeft':
                if (
                  (e.stopPropagation(),
                  e.preventDefault(),
                  null === t.parentNode.previousElementSibling &&
                    'main-menu' !== t.parentNode.parentNode.id)
                )
                  return (
                    t.parentNode.parentNode.parentNode
                      .querySelector('.dropdown-toggle')
                      .focus(),
                    void t.parentNode.parentNode.parentNode
                      .querySelector('.dropdown-toggle')
                      .click()
                  );
                if (
                  (t.parentNode.previousElementSibling &&
                    t.classList.contains('dropdown-toggle') &&
                    'true' === t.getAttribute('aria-expanded') &&
                    'main-menu' !== t.parentNode.parentNode.id &&
                    t.parentNode.previousElementSibling
                      .querySelector('a')
                      .focus(),
                  t.classList.contains('dropdown-toggle') &&
                    'false' === t.getAttribute('aria-expanded') &&
                    'main-menu' !== t.parentNode.parentNode.id)
                ) {
                  n.classList.remove('hover-intent'),
                    r.classList.remove('toggled-on'),
                    t.setAttribute('aria-expanded', 'false');
                  var m =
                    t.parentNode.querySelector('.dropdown-item').innerText;
                  t.setAttribute(
                    'aria-label',
                    ''
                      .concat(EquiCore_screenReaderText.expand_for, ' ')
                      .concat(m)
                  ),
                    i.focus();
                }
                if ('A' === t.tagName || 'BUTTON' === t.tagName) {
                  if (
                    t.previousElementSibling &&
                    t.classList.contains('dropdown-toggle') &&
                    'false' === t.getAttribute('aria-expanded')
                  )
                    return void t.previousElementSibling.focus();
                  if (!t.parentNode.previousElementSibling) return;
                  var p =
                      t.parentNode.previousElementSibling.querySelector('a'),
                    f =
                      t.parentNode.previousElementSibling.querySelector(
                        '.dropdown-toggle'
                      );
                  f ? f.focus() : p.focus();
                }
                break;
              case 'ArrowRight':
                if (
                  (e.stopPropagation(),
                  e.preventDefault(),
                  t.classList.contains('dropdown-toggle') &&
                    'true' === t.getAttribute('aria-expanded') &&
                    'main-menu' !== t.parentNode.parentNode.id &&
                    t.parentNode
                      .querySelector('.sub-menu')
                      .querySelector('li:first-child')
                      .querySelector('a')
                      .focus(),
                  t.nextElementSibling &&
                    (t.nextElementSibling.focus(),
                    t.classList.contains('dropdown-item')))
                )
                  return;
                if (
                  t.classList.contains('dropdown-toggle') &&
                  'false' === t.getAttribute('aria-expanded') &&
                  'main-menu' !== t.parentNode.parentNode.id
                )
                  return void t.click();
                if (
                  t.classList.contains('dropdown-toggle') &&
                  'true' === t.getAttribute('aria-expanded') &&
                  'main-menu' !== t.parentNode.parentNode.id
                )
                  return void t.parentNode
                    .querySelector('.sub-menu')
                    .querySelector('li:first-child')
                    .querySelector('a')
                    .focus();
                if ('A' === t.tagName || 'BUTTON' === t.tagName) {
                  if (!t.parentNode.nextElementSibling) return;
                  var v = t.parentNode.nextElementSibling.querySelector('a'),
                    h =
                      t.parentNode.nextElementSibling.querySelector(
                        '.dropdown-toggle'
                      );
                  h ? h.focus() : v.focus();
                }
            }
        });
    });
  };
  window.addEventListener('resize', function () {
    f(), h(), b(document.querySelectorAll('.menu-item'));
  }),
    document.body.classList.remove('no-js'),
    document.body.classList.add('js'),
    document.addEventListener('DOMContentLoaded', function () {
      d(),
        u(),
        c(),
        r(document.querySelectorAll('a')).forEach(function (e) {
          if ('' === e.textContent.trim() && !e.ariaLabel) {
            var t = a(e);
            '' !== t && (e.ariaLabel = t);
          }
        }),
        g(),
        m(),
        (function () {
          var e = document.querySelector('.nav-primary');
          if (e) {
            var t = e.querySelectorAll('.menu-item'),
              n = document.querySelectorAll(
                '.menu-item a, .dropdown button, .button-nav'
              );
            document.getElementById('main-menu') && (N(t), x(t, n), w(t), b(t));
          }
        })(),
        document.getElementById('nav-toggle')
          ? (p(
              document.getElementById('nav-toggle'),
              ['click', 'keydown', 'keypress'],
              function (e) {
                ('click' !== e.type && 13 !== e.keyCode) ||
                  (document.body.classList.toggle('js-nav-active'),
                  window.scrollTo(0, 0),
                  'false' ===
                  document
                    .getElementById('nav-toggle')
                    .getAttribute('aria-expanded')
                    ? document
                        .getElementById('nav-toggle')
                        .setAttribute('aria-expanded', 'true')
                    : document
                        .getElementById('nav-toggle')
                        .setAttribute('aria-expanded', 'false'),
                  document
                    .getElementById('nav-toggle')
                    .getAttribute('aria-label') ===
                  EquiCore_screenReaderText.expand_toggle
                    ? document
                        .getElementById('nav-toggle')
                        .setAttribute(
                          'aria-label',
                          EquiCore_screenReaderText.collapse_toggle
                        )
                    : document
                        .getElementById('nav-toggle')
                        .setAttribute(
                          'aria-label',
                          EquiCore_screenReaderText.expand_toggle
                        ),
                  h(),
                  r(
                    document
                      .getElementById('nav')
                      .querySelectorAll(
                        'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
                      )
                  )
                    .filter(function (e) {
                      return !e.hasAttribute('disabled');
                    })
                    .filter(function (e) {
                      return !!(
                        e.offsetWidth ||
                        e.offsetHeight ||
                        e.getClientRects().length
                      );
                    })
                    .forEach(function (e) {
                      e.addEventListener('keydown', v);
                    }));
              }
            ),
            document.querySelectorAll('.dropdown-toggle').forEach(function (e) {
              p(e, ['click', 'keydown', 'keypress'], h);
            }),
            f())
          : console.log('Warning: No nav-toggle found.'),
        (function (e, t) {
          var n,
            o,
            r = 'string' == typeof e ? document.querySelectorAll(e) : e,
            i = t || 'js-reframe';
          'length' in r || (r = [r]);
          for (var a = 0; a < r.length; a += 1) {
            var c = r[a];
            if (
              -1 !== c.className.split(' ').indexOf(i) ||
              c.style.width.indexOf('%') > -1
            )
              return;
            var s = c.getAttribute('height') || c.offsetHeight,
              l = c.getAttribute('width') || c.offsetWidth,
              d =
                (('string' == typeof s ? parseInt(s) : s) /
                  ('string' == typeof l ? parseInt(l) : l)) *
                100,
              u = document.createElement('div');
            u.className = i;
            var g = u.style;
            (g.position = 'relative'),
              (g.width = '100%'),
              (g.paddingTop = ''.concat(d, '%'));
            var m = c.style;
            (m.position = 'absolute'),
              (m.width = '100%'),
              (m.height = '100%'),
              (m.left = '0'),
              (m.top = '0'),
              null === (n = c.parentNode) ||
                void 0 === n ||
                n.insertBefore(u, c),
              null === (o = c.parentNode) || void 0 === o || o.removeChild(c),
              u.appendChild(c);
          }
        })('.wp-has-aspect-ratio iframe');
    });
})();
