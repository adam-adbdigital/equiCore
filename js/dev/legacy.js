/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ './node_modules/airbnb-browser-shims/browser-only.js':
      /*!***********************************************************!*\
  !*** ./node_modules/airbnb-browser-shims/browser-only.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict';
        eval(
          '\n\n/* eslint global-require: 0 */\n\n// Fixes super-constructor calls in IE9/10\n__webpack_require__(/*! ima-babel6-polyfill */ "./node_modules/ima-babel6-polyfill/index.js");\n\n// document.contains polyfill\n__webpack_require__(/*! ./document-contains */ "./node_modules/airbnb-browser-shims/document-contains.js");\n\n// console.* polyfill for old browsers\n__webpack_require__(/*! console-polyfill */ "./node_modules/console-polyfill/index.js");\n\n__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");\n\nif (typeof window !== \'undefined\') {\n  // Element.classList polyfill\n  __webpack_require__(/*! classlist-polyfill */ "./node_modules/classlist-polyfill/src/index.js");\n\n  // Element.closest polyfill\n  __webpack_require__(/*! element-closest */ "./node_modules/element-closest/element-closest.js");\n\n  // Polyfill for smooth scrolling behavior\n  (__webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js").polyfill)();\n\n  // Polyfill window.matchMedia (primarily for IE9)\n  __webpack_require__(/*! matchmedia-polyfill */ "./node_modules/matchmedia-polyfill/matchMedia.js");\n  __webpack_require__(/*! matchmedia-polyfill/matchMedia.addListener */ "./node_modules/matchmedia-polyfill/matchMedia.addListener.js");\n\n  // Polyfill window.location.origin (for IE < 11)\n  __webpack_require__(/*! window-location-origin */ "./node_modules/window-location-origin/src/window-location-origin.js");\n\n  // for <= IE 9, Opera mini\n  __webpack_require__(/*! input-placeholder-polyfill */ "./node_modules/input-placeholder-polyfill/dist/main.min.js");\n\n  __webpack_require__(/*! intersection-observer */ "./node_modules/intersection-observer/intersection-observer.js");\n\n  // KeyboardEvent.key shim\n  __webpack_require__(/*! shim-keyboard-event-key */ "./node_modules/shim-keyboard-event-key/index.js");\n}\n\n// :focus-visible shim\n__webpack_require__(/*! focus-visible */ "./node_modules/focus-visible/dist/focus-visible.js");\n\n__webpack_require__(/*! raf/polyfill */ "./node_modules/raf/polyfill.js");\n\n__webpack_require__.g.requestIdleCallback = __webpack_require__(/*! ric-shim */ "./node_modules/ric-shim/index.js");\n\n__webpack_require__.g.cancelIdleCallback = __webpack_require__.g.requestIdleCallback.cancelIdleCallback;\n\nvar hasSymbols = typeof Symbol === \'function\' && Symbol.iterator;\n\n/* globals TouchList */\nif (hasSymbols && typeof TouchList === \'function\' && typeof TouchList.prototype[Symbol.iterator] !== \'function\') {\n  TouchList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];\n}\n\n\n//# sourceURL=webpack://equicore/./node_modules/airbnb-browser-shims/browser-only.js?'
        );

        /***/
      },

    /***/ './node_modules/airbnb-browser-shims/document-contains.js':
      /*!****************************************************************!*\
  !*** ./node_modules/airbnb-browser-shims/document-contains.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict';
        eval(
          '\n\n__webpack_require__(/*! document.contains/auto */ "./node_modules/document.contains/auto.js");\n\n\n//# sourceURL=webpack://equicore/./node_modules/airbnb-browser-shims/document-contains.js?'
        );

        /***/
      },

    /***/ './node_modules/airbnb-browser-shims/index.js':
      /*!****************************************************!*\
  !*** ./node_modules/airbnb-browser-shims/index.js ***!
  \****************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict';
        eval(
          '\n\n/* eslint global-require: 0 */\n\n__webpack_require__(/*! airbnb-js-shims */ "./node_modules/airbnb-js-shims/index.js");\n\n__webpack_require__(/*! ./browser-only */ "./node_modules/airbnb-browser-shims/browser-only.js");\n\n\n//# sourceURL=webpack://equicore/./node_modules/airbnb-browser-shims/index.js?'
        );

        /***/
      },

    /***/ './node_modules/airbnb-js-shims/index.js':
      /*!***********************************************!*\
  !*** ./node_modules/airbnb-js-shims/index.js ***!
  \***********************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict';
        eval(
          '\n\n__webpack_require__(/*! ./target/es5 */ "./node_modules/airbnb-js-shims/target/es5.js");\n\n\n//# sourceURL=webpack://equicore/./node_modules/airbnb-js-shims/index.js?'
        );

        /***/
      },

    /***/ './node_modules/airbnb-js-shims/target/es2015.js':
      /*!*******************************************************!*\
  !*** ./node_modules/airbnb-js-shims/target/es2015.js ***!
  \*******************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict';
        eval(
          '\n\n__webpack_require__(/*! es6-shim */ "./node_modules/es6-shim/es6-shim.js");\n\n__webpack_require__(/*! function.prototype.name/shim */ "./node_modules/function.prototype.name/shim.js")();\n\n__webpack_require__(/*! ./es2016 */ "./node_modules/airbnb-js-shims/target/es2016.js");\n\n\n//# sourceURL=webpack://equicore/./node_modules/airbnb-js-shims/target/es2015.js?'
        );

        /***/
      },

    /***/ './node_modules/airbnb-js-shims/target/es2016.js':
      /*!*******************************************************!*\
  !*** ./node_modules/airbnb-js-shims/target/es2016.js ***!
  \*******************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict';
        eval(
          '\n\n// Array#includes is stage 4, in ES7/ES2016\n__webpack_require__(/*! array-includes/shim */ "./node_modules/array-includes/shim.js")();\n\n__webpack_require__(/*! ./es2017 */ "./node_modules/airbnb-js-shims/target/es2017.js");\n\n\n//# sourceURL=webpack://equicore/./node_modules/airbnb-js-shims/target/es2016.js?'
        );

        /***/
      },

    /***/ './node_modules/airbnb-js-shims/target/es2017.js':
      /*!*******************************************************!*\
  !*** ./node_modules/airbnb-js-shims/target/es2017.js ***!
  \*******************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict';
        eval(
          '\n\n// Object.values/Object.entries are stage 4, in ES2017\n__webpack_require__(/*! object.values/shim */ "./node_modules/object.values/shim.js")();\n__webpack_require__(/*! object.entries/shim */ "./node_modules/object.entries/shim.js")();\n\n// String#padStart/String#padEnd are stage 4, in ES2017\n__webpack_require__(/*! string.prototype.padstart/shim */ "./node_modules/string.prototype.padstart/shim.js")();\n__webpack_require__(/*! string.prototype.padend/shim */ "./node_modules/string.prototype.padend/shim.js")();\n\n// Object.getOwnPropertyDescriptors is stage 4, in ES2017\n__webpack_require__(/*! object.getownpropertydescriptors/shim */ "./node_modules/object.getownpropertydescriptors/shim.js")();\n\n__webpack_require__(/*! ./es2018 */ "./node_modules/airbnb-js-shims/target/es2018.js");\n\n\n//# sourceURL=webpack://equicore/./node_modules/airbnb-js-shims/target/es2017.js?'
        );

        /***/
      },

    /***/ './node_modules/airbnb-js-shims/target/es2018.js':
      /*!*******************************************************!*\
  !*** ./node_modules/airbnb-js-shims/target/es2018.js ***!
  \*******************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict';
        eval(
          '\n\nif (typeof Promise === \'function\') {\n  __webpack_require__(/*! promise.prototype.finally/auto */ "./node_modules/promise.prototype.finally/auto.js"); // eslint-disable-line global-require\n}\n\n__webpack_require__(/*! ./es2019 */ "./node_modules/airbnb-js-shims/target/es2019.js");\n\n\n//# sourceURL=webpack://equicore/./node_modules/airbnb-js-shims/target/es2018.js?'
        );

        /***/
      },

    /***/ './node_modules/airbnb-js-shims/target/es2019.js':
      /*!*******************************************************!*\
  !*** ./node_modules/airbnb-js-shims/target/es2019.js ***!
  \*******************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict';
        eval(
          '\n\n__webpack_require__(/*! array.prototype.flat/auto */ "./node_modules/array.prototype.flat/auto.js");\n__webpack_require__(/*! array.prototype.flatmap/auto */ "./node_modules/array.prototype.flatmap/auto.js");\n\n__webpack_require__(/*! symbol.prototype.description/auto */ "./node_modules/symbol.prototype.description/auto.js");\n\n__webpack_require__(/*! object.fromentries/auto */ "./node_modules/object.fromentries/auto.js");\n\n__webpack_require__(/*! ./es2020 */ "./node_modules/airbnb-js-shims/target/es2020.js");\n\n\n//# sourceURL=webpack://equicore/./node_modules/airbnb-js-shims/target/es2019.js?'
        );

        /***/
      },

    /***/ './node_modules/airbnb-js-shims/target/es2020.js':
      /*!*******************************************************!*\
  !*** ./node_modules/airbnb-js-shims/target/es2020.js ***!
  \*******************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict';
        eval(
          '\n\n__webpack_require__(/*! string.prototype.matchall/auto */ "./node_modules/string.prototype.matchall/auto.js");\n\n__webpack_require__(/*! globalthis/auto */ "./node_modules/globalthis/auto.js");\n\n__webpack_require__(/*! promise.allsettled/auto */ "./node_modules/promise.allsettled/auto.js");\n\n\n//# sourceURL=webpack://equicore/./node_modules/airbnb-js-shims/target/es2020.js?'
        );

        /***/
      },

    /***/ './node_modules/airbnb-js-shims/target/es5.js':
      /*!****************************************************!*\
  !*** ./node_modules/airbnb-js-shims/target/es5.js ***!
  \****************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict';
        eval(
          '\n\n__webpack_require__(/*! es5-shim */ "./node_modules/es5-shim/es5-shim.js");\n__webpack_require__(/*! es5-shim/es5-sham */ "./node_modules/es5-shim/es5-sham.js");\n\n__webpack_require__(/*! ./es2015 */ "./node_modules/airbnb-js-shims/target/es2015.js");\n\n\n//# sourceURL=webpack://equicore/./node_modules/airbnb-js-shims/target/es5.js?'
        );

        /***/
      },

    /***/ './node_modules/array-includes/implementation.js':
      /*!*******************************************************!*\
  !*** ./node_modules/array-includes/implementation.js ***!
  \*******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar ToIntegerOrInfinity = __webpack_require__(/*! es-abstract/2024/ToIntegerOrInfinity */ "./node_modules/es-abstract/2024/ToIntegerOrInfinity.js");\nvar ToLength = __webpack_require__(/*! es-abstract/2024/ToLength */ "./node_modules/es-abstract/2024/ToLength.js");\nvar ToObject = __webpack_require__(/*! es-object-atoms/ToObject */ "./node_modules/es-object-atoms/ToObject.js");\nvar SameValueZero = __webpack_require__(/*! es-abstract/2024/SameValueZero */ "./node_modules/es-abstract/2024/SameValueZero.js");\nvar $isNaN = __webpack_require__(/*! es-abstract/helpers/isNaN */ "./node_modules/es-abstract/helpers/isNaN.js");\nvar $isFinite = __webpack_require__(/*! es-abstract/helpers/isFinite */ "./node_modules/es-abstract/helpers/isFinite.js");\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");\nvar isString = __webpack_require__(/*! is-string */ "./node_modules/is-string/index.js");\n\nvar $charAt = callBound(\'String.prototype.charAt\');\nvar $indexOf = GetIntrinsic(\'%Array.prototype.indexOf%\'); // TODO: use callBind.apply without breaking IE 8\nvar $max = GetIntrinsic(\'%Math.max%\');\n\nmodule.exports = function includes(searchElement) {\n\tvar fromIndex = arguments.length > 1 ? ToIntegerOrInfinity(arguments[1]) : 0;\n\tif ($indexOf && !$isNaN(searchElement) && $isFinite(fromIndex) && typeof searchElement !== \'undefined\') {\n\t\treturn $indexOf.apply(this, arguments) > -1;\n\t}\n\n\tvar O = ToObject(this);\n\tvar length = ToLength(O.length);\n\tif (length === 0) {\n\t\treturn false;\n\t}\n\tvar k = fromIndex >= 0 ? fromIndex : $max(0, length + fromIndex);\n\twhile (k < length) {\n\t\tif (SameValueZero(searchElement, isString(O) ? $charAt(O, k) : O[k])) {\n\t\t\treturn true;\n\t\t}\n\t\tk += 1;\n\t}\n\treturn false;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/array-includes/implementation.js?'
        );

        /***/
      },

    /***/ './node_modules/array-includes/polyfill.js':
      /*!*************************************************!*\
  !*** ./node_modules/array-includes/polyfill.js ***!
  \*************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar implementation = __webpack_require__(/*! ./implementation */ "./node_modules/array-includes/implementation.js");\n\nmodule.exports = function getPolyfill() {\n\tif (\n\t\tArray.prototype.includes\n\t\t&& Array(1).includes(undefined) // https://bugzilla.mozilla.org/show_bug.cgi?id=1767541\n\t) {\n\t\treturn Array.prototype.includes;\n\t}\n\treturn implementation;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/array-includes/polyfill.js?'
        );

        /***/
      },

    /***/ './node_modules/array-includes/shim.js':
      /*!*********************************************!*\
  !*** ./node_modules/array-includes/shim.js ***!
  \*********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/array-includes/polyfill.js");\n\nmodule.exports = function shimArrayPrototypeIncludes() {\n\tvar polyfill = getPolyfill();\n\tdefine(\n\t\tArray.prototype,\n\t\t{ includes: polyfill },\n\t\t{ includes: function () { return Array.prototype.includes !== polyfill; } }\n\t);\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/array-includes/shim.js?'
        );

        /***/
      },

    /***/ './node_modules/array.prototype.flat/auto.js':
      /*!***************************************************!*\
  !*** ./node_modules/array.prototype.flat/auto.js ***!
  \***************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict';
        eval(
          '\n\n__webpack_require__(/*! ./shim */ "./node_modules/array.prototype.flat/shim.js")();\n\n\n//# sourceURL=webpack://equicore/./node_modules/array.prototype.flat/auto.js?'
        );

        /***/
      },

    /***/ './node_modules/array.prototype.flat/implementation.js':
      /*!*************************************************************!*\
  !*** ./node_modules/array.prototype.flat/implementation.js ***!
  \*************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar ArraySpeciesCreate = __webpack_require__(/*! es-abstract/2023/ArraySpeciesCreate */ "./node_modules/es-abstract/2023/ArraySpeciesCreate.js");\nvar FlattenIntoArray = __webpack_require__(/*! es-abstract/2023/FlattenIntoArray */ "./node_modules/es-abstract/2023/FlattenIntoArray.js");\nvar Get = __webpack_require__(/*! es-abstract/2023/Get */ "./node_modules/es-abstract/2023/Get.js");\nvar ToIntegerOrInfinity = __webpack_require__(/*! es-abstract/2023/ToIntegerOrInfinity */ "./node_modules/es-abstract/2023/ToIntegerOrInfinity.js");\nvar ToLength = __webpack_require__(/*! es-abstract/2023/ToLength */ "./node_modules/es-abstract/2023/ToLength.js");\nvar ToObject = __webpack_require__(/*! es-abstract/2023/ToObject */ "./node_modules/es-abstract/2023/ToObject.js");\n\nmodule.exports = function flat() {\n\tvar O = ToObject(this);\n\tvar sourceLen = ToLength(Get(O, \'length\'));\n\n\tvar depthNum = 1;\n\tif (arguments.length > 0 && typeof arguments[0] !== \'undefined\') {\n\t\tdepthNum = ToIntegerOrInfinity(arguments[0]);\n\t}\n\n\tvar A = ArraySpeciesCreate(O, 0);\n\tFlattenIntoArray(A, O, sourceLen, 0, depthNum);\n\treturn A;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/array.prototype.flat/implementation.js?'
        );

        /***/
      },

    /***/ './node_modules/array.prototype.flat/polyfill.js':
      /*!*******************************************************!*\
  !*** ./node_modules/array.prototype.flat/polyfill.js ***!
  \*******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar implementation = __webpack_require__(/*! ./implementation */ "./node_modules/array.prototype.flat/implementation.js");\n\nmodule.exports = function getPolyfill() {\n\treturn Array.prototype.flat || implementation;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/array.prototype.flat/polyfill.js?'
        );

        /***/
      },

    /***/ './node_modules/array.prototype.flat/shim.js':
      /*!***************************************************!*\
  !*** ./node_modules/array.prototype.flat/shim.js ***!
  \***************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");\nvar shimUnscopables = __webpack_require__(/*! es-shim-unscopables */ "./node_modules/es-shim-unscopables/index.js");\n\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/array.prototype.flat/polyfill.js");\n\nmodule.exports = function shimFlat() {\n\tvar polyfill = getPolyfill();\n\n\tdefine(\n\t\tArray.prototype,\n\t\t{ flat: polyfill },\n\t\t{ flat: function () { return Array.prototype.flat !== polyfill; } }\n\t);\n\n\tshimUnscopables(\'flat\');\n\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/array.prototype.flat/shim.js?'
        );

        /***/
      },

    /***/ './node_modules/array.prototype.flatmap/auto.js':
      /*!******************************************************!*\
  !*** ./node_modules/array.prototype.flatmap/auto.js ***!
  \******************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict';
        eval(
          '\n\n__webpack_require__(/*! ./shim */ "./node_modules/array.prototype.flatmap/shim.js")();\n\n\n//# sourceURL=webpack://equicore/./node_modules/array.prototype.flatmap/auto.js?'
        );

        /***/
      },

    /***/ './node_modules/array.prototype.flatmap/implementation.js':
      /*!****************************************************************!*\
  !*** ./node_modules/array.prototype.flatmap/implementation.js ***!
  \****************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar ArraySpeciesCreate = __webpack_require__(/*! es-abstract/2023/ArraySpeciesCreate */ "./node_modules/es-abstract/2023/ArraySpeciesCreate.js");\nvar FlattenIntoArray = __webpack_require__(/*! es-abstract/2023/FlattenIntoArray */ "./node_modules/es-abstract/2023/FlattenIntoArray.js");\nvar Get = __webpack_require__(/*! es-abstract/2023/Get */ "./node_modules/es-abstract/2023/Get.js");\nvar IsCallable = __webpack_require__(/*! es-abstract/2023/IsCallable */ "./node_modules/es-abstract/2023/IsCallable.js");\nvar ToLength = __webpack_require__(/*! es-abstract/2023/ToLength */ "./node_modules/es-abstract/2023/ToLength.js");\nvar ToObject = __webpack_require__(/*! es-abstract/2023/ToObject */ "./node_modules/es-abstract/2023/ToObject.js");\n\nmodule.exports = function flatMap(mapperFunction) {\n\tvar O = ToObject(this);\n\tvar sourceLen = ToLength(Get(O, \'length\'));\n\n\tif (!IsCallable(mapperFunction)) {\n\t\tthrow new TypeError(\'mapperFunction must be a function\');\n\t}\n\n\tvar T;\n\tif (arguments.length > 1) {\n\t\tT = arguments[1];\n\t}\n\n\tvar A = ArraySpeciesCreate(O, 0);\n\tFlattenIntoArray(A, O, sourceLen, 0, 1, mapperFunction, T);\n\treturn A;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/array.prototype.flatmap/implementation.js?'
        );

        /***/
      },

    /***/ './node_modules/array.prototype.flatmap/polyfill.js':
      /*!**********************************************************!*\
  !*** ./node_modules/array.prototype.flatmap/polyfill.js ***!
  \**********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar implementation = __webpack_require__(/*! ./implementation */ "./node_modules/array.prototype.flatmap/implementation.js");\n\nmodule.exports = function getPolyfill() {\n\treturn Array.prototype.flatMap || implementation;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/array.prototype.flatmap/polyfill.js?'
        );

        /***/
      },

    /***/ './node_modules/array.prototype.flatmap/shim.js':
      /*!******************************************************!*\
  !*** ./node_modules/array.prototype.flatmap/shim.js ***!
  \******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");\nvar shimUnscopables = __webpack_require__(/*! es-shim-unscopables */ "./node_modules/es-shim-unscopables/index.js");\n\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/array.prototype.flatmap/polyfill.js");\n\nmodule.exports = function shimFlatMap() {\n\tvar polyfill = getPolyfill();\n\n\tdefine(\n\t\tArray.prototype,\n\t\t{ flatMap: polyfill },\n\t\t{ flatMap: function () { return Array.prototype.flatMap !== polyfill; } }\n\t);\n\n\tshimUnscopables(\'flatMap\');\n\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/array.prototype.flatmap/shim.js?'
        );

        /***/
      },

    /***/ './node_modules/array.prototype.map/implementation.js':
      /*!************************************************************!*\
  !*** ./node_modules/array.prototype.map/implementation.js ***!
  \************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar ArraySpeciesCreate = __webpack_require__(/*! es-abstract/2024/ArraySpeciesCreate */ "./node_modules/es-abstract/2024/ArraySpeciesCreate.js");\nvar Call = __webpack_require__(/*! es-abstract/2024/Call */ "./node_modules/es-abstract/2024/Call.js");\nvar CreateDataPropertyOrThrow = __webpack_require__(/*! es-abstract/2024/CreateDataPropertyOrThrow */ "./node_modules/es-abstract/2024/CreateDataPropertyOrThrow.js");\nvar Get = __webpack_require__(/*! es-abstract/2024/Get */ "./node_modules/es-abstract/2024/Get.js");\nvar HasProperty = __webpack_require__(/*! es-abstract/2024/HasProperty */ "./node_modules/es-abstract/2024/HasProperty.js");\nvar IsCallable = __webpack_require__(/*! es-abstract/2024/IsCallable */ "./node_modules/es-abstract/2024/IsCallable.js");\nvar ToUint32 = __webpack_require__(/*! es-abstract/2024/ToUint32 */ "./node_modules/es-abstract/2024/ToUint32.js");\nvar ToObject = __webpack_require__(/*! es-object-atoms/ToObject */ "./node_modules/es-object-atoms/ToObject.js");\nvar ToString = __webpack_require__(/*! es-abstract/2024/ToString */ "./node_modules/es-abstract/2024/ToString.js");\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");\n\nvar isString = __webpack_require__(/*! is-string */ "./node_modules/is-string/index.js");\n\n// Check failure of by-index access of string characters (IE < 9) and failure of `0 in boxedString` (Rhino)\nvar boxedString = Object(\'a\');\nvar splitString = boxedString[0] !== \'a\' || !(0 in boxedString);\n\nvar strSplit = callBound(\'String.prototype.split\');\n\nmodule.exports = function map(callbackfn) {\n\tvar O = ToObject(this);\n\tvar self = splitString && isString(O) ? strSplit(O, \'\') : O;\n\tvar len = ToUint32(self.length);\n\n\t// If no callback function or if callback is not a callable function\n\tif (!IsCallable(callbackfn)) {\n\t\tthrow new TypeError(\'Array.prototype.map callback must be a function\');\n\t}\n\n\tvar T;\n\tif (arguments.length > 1) {\n\t\tT = arguments[1];\n\t}\n\n\tvar A = ArraySpeciesCreate(O, len);\n\tvar k = 0;\n\twhile (k < len) {\n\t\tvar Pk = ToString(k);\n\t\tvar kPresent = HasProperty(O, Pk);\n\t\tif (kPresent) {\n\t\t\tvar kValue = Get(O, Pk);\n\t\t\tvar mappedValue = Call(callbackfn, T, [kValue, k, O]);\n\t\t\tCreateDataPropertyOrThrow(A, Pk, mappedValue);\n\t\t}\n\t\tk += 1;\n\t}\n\n\treturn A;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/array.prototype.map/implementation.js?'
        );

        /***/
      },

    /***/ './node_modules/array.prototype.map/index.js':
      /*!***************************************************!*\
  !*** ./node_modules/array.prototype.map/index.js ***!
  \***************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");\nvar RequireObjectCoercible = __webpack_require__(/*! es-object-atoms/RequireObjectCoercible */ "./node_modules/es-object-atoms/RequireObjectCoercible.js");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");\n\nvar implementation = __webpack_require__(/*! ./implementation */ "./node_modules/array.prototype.map/implementation.js");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/array.prototype.map/polyfill.js");\nvar polyfill = getPolyfill();\nvar shim = __webpack_require__(/*! ./shim */ "./node_modules/array.prototype.map/shim.js");\n\nvar $slice = callBound(\'Array.prototype.slice\');\n\n// eslint-disable-next-line no-unused-vars\nvar boundMapShim = function map(array, callbackfn) {\n\tRequireObjectCoercible(array);\n\treturn polyfill.apply(array, $slice(arguments, 1));\n};\ndefine(boundMapShim, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = boundMapShim;\n\n\n//# sourceURL=webpack://equicore/./node_modules/array.prototype.map/index.js?'
        );

        /***/
      },

    /***/ './node_modules/array.prototype.map/polyfill.js':
      /*!******************************************************!*\
  !*** ./node_modules/array.prototype.map/polyfill.js ***!
  \******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar arrayMethodBoxesProperly = __webpack_require__(/*! es-array-method-boxes-properly */ "./node_modules/es-array-method-boxes-properly/index.js");\n\nvar implementation = __webpack_require__(/*! ./implementation */ "./node_modules/array.prototype.map/implementation.js");\n\nmodule.exports = function getPolyfill() {\n\tvar method = Array.prototype.map;\n\treturn arrayMethodBoxesProperly(method) ? method : implementation;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/array.prototype.map/polyfill.js?'
        );

        /***/
      },

    /***/ './node_modules/array.prototype.map/shim.js':
      /*!**************************************************!*\
  !*** ./node_modules/array.prototype.map/shim.js ***!
  \**************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/array.prototype.map/polyfill.js");\n\nmodule.exports = function shimArrayPrototypeMap() {\n\tvar polyfill = getPolyfill();\n\tdefine(\n\t\tArray.prototype,\n\t\t{ map: polyfill },\n\t\t{ map: function () { return Array.prototype.map !== polyfill; } }\n\t);\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/array.prototype.map/shim.js?'
        );

        /***/
      },

    /***/ './node_modules/array.prototype.reduce/implementation.js':
      /*!***************************************************************!*\
  !*** ./node_modules/array.prototype.reduce/implementation.js ***!
  \***************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar Call = __webpack_require__(/*! es-abstract/2024/Call */ "./node_modules/es-abstract/2024/Call.js");\nvar Get = __webpack_require__(/*! es-abstract/2024/Get */ "./node_modules/es-abstract/2024/Get.js");\nvar HasProperty = __webpack_require__(/*! es-abstract/2024/HasProperty */ "./node_modules/es-abstract/2024/HasProperty.js");\nvar IsCallable = __webpack_require__(/*! es-abstract/2024/IsCallable */ "./node_modules/es-abstract/2024/IsCallable.js");\nvar LengthOfArrayLike = __webpack_require__(/*! es-abstract/2024/LengthOfArrayLike */ "./node_modules/es-abstract/2024/LengthOfArrayLike.js");\nvar ToObject = __webpack_require__(/*! es-object-atoms/ToObject */ "./node_modules/es-object-atoms/ToObject.js");\nvar ToString = __webpack_require__(/*! es-abstract/2024/ToString */ "./node_modules/es-abstract/2024/ToString.js");\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");\nvar isString = __webpack_require__(/*! is-string */ "./node_modules/is-string/index.js");\nvar $Object = __webpack_require__(/*! es-object-atoms */ "./node_modules/es-object-atoms/index.js");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\n// Check failure of by-index access of string characters (IE < 9) and failure of `0 in boxedString` (Rhino)\nvar boxedString = $Object(\'a\');\nvar splitString = boxedString[0] !== \'a\' || !(0 in boxedString);\n\nvar strSplit = callBound(\'%String.prototype.split%\');\n\nmodule.exports = function reduce(callbackfn) {\n\tvar O = ToObject(this);\n\tvar self = splitString && isString(O) ? strSplit(O, \'\') : O;\n\tvar len = LengthOfArrayLike(self);\n\n\t// If no callback function or if callback is not a callable function\n\tif (!IsCallable(callbackfn)) {\n\t\tthrow new $TypeError(\'Array.prototype.reduce callback must be a function\');\n\t}\n\n\tif (len === 0 && arguments.length < 2) {\n\t\tthrow new $TypeError(\'reduce of empty array with no initial value\');\n\t}\n\n\tvar k = 0;\n\n\tvar accumulator;\n\tvar Pk, kPresent;\n\tif (arguments.length > 1) {\n\t\taccumulator = arguments[1];\n\t} else {\n\t\tkPresent = false;\n\t\twhile (!kPresent && k < len) {\n\t\t\tPk = ToString(k);\n\t\t\tkPresent = HasProperty(O, Pk);\n\t\t\tif (kPresent) {\n\t\t\t\taccumulator = Get(O, Pk);\n\t\t\t}\n\t\t\tk += 1;\n\t\t}\n\t\tif (!kPresent) {\n\t\t\tthrow new $TypeError(\'reduce of empty array with no initial value\');\n\t\t}\n\t}\n\n\twhile (k < len) {\n\t\tPk = ToString(k);\n\t\tkPresent = HasProperty(O, Pk);\n\t\tif (kPresent) {\n\t\t\tvar kValue = Get(O, Pk);\n\t\t\taccumulator = Call(callbackfn, void undefined, [accumulator, kValue, k, O]);\n\t\t}\n\t\tk += 1;\n\t}\n\n\treturn accumulator;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/array.prototype.reduce/implementation.js?'
        );

        /***/
      },

    /***/ './node_modules/array.prototype.reduce/index.js':
      /*!******************************************************!*\
  !*** ./node_modules/array.prototype.reduce/index.js ***!
  \******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");\nvar RequireObjectCoercible = __webpack_require__(/*! es-abstract/2024/RequireObjectCoercible */ "./node_modules/es-abstract/2024/RequireObjectCoercible.js");\nvar callBind = __webpack_require__(/*! call-bind */ "./node_modules/call-bind/index.js");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");\n\nvar implementation = __webpack_require__(/*! ./implementation */ "./node_modules/array.prototype.reduce/implementation.js");\n\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/array.prototype.reduce/polyfill.js");\nvar polyfill = callBind.apply(getPolyfill());\n\nvar shim = __webpack_require__(/*! ./shim */ "./node_modules/array.prototype.reduce/shim.js");\n\nvar $slice = callBound(\'%Array.prototype.slice%\');\n\n// eslint-disable-next-line no-unused-vars\nvar boundShim = function reduce(array, callbackfn) {\n\tRequireObjectCoercible(array);\n\treturn polyfill(array, $slice(arguments, 1));\n};\ndefine(boundShim, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = boundShim;\n\n\n//# sourceURL=webpack://equicore/./node_modules/array.prototype.reduce/index.js?'
        );

        /***/
      },

    /***/ './node_modules/array.prototype.reduce/polyfill.js':
      /*!*********************************************************!*\
  !*** ./node_modules/array.prototype.reduce/polyfill.js ***!
  \*********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar arrayMethodBoxesProperly = __webpack_require__(/*! es-array-method-boxes-properly */ "./node_modules/es-array-method-boxes-properly/index.js");\n\nvar implementation = __webpack_require__(/*! ./implementation */ "./node_modules/array.prototype.reduce/implementation.js");\n\nmodule.exports = function getPolyfill() {\n\tvar method = Array.prototype.reduce;\n\treturn arrayMethodBoxesProperly(method) ? method : implementation;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/array.prototype.reduce/polyfill.js?'
        );

        /***/
      },

    /***/ './node_modules/array.prototype.reduce/shim.js':
      /*!*****************************************************!*\
  !*** ./node_modules/array.prototype.reduce/shim.js ***!
  \*****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/array.prototype.reduce/polyfill.js");\n\nmodule.exports = function shimArrayPrototypeReduce() {\n\tvar polyfill = getPolyfill();\n\tdefine(\n\t\tArray.prototype,\n\t\t{ reduce: polyfill },\n\t\t{ reduce: function () { return Array.prototype.reduce !== polyfill; } }\n\t);\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/array.prototype.reduce/shim.js?'
        );

        /***/
      },

    /***/ './js/src/legacy.js':
      /*!**************************!*\
  !*** ./js/src/legacy.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! airbnb-browser-shims */ "./node_modules/airbnb-browser-shims/index.js");\n/* harmony import */ var airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Polyfills etc. for legacy browsers (pre ES2015/ES6)\n */\n\n// Import polyfills and shims\n\n\n//# sourceURL=webpack://equicore/./js/src/legacy.js?'
        );

        /***/
      },

    /***/ './node_modules/call-bind/callBound.js':
      /*!*********************************************!*\
  !*** ./node_modules/call-bind/callBound.js ***!
  \*********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar callBind = __webpack_require__(/*! ./ */ \"./node_modules/call-bind/index.js\");\n\nvar $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));\n\nmodule.exports = function callBoundIntrinsic(name, allowMissing) {\n\tvar intrinsic = GetIntrinsic(name, !!allowMissing);\n\tif (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {\n\t\treturn callBind(intrinsic);\n\t}\n\treturn intrinsic;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/call-bind/callBound.js?"
        );

        /***/
      },

    /***/ './node_modules/call-bind/index.js':
      /*!*****************************************!*\
  !*** ./node_modules/call-bind/index.js ***!
  \*****************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\nvar setFunctionLength = __webpack_require__(/*! set-function-length */ \"./node_modules/set-function-length/index.js\");\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\nvar $apply = GetIntrinsic('%Function.prototype.apply%');\nvar $call = GetIntrinsic('%Function.prototype.call%');\nvar $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);\n\nvar $defineProperty = __webpack_require__(/*! es-define-property */ \"./node_modules/es-define-property/index.js\");\nvar $max = GetIntrinsic('%Math.max%');\n\nmodule.exports = function callBind(originalFunction) {\n\tif (typeof originalFunction !== 'function') {\n\t\tthrow new $TypeError('a function is required');\n\t}\n\tvar func = $reflectApply(bind, $call, arguments);\n\treturn setFunctionLength(\n\t\tfunc,\n\t\t1 + $max(0, originalFunction.length - (arguments.length - 1)),\n\t\ttrue\n\t);\n};\n\nvar applyBind = function applyBind() {\n\treturn $reflectApply(bind, $apply, arguments);\n};\n\nif ($defineProperty) {\n\t$defineProperty(module.exports, 'apply', { value: applyBind });\n} else {\n\tmodule.exports.apply = applyBind;\n}\n\n\n//# sourceURL=webpack://equicore/./node_modules/call-bind/index.js?"
        );

        /***/
      },

    /***/ './node_modules/classlist-polyfill/src/index.js':
      /*!******************************************************!*\
  !*** ./node_modules/classlist-polyfill/src/index.js ***!
  \******************************************************/
      /***/ () => {
        eval(
          '/*\n * classList.js: Cross-browser full element.classList implementation.\n * 1.1.20170427\n *\n * By Eli Grey, http://eligrey.com\n * License: Dedicated to the public domain.\n *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md\n */\n\n/*global self, document, DOMException */\n\n/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */\n\nif ("document" in window.self) {\n\n// Full polyfill for browsers with no classList support\n// Including IE < Edge missing SVGElement.classList\nif (!("classList" in document.createElement("_")) \n\t|| document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {\n\n(function (view) {\n\n"use strict";\n\nif (!(\'Element\' in view)) return;\n\nvar\n\t  classListProp = "classList"\n\t, protoProp = "prototype"\n\t, elemCtrProto = view.Element[protoProp]\n\t, objCtr = Object\n\t, strTrim = String[protoProp].trim || function () {\n\t\treturn this.replace(/^\\s+|\\s+$/g, "");\n\t}\n\t, arrIndexOf = Array[protoProp].indexOf || function (item) {\n\t\tvar\n\t\t\t  i = 0\n\t\t\t, len = this.length\n\t\t;\n\t\tfor (; i < len; i++) {\n\t\t\tif (i in this && this[i] === item) {\n\t\t\t\treturn i;\n\t\t\t}\n\t\t}\n\t\treturn -1;\n\t}\n\t// Vendors: please allow content code to instantiate DOMExceptions\n\t, DOMEx = function (type, message) {\n\t\tthis.name = type;\n\t\tthis.code = DOMException[type];\n\t\tthis.message = message;\n\t}\n\t, checkTokenAndGetIndex = function (classList, token) {\n\t\tif (token === "") {\n\t\t\tthrow new DOMEx(\n\t\t\t\t  "SYNTAX_ERR"\n\t\t\t\t, "An invalid or illegal string was specified"\n\t\t\t);\n\t\t}\n\t\tif (/\\s/.test(token)) {\n\t\t\tthrow new DOMEx(\n\t\t\t\t  "INVALID_CHARACTER_ERR"\n\t\t\t\t, "String contains an invalid character"\n\t\t\t);\n\t\t}\n\t\treturn arrIndexOf.call(classList, token);\n\t}\n\t, ClassList = function (elem) {\n\t\tvar\n\t\t\t  trimmedClasses = strTrim.call(elem.getAttribute("class") || "")\n\t\t\t, classes = trimmedClasses ? trimmedClasses.split(/\\s+/) : []\n\t\t\t, i = 0\n\t\t\t, len = classes.length\n\t\t;\n\t\tfor (; i < len; i++) {\n\t\t\tthis.push(classes[i]);\n\t\t}\n\t\tthis._updateClassName = function () {\n\t\t\telem.setAttribute("class", this.toString());\n\t\t};\n\t}\n\t, classListProto = ClassList[protoProp] = []\n\t, classListGetter = function () {\n\t\treturn new ClassList(this);\n\t}\n;\n// Most DOMException implementations don\'t allow calling DOMException\'s toString()\n// on non-DOMExceptions. Error\'s toString() is sufficient here.\nDOMEx[protoProp] = Error[protoProp];\nclassListProto.item = function (i) {\n\treturn this[i] || null;\n};\nclassListProto.contains = function (token) {\n\ttoken += "";\n\treturn checkTokenAndGetIndex(this, token) !== -1;\n};\nclassListProto.add = function () {\n\tvar\n\t\t  tokens = arguments\n\t\t, i = 0\n\t\t, l = tokens.length\n\t\t, token\n\t\t, updated = false\n\t;\n\tdo {\n\t\ttoken = tokens[i] + "";\n\t\tif (checkTokenAndGetIndex(this, token) === -1) {\n\t\t\tthis.push(token);\n\t\t\tupdated = true;\n\t\t}\n\t}\n\twhile (++i < l);\n\n\tif (updated) {\n\t\tthis._updateClassName();\n\t}\n};\nclassListProto.remove = function () {\n\tvar\n\t\t  tokens = arguments\n\t\t, i = 0\n\t\t, l = tokens.length\n\t\t, token\n\t\t, updated = false\n\t\t, index\n\t;\n\tdo {\n\t\ttoken = tokens[i] + "";\n\t\tindex = checkTokenAndGetIndex(this, token);\n\t\twhile (index !== -1) {\n\t\t\tthis.splice(index, 1);\n\t\t\tupdated = true;\n\t\t\tindex = checkTokenAndGetIndex(this, token);\n\t\t}\n\t}\n\twhile (++i < l);\n\n\tif (updated) {\n\t\tthis._updateClassName();\n\t}\n};\nclassListProto.toggle = function (token, force) {\n\ttoken += "";\n\n\tvar\n\t\t  result = this.contains(token)\n\t\t, method = result ?\n\t\t\tforce !== true && "remove"\n\t\t:\n\t\t\tforce !== false && "add"\n\t;\n\n\tif (method) {\n\t\tthis[method](token);\n\t}\n\n\tif (force === true || force === false) {\n\t\treturn force;\n\t} else {\n\t\treturn !result;\n\t}\n};\nclassListProto.toString = function () {\n\treturn this.join(" ");\n};\n\nif (objCtr.defineProperty) {\n\tvar classListPropDesc = {\n\t\t  get: classListGetter\n\t\t, enumerable: true\n\t\t, configurable: true\n\t};\n\ttry {\n\t\tobjCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);\n\t} catch (ex) { // IE 8 doesn\'t support enumerable:true\n\t\t// adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36\n\t\t// modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected\n\t\tif (ex.number === undefined || ex.number === -0x7FF5EC54) {\n\t\t\tclassListPropDesc.enumerable = false;\n\t\t\tobjCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);\n\t\t}\n\t}\n} else if (objCtr[protoProp].__defineGetter__) {\n\telemCtrProto.__defineGetter__(classListProp, classListGetter);\n}\n\n}(window.self));\n\n}\n\n// There is full or partial native classList support, so just check if we need\n// to normalize the add/remove and toggle APIs.\n\n(function () {\n\t"use strict";\n\n\tvar testElement = document.createElement("_");\n\n\ttestElement.classList.add("c1", "c2");\n\n\t// Polyfill for IE 10/11 and Firefox <26, where classList.add and\n\t// classList.remove exist but support only one argument at a time.\n\tif (!testElement.classList.contains("c2")) {\n\t\tvar createMethod = function(method) {\n\t\t\tvar original = DOMTokenList.prototype[method];\n\n\t\t\tDOMTokenList.prototype[method] = function(token) {\n\t\t\t\tvar i, len = arguments.length;\n\n\t\t\t\tfor (i = 0; i < len; i++) {\n\t\t\t\t\ttoken = arguments[i];\n\t\t\t\t\toriginal.call(this, token);\n\t\t\t\t}\n\t\t\t};\n\t\t};\n\t\tcreateMethod(\'add\');\n\t\tcreateMethod(\'remove\');\n\t}\n\n\ttestElement.classList.toggle("c3", false);\n\n\t// Polyfill for IE 10 and Firefox <24, where classList.toggle does not\n\t// support the second argument.\n\tif (testElement.classList.contains("c3")) {\n\t\tvar _toggle = DOMTokenList.prototype.toggle;\n\n\t\tDOMTokenList.prototype.toggle = function(token, force) {\n\t\t\tif (1 in arguments && !this.contains(token) === !force) {\n\t\t\t\treturn force;\n\t\t\t} else {\n\t\t\t\treturn _toggle.call(this, token);\n\t\t\t}\n\t\t};\n\n\t}\n\n\ttestElement = null;\n}());\n\n}\n\n\n//# sourceURL=webpack://equicore/./node_modules/classlist-polyfill/src/index.js?'
        );

        /***/
      },

    /***/ './node_modules/console-polyfill/index.js':
      /*!************************************************!*\
  !*** ./node_modules/console-polyfill/index.js ***!
  \************************************************/
      /***/ function () {
        eval(
          "// Console-polyfill. MIT license.\n// https://github.com/paulmillr/console-polyfill\n// Make it safe to do console.log() always.\n(function(global) {\n  'use strict';\n  if (!global.console) {\n    global.console = {};\n  }\n  var con = global.console;\n  var prop, method;\n  var dummy = function() {};\n  var properties = ['memory'];\n  var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +\n     'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +\n     'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');\n  while (prop = properties.pop()) if (!con[prop]) con[prop] = {};\n  while (method = methods.pop()) if (!con[method]) con[method] = dummy;\n  // Using `this` for web workers & supports Browserify / Webpack.\n})(typeof window === 'undefined' ? this : window);\n\n\n//# sourceURL=webpack://equicore/./node_modules/console-polyfill/index.js?"
        );

        /***/
      },

    /***/ './node_modules/define-data-property/index.js':
      /*!****************************************************!*\
  !*** ./node_modules/define-data-property/index.js ***!
  \****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $defineProperty = __webpack_require__(/*! es-define-property */ \"./node_modules/es-define-property/index.js\");\n\nvar $SyntaxError = __webpack_require__(/*! es-errors/syntax */ \"./node_modules/es-errors/syntax.js\");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar gopd = __webpack_require__(/*! gopd */ \"./node_modules/gopd/index.js\");\n\n/** @type {import('.')} */\nmodule.exports = function defineDataProperty(\n\tobj,\n\tproperty,\n\tvalue\n) {\n\tif (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {\n\t\tthrow new $TypeError('`obj` must be an object or a function`');\n\t}\n\tif (typeof property !== 'string' && typeof property !== 'symbol') {\n\t\tthrow new $TypeError('`property` must be a string or a symbol`');\n\t}\n\tif (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) {\n\t\tthrow new $TypeError('`nonEnumerable`, if provided, must be a boolean or null');\n\t}\n\tif (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) {\n\t\tthrow new $TypeError('`nonWritable`, if provided, must be a boolean or null');\n\t}\n\tif (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) {\n\t\tthrow new $TypeError('`nonConfigurable`, if provided, must be a boolean or null');\n\t}\n\tif (arguments.length > 6 && typeof arguments[6] !== 'boolean') {\n\t\tthrow new $TypeError('`loose`, if provided, must be a boolean');\n\t}\n\n\tvar nonEnumerable = arguments.length > 3 ? arguments[3] : null;\n\tvar nonWritable = arguments.length > 4 ? arguments[4] : null;\n\tvar nonConfigurable = arguments.length > 5 ? arguments[5] : null;\n\tvar loose = arguments.length > 6 ? arguments[6] : false;\n\n\t/* @type {false | TypedPropertyDescriptor<unknown>} */\n\tvar desc = !!gopd && gopd(obj, property);\n\n\tif ($defineProperty) {\n\t\t$defineProperty(obj, property, {\n\t\t\tconfigurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,\n\t\t\tenumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,\n\t\t\tvalue: value,\n\t\t\twritable: nonWritable === null && desc ? desc.writable : !nonWritable\n\t\t});\n\t} else if (loose || (!nonEnumerable && !nonWritable && !nonConfigurable)) {\n\t\t// must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable\n\t\tobj[property] = value; // eslint-disable-line no-param-reassign\n\t} else {\n\t\tthrow new $SyntaxError('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');\n\t}\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/define-data-property/index.js?"
        );

        /***/
      },

    /***/ './node_modules/define-properties/index.js':
      /*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar keys = __webpack_require__(/*! object-keys */ \"./node_modules/object-keys/index.js\");\nvar hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';\n\nvar toStr = Object.prototype.toString;\nvar concat = Array.prototype.concat;\nvar defineDataProperty = __webpack_require__(/*! define-data-property */ \"./node_modules/define-data-property/index.js\");\n\nvar isFunction = function (fn) {\n\treturn typeof fn === 'function' && toStr.call(fn) === '[object Function]';\n};\n\nvar supportsDescriptors = __webpack_require__(/*! has-property-descriptors */ \"./node_modules/has-property-descriptors/index.js\")();\n\nvar defineProperty = function (object, name, value, predicate) {\n\tif (name in object) {\n\t\tif (predicate === true) {\n\t\t\tif (object[name] === value) {\n\t\t\t\treturn;\n\t\t\t}\n\t\t} else if (!isFunction(predicate) || !predicate()) {\n\t\t\treturn;\n\t\t}\n\t}\n\n\tif (supportsDescriptors) {\n\t\tdefineDataProperty(object, name, value, true);\n\t} else {\n\t\tdefineDataProperty(object, name, value);\n\t}\n};\n\nvar defineProperties = function (object, map) {\n\tvar predicates = arguments.length > 2 ? arguments[2] : {};\n\tvar props = keys(map);\n\tif (hasSymbols) {\n\t\tprops = concat.call(props, Object.getOwnPropertySymbols(map));\n\t}\n\tfor (var i = 0; i < props.length; i += 1) {\n\t\tdefineProperty(object, props[i], map[props[i]], predicates[props[i]]);\n\t}\n};\n\ndefineProperties.supportsDescriptors = !!supportsDescriptors;\n\nmodule.exports = defineProperties;\n\n\n//# sourceURL=webpack://equicore/./node_modules/define-properties/index.js?"
        );

        /***/
      },

    /***/ './node_modules/document.contains/auto.js':
      /*!************************************************!*\
  !*** ./node_modules/document.contains/auto.js ***!
  \************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict';
        eval(
          '\n\n__webpack_require__(/*! ./shim */ "./node_modules/document.contains/shim.js")();\n\n\n//# sourceURL=webpack://equicore/./node_modules/document.contains/auto.js?'
        );

        /***/
      },

    /***/ './node_modules/document.contains/implementation.js':
      /*!**********************************************************!*\
  !*** ./node_modules/document.contains/implementation.js ***!
  \**********************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\nmodule.exports = function contains(other) {\n\tif (arguments.length < 1) {\n\t\tthrow new TypeError('1 argument is required');\n\t}\n\tif (typeof other !== 'object') {\n\t\tthrow new TypeError('Argument 1 (”other“) to Node.contains must be an instance of Node');\n\t}\n\n\tvar node = other;\n\tdo {\n\t\tif (this === node) {\n\t\t\treturn true;\n\t\t}\n\t\tif (node) {\n\t\t\tnode = node.parentNode;\n\t\t}\n\t} while (node);\n\n\treturn false;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/document.contains/implementation.js?"
        );

        /***/
      },

    /***/ './node_modules/document.contains/polyfill.js':
      /*!****************************************************!*\
  !*** ./node_modules/document.contains/polyfill.js ***!
  \****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/document.contains/implementation.js\");\n\nmodule.exports = function getPolyfill() {\n\tif (typeof document !== 'undefined') {\n\t\tif (document.contains) {\n\t\t\treturn document.contains;\n\t\t}\n\t\tif (document.body && document.body.contains) {\n\t\t\ttry {\n\t\t\t\tif (typeof document.body.contains.call(document, '') === 'boolean') {\n\t\t\t\t\treturn document.body.contains;\n\t\t\t\t}\n\t\t\t} catch (e) { /**/ }\n\t\t}\n\t}\n\treturn implementation;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/document.contains/polyfill.js?"
        );

        /***/
      },

    /***/ './node_modules/document.contains/shim.js':
      /*!************************************************!*\
  !*** ./node_modules/document.contains/shim.js ***!
  \************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/document.contains/polyfill.js");\n\nmodule.exports = function shimContains() {\n\tvar polyfill = getPolyfill();\n\tif (typeof document !== \'undefined\') {\n\t\tdefine(\n\t\t\tdocument,\n\t\t\t{ contains: polyfill },\n\t\t\t{ contains: function () { return document.contains !== polyfill; } }\n\t\t);\n\t\tif (typeof Element !== \'undefined\') {\n\t\t\tdefine(\n\t\t\t\tElement.prototype,\n\t\t\t\t{ contains: polyfill },\n\t\t\t\t{ contains: function () { return Element.prototype.contains !== polyfill; } }\n\t\t\t);\n\t\t}\n\t}\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/document.contains/shim.js?'
        );

        /***/
      },

    /***/ './node_modules/element-closest/element-closest.js':
      /*!*********************************************************!*\
  !*** ./node_modules/element-closest/element-closest.js ***!
  \*********************************************************/
      /***/ () => {
        eval(
          "// element-closest | CC0-1.0 | github.com/jonathantneal/closest\n\n(function (ElementProto) {\n\tif (typeof ElementProto.matches !== 'function') {\n\t\tElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {\n\t\t\tvar element = this;\n\t\t\tvar elements = (element.document || element.ownerDocument).querySelectorAll(selector);\n\t\t\tvar index = 0;\n\n\t\t\twhile (elements[index] && elements[index] !== element) {\n\t\t\t\t++index;\n\t\t\t}\n\n\t\t\treturn Boolean(elements[index]);\n\t\t};\n\t}\n\n\tif (typeof ElementProto.closest !== 'function') {\n\t\tElementProto.closest = function closest(selector) {\n\t\t\tvar element = this;\n\n\t\t\twhile (element && element.nodeType === 1) {\n\t\t\t\tif (element.matches(selector)) {\n\t\t\t\t\treturn element;\n\t\t\t\t}\n\n\t\t\t\telement = element.parentNode;\n\t\t\t}\n\n\t\t\treturn null;\n\t\t};\n\t}\n})(window.Element.prototype);\n\n\n//# sourceURL=webpack://equicore/./node_modules/element-closest/element-closest.js?"
        );

        /***/
      },

    /***/ './node_modules/es-array-method-boxes-properly/index.js':
      /*!**************************************************************!*\
  !*** ./node_modules/es-array-method-boxes-properly/index.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "module.exports = function properlyBoxed(method) {\n\t// Check node 0.6.21 bug where third parameter is not boxed\n\tvar properlyBoxesNonStrict = true;\n\tvar properlyBoxesStrict = true;\n\tvar threwException = false;\n\tif (typeof method === 'function') {\n\t\ttry {\n\t\t\t// eslint-disable-next-line max-params\n\t\t\tmethod.call('f', function (_, __, O) {\n\t\t\t\tif (typeof O !== 'object') {\n\t\t\t\t\tproperlyBoxesNonStrict = false;\n\t\t\t\t}\n\t\t\t});\n\n\t\t\tmethod.call(\n\t\t\t\t[null],\n\t\t\t\tfunction () {\n\t\t\t\t\t'use strict';\n\n\t\t\t\t\tproperlyBoxesStrict = typeof this === 'string'; // eslint-disable-line no-invalid-this\n\t\t\t\t},\n\t\t\t\t'x'\n\t\t\t);\n\t\t} catch (e) {\n\t\t\tthrewException = true;\n\t\t}\n\t\treturn !threwException && properlyBoxesNonStrict && properlyBoxesStrict;\n\t}\n\treturn false;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-array-method-boxes-properly/index.js?"
        );

        /***/
      },

    /***/ './node_modules/es-define-property/index.js':
      /*!**************************************************!*\
  !*** ./node_modules/es-define-property/index.js ***!
  \**************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\n/** @type {import('.')} */\nvar $defineProperty = GetIntrinsic('%Object.defineProperty%', true) || false;\nif ($defineProperty) {\n\ttry {\n\t\t$defineProperty({}, 'a', { value: 1 });\n\t} catch (e) {\n\t\t// IE 8 has a broken defineProperty\n\t\t$defineProperty = false;\n\t}\n}\n\nmodule.exports = $defineProperty;\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-define-property/index.js?"
        );

        /***/
      },

    /***/ './node_modules/es-errors/eval.js':
      /*!****************************************!*\
  !*** ./node_modules/es-errors/eval.js ***!
  \****************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\n/** @type {import('./eval')} */\nmodule.exports = EvalError;\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-errors/eval.js?"
        );

        /***/
      },

    /***/ './node_modules/es-errors/index.js':
      /*!*****************************************!*\
  !*** ./node_modules/es-errors/index.js ***!
  \*****************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\n/** @type {import('.')} */\nmodule.exports = Error;\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-errors/index.js?"
        );

        /***/
      },

    /***/ './node_modules/es-errors/range.js':
      /*!*****************************************!*\
  !*** ./node_modules/es-errors/range.js ***!
  \*****************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\n/** @type {import('./range')} */\nmodule.exports = RangeError;\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-errors/range.js?"
        );

        /***/
      },

    /***/ './node_modules/es-errors/ref.js':
      /*!***************************************!*\
  !*** ./node_modules/es-errors/ref.js ***!
  \***************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\n/** @type {import('./ref')} */\nmodule.exports = ReferenceError;\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-errors/ref.js?"
        );

        /***/
      },

    /***/ './node_modules/es-errors/syntax.js':
      /*!******************************************!*\
  !*** ./node_modules/es-errors/syntax.js ***!
  \******************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\n/** @type {import('./syntax')} */\nmodule.exports = SyntaxError;\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-errors/syntax.js?"
        );

        /***/
      },

    /***/ './node_modules/es-errors/type.js':
      /*!****************************************!*\
  !*** ./node_modules/es-errors/type.js ***!
  \****************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\n/** @type {import('./type')} */\nmodule.exports = TypeError;\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-errors/type.js?"
        );

        /***/
      },

    /***/ './node_modules/es-errors/uri.js':
      /*!***************************************!*\
  !*** ./node_modules/es-errors/uri.js ***!
  \***************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\n/** @type {import('./uri')} */\nmodule.exports = URIError;\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-errors/uri.js?"
        );

        /***/
      },

    /***/ './node_modules/es-object-atoms/RequireObjectCoercible.js':
      /*!****************************************************************!*\
  !*** ./node_modules/es-object-atoms/RequireObjectCoercible.js ***!
  \****************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\n/** @type {import('./RequireObjectCoercible')} */\nmodule.exports = function RequireObjectCoercible(value) {\n\tif (value == null) {\n\t\tthrow new $TypeError((arguments.length > 0 && arguments[1]) || ('Cannot call method on ' + value));\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-object-atoms/RequireObjectCoercible.js?"
        );

        /***/
      },

    /***/ './node_modules/es-object-atoms/ToObject.js':
      /*!**************************************************!*\
  !*** ./node_modules/es-object-atoms/ToObject.js ***!
  \**************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $Object = __webpack_require__(/*! ./ */ "./node_modules/es-object-atoms/index.js");\nvar RequireObjectCoercible = __webpack_require__(/*! ./RequireObjectCoercible */ "./node_modules/es-object-atoms/RequireObjectCoercible.js");\n\n/** @type {import(\'./ToObject\')} */\nmodule.exports = function ToObject(value) {\n\tRequireObjectCoercible(value);\n\treturn $Object(value);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-object-atoms/ToObject.js?'
        );

        /***/
      },

    /***/ './node_modules/es-object-atoms/index.js':
      /*!***********************************************!*\
  !*** ./node_modules/es-object-atoms/index.js ***!
  \***********************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\n/** @type {import('.')} */\nmodule.exports = Object;\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-object-atoms/index.js?"
        );

        /***/
      },

    /***/ './node_modules/es-set-tostringtag/index.js':
      /*!**************************************************!*\
  !*** ./node_modules/es-set-tostringtag/index.js ***!
  \**************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");\n\nvar $defineProperty = GetIntrinsic(\'%Object.defineProperty%\', true);\n\nvar hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ "./node_modules/has-tostringtag/shams.js")();\nvar hasOwn = __webpack_require__(/*! hasown */ "./node_modules/hasown/index.js");\n\nvar toStringTag = hasToStringTag ? Symbol.toStringTag : null;\n\n/** @type {import(\'.\')} */\nmodule.exports = function setToStringTag(object, value) {\n\tvar overrideIfSet = arguments.length > 2 && arguments[2] && arguments[2].force;\n\tif (toStringTag && (overrideIfSet || !hasOwn(object, toStringTag))) {\n\t\tif ($defineProperty) {\n\t\t\t$defineProperty(object, toStringTag, {\n\t\t\t\tconfigurable: true,\n\t\t\t\tenumerable: false,\n\t\t\t\tvalue: value,\n\t\t\t\twritable: false\n\t\t\t});\n\t\t} else {\n\t\t\tobject[toStringTag] = value; // eslint-disable-line no-param-reassign\n\t\t}\n\t}\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-set-tostringtag/index.js?'
        );

        /***/
      },

    /***/ './node_modules/es-shim-unscopables/index.js':
      /*!***************************************************!*\
  !*** ./node_modules/es-shim-unscopables/index.js ***!
  \***************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar hasOwn = __webpack_require__(/*! hasown */ \"./node_modules/hasown/index.js\");\n\nvar hasUnscopables = typeof Symbol === 'function' && typeof Symbol.unscopables === 'symbol';\n\nvar map = hasUnscopables && Array.prototype[Symbol.unscopables];\n\nvar $TypeError = TypeError;\n\nmodule.exports = function shimUnscopables(method) {\n\tif (typeof method !== 'string' || !method) {\n\t\tthrow new $TypeError('method must be a non-empty string');\n\t}\n\tif (!hasOwn(Array.prototype, method)) {\n\t\tthrow new $TypeError('method must be on Array.prototype');\n\t}\n\tif (hasUnscopables) {\n\t\tmap[method] = true;\n\t}\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-shim-unscopables/index.js?"
        );

        /***/
      },

    /***/ './node_modules/es-to-primitive/es2015.js':
      /*!************************************************!*\
  !*** ./node_modules/es-to-primitive/es2015.js ***!
  \************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';\n\nvar isPrimitive = __webpack_require__(/*! ./helpers/isPrimitive */ \"./node_modules/es-to-primitive/helpers/isPrimitive.js\");\nvar isCallable = __webpack_require__(/*! is-callable */ \"./node_modules/is-callable/index.js\");\nvar isDate = __webpack_require__(/*! is-date-object */ \"./node_modules/is-date-object/index.js\");\nvar isSymbol = __webpack_require__(/*! is-symbol */ \"./node_modules/is-symbol/index.js\");\n\nvar ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {\n\tif (typeof O === 'undefined' || O === null) {\n\t\tthrow new TypeError('Cannot call method on ' + O);\n\t}\n\tif (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {\n\t\tthrow new TypeError('hint must be \"string\" or \"number\"');\n\t}\n\tvar methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];\n\tvar method, result, i;\n\tfor (i = 0; i < methodNames.length; ++i) {\n\t\tmethod = O[methodNames[i]];\n\t\tif (isCallable(method)) {\n\t\t\tresult = method.call(O);\n\t\t\tif (isPrimitive(result)) {\n\t\t\t\treturn result;\n\t\t\t}\n\t\t}\n\t}\n\tthrow new TypeError('No default value');\n};\n\nvar GetMethod = function GetMethod(O, P) {\n\tvar func = O[P];\n\tif (func !== null && typeof func !== 'undefined') {\n\t\tif (!isCallable(func)) {\n\t\t\tthrow new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');\n\t\t}\n\t\treturn func;\n\t}\n\treturn void 0;\n};\n\n// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive\nmodule.exports = function ToPrimitive(input) {\n\tif (isPrimitive(input)) {\n\t\treturn input;\n\t}\n\tvar hint = 'default';\n\tif (arguments.length > 1) {\n\t\tif (arguments[1] === String) {\n\t\t\thint = 'string';\n\t\t} else if (arguments[1] === Number) {\n\t\t\thint = 'number';\n\t\t}\n\t}\n\n\tvar exoticToPrim;\n\tif (hasSymbols) {\n\t\tif (Symbol.toPrimitive) {\n\t\t\texoticToPrim = GetMethod(input, Symbol.toPrimitive);\n\t\t} else if (isSymbol(input)) {\n\t\t\texoticToPrim = Symbol.prototype.valueOf;\n\t\t}\n\t}\n\tif (typeof exoticToPrim !== 'undefined') {\n\t\tvar result = exoticToPrim.call(input, hint);\n\t\tif (isPrimitive(result)) {\n\t\t\treturn result;\n\t\t}\n\t\tthrow new TypeError('unable to convert exotic object to primitive');\n\t}\n\tif (hint === 'default' && (isDate(input) || isSymbol(input))) {\n\t\thint = 'string';\n\t}\n\treturn ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-to-primitive/es2015.js?"
        );

        /***/
      },

    /***/ './node_modules/es-to-primitive/helpers/isPrimitive.js':
      /*!*************************************************************!*\
  !*** ./node_modules/es-to-primitive/helpers/isPrimitive.js ***!
  \*************************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\nmodule.exports = function isPrimitive(value) {\n\treturn value === null || (typeof value !== 'function' && typeof value !== 'object');\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-to-primitive/helpers/isPrimitive.js?"
        );

        /***/
      },

    /***/ './node_modules/es5-shim/es5-sham.js':
      /*!*******************************************!*\
  !*** ./node_modules/es5-shim/es5-sham.js ***!
  \*******************************************/
      /***/ function (module, exports, __webpack_require__) {
        eval(
          "var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n * https://github.com/es-shims/es5-shim\n * @license es5-shim Copyright 2009-2020 by contributors, MIT License\n * see https://github.com/es-shims/es5-shim/blob/master/LICENSE\n */\n\n// vim: ts=4 sts=4 sw=4 expandtab\n\n// Add semicolon to prevent IIFE from being passed as argument to concatenated code.\n; // eslint-disable-line no-extra-semi\n\n// UMD (Universal Module Definition)\n// see https://github.com/umdjs/umd/blob/master/templates/returnExports.js\n(function (root, factory) {\n    'use strict';\n\n    /* global define */\n    if (true) {\n        // AMD. Register as an anonymous module.\n        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n}(this, function () {\n\n    var call = Function.call;\n    var prototypeOfObject = Object.prototype;\n    var owns = call.bind(prototypeOfObject.hasOwnProperty);\n    var isEnumerable = call.bind(prototypeOfObject.propertyIsEnumerable);\n    var toStr = call.bind(prototypeOfObject.toString);\n\n    // If JS engine supports accessors creating shortcuts.\n    var defineGetter;\n    var defineSetter;\n    var lookupGetter;\n    var lookupSetter;\n    var supportsAccessors = owns(prototypeOfObject, '__defineGetter__');\n    if (supportsAccessors) {\n        /* eslint-disable no-underscore-dangle, no-restricted-properties */\n        defineGetter = call.bind(prototypeOfObject.__defineGetter__);\n        defineSetter = call.bind(prototypeOfObject.__defineSetter__);\n        lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);\n        lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);\n        /* eslint-enable no-underscore-dangle, no-restricted-properties */\n    }\n\n    var isPrimitive = function isPrimitive(o) {\n        return o == null || (typeof o !== 'object' && typeof o !== 'function');\n    };\n\n    // ES5 15.2.3.2\n    // https://es5.github.io/#x15.2.3.2\n    if (!Object.getPrototypeOf) {\n        // https://github.com/es-shims/es5-shim/issues#issue/2\n        // https://johnresig.com/blog/objectgetprototypeof/\n        // recommended by fschaefer on github\n        //\n        // sure, and webreflection says ^_^\n        // ... this will nerever possibly return null\n        // ... Opera Mini breaks here with infinite loops\n        Object.getPrototypeOf = function getPrototypeOf(object) {\n            // eslint-disable-next-line no-proto\n            var proto = object.__proto__;\n            if (proto || proto == null) { // `undefined` is for pre-proto browsers\n                return proto;\n            } else if (toStr(object.constructor) === '[object Function]') {\n                return object.constructor.prototype;\n            } else if (object instanceof Object) {\n                return prototypeOfObject;\n            }\n            // Correctly return null for Objects created with `Object.create(null)`\n            // (shammed or native) or `{ __proto__: null}`.  Also returns null for\n            // cross-realm objects on browsers that lack `__proto__` support (like\n            // IE <11), but that's the best we can do.\n            return null;\n\n        };\n    }\n\n    // ES5 15.2.3.3\n    // https://es5.github.io/#x15.2.3.3\n\n    // check whether getOwnPropertyDescriptor works if it's given. Otherwise, shim partially.\n    if (Object.defineProperty) {\n        var doesGetOwnPropertyDescriptorWork = function doesGetOwnPropertyDescriptorWork(object) {\n            try {\n                object.sentinel = 0; // eslint-disable-line no-param-reassign\n                return Object.getOwnPropertyDescriptor(object, 'sentinel').value === 0;\n            } catch (exception) {\n                return false;\n            }\n        };\n        var getOwnPropertyDescriptorWorksOnObject = doesGetOwnPropertyDescriptorWork({});\n        var getOwnPropertyDescriptorWorksOnDom = typeof document === 'undefined'\n            || doesGetOwnPropertyDescriptorWork(document.createElement('div'));\n        if (!getOwnPropertyDescriptorWorksOnDom || !getOwnPropertyDescriptorWorksOnObject) {\n            var getOwnPropertyDescriptorFallback = Object.getOwnPropertyDescriptor;\n        }\n    }\n\n    if (!Object.getOwnPropertyDescriptor || getOwnPropertyDescriptorFallback) {\n        var ERR_NON_OBJECT = 'Object.getOwnPropertyDescriptor called on a non-object: ';\n\n        /* eslint-disable no-proto */\n        Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {\n            if (isPrimitive(object)) {\n                throw new TypeError(ERR_NON_OBJECT + object);\n            }\n\n            // make a valiant attempt to use the real getOwnPropertyDescriptor\n            // for I8's DOM elements.\n            if (getOwnPropertyDescriptorFallback) {\n                try {\n                    return getOwnPropertyDescriptorFallback.call(Object, object, property);\n                } catch (exception) {\n                    // try the shim if the real one doesn't work\n                }\n            }\n\n            var descriptor;\n\n            // If object does not owns property return undefined immediately.\n            if (!owns(object, property)) {\n                return descriptor;\n            }\n\n            // If object has a property then it's for sure `configurable`, and\n            // probably `enumerable`. Detect enumerability though.\n            descriptor = {\n                enumerable: isEnumerable(object, property),\n                configurable: true\n            };\n\n            // If JS engine supports accessor properties then property may be a\n            // getter or setter.\n            if (supportsAccessors) {\n                // Unfortunately `__lookupGetter__` will return a getter even\n                // if object has own non getter property along with a same named\n                // inherited getter. To avoid misbehavior we temporary remove\n                // `__proto__` so that `__lookupGetter__` will return getter only\n                // if it's owned by an object.\n                var prototype = object.__proto__;\n                var notPrototypeOfObject = object !== prototypeOfObject;\n                // avoid recursion problem, breaking in Opera Mini when\n                // Object.getOwnPropertyDescriptor(Object.prototype, 'toString')\n                // or any other Object.prototype accessor\n                if (notPrototypeOfObject) {\n                    object.__proto__ = prototypeOfObject; // eslint-disable-line no-param-reassign\n                }\n\n                var getter = lookupGetter(object, property);\n                var setter = lookupSetter(object, property);\n\n                if (notPrototypeOfObject) {\n                    // Once we have getter and setter we can put values back.\n                    object.__proto__ = prototype; // eslint-disable-line no-param-reassign\n                }\n\n                if (getter || setter) {\n                    if (getter) {\n                        descriptor.get = getter;\n                    }\n                    if (setter) {\n                        descriptor.set = setter;\n                    }\n                    // If it was accessor property we're done and return here\n                    // in order to avoid adding `value` to the descriptor.\n                    return descriptor;\n                }\n            }\n\n            // If we got this far we know that object has an own property that is\n            // not an accessor so we set it as a value and return descriptor.\n            descriptor.value = object[property];\n            descriptor.writable = true;\n            return descriptor;\n        };\n        /* eslint-enable no-proto */\n    }\n\n    // ES5 15.2.3.4\n    // https://es5.github.io/#x15.2.3.4\n    if (!Object.getOwnPropertyNames) {\n        Object.getOwnPropertyNames = function getOwnPropertyNames(object) {\n            return Object.keys(object);\n        };\n    }\n\n    // ES5 15.2.3.5\n    // https://es5.github.io/#x15.2.3.5\n    if (!Object.create) {\n\n        // Contributed by Brandon Benvie, October, 2012\n        var createEmpty;\n        var supportsProto = !({ __proto__: null } instanceof Object);\n        // the following produces false positives\n        // in Opera Mini => not a reliable check\n        // Object.prototype.__proto__ === null\n\n        // Check for document.domain and active x support\n        // No need to use active x approach when document.domain is not set\n        // see https://github.com/es-shims/es5-shim/issues/150\n        // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346\n        /* global ActiveXObject */\n        var shouldUseActiveX = function shouldUseActiveX() {\n            // return early if document.domain not set\n            if (!document.domain) {\n                return false;\n            }\n\n            try {\n                return !!new ActiveXObject('htmlfile');\n            } catch (exception) {\n                return false;\n            }\n        };\n\n        // This supports IE8 when document.domain is used\n        // see https://github.com/es-shims/es5-shim/issues/150\n        // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346\n        var getEmptyViaActiveX = function getEmptyViaActiveX() {\n            var empty;\n            var xDoc;\n\n            xDoc = new ActiveXObject('htmlfile');\n\n            var script = 'script';\n            xDoc.write('<' + script + '></' + script + '>');\n            xDoc.close();\n\n            empty = xDoc.parentWindow.Object.prototype;\n            xDoc = null;\n\n            return empty;\n        };\n\n        // The original implementation using an iframe\n        // before the activex approach was added\n        // see https://github.com/es-shims/es5-shim/issues/150\n        var getEmptyViaIFrame = function getEmptyViaIFrame() {\n            var iframe = document.createElement('iframe');\n            var parent = document.body || document.documentElement;\n            var empty;\n\n            iframe.style.display = 'none';\n            parent.appendChild(iframe);\n            // eslint-disable-next-line no-script-url\n            iframe.src = 'javascript:';\n\n            empty = iframe.contentWindow.Object.prototype;\n            parent.removeChild(iframe);\n            iframe = null;\n\n            return empty;\n        };\n\n        /* global document */\n        if (supportsProto || typeof document === 'undefined') {\n            createEmpty = function () {\n                return { __proto__: null };\n            };\n        } else {\n            // In old IE __proto__ can't be used to manually set `null`, nor does\n            // any other method exist to make an object that inherits from nothing,\n            // aside from Object.prototype itself. Instead, create a new global\n            // object and *steal* its Object.prototype and strip it bare. This is\n            // used as the prototype to create nullary objects.\n            createEmpty = function () {\n                // Determine which approach to use\n                // see https://github.com/es-shims/es5-shim/issues/150\n                var empty = shouldUseActiveX() ? getEmptyViaActiveX() : getEmptyViaIFrame();\n\n                delete empty.constructor;\n                delete empty.hasOwnProperty;\n                delete empty.propertyIsEnumerable;\n                delete empty.isPrototypeOf;\n                delete empty.toLocaleString;\n                delete empty.toString;\n                delete empty.valueOf;\n\n                var Empty = function Empty() {};\n                Empty.prototype = empty;\n                // short-circuit future calls\n                createEmpty = function () {\n                    return new Empty();\n                };\n                return new Empty();\n            };\n        }\n\n        Object.create = function create(prototype, properties) {\n\n            var object;\n            var Type = function Type() {}; // An empty constructor.\n\n            if (prototype === null) {\n                object = createEmpty();\n            } else if (isPrimitive(prototype)) {\n                // In the native implementation `parent` can be `null`\n                // OR *any* `instanceof Object`  (Object|Function|Array|RegExp|etc)\n                // Use `typeof` tho, b/c in old IE, DOM elements are not `instanceof Object`\n                // like they are in modern browsers. Using `Object.create` on DOM elements\n                // is...err...probably inappropriate, but the native version allows for it.\n                throw new TypeError('Object prototype may only be an Object or null'); // same msg as Chrome\n            } else {\n                Type.prototype = prototype;\n                object = new Type();\n                // IE has no built-in implementation of `Object.getPrototypeOf`\n                // neither `__proto__`, but this manually setting `__proto__` will\n                // guarantee that `Object.getPrototypeOf` will work as expected with\n                // objects created using `Object.create`\n                // eslint-disable-next-line no-proto\n                object.__proto__ = prototype;\n            }\n\n            if (properties !== void 0) {\n                Object.defineProperties(object, properties);\n            }\n\n            return object;\n        };\n    }\n\n    // ES5 15.2.3.6\n    // https://es5.github.io/#x15.2.3.6\n\n    // Patch for WebKit and IE8 standard mode\n    // Designed by hax <hax.github.com>\n    // related issue: https://github.com/es-shims/es5-shim/issues#issue/5\n    // IE8 Reference:\n    //     https://msdn.microsoft.com/en-us/library/dd282900.aspx\n    //     https://msdn.microsoft.com/en-us/library/dd229916.aspx\n    // WebKit Bugs:\n    //     https://bugs.webkit.org/show_bug.cgi?id=36423\n\n    var doesDefinePropertyWork = function doesDefinePropertyWork(object) {\n        try {\n            Object.defineProperty(object, 'sentinel', {});\n            return 'sentinel' in object;\n        } catch (exception) {\n            return false;\n        }\n    };\n\n    // check whether defineProperty works if it's given. Otherwise,\n    // shim partially.\n    if (Object.defineProperty) {\n        var definePropertyWorksOnObject = doesDefinePropertyWork({});\n        var definePropertyWorksOnDom = typeof document === 'undefined'\n            || doesDefinePropertyWork(document.createElement('div'));\n        if (!definePropertyWorksOnObject || !definePropertyWorksOnDom) {\n            var definePropertyFallback = Object.defineProperty,\n                definePropertiesFallback = Object.defineProperties;\n        }\n    }\n\n    if (!Object.defineProperty || definePropertyFallback) {\n        var ERR_NON_OBJECT_DESCRIPTOR = 'Property description must be an object: ';\n        var ERR_NON_OBJECT_TARGET = 'Object.defineProperty called on non-object: ';\n        var ERR_ACCESSORS_NOT_SUPPORTED = 'getters & setters can not be defined on this javascript engine';\n\n        Object.defineProperty = function defineProperty(object, property, descriptor) {\n            if (isPrimitive(object)) {\n                throw new TypeError(ERR_NON_OBJECT_TARGET + object);\n            }\n            if (isPrimitive(descriptor)) {\n                throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR + descriptor);\n            }\n            // make a valiant attempt to use the real defineProperty\n            // for I8's DOM elements.\n            if (definePropertyFallback) {\n                try {\n                    return definePropertyFallback.call(Object, object, property, descriptor);\n                } catch (exception) {\n                    // try the shim if the real one doesn't work\n                }\n            }\n\n            // If it's a data property.\n            if ('value' in descriptor) {\n                // fail silently if 'writable', 'enumerable', or 'configurable'\n                // are requested but not supported\n                /*\n                // alternate approach:\n                if ( // can't implement these features; allow false but not true\n                    ('writable' in descriptor && !descriptor.writable) ||\n                    ('enumerable' in descriptor && !descriptor.enumerable) ||\n                    ('configurable' in descriptor && !descriptor.configurable)\n                ))\n                    throw new RangeError(\n                        'This implementation of Object.defineProperty does not support configurable, enumerable, or writable.'\n                    );\n                */\n\n                if (supportsAccessors && (lookupGetter(object, property) || lookupSetter(object, property))) {\n                    // As accessors are supported only on engines implementing\n                    // `__proto__` we can safely override `__proto__` while defining\n                    // a property to make sure that we don't hit an inherited\n                    // accessor.\n                    /* eslint-disable no-proto, no-param-reassign */\n                    var prototype = object.__proto__;\n                    object.__proto__ = prototypeOfObject;\n                    // Deleting a property anyway since getter / setter may be\n                    // defined on object itself.\n                    delete object[property];\n                    object[property] = descriptor.value;\n                    // Setting original `__proto__` back now.\n                    object.__proto__ = prototype;\n                    /* eslint-enable no-proto, no-param-reassign */\n                } else {\n                    object[property] = descriptor.value; // eslint-disable-line no-param-reassign\n                }\n            } else {\n                var hasGetter = 'get' in descriptor;\n                var hasSetter = 'set' in descriptor;\n                if (!supportsAccessors && (hasGetter || hasSetter)) {\n                    throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);\n                }\n                // If we got that far then getters and setters can be defined !!\n                if (hasGetter) {\n                    defineGetter(object, property, descriptor.get);\n                }\n                if (hasSetter) {\n                    defineSetter(object, property, descriptor.set);\n                }\n            }\n            return object;\n        };\n    }\n\n    // ES5 15.2.3.7\n    // https://es5.github.io/#x15.2.3.7\n    if (!Object.defineProperties || definePropertiesFallback) {\n        Object.defineProperties = function defineProperties(object, properties) {\n            // make a valiant attempt to use the real defineProperties\n            if (definePropertiesFallback) {\n                try {\n                    return definePropertiesFallback.call(Object, object, properties);\n                } catch (exception) {\n                    // try the shim if the real one doesn't work\n                }\n            }\n\n            Object.keys(properties).forEach(function (property) {\n                if (property !== '__proto__') {\n                    Object.defineProperty(object, property, properties[property]);\n                }\n            });\n            return object;\n        };\n    }\n\n    // ES5 15.2.3.8\n    // https://es5.github.io/#x15.2.3.8\n    if (!Object.seal) {\n        Object.seal = function seal(object) {\n            if (Object(object) !== object) {\n                throw new TypeError('Object.seal can only be called on Objects.');\n            }\n            // this is misleading and breaks feature-detection, but\n            // allows \"securable\" code to \"gracefully\" degrade to working\n            // but insecure code.\n            return object;\n        };\n    }\n\n    // ES5 15.2.3.9\n    // https://es5.github.io/#x15.2.3.9\n    if (!Object.freeze) {\n        Object.freeze = function freeze(object) {\n            if (Object(object) !== object) {\n                throw new TypeError('Object.freeze can only be called on Objects.');\n            }\n            // this is misleading and breaks feature-detection, but\n            // allows \"securable\" code to \"gracefully\" degrade to working\n            // but insecure code.\n            return object;\n        };\n    }\n\n    // detect a Rhino bug and patch it\n    try {\n        Object.freeze(function () {});\n    } catch (exception) {\n        Object.freeze = (function (freezeObject) {\n            return function freeze(object) {\n                if (typeof object === 'function') {\n                    return object;\n                }\n                return freezeObject(object);\n\n            };\n        }(Object.freeze));\n    }\n\n    // ES5 15.2.3.10\n    // https://es5.github.io/#x15.2.3.10\n    if (!Object.preventExtensions) {\n        Object.preventExtensions = function preventExtensions(object) {\n            if (Object(object) !== object) {\n                throw new TypeError('Object.preventExtensions can only be called on Objects.');\n            }\n            // this is misleading and breaks feature-detection, but\n            // allows \"securable\" code to \"gracefully\" degrade to working\n            // but insecure code.\n            return object;\n        };\n    }\n\n    // ES5 15.2.3.11\n    // https://es5.github.io/#x15.2.3.11\n    if (!Object.isSealed) {\n        Object.isSealed = function isSealed(object) {\n            if (Object(object) !== object) {\n                throw new TypeError('Object.isSealed can only be called on Objects.');\n            }\n            return false;\n        };\n    }\n\n    // ES5 15.2.3.12\n    // https://es5.github.io/#x15.2.3.12\n    if (!Object.isFrozen) {\n        Object.isFrozen = function isFrozen(object) {\n            if (Object(object) !== object) {\n                throw new TypeError('Object.isFrozen can only be called on Objects.');\n            }\n            return false;\n        };\n    }\n\n    // ES5 15.2.3.13\n    // https://es5.github.io/#x15.2.3.13\n    if (!Object.isExtensible) {\n        Object.isExtensible = function isExtensible(object) {\n            // 1. If Type(O) is not Object throw a TypeError exception.\n            if (Object(object) !== object) {\n                throw new TypeError('Object.isExtensible can only be called on Objects.');\n            }\n            // 2. Return the Boolean value of the [[Extensible]] internal property of O.\n            var name = '';\n            while (owns(object, name)) {\n                name += '?';\n            }\n            object[name] = true; // eslint-disable-line no-param-reassign\n            var returnValue = owns(object, name);\n            delete object[name]; // eslint-disable-line no-param-reassign\n            return returnValue;\n        };\n    }\n\n}));\n\n\n//# sourceURL=webpack://equicore/./node_modules/es5-shim/es5-sham.js?"
        );

        /***/
      },

    /***/ './node_modules/es5-shim/es5-shim.js':
      /*!*******************************************!*\
  !*** ./node_modules/es5-shim/es5-shim.js ***!
  \*******************************************/
      /***/ function (module, exports, __webpack_require__) {
        eval(
          "var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n * https://github.com/es-shims/es5-shim\n * @license es5-shim Copyright 2009-2020 by contributors, MIT License\n * see https://github.com/es-shims/es5-shim/blob/master/LICENSE\n */\n\n// vim: ts=4 sts=4 sw=4 expandtab\n\n// Add semicolon to prevent IIFE from being passed as argument to concatenated code.\n; // eslint-disable-line no-extra-semi\n\n// UMD (Universal Module Definition)\n// see https://github.com/umdjs/umd/blob/master/templates/returnExports.js\n(function (root, factory) {\n    'use strict';\n\n    /* global define */\n    if (true) {\n        // AMD. Register as an anonymous module.\n        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n}(this, function () {\n    /**\n     * Brings an environment as close to ECMAScript 5 compliance\n     * as is possible with the facilities of erstwhile engines.\n     *\n     * Annotated ES5: https://es5.github.io/ (specific links below)\n     * ES5 Spec: https://www.ecma-international.org/wp-content/uploads/ECMA-262_5.1_edition_june_2011.pdf\n     * Required reading: https://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/\n     */\n\n    // Shortcut to an often accessed properties, in order to avoid multiple\n    // dereference that costs universally. This also holds a reference to known-good\n    // functions.\n    var $Array = Array;\n    var ArrayPrototype = $Array.prototype;\n    var $Object = Object;\n    var ObjectPrototype = $Object.prototype;\n    var $Function = Function;\n    var FunctionPrototype = $Function.prototype;\n    var $String = String;\n    var StringPrototype = $String.prototype;\n    var $Number = Number;\n    var NumberPrototype = $Number.prototype;\n    var array_slice = ArrayPrototype.slice;\n    var array_splice = ArrayPrototype.splice;\n    var array_push = ArrayPrototype.push;\n    var array_unshift = ArrayPrototype.unshift;\n    var array_concat = ArrayPrototype.concat;\n    var array_join = ArrayPrototype.join;\n    var call = FunctionPrototype.call;\n    var apply = FunctionPrototype.apply;\n    var max = Math.max;\n    var min = Math.min;\n    var floor = Math.floor;\n    var abs = Math.abs;\n    var pow = Math.pow;\n    var round = Math.round;\n    var log = Math.log;\n    var LOG10E = Math.LOG10E;\n    var log10 = Math.log10 || function log10(value) {\n        return log(value) * LOG10E;\n    };\n\n    // Having a toString local variable name breaks in Opera so use to_string.\n    var to_string = ObjectPrototype.toString;\n\n    /* eslint-disable one-var-declaration-per-line, no-redeclare, max-statements-per-line */\n    var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n    var isCallable; /* inlined from https://npmjs.com/is-callable */ var fnToStr = Function.prototype.toString, constructorRegex = /^\\s*class /, isES6ClassFn = function isES6ClassFn(value) { try { var fnStr = fnToStr.call(value); var singleStripped = fnStr.replace(/\\/\\/.*\\n/g, ''); var multiStripped = singleStripped.replace(/\\/\\*[.\\s\\S]*\\*\\//g, ''); var spaceStripped = multiStripped.replace(/\\n/mg, ' ').replace(/ {2}/g, ' '); return constructorRegex.test(spaceStripped); } catch (e) { return false; /* not a function */ } }, tryFunctionObject = function tryFunctionObject(value) { try { if (isES6ClassFn(value)) { return false; } fnToStr.call(value); return true; } catch (e) { return false; } }, fnClass = '[object Function]', genClass = '[object GeneratorFunction]', isCallable = function isCallable(value) { if (!value) { return false; } if (typeof value !== 'function' && typeof value !== 'object') { return false; } if (hasToStringTag) { return tryFunctionObject(value); } if (isES6ClassFn(value)) { return false; } var strClass = to_string.call(value); return strClass === fnClass || strClass === genClass; };\n\n    var isRegex; /* inlined from https://npmjs.com/is-regex */ var regexExec = RegExp.prototype.exec, tryRegexExec = function tryRegexExec(value) { try { regexExec.call(value); return true; } catch (e) { return false; } }, regexClass = '[object RegExp]'; isRegex = function isRegex(value) { if (typeof value !== 'object') { return false; } return hasToStringTag ? tryRegexExec(value) : to_string.call(value) === regexClass; };\n    var isString; /* inlined from https://npmjs.com/is-string */ var strValue = String.prototype.valueOf, tryStringObject = function tryStringObject(value) { try { strValue.call(value); return true; } catch (e) { return false; } }, stringClass = '[object String]'; isString = function isString(value) { if (typeof value === 'string') { return true; } if (typeof value !== 'object') { return false; } return hasToStringTag ? tryStringObject(value) : to_string.call(value) === stringClass; };\n    /* eslint-enable one-var-declaration-per-line, no-redeclare, max-statements-per-line */\n\n    /* inlined from https://npmjs.com/define-properties */\n    var supportsDescriptors = $Object.defineProperty && (function () {\n        try {\n            var obj = {};\n            $Object.defineProperty(obj, 'x', { enumerable: false, value: obj });\n            // eslint-disable-next-line no-unreachable-loop, max-statements-per-line\n            for (var _ in obj) { return false; } // jscs:ignore disallowUnusedVariables\n            return obj.x === obj;\n        } catch (e) { /* this is ES3 */\n            return false;\n        }\n    }());\n    var defineProperties = (function (has) {\n        // Define configurable, writable, and non-enumerable props\n        // if they don't exist.\n        var defineProperty;\n        if (supportsDescriptors) {\n            defineProperty = function (object, name, method, forceAssign) {\n                if (!forceAssign && (name in object)) {\n                    return;\n                }\n                $Object.defineProperty(object, name, {\n                    configurable: true,\n                    enumerable: false,\n                    writable: true,\n                    value: method\n                });\n            };\n        } else {\n            defineProperty = function (object, name, method, forceAssign) {\n                if (!forceAssign && (name in object)) {\n                    return;\n                }\n                object[name] = method; // eslint-disable-line no-param-reassign\n            };\n        }\n        return function defineProperties(object, map, forceAssign) {\n            for (var name in map) {\n                if (has.call(map, name)) {\n                    defineProperty(object, name, map[name], forceAssign);\n                }\n            }\n        };\n    }(ObjectPrototype.hasOwnProperty));\n\n    // this is needed in Chrome 15 (probably earlier) - 36\n    // https://bugs.chromium.org/p/v8/issues/detail?id=3334\n    if ($Object.defineProperty && supportsDescriptors) {\n        var F = function () {};\n        var toStringSentinel = {};\n        var sentinel = { toString: toStringSentinel };\n        $Object.defineProperty(F, 'prototype', { value: sentinel, writable: false });\n        if ((new F()).toString !== toStringSentinel) {\n            var $dP = $Object.defineProperty;\n            var $gOPD = $Object.getOwnPropertyDescriptor;\n            defineProperties($Object, {\n                defineProperty: function defineProperty(o, k, d) {\n                    var key = $String(k);\n                    if (typeof o === 'function' && key === 'prototype') {\n                        var desc = $gOPD(o, key);\n                        if (desc.writable && !d.writable && 'value' in d) {\n                            try {\n                                o[key] = d.value; // eslint-disable-line no-param-reassign\n                            } catch (e) { /**/ }\n                        }\n                        return $dP(o, key, {\n                            configurable: 'configurable' in d ? d.configurable : desc.configurable,\n                            enumerable: 'enumerable' in d ? d.enumerable : desc.enumerable,\n                            writable: d.writable\n                        });\n                    }\n                    return $dP(o, key, d);\n                }\n            }, true);\n        }\n    }\n\n    //\n    // Util\n    // ======\n    //\n\n    /* replaceable with https://npmjs.com/package/es-abstract /helpers/isPrimitive */\n    var isPrimitive = function isPrimitive(input) {\n        var type = typeof input;\n        return input === null || (type !== 'object' && type !== 'function');\n    };\n\n    var isActualNaN = $Number.isNaN || function isActualNaN(x) {\n        return x !== x;\n    };\n\n    var ES = {\n        // ES5 9.4\n        // https://es5.github.io/#x9.4\n        // http://jsperf.com/to-integer\n        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToInteger */\n        ToInteger: function ToInteger(num) {\n            var n = +num;\n            if (isActualNaN(n)) {\n                n = 0;\n            } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {\n                n = (n > 0 || -1) * floor(abs(n));\n            }\n            return n;\n        },\n\n        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToPrimitive */\n        ToPrimitive: function ToPrimitive(input) {\n            var val, valueOf, toStr;\n            if (isPrimitive(input)) {\n                return input;\n            }\n            valueOf = input.valueOf;\n            if (isCallable(valueOf)) {\n                val = valueOf.call(input);\n                if (isPrimitive(val)) {\n                    return val;\n                }\n            }\n            toStr = input.toString;\n            if (isCallable(toStr)) {\n                val = toStr.call(input);\n                if (isPrimitive(val)) {\n                    return val;\n                }\n            }\n            throw new TypeError();\n        },\n\n        // ES5 9.9\n        // https://es5.github.io/#x9.9\n        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToObject */\n        ToObject: function (o) {\n            if (o == null) { // this matches both null and undefined\n                throw new TypeError(\"can't convert \" + o + ' to object');\n            }\n            return $Object(o);\n        },\n\n        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToUint32 */\n        ToUint32: function ToUint32(x) {\n            return x >>> 0;\n        }\n    };\n\n    //\n    // Function\n    // ========\n    //\n\n    // ES-5 15.3.4.5\n    // https://es5.github.io/#x15.3.4.5\n\n    var Empty = function Empty() {};\n\n    defineProperties(FunctionPrototype, {\n        bind: function bind(that) { // .length is 1\n            // 1. Let Target be the this value.\n            var target = this;\n            // 2. If IsCallable(Target) is false, throw a TypeError exception.\n            if (!isCallable(target)) {\n                throw new TypeError('Function.prototype.bind called on incompatible ' + target);\n            }\n            // 3. Let A be a new (possibly empty) internal list of all of the\n            //   argument values provided after thisArg (arg1, arg2 etc), in order.\n            // XXX slicedArgs will stand in for \"A\" if used\n            var args = array_slice.call(arguments, 1); // for normal call\n            // 4. Let F be a new native ECMAScript object.\n            // 11. Set the [[Prototype]] internal property of F to the standard\n            //   built-in Function prototype object as specified in 15.3.3.1.\n            // 12. Set the [[Call]] internal property of F as described in\n            //   15.3.4.5.1.\n            // 13. Set the [[Construct]] internal property of F as described in\n            //   15.3.4.5.2.\n            // 14. Set the [[HasInstance]] internal property of F as described in\n            //   15.3.4.5.3.\n            var bound;\n            var binder = function () {\n\n                if (this instanceof bound) {\n                    // 15.3.4.5.2 [[Construct]]\n                    // When the [[Construct]] internal method of a function object,\n                    // F that was created using the bind function is called with a\n                    // list of arguments ExtraArgs, the following steps are taken:\n                    // 1. Let target be the value of F's [[TargetFunction]]\n                    //   internal property.\n                    // 2. If target has no [[Construct]] internal method, a\n                    //   TypeError exception is thrown.\n                    // 3. Let boundArgs be the value of F's [[BoundArgs]] internal\n                    //   property.\n                    // 4. Let args be a new list containing the same values as the\n                    //   list boundArgs in the same order followed by the same\n                    //   values as the list ExtraArgs in the same order.\n                    // 5. Return the result of calling the [[Construct]] internal\n                    //   method of target providing args as the arguments.\n\n                    var result = apply.call(\n                        target,\n                        this,\n                        array_concat.call(args, array_slice.call(arguments))\n                    );\n                    if ($Object(result) === result) {\n                        return result;\n                    }\n                    return this;\n\n                }\n                // 15.3.4.5.1 [[Call]]\n                // When the [[Call]] internal method of a function object, F,\n                // which was created using the bind function is called with a\n                // this value and a list of arguments ExtraArgs, the following\n                // steps are taken:\n                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal\n                //   property.\n                // 2. Let boundThis be the value of F's [[BoundThis]] internal\n                //   property.\n                // 3. Let target be the value of F's [[TargetFunction]] internal\n                //   property.\n                // 4. Let args be a new list containing the same values as the\n                //   list boundArgs in the same order followed by the same\n                //   values as the list ExtraArgs in the same order.\n                // 5. Return the result of calling the [[Call]] internal method\n                //   of target providing boundThis as the this value and\n                //   providing args as the arguments.\n\n                // equiv: target.call(this, ...boundArgs, ...args)\n                return apply.call(\n                    target,\n                    that,\n                    array_concat.call(args, array_slice.call(arguments))\n                );\n\n            };\n\n            // 15. If the [[Class]] internal property of Target is \"Function\", then\n            //     a. Let L be the length property of Target minus the length of A.\n            //     b. Set the length own property of F to either 0 or L, whichever is\n            //       larger.\n            // 16. Else set the length own property of F to 0.\n\n            var boundLength = max(0, target.length - args.length);\n\n            // 17. Set the attributes of the length own property of F to the values\n            //   specified in 15.3.5.1.\n            var boundArgs = [];\n            for (var i = 0; i < boundLength; i++) {\n                array_push.call(boundArgs, '$' + i);\n            }\n\n            // XXX Build a dynamic function with desired amount of arguments is the only\n            // way to set the length property of a function.\n            // In environments where Content Security Policies enabled (Chrome extensions,\n            // for ex.) all use of eval or Function costructor throws an exception.\n            // However in all of these environments Function.prototype.bind exists\n            // and so this code will never be executed.\n            bound = $Function('binder', 'return function (' + array_join.call(boundArgs, ',') + '){ return binder.apply(this, arguments); }')(binder);\n\n            if (target.prototype) {\n                Empty.prototype = target.prototype;\n                bound.prototype = new Empty();\n                // Clean up dangling references.\n                Empty.prototype = null;\n            }\n\n            // TODO\n            // 18. Set the [[Extensible]] internal property of F to true.\n\n            // TODO\n            // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).\n            // 20. Call the [[DefineOwnProperty]] internal method of F with\n            //   arguments \"caller\", PropertyDescriptor {[[Get]]: thrower, [[Set]]:\n            //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and\n            //   false.\n            // 21. Call the [[DefineOwnProperty]] internal method of F with\n            //   arguments \"arguments\", PropertyDescriptor {[[Get]]: thrower,\n            //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},\n            //   and false.\n\n            // TODO\n            // NOTE Function objects created using Function.prototype.bind do not\n            // have a prototype property or the [[Code]], [[FormalParameters]], and\n            // [[Scope]] internal properties.\n            // XXX can't delete prototype in pure-js.\n\n            // 22. Return F.\n            return bound;\n        }\n    });\n\n    // _Please note: Shortcuts are defined after `Function.prototype.bind` as we\n    // use it in defining shortcuts.\n    var owns = call.bind(ObjectPrototype.hasOwnProperty);\n    var toStr = call.bind(ObjectPrototype.toString);\n    var arraySlice = call.bind(array_slice);\n    var arraySliceApply = apply.bind(array_slice);\n    /* globals document */\n    if (typeof document === 'object' && document && document.documentElement) {\n        try {\n            arraySlice(document.documentElement.childNodes);\n        } catch (e) {\n            var origArraySlice = arraySlice;\n            var origArraySliceApply = arraySliceApply;\n            arraySlice = function arraySliceIE(arr) {\n                var r = [];\n                var i = arr.length;\n                while (i-- > 0) {\n                    r[i] = arr[i];\n                }\n                return origArraySliceApply(r, origArraySlice(arguments, 1));\n            };\n            arraySliceApply = function arraySliceApplyIE(arr, args) {\n                return origArraySliceApply(arraySlice(arr), args);\n            };\n        }\n    }\n    var strSlice = call.bind(StringPrototype.slice);\n    var strSplit = call.bind(StringPrototype.split);\n    var strIndexOf = call.bind(StringPrototype.indexOf);\n    var pushCall = call.bind(array_push);\n    var isEnum = call.bind(ObjectPrototype.propertyIsEnumerable);\n    var arraySort = call.bind(ArrayPrototype.sort);\n\n    //\n    // Array\n    // =====\n    //\n\n    var isArray = $Array.isArray || function isArray(obj) {\n        return toStr(obj) === '[object Array]';\n    };\n\n    // ES5 15.4.4.12\n    // https://es5.github.io/#x15.4.4.13\n    // Return len+argCount.\n    // [bugfix, ielt8]\n    // IE < 8 bug: [].unshift(0) === undefined but should be \"1\"\n    var hasUnshiftReturnValueBug = [].unshift(0) !== 1;\n    defineProperties(ArrayPrototype, {\n        unshift: function () {\n            array_unshift.apply(this, arguments);\n            return this.length;\n        }\n    }, hasUnshiftReturnValueBug);\n\n    // ES5 15.4.3.2\n    // https://es5.github.io/#x15.4.3.2\n    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray\n    defineProperties($Array, { isArray: isArray });\n\n    // The IsCallable() check in the Array functions\n    // has been replaced with a strict check on the\n    // internal class of the object to trap cases where\n    // the provided function was actually a regular\n    // expression literal, which in V8 and\n    // JavaScriptCore is a typeof \"function\".  Only in\n    // V8 are regular expression literals permitted as\n    // reduce parameters, so it is desirable in the\n    // general case for the shim to match the more\n    // strict and common behavior of rejecting regular\n    // expressions.\n\n    // ES5 15.4.4.18\n    // https://es5.github.io/#x15.4.4.18\n    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach\n\n    // Check failure of by-index access of string characters (IE < 9)\n    // and failure of `0 in boxedString` (Rhino)\n    var boxedString = $Object('a');\n    var splitString = boxedString[0] !== 'a' || !(0 in boxedString);\n\n    var properlyBoxesContext = function properlyBoxed(method) {\n        // Check node 0.6.21 bug where third parameter is not boxed\n        var properlyBoxesNonStrict = true;\n        var properlyBoxesStrict = true;\n        var threwException = false;\n        if (method) {\n            try {\n                method.call('foo', function (_, __, context) {\n                    if (typeof context !== 'object') {\n                        properlyBoxesNonStrict = false;\n                    }\n                });\n\n                method.call([1], function () {\n                    'use strict';\n\n                    properlyBoxesStrict = typeof this === 'string';\n                }, 'x');\n            } catch (e) {\n                threwException = true;\n            }\n        }\n        return !!method && !threwException && properlyBoxesNonStrict && properlyBoxesStrict;\n    };\n\n    defineProperties(ArrayPrototype, {\n        forEach: function forEach(callbackfn/*, thisArg*/) {\n            var object = ES.ToObject(this);\n            var self = splitString && isString(this) ? strSplit(this, '') : object;\n            var i = -1;\n            var length = ES.ToUint32(self.length);\n            var T;\n            if (arguments.length > 1) {\n                T = arguments[1];\n            }\n\n            // If no callback function or if callback is not a callable function\n            if (!isCallable(callbackfn)) {\n                throw new TypeError('Array.prototype.forEach callback must be a function');\n            }\n\n            while (++i < length) {\n                if (i in self) {\n                    // Invoke the callback function with call, passing arguments:\n                    // context, property value, property key, thisArg object\n                    if (typeof T === 'undefined') {\n                        callbackfn(self[i], i, object);\n                    } else {\n                        callbackfn.call(T, self[i], i, object);\n                    }\n                }\n            }\n        }\n    }, !properlyBoxesContext(ArrayPrototype.forEach));\n\n    // ES5 15.4.4.19\n    // https://es5.github.io/#x15.4.4.19\n    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map\n    defineProperties(ArrayPrototype, {\n        map: function map(callbackfn/*, thisArg*/) {\n            var object = ES.ToObject(this);\n            var self = splitString && isString(this) ? strSplit(this, '') : object;\n            var length = ES.ToUint32(self.length);\n            var result = $Array(length);\n            var T;\n            if (arguments.length > 1) {\n                T = arguments[1];\n            }\n\n            // If no callback function or if callback is not a callable function\n            if (!isCallable(callbackfn)) {\n                throw new TypeError('Array.prototype.map callback must be a function');\n            }\n\n            for (var i = 0; i < length; i++) {\n                if (i in self) {\n                    if (typeof T === 'undefined') {\n                        result[i] = callbackfn(self[i], i, object);\n                    } else {\n                        result[i] = callbackfn.call(T, self[i], i, object);\n                    }\n                }\n            }\n            return result;\n        }\n    }, !properlyBoxesContext(ArrayPrototype.map));\n\n    // ES5 15.4.4.20\n    // https://es5.github.io/#x15.4.4.20\n    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter\n    defineProperties(ArrayPrototype, {\n        filter: function filter(callbackfn/*, thisArg*/) {\n            var object = ES.ToObject(this);\n            var self = splitString && isString(this) ? strSplit(this, '') : object;\n            var length = ES.ToUint32(self.length);\n            var result = [];\n            var value;\n            var T;\n            if (arguments.length > 1) {\n                T = arguments[1];\n            }\n\n            // If no callback function or if callback is not a callable function\n            if (!isCallable(callbackfn)) {\n                throw new TypeError('Array.prototype.filter callback must be a function');\n            }\n\n            for (var i = 0; i < length; i++) {\n                if (i in self) {\n                    value = self[i];\n                    if (typeof T === 'undefined' ? callbackfn(value, i, object) : callbackfn.call(T, value, i, object)) {\n                        pushCall(result, value);\n                    }\n                }\n            }\n            return result;\n        }\n    }, !properlyBoxesContext(ArrayPrototype.filter));\n\n    // ES5 15.4.4.16\n    // https://es5.github.io/#x15.4.4.16\n    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every\n    defineProperties(ArrayPrototype, {\n        every: function every(callbackfn/*, thisArg*/) {\n            var object = ES.ToObject(this);\n            var self = splitString && isString(this) ? strSplit(this, '') : object;\n            var length = ES.ToUint32(self.length);\n            var T;\n            if (arguments.length > 1) {\n                T = arguments[1];\n            }\n\n            // If no callback function or if callback is not a callable function\n            if (!isCallable(callbackfn)) {\n                throw new TypeError('Array.prototype.every callback must be a function');\n            }\n\n            for (var i = 0; i < length; i++) {\n                if (i in self && !(typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {\n                    return false;\n                }\n            }\n            return true;\n        }\n    }, !properlyBoxesContext(ArrayPrototype.every));\n\n    // ES5 15.4.4.17\n    // https://es5.github.io/#x15.4.4.17\n    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some\n    defineProperties(ArrayPrototype, {\n        some: function some(callbackfn/*, thisArg */) {\n            var object = ES.ToObject(this);\n            var self = splitString && isString(this) ? strSplit(this, '') : object;\n            var length = ES.ToUint32(self.length);\n            var T;\n            if (arguments.length > 1) {\n                T = arguments[1];\n            }\n\n            // If no callback function or if callback is not a callable function\n            if (!isCallable(callbackfn)) {\n                throw new TypeError('Array.prototype.some callback must be a function');\n            }\n\n            for (var i = 0; i < length; i++) {\n                if (i in self && (typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {\n                    return true;\n                }\n            }\n            return false;\n        }\n    }, !properlyBoxesContext(ArrayPrototype.some));\n\n    // ES5 15.4.4.21\n    // https://es5.github.io/#x15.4.4.21\n    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce\n    var reduceCoercesToObject = false;\n    if (ArrayPrototype.reduce) {\n        reduceCoercesToObject = typeof ArrayPrototype.reduce.call('es5', function (_, __, ___, list) {\n            return list;\n        }) === 'object';\n    }\n    defineProperties(ArrayPrototype, {\n        reduce: function reduce(callbackfn/*, initialValue*/) {\n            var object = ES.ToObject(this);\n            var self = splitString && isString(this) ? strSplit(this, '') : object;\n            var length = ES.ToUint32(self.length);\n\n            // If no callback function or if callback is not a callable function\n            if (!isCallable(callbackfn)) {\n                throw new TypeError('Array.prototype.reduce callback must be a function');\n            }\n\n            // no value to return if no initial value and an empty array\n            if (length === 0 && arguments.length === 1) {\n                throw new TypeError('reduce of empty array with no initial value');\n            }\n\n            var i = 0;\n            var result;\n            if (arguments.length >= 2) {\n                result = arguments[1];\n            } else {\n                do {\n                    if (i in self) {\n                        result = self[i++];\n                        break;\n                    }\n\n                    // if array contains no values, no initial value to return\n                    if (++i >= length) {\n                        throw new TypeError('reduce of empty array with no initial value');\n                    }\n                } while (true);\n            }\n\n            for (; i < length; i++) {\n                if (i in self) {\n                    result = callbackfn(result, self[i], i, object);\n                }\n            }\n\n            return result;\n        }\n    }, !reduceCoercesToObject);\n\n    // ES5 15.4.4.22\n    // https://es5.github.io/#x15.4.4.22\n    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight\n    var reduceRightCoercesToObject = false;\n    if (ArrayPrototype.reduceRight) {\n        reduceRightCoercesToObject = typeof ArrayPrototype.reduceRight.call('es5', function (_, __, ___, list) {\n            return list;\n        }) === 'object';\n    }\n    defineProperties(ArrayPrototype, {\n        reduceRight: function reduceRight(callbackfn/*, initial*/) {\n            var object = ES.ToObject(this);\n            var self = splitString && isString(this) ? strSplit(this, '') : object;\n            var length = ES.ToUint32(self.length);\n\n            // If no callback function or if callback is not a callable function\n            if (!isCallable(callbackfn)) {\n                throw new TypeError('Array.prototype.reduceRight callback must be a function');\n            }\n\n            // no value to return if no initial value, empty array\n            if (length === 0 && arguments.length === 1) {\n                throw new TypeError('reduceRight of empty array with no initial value');\n            }\n\n            var result;\n            var i = length - 1;\n            if (arguments.length >= 2) {\n                result = arguments[1];\n            } else {\n                do {\n                    if (i in self) {\n                        result = self[i--];\n                        break;\n                    }\n\n                    // if array contains no values, no initial value to return\n                    if (--i < 0) {\n                        throw new TypeError('reduceRight of empty array with no initial value');\n                    }\n                } while (true);\n            }\n\n            if (i < 0) {\n                return result;\n            }\n\n            do {\n                if (i in self) {\n                    result = callbackfn(result, self[i], i, object);\n                }\n            } while (i--);\n\n            return result;\n        }\n    }, !reduceRightCoercesToObject);\n\n    // ES5 15.4.4.14\n    // https://es5.github.io/#x15.4.4.14\n    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf\n    var hasFirefox2IndexOfBug = ArrayPrototype.indexOf && [0, 1].indexOf(1, 2) !== -1;\n    defineProperties(ArrayPrototype, {\n        indexOf: function indexOf(searchElement/*, fromIndex */) {\n            var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);\n            var length = ES.ToUint32(self.length);\n\n            if (length === 0) {\n                return -1;\n            }\n\n            var i = 0;\n            if (arguments.length > 1) {\n                i = ES.ToInteger(arguments[1]);\n            }\n\n            // handle negative indices\n            i = i >= 0 ? i : max(0, length + i);\n            for (; i < length; i++) {\n                if (i in self && self[i] === searchElement) {\n                    return i;\n                }\n            }\n            return -1;\n        }\n    }, hasFirefox2IndexOfBug);\n\n    // ES5 15.4.4.15\n    // https://es5.github.io/#x15.4.4.15\n    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf\n    var hasFirefox2LastIndexOfBug = ArrayPrototype.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;\n    defineProperties(ArrayPrototype, {\n        lastIndexOf: function lastIndexOf(searchElement/*, fromIndex */) {\n            var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);\n            var length = ES.ToUint32(self.length);\n\n            if (length === 0) {\n                return -1;\n            }\n            var i = length - 1;\n            if (arguments.length > 1) {\n                i = min(i, ES.ToInteger(arguments[1]));\n            }\n            // handle negative indices\n            i = i >= 0 ? i : length - abs(i);\n            for (; i >= 0; i--) {\n                if (i in self && searchElement === self[i]) {\n                    return i;\n                }\n            }\n            return -1;\n        }\n    }, hasFirefox2LastIndexOfBug);\n\n    // ES5 15.4.4.12\n    // https://es5.github.io/#x15.4.4.12\n    var spliceNoopReturnsEmptyArray = (function () {\n        var a = [1, 2];\n        var result = a.splice();\n        return a.length === 2 && isArray(result) && result.length === 0;\n    }());\n    defineProperties(ArrayPrototype, {\n        // Safari 5.0 bug where .splice() returns undefined\n        splice: function splice(start, deleteCount) {\n            if (arguments.length === 0) {\n                return [];\n            }\n            return array_splice.apply(this, arguments);\n\n        }\n    }, !spliceNoopReturnsEmptyArray);\n\n    var spliceWorksWithEmptyObject = (function () {\n        var obj = {};\n        ArrayPrototype.splice.call(obj, 0, 0, 1);\n        return obj.length === 1;\n    }());\n    var hasES6Defaults = [0, 1, 2].splice(0).length === 3;\n    defineProperties(ArrayPrototype, {\n        splice: function splice(start, deleteCount) {\n            if (arguments.length === 0) {\n                return [];\n            }\n            var args = arguments;\n            this.length = max(ES.ToInteger(this.length), 0);\n            if (arguments.length > 0 && typeof deleteCount !== 'number') {\n                args = arraySlice(arguments);\n                if (args.length < 2) {\n                    pushCall(args, this.length - start);\n                } else {\n                    args[1] = ES.ToInteger(deleteCount);\n                }\n            }\n            return array_splice.apply(this, args);\n        }\n    }, !spliceWorksWithEmptyObject || !hasES6Defaults);\n    var spliceWorksWithLargeSparseArrays = (function () {\n        // Per https://github.com/es-shims/es5-shim/issues/295\n        // Safari 7/8 breaks with sparse arrays of size 1e5 or greater\n        var arr = new $Array(1e5);\n        // note: the index MUST be 8 or larger or the test will false pass\n        arr[8] = 'x';\n        arr.splice(1, 1);\n        // note: this test must be defined *after* the indexOf shim\n        // per https://github.com/es-shims/es5-shim/issues/313\n        return arr.indexOf('x') === 7;\n    }());\n    var spliceWorksWithSmallSparseArrays = (function () {\n        // Per https://github.com/es-shims/es5-shim/issues/295\n        // Opera 12.15 breaks on this, no idea why.\n        var n = 256;\n        var arr = [];\n        arr[n] = 'a';\n        arr.splice(n + 1, 0, 'b');\n        return arr[n] === 'a';\n    }());\n    defineProperties(ArrayPrototype, {\n        splice: function splice(start, deleteCount) {\n            var O = ES.ToObject(this);\n            var A = [];\n            var len = ES.ToUint32(O.length);\n            var relativeStart = ES.ToInteger(start);\n            var actualStart = relativeStart < 0 ? max((len + relativeStart), 0) : min(relativeStart, len);\n            var actualDeleteCount = arguments.length === 0\n                ? 0\n                : arguments.length === 1\n                    ? len - actualStart\n                    : min(max(ES.ToInteger(deleteCount), 0), len - actualStart);\n\n            var k = 0;\n            var from;\n            while (k < actualDeleteCount) {\n                from = $String(actualStart + k);\n                if (owns(O, from)) {\n                    A[k] = O[from];\n                }\n                k += 1;\n            }\n\n            var items = arraySlice(arguments, 2);\n            var itemCount = items.length;\n            var to;\n            if (itemCount < actualDeleteCount) {\n                k = actualStart;\n                var maxK = len - actualDeleteCount;\n                while (k < maxK) {\n                    from = $String(k + actualDeleteCount);\n                    to = $String(k + itemCount);\n                    if (owns(O, from)) {\n                        O[to] = O[from];\n                    } else {\n                        delete O[to];\n                    }\n                    k += 1;\n                }\n                k = len;\n                var minK = len - actualDeleteCount + itemCount;\n                while (k > minK) {\n                    delete O[k - 1];\n                    k -= 1;\n                }\n            } else if (itemCount > actualDeleteCount) {\n                k = len - actualDeleteCount;\n                while (k > actualStart) {\n                    from = $String(k + actualDeleteCount - 1);\n                    to = $String(k + itemCount - 1);\n                    if (owns(O, from)) {\n                        O[to] = O[from];\n                    } else {\n                        delete O[to];\n                    }\n                    k -= 1;\n                }\n            }\n            k = actualStart;\n            for (var i = 0; i < items.length; ++i) {\n                O[k] = items[i];\n                k += 1;\n            }\n            O.length = len - actualDeleteCount + itemCount;\n\n            return A;\n        }\n    }, !spliceWorksWithLargeSparseArrays || !spliceWorksWithSmallSparseArrays);\n\n    var originalJoin = ArrayPrototype.join;\n    var hasStringJoinBug;\n    try {\n        hasStringJoinBug = Array.prototype.join.call('123', ',') !== '1,2,3';\n    } catch (e) {\n        hasStringJoinBug = true;\n    }\n    if (hasStringJoinBug) {\n        defineProperties(ArrayPrototype, {\n            join: function join(separator) {\n                var sep = typeof separator === 'undefined' ? ',' : separator;\n                return originalJoin.call(isString(this) ? strSplit(this, '') : this, sep);\n            }\n        }, hasStringJoinBug);\n    }\n\n    var hasJoinUndefinedBug = [1, 2].join(undefined) !== '1,2';\n    if (hasJoinUndefinedBug) {\n        defineProperties(ArrayPrototype, {\n            join: function join(separator) {\n                var sep = typeof separator === 'undefined' ? ',' : separator;\n                return originalJoin.call(this, sep);\n            }\n        }, hasJoinUndefinedBug);\n    }\n\n    var pushShim = function push(item) {\n        var O = ES.ToObject(this);\n        var n = ES.ToUint32(O.length);\n        var i = 0;\n        while (i < arguments.length) {\n            O[n + i] = arguments[i];\n            i += 1;\n        }\n        O.length = n + i;\n        return n + i;\n    };\n\n    var pushIsNotGeneric = (function () {\n        var obj = {};\n        var result = Array.prototype.push.call(obj, undefined);\n        return result !== 1 || obj.length !== 1 || typeof obj[0] !== 'undefined' || !owns(obj, 0);\n    }());\n    defineProperties(ArrayPrototype, {\n        push: function push(item) {\n            if (isArray(this)) {\n                return array_push.apply(this, arguments);\n            }\n            return pushShim.apply(this, arguments);\n        }\n    }, pushIsNotGeneric);\n\n    // This fixes a very weird bug in Opera 10.6 when pushing `undefined\n    var pushUndefinedIsWeird = (function () {\n        var arr = [];\n        var result = arr.push(undefined);\n        return result !== 1 || arr.length !== 1 || typeof arr[0] !== 'undefined' || !owns(arr, 0);\n    }());\n    defineProperties(ArrayPrototype, { push: pushShim }, pushUndefinedIsWeird);\n\n    // ES5 15.2.3.14\n    // https://es5.github.io/#x15.4.4.10\n    // Fix boxed string bug\n    defineProperties(ArrayPrototype, {\n        slice: function (start, end) {\n            var arr = isString(this) ? strSplit(this, '') : this;\n            return arraySliceApply(arr, arguments);\n        }\n    }, splitString);\n\n    var sortIgnoresNonFunctions = (function () {\n        try {\n            [1, 2].sort(null);\n        } catch (e) {\n            try {\n                [1, 2].sort({});\n            } catch (e2) {\n                return false;\n            }\n        }\n        return true;\n    }());\n    var sortThrowsOnRegex = (function () {\n        // this is a problem in Firefox 4, in which `typeof /a/ === 'function'`\n        try {\n            [1, 2].sort(/a/);\n            return false;\n        } catch (e) {}\n        return true;\n    }());\n    var sortIgnoresUndefined = (function () {\n        // applies in IE 8, for one.\n        try {\n            [1, 2].sort(undefined);\n            return true;\n        } catch (e) {}\n        return false;\n    }());\n    defineProperties(ArrayPrototype, {\n        sort: function sort(compareFn) {\n            if (typeof compareFn === 'undefined') {\n                return arraySort(this);\n            }\n            if (!isCallable(compareFn)) {\n                throw new TypeError('Array.prototype.sort callback must be a function');\n            }\n            return arraySort(this, compareFn);\n        }\n    }, sortIgnoresNonFunctions || !sortIgnoresUndefined || !sortThrowsOnRegex);\n\n    //\n    // Object\n    // ======\n    //\n\n    // ES5 15.2.3.14\n    // https://es5.github.io/#x15.2.3.14\n\n    // https://web.archive.org/web/20140727042234/http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation\n    // eslint-disable-next-line quote-props\n    var hasDontEnumBug = !isEnum({ 'toString': null }, 'toString'); // jscs:ignore disallowQuotedKeysInObjects\n    var hasProtoEnumBug = isEnum(function () {}, 'prototype');\n    var hasStringEnumBug = !owns('x', '0');\n    var equalsConstructorPrototype = function (o) {\n        var ctor = o.constructor;\n        return ctor && ctor.prototype === o;\n    };\n    var excludedKeys = {\n        $applicationCache: true,\n        $console: true,\n        $external: true,\n        $frame: true,\n        $frameElement: true,\n        $frames: true,\n        $innerHeight: true,\n        $innerWidth: true,\n        $onmozfullscreenchange: true,\n        $onmozfullscreenerror: true,\n        $outerHeight: true,\n        $outerWidth: true,\n        $pageXOffset: true,\n        $pageYOffset: true,\n        $parent: true,\n        $scrollLeft: true,\n        $scrollTop: true,\n        $scrollX: true,\n        $scrollY: true,\n        $self: true,\n        $webkitIndexedDB: true,\n        $webkitStorageInfo: true,\n        $window: true,\n\n        $width: true,\n        $height: true,\n        $top: true,\n        $localStorage: true\n    };\n    var hasAutomationEqualityBug = (function () {\n        /* globals window */\n        if (typeof window === 'undefined') {\n            return false;\n        }\n        for (var k in window) {\n            try {\n                if (!excludedKeys['$' + k] && owns(window, k) && window[k] !== null && typeof window[k] === 'object') {\n                    equalsConstructorPrototype(window[k]);\n                }\n            } catch (e) {\n                return true;\n            }\n        }\n        return false;\n    }());\n    var equalsConstructorPrototypeIfNotBuggy = function (object) {\n        if (typeof window === 'undefined' || !hasAutomationEqualityBug) {\n            return equalsConstructorPrototype(object);\n        }\n        try {\n            return equalsConstructorPrototype(object);\n        } catch (e) {\n            return false;\n        }\n    };\n    var dontEnums = [\n        'toString',\n        'toLocaleString',\n        'valueOf',\n        'hasOwnProperty',\n        'isPrototypeOf',\n        'propertyIsEnumerable',\n        'constructor'\n    ];\n    var dontEnumsLength = dontEnums.length;\n\n    // taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js\n    // can be replaced with require('is-arguments') if we ever use a build process instead\n    var isStandardArguments = function isArguments(value) {\n        return toStr(value) === '[object Arguments]';\n    };\n    var isLegacyArguments = function isArguments(value) {\n        return value !== null\n            && typeof value === 'object'\n            && typeof value.length === 'number'\n            && value.length >= 0\n            && !isArray(value)\n            && isCallable(value.callee);\n    };\n    var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;\n\n    defineProperties($Object, {\n        keys: function keys(object) {\n            var isFn = isCallable(object);\n            var isArgs = isArguments(object);\n            var isObject = object !== null && typeof object === 'object';\n            var isStr = isObject && isString(object);\n\n            if (!isObject && !isFn && !isArgs) {\n                throw new TypeError('Object.keys called on a non-object');\n            }\n\n            var theKeys = [];\n            var skipProto = hasProtoEnumBug && isFn;\n            if ((isStr && hasStringEnumBug) || isArgs) {\n                for (var i = 0; i < object.length; ++i) {\n                    pushCall(theKeys, $String(i));\n                }\n            }\n\n            if (!isArgs) {\n                for (var name in object) {\n                    if (!(skipProto && name === 'prototype') && owns(object, name)) {\n                        pushCall(theKeys, $String(name));\n                    }\n                }\n            }\n\n            if (hasDontEnumBug) {\n                var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);\n                for (var j = 0; j < dontEnumsLength; j++) {\n                    var dontEnum = dontEnums[j];\n                    if (!(skipConstructor && dontEnum === 'constructor') && owns(object, dontEnum)) {\n                        pushCall(theKeys, dontEnum);\n                    }\n                }\n            }\n            return theKeys;\n        }\n    });\n\n    var keysWorksWithArguments = $Object.keys && (function () {\n        // Safari 5.0 bug\n        return $Object.keys(arguments).length === 2;\n    }(1, 2));\n    var keysHasArgumentsLengthBug = $Object.keys && (function () {\n        var argKeys = $Object.keys(arguments);\n        return arguments.length !== 1 || argKeys.length !== 1 || argKeys[0] !== 1;\n    }(1));\n    var originalKeys = $Object.keys;\n    defineProperties($Object, {\n        keys: function keys(object) {\n            if (isArguments(object)) {\n                return originalKeys(arraySlice(object));\n            }\n            return originalKeys(object);\n\n        }\n    }, !keysWorksWithArguments || keysHasArgumentsLengthBug);\n\n    //\n    // Date\n    // ====\n    //\n\n    var hasNegativeMonthYearBug = new Date(-3509827329600292).getUTCMonth() !== 0;\n    var aNegativeTestDate = new Date(-1509842289600292);\n    var aPositiveTestDate = new Date(1449662400000);\n    var hasToUTCStringFormatBug = aNegativeTestDate.toUTCString() !== 'Mon, 01 Jan -45875 11:59:59 GMT';\n    var hasToDateStringFormatBug;\n    var hasToStringFormatBug;\n    var timeZoneOffset = aNegativeTestDate.getTimezoneOffset();\n    if (timeZoneOffset < -720) {\n        hasToDateStringFormatBug = aNegativeTestDate.toDateString() !== 'Tue Jan 02 -45875';\n        hasToStringFormatBug = !(/^Thu Dec 10 2015 \\d\\d:\\d\\d:\\d\\d GMT[-+]\\d\\d\\d\\d(?: |$)/).test(String(aPositiveTestDate));\n    } else {\n        hasToDateStringFormatBug = aNegativeTestDate.toDateString() !== 'Mon Jan 01 -45875';\n        hasToStringFormatBug = !(/^Wed Dec 09 2015 \\d\\d:\\d\\d:\\d\\d GMT[-+]\\d\\d\\d\\d(?: |$)/).test(String(aPositiveTestDate));\n    }\n\n    var originalGetFullYear = call.bind(Date.prototype.getFullYear);\n    var originalGetMonth = call.bind(Date.prototype.getMonth);\n    var originalGetDate = call.bind(Date.prototype.getDate);\n    var originalGetUTCFullYear = call.bind(Date.prototype.getUTCFullYear);\n    var originalGetUTCMonth = call.bind(Date.prototype.getUTCMonth);\n    var originalGetUTCDate = call.bind(Date.prototype.getUTCDate);\n    var originalGetUTCDay = call.bind(Date.prototype.getUTCDay);\n    var originalGetUTCHours = call.bind(Date.prototype.getUTCHours);\n    var originalGetUTCMinutes = call.bind(Date.prototype.getUTCMinutes);\n    var originalGetUTCSeconds = call.bind(Date.prototype.getUTCSeconds);\n    var originalGetUTCMilliseconds = call.bind(Date.prototype.getUTCMilliseconds);\n    var dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];\n    var monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];\n    var daysInMonth = function daysInMonth(month, year) {\n        return originalGetDate(new Date(year, month, 0));\n    };\n\n    defineProperties(Date.prototype, {\n        getFullYear: function getFullYear() {\n            if (!this || !(this instanceof Date)) {\n                throw new TypeError('this is not a Date object.');\n            }\n            var year = originalGetFullYear(this);\n            if (year < 0 && originalGetMonth(this) > 11) {\n                return year + 1;\n            }\n            return year;\n        },\n        getMonth: function getMonth() {\n            if (!this || !(this instanceof Date)) {\n                throw new TypeError('this is not a Date object.');\n            }\n            var year = originalGetFullYear(this);\n            var month = originalGetMonth(this);\n            if (year < 0 && month > 11) {\n                return 0;\n            }\n            return month;\n        },\n        getDate: function getDate() {\n            if (!this || !(this instanceof Date)) {\n                throw new TypeError('this is not a Date object.');\n            }\n            var year = originalGetFullYear(this);\n            var month = originalGetMonth(this);\n            var date = originalGetDate(this);\n            if (year < 0 && month > 11) {\n                if (month === 12) {\n                    return date;\n                }\n                var days = daysInMonth(0, year + 1);\n                return (days - date) + 1;\n            }\n            return date;\n        },\n        getUTCFullYear: function getUTCFullYear() {\n            if (!this || !(this instanceof Date)) {\n                throw new TypeError('this is not a Date object.');\n            }\n            var year = originalGetUTCFullYear(this);\n            if (year < 0 && originalGetUTCMonth(this) > 11) {\n                return year + 1;\n            }\n            return year;\n        },\n        getUTCMonth: function getUTCMonth() {\n            if (!this || !(this instanceof Date)) {\n                throw new TypeError('this is not a Date object.');\n            }\n            var year = originalGetUTCFullYear(this);\n            var month = originalGetUTCMonth(this);\n            if (year < 0 && month > 11) {\n                return 0;\n            }\n            return month;\n        },\n        getUTCDate: function getUTCDate() {\n            if (!this || !(this instanceof Date)) {\n                throw new TypeError('this is not a Date object.');\n            }\n            var year = originalGetUTCFullYear(this);\n            var month = originalGetUTCMonth(this);\n            var date = originalGetUTCDate(this);\n            if (year < 0 && month > 11) {\n                if (month === 12) {\n                    return date;\n                }\n                var days = daysInMonth(0, year + 1);\n                return (days - date) + 1;\n            }\n            return date;\n        }\n    }, hasNegativeMonthYearBug);\n\n    defineProperties(Date.prototype, {\n        toUTCString: function toUTCString() {\n            if (!this || !(this instanceof Date)) {\n                throw new TypeError('this is not a Date object.');\n            }\n            var day = originalGetUTCDay(this);\n            var date = originalGetUTCDate(this);\n            var month = originalGetUTCMonth(this);\n            var year = originalGetUTCFullYear(this);\n            var hour = originalGetUTCHours(this);\n            var minute = originalGetUTCMinutes(this);\n            var second = originalGetUTCSeconds(this);\n            return dayName[day] + ', '\n                + (date < 10 ? '0' + date : date) + ' '\n                + monthName[month] + ' '\n                + year + ' '\n                + (hour < 10 ? '0' + hour : hour) + ':'\n                + (minute < 10 ? '0' + minute : minute) + ':'\n                + (second < 10 ? '0' + second : second) + ' GMT';\n        }\n    }, hasNegativeMonthYearBug || hasToUTCStringFormatBug);\n\n    // Opera 12 has `,`\n    defineProperties(Date.prototype, {\n        toDateString: function toDateString() {\n            if (!this || !(this instanceof Date)) {\n                throw new TypeError('this is not a Date object.');\n            }\n            var day = this.getDay();\n            var date = this.getDate();\n            var month = this.getMonth();\n            var year = this.getFullYear();\n            return dayName[day] + ' '\n                + monthName[month] + ' '\n                + (date < 10 ? '0' + date : date) + ' '\n                + year;\n        }\n    }, hasNegativeMonthYearBug || hasToDateStringFormatBug);\n\n    // can't use defineProperties here because of toString enumeration issue in IE <= 8\n    if (hasNegativeMonthYearBug || hasToStringFormatBug) {\n        Date.prototype.toString = function toString() {\n            if (!this || !(this instanceof Date)) {\n                throw new TypeError('this is not a Date object.');\n            }\n            var day = this.getDay();\n            var date = this.getDate();\n            var month = this.getMonth();\n            var year = this.getFullYear();\n            var hour = this.getHours();\n            var minute = this.getMinutes();\n            var second = this.getSeconds();\n            var timezoneOffset = this.getTimezoneOffset();\n            var hoursOffset = floor(abs(timezoneOffset) / 60);\n            var minutesOffset = floor(abs(timezoneOffset) % 60);\n            return dayName[day] + ' '\n                + monthName[month] + ' '\n                + (date < 10 ? '0' + date : date) + ' '\n                + year + ' '\n                + (hour < 10 ? '0' + hour : hour) + ':'\n                + (minute < 10 ? '0' + minute : minute) + ':'\n                + (second < 10 ? '0' + second : second) + ' GMT'\n                + (timezoneOffset > 0 ? '-' : '+')\n                + (hoursOffset < 10 ? '0' + hoursOffset : hoursOffset)\n                + (minutesOffset < 10 ? '0' + minutesOffset : minutesOffset);\n        };\n        if (supportsDescriptors) {\n            $Object.defineProperty(Date.prototype, 'toString', {\n                configurable: true,\n                enumerable: false,\n                writable: true\n            });\n        }\n    }\n\n    // ES5 15.9.5.43\n    // https://es5.github.io/#x15.9.5.43\n    // This function returns a String value represent the instance in time\n    // represented by this Date object. The format of the String is the Date Time\n    // string format defined in 15.9.1.15. All fields are present in the String.\n    // The time zone is always UTC, denoted by the suffix Z. If the time value of\n    // this object is not a finite Number a RangeError exception is thrown.\n    var negativeDate = -62198755200000;\n    var negativeYearString = '-000001';\n    var hasNegativeDateBug = Date.prototype.toISOString && new Date(negativeDate).toISOString().indexOf(negativeYearString) === -1; // eslint-disable-line max-len\n    var hasSafari51DateBug = Date.prototype.toISOString && new Date(-1).toISOString() !== '1969-12-31T23:59:59.999Z';\n\n    var getTime = call.bind(Date.prototype.getTime);\n\n    defineProperties(Date.prototype, {\n        toISOString: function toISOString() {\n            if (!isFinite(this) || !isFinite(getTime(this))) {\n                // Adope Photoshop requires the second check.\n                throw new RangeError('Date.prototype.toISOString called on non-finite value.');\n            }\n\n            var year = originalGetUTCFullYear(this);\n\n            var month = originalGetUTCMonth(this);\n            // see https://github.com/es-shims/es5-shim/issues/111\n            year += floor(month / 12);\n            month = ((month % 12) + 12) % 12;\n\n            // the date time string format is specified in 15.9.1.15.\n            var result = [\n                month + 1,\n                originalGetUTCDate(this),\n                originalGetUTCHours(this),\n                originalGetUTCMinutes(this),\n                originalGetUTCSeconds(this)\n            ];\n            year = (\n                (year < 0 ? '-' : (year > 9999 ? '+' : ''))\n                + strSlice('00000' + abs(year), (0 <= year && year <= 9999) ? -4 : -6)\n            );\n\n            for (var i = 0; i < result.length; ++i) {\n                // pad months, days, hours, minutes, and seconds to have two digits.\n                result[i] = strSlice('00' + result[i], -2);\n            }\n            // pad milliseconds to have three digits.\n            return (\n                year + '-' + arraySlice(result, 0, 2).join('-')\n                + 'T' + arraySlice(result, 2).join(':') + '.'\n                + strSlice('000' + originalGetUTCMilliseconds(this), -3) + 'Z'\n            );\n        }\n    }, hasNegativeDateBug || hasSafari51DateBug);\n\n    // ES5 15.9.5.44\n    // https://es5.github.io/#x15.9.5.44\n    // This function provides a String representation of a Date object for use by\n    // JSON.stringify (15.12.3).\n    var dateToJSONIsSupported = (function () {\n        try {\n            return Date.prototype.toJSON\n                && new Date(NaN).toJSON() === null\n                && new Date(negativeDate).toJSON().indexOf(negativeYearString) !== -1\n                && Date.prototype.toJSON.call({ // generic\n                    toISOString: function () { return true; }\n                });\n        } catch (e) {\n            return false;\n        }\n    }());\n    if (!dateToJSONIsSupported) {\n        Date.prototype.toJSON = function toJSON(key) {\n            // When the toJSON method is called with argument key, the following\n            // steps are taken:\n\n            // 1.  Let O be the result of calling ToObject, giving it the this\n            // value as its argument.\n            // 2. Let tv be ES.ToPrimitive(O, hint Number).\n            var O = $Object(this);\n            var tv = ES.ToPrimitive(O);\n            // 3. If tv is a Number and is not finite, return null.\n            if (typeof tv === 'number' && !isFinite(tv)) {\n                return null;\n            }\n            // 4. Let toISO be the result of calling the [[Get]] internal method of\n            // O with argument \"toISOString\".\n            var toISO = O.toISOString;\n            // 5. If IsCallable(toISO) is false, throw a TypeError exception.\n            if (!isCallable(toISO)) {\n                throw new TypeError('toISOString property is not callable');\n            }\n            // 6. Return the result of calling the [[Call]] internal method of\n            //  toISO with O as the this value and an empty argument list.\n            return toISO.call(O);\n\n            // NOTE 1 The argument is ignored.\n\n            // NOTE 2 The toJSON function is intentionally generic; it does not\n            // require that its this value be a Date object. Therefore, it can be\n            // transferred to other kinds of objects for use as a method. However,\n            // it does require that any such object have a toISOString method. An\n            // object is free to use the argument key to filter its\n            // stringification.\n        };\n    }\n\n    // ES5 15.9.4.2\n    // https://es5.github.io/#x15.9.4.2\n    // based on work shared by Daniel Friesen (dantman)\n    // https://gist.github.com/303249\n    var supportsExtendedYears = Date.parse('+033658-09-27T01:46:40.000Z') === 1e15;\n    var acceptsInvalidDates = !isNaN(Date.parse('2012-04-04T24:00:00.500Z')) || !isNaN(Date.parse('2012-11-31T23:59:59.000Z')) || !isNaN(Date.parse('2012-12-31T23:59:60.000Z'));\n    var doesNotParseY2KNewYear = isNaN(Date.parse('2000-01-01T00:00:00.000Z'));\n    if (doesNotParseY2KNewYear || acceptsInvalidDates || !supportsExtendedYears) {\n        // XXX global assignment won't work in embeddings that use\n        // an alternate object for the context.\n        var maxSafeUnsigned32Bit = pow(2, 31) - 1;\n        var hasSafariSignedIntBug = isActualNaN(new Date(1970, 0, 1, 0, 0, 0, maxSafeUnsigned32Bit + 1).getTime());\n        // eslint-disable-next-line no-implicit-globals, no-global-assign\n        Date = (function (NativeDate) {\n            // Date.length === 7\n            var DateShim = function Date(Y, M, D, h, m, s, ms) {\n                var length = arguments.length;\n                var date;\n                if (this instanceof NativeDate) {\n                    var seconds = s;\n                    var millis = ms;\n                    if (hasSafariSignedIntBug && length >= 7 && ms > maxSafeUnsigned32Bit) {\n                        // work around a Safari 8/9 bug where it treats the seconds as signed\n                        var msToShift = floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;\n                        var sToShift = floor(msToShift / 1e3);\n                        seconds += sToShift;\n                        millis -= sToShift * 1e3;\n                    }\n                    var parsed = DateShim.parse(Y);\n                    var hasNegTimestampParseBug = isNaN(parsed);\n                    date = length === 1 && $String(Y) === Y && !hasNegTimestampParseBug // isString(Y)\n                        // We explicitly pass it through parse:\n                        ? new NativeDate(parsed)\n                        // We have to manually make calls depending on argument\n                        // length here\n                        : length >= 7 ? new NativeDate(Y, M, D, h, m, seconds, millis)\n                            : length >= 6 ? new NativeDate(Y, M, D, h, m, seconds)\n                                : length >= 5 ? new NativeDate(Y, M, D, h, m)\n                                    : length >= 4 ? new NativeDate(Y, M, D, h)\n                                        : length >= 3 ? new NativeDate(Y, M, D)\n                                            : length >= 2 ? new NativeDate(Y, M)\n                                                : length >= 1 ? new NativeDate(Y instanceof NativeDate ? +Y : Y)\n                                                    : new NativeDate();\n                } else {\n                    date = NativeDate.apply(this, arguments);\n                }\n                if (!isPrimitive(date)) {\n                    // Prevent mixups with unfixed Date object\n                    defineProperties(date, { constructor: DateShim }, true);\n                }\n                return date;\n            };\n\n            // 15.9.1.15 Date Time String Format.\n            var isoDateExpression = new RegExp('^'\n                + '(\\\\d{4}|[+-]\\\\d{6})' // four-digit year capture or sign + 6-digit extended year\n                + '(?:-(\\\\d{2})' // optional month capture\n                + '(?:-(\\\\d{2})' // optional day capture\n                + '(?:' // capture hours:minutes:seconds.milliseconds\n                    + 'T(\\\\d{2})' // hours capture\n                    + ':(\\\\d{2})' // minutes capture\n                    + '(?:' // optional :seconds.milliseconds\n                        + ':(\\\\d{2})' // seconds capture\n                        + '(?:(\\\\.\\\\d{1,}))?' // milliseconds capture\n                    + ')?'\n                + '(' // capture UTC offset component\n                    + 'Z|' // UTC capture\n                    + '(?:' // offset specifier +/-hours:minutes\n                        + '([-+])' // sign capture\n                        + '(\\\\d{2})' // hours offset capture\n                        + ':(\\\\d{2})' // minutes offset capture\n                    + ')'\n                + ')?)?)?)?'\n            + '$');\n\n            var months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];\n\n            var dayFromMonth = function dayFromMonth(year, month) {\n                var t = month > 1 ? 1 : 0;\n                return (\n                    months[month]\n                        + floor((year - 1969 + t) / 4)\n                        - floor((year - 1901 + t) / 100)\n                        + floor((year - 1601 + t) / 400)\n                        + (365 * (year - 1970))\n                );\n            };\n\n            var toUTC = function toUTC(t) {\n                var s = 0;\n                var ms = t;\n                if (hasSafariSignedIntBug && ms > maxSafeUnsigned32Bit) {\n                    // work around a Safari 8/9 bug where it treats the seconds as signed\n                    var msToShift = floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;\n                    var sToShift = floor(msToShift / 1e3);\n                    s += sToShift;\n                    ms -= sToShift * 1e3;\n                }\n                return $Number(new NativeDate(1970, 0, 1, 0, 0, s, ms));\n            };\n\n            // Copy any custom methods a 3rd party library may have added\n            for (var key in NativeDate) {\n                if (owns(NativeDate, key)) {\n                    DateShim[key] = NativeDate[key];\n                }\n            }\n\n            // Copy \"native\" methods explicitly; they may be non-enumerable\n            defineProperties(DateShim, {\n                now: NativeDate.now,\n                UTC: NativeDate.UTC\n            }, true);\n            DateShim.prototype = NativeDate.prototype;\n            defineProperties(DateShim.prototype, { constructor: DateShim }, true);\n\n            // Upgrade Date.parse to handle simplified ISO 8601 strings\n            var parseShim = function parse(string) {\n                var match = isoDateExpression.exec(string);\n                if (match) {\n                    // parse months, days, hours, minutes, seconds, and milliseconds\n                    // provide default values if necessary\n                    // parse the UTC offset component\n                    var year = $Number(match[1]),\n                        month = $Number(match[2] || 1) - 1,\n                        day = $Number(match[3] || 1) - 1,\n                        hour = $Number(match[4] || 0),\n                        minute = $Number(match[5] || 0),\n                        second = $Number(match[6] || 0),\n                        millisecond = floor($Number(match[7] || 0) * 1000),\n                        // When time zone is missed, local offset should be used\n                        // (ES 5.1 bug)\n                        // see https://bugs.ecmascript.org/show_bug.cgi?id=112\n                        isLocalTime = Boolean(match[4] && !match[8]),\n                        signOffset = match[9] === '-' ? 1 : -1,\n                        hourOffset = $Number(match[10] || 0),\n                        minuteOffset = $Number(match[11] || 0),\n                        result;\n                    var hasMinutesOrSecondsOrMilliseconds = minute > 0 || second > 0 || millisecond > 0;\n                    if (\n                        hour < (hasMinutesOrSecondsOrMilliseconds ? 24 : 25)\n                        && minute < 60 && second < 60 && millisecond < 1000\n                        && month > -1 && month < 12 && hourOffset < 24\n                        && minuteOffset < 60 // detect invalid offsets\n                        && day > -1\n                        && day < (dayFromMonth(year, month + 1) - dayFromMonth(year, month))\n                    ) {\n                        result = (\n                            ((dayFromMonth(year, month) + day) * 24)\n                            + hour\n                            + (hourOffset * signOffset)\n                        ) * 60;\n                        result = ((\n                            ((result + minute + (minuteOffset * signOffset)) * 60)\n                            + second\n                        ) * 1000) + millisecond;\n                        if (isLocalTime) {\n                            result = toUTC(result);\n                        }\n                        if (-8.64e15 <= result && result <= 8.64e15) {\n                            return result;\n                        }\n                    }\n                    return NaN;\n                }\n                return NativeDate.parse.apply(this, arguments);\n            };\n            defineProperties(DateShim, { parse: parseShim });\n\n            return DateShim;\n        }(Date));\n    }\n\n    // ES5 15.9.4.4\n    // https://es5.github.io/#x15.9.4.4\n    if (!Date.now) {\n        Date.now = function now() {\n            return new Date().getTime();\n        };\n    }\n\n    //\n    // Number\n    // ======\n    //\n\n    // ES5.1 15.7.4.5\n    // https://es5.github.io/#x15.7.4.5\n    var hasToFixedBugs = NumberPrototype.toFixed && (\n        (0.00008).toFixed(3) !== '0.000'\n        || (0.9).toFixed(0) !== '1'\n        || (1.255).toFixed(2) !== '1.25'\n        || (1000000000000000128).toFixed(0) !== '1000000000000000128'\n    );\n\n    var toFixedHelpers = {\n        base: 1e7,\n        size: 6,\n        data: [0, 0, 0, 0, 0, 0],\n        multiply: function multiply(n, c) {\n            var i = -1;\n            var c2 = c;\n            while (++i < toFixedHelpers.size) {\n                c2 += n * toFixedHelpers.data[i];\n                toFixedHelpers.data[i] = c2 % toFixedHelpers.base;\n                c2 = floor(c2 / toFixedHelpers.base);\n            }\n        },\n        divide: function divide(n) {\n            var i = toFixedHelpers.size;\n            var c = 0;\n            while (--i >= 0) {\n                c += toFixedHelpers.data[i];\n                toFixedHelpers.data[i] = floor(c / n);\n                c = (c % n) * toFixedHelpers.base;\n            }\n        },\n        numToString: function numToString() {\n            var i = toFixedHelpers.size;\n            var s = '';\n            while (--i >= 0) {\n                if (s !== '' || i === 0 || toFixedHelpers.data[i] !== 0) {\n                    var t = $String(toFixedHelpers.data[i]);\n                    if (s === '') {\n                        s = t;\n                    } else {\n                        s += strSlice('0000000', 0, 7 - t.length) + t;\n                    }\n                }\n            }\n            return s;\n        },\n        pow: function pow(x, n, acc) {\n            return (n === 0 ? acc : (n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc)));\n        },\n        log: function log(x) {\n            var n = 0;\n            var x2 = x;\n            while (x2 >= 4096) {\n                n += 12;\n                x2 /= 4096;\n            }\n            while (x2 >= 2) {\n                n += 1;\n                x2 /= 2;\n            }\n            return n;\n        }\n    };\n\n    var toFixedShim = function toFixed(fractionDigits) {\n        var f, x, s, m, e, z, j, k;\n\n        // Test for NaN and round fractionDigits down\n        f = $Number(fractionDigits);\n        f = isActualNaN(f) ? 0 : floor(f);\n\n        if (f < 0 || f > 20) {\n            throw new RangeError('Number.toFixed called with invalid number of decimals');\n        }\n\n        x = $Number(this);\n\n        if (isActualNaN(x)) {\n            return 'NaN';\n        }\n\n        // If it is too big or small, return the string value of the number\n        if (x <= -1e21 || x >= 1e21) {\n            return $String(x);\n        }\n\n        s = '';\n\n        if (x < 0) {\n            s = '-';\n            x = -x;\n        }\n\n        m = '0';\n\n        if (x > 1e-21) {\n            // 1e-21 < x < 1e21\n            // -70 < log2(x) < 70\n            e = toFixedHelpers.log(x * toFixedHelpers.pow(2, 69, 1)) - 69;\n            z = (e < 0 ? x * toFixedHelpers.pow(2, -e, 1) : x / toFixedHelpers.pow(2, e, 1));\n            z *= 0x10000000000000; // pow(2, 52);\n            e = 52 - e;\n\n            // -18 < e < 122\n            // x = z / 2 ^ e\n            if (e > 0) {\n                toFixedHelpers.multiply(0, z);\n                j = f;\n\n                while (j >= 7) {\n                    toFixedHelpers.multiply(1e7, 0);\n                    j -= 7;\n                }\n\n                toFixedHelpers.multiply(toFixedHelpers.pow(10, j, 1), 0);\n                j = e - 1;\n\n                while (j >= 23) {\n                    toFixedHelpers.divide(1 << 23);\n                    j -= 23;\n                }\n\n                toFixedHelpers.divide(1 << j);\n                toFixedHelpers.multiply(1, 1);\n                toFixedHelpers.divide(2);\n                m = toFixedHelpers.numToString();\n            } else {\n                toFixedHelpers.multiply(0, z);\n                toFixedHelpers.multiply(1 << (-e), 0);\n                m = toFixedHelpers.numToString() + strSlice('0.00000000000000000000', 2, 2 + f);\n            }\n        }\n\n        if (f > 0) {\n            k = m.length;\n\n            if (k <= f) {\n                m = s + strSlice('0.0000000000000000000', 0, f - k + 2) + m;\n            } else {\n                m = s + strSlice(m, 0, k - f) + '.' + strSlice(m, k - f);\n            }\n        } else {\n            m = s + m;\n        }\n\n        return m;\n    };\n    defineProperties(NumberPrototype, { toFixed: toFixedShim }, hasToFixedBugs);\n\n    var hasToExponentialRoundingBug = (function () {\n        try {\n            return (-6.9e-11).toExponential(4) !== '-6.9000e-11';\n        } catch (e) {\n            return false;\n        }\n    }());\n    var toExponentialAllowsInfiniteDigits = (function () {\n        try {\n            (1).toExponential(Infinity);\n            (1).toExponential(-Infinity);\n            return true;\n        } catch (e) {\n            return false;\n        }\n    }());\n    var originalToExponential = call.bind(NumberPrototype.toExponential);\n    var numberToString = call.bind(NumberPrototype.toString);\n    var numberValueOf = call.bind(NumberPrototype.valueOf);\n    defineProperties(NumberPrototype, {\n        toExponential: function toExponential(fractionDigits) {\n            // 1: Let x be this Number value.\n            var x = numberValueOf(this);\n\n            if (typeof fractionDigits === 'undefined') {\n                return originalToExponential(x);\n            }\n            var f = ES.ToInteger(fractionDigits);\n            if (isActualNaN(x)) {\n                return 'NaN';\n            }\n\n            if (f < 0 || f > 20) {\n                if (!isFinite(f)) {\n                    // IE 6 doesn't throw in the native one\n                    throw new RangeError('toExponential() argument must be between 0 and 20');\n                }\n                // this will probably have thrown already\n                return originalToExponential(x, f);\n            }\n\n            // only cases left are a finite receiver + in-range fractionDigits\n\n            // implementation adapted from https://gist.github.com/SheetJSDev/1100ad56b9f856c95299ed0e068eea08\n\n            // 4: Let s be the empty string\n            var s = '';\n\n            // 5: If x < 0\n            if (x < 0) {\n                s = '-';\n                x = -x;\n            }\n\n            // 6: If x = +Infinity\n            if (x === Infinity) {\n                return s + 'Infinity';\n            }\n\n            // 7: If fractionDigits is not undefined and (f < 0 or f > 20), throw a RangeError exception.\n            if (typeof fractionDigits !== 'undefined' && (f < 0 || f > 20)) {\n                throw new RangeError('Fraction digits ' + fractionDigits + ' out of range');\n            }\n\n            var m = '';\n            var e = 0;\n            var c = '';\n            var d = '';\n\n            // 8: If x = 0 then\n            if (x === 0) {\n                e = 0;\n                f = 0;\n                m = '0';\n            } else { // 9: Else, x != 0\n                var L = log10(x);\n                e = floor(L); // 10 ** e <= x and x < 10 ** (e+1)\n                var n = 0;\n                if (typeof fractionDigits !== 'undefined') { // eslint-disable-line no-negated-condition\n                    var w = pow(10, e - f); // x / 10 ** (f+1) < w and w <= x / 10 ** f\n                    n = round(x / w); // 10 ** f <= n and n < 10 ** (f+1)\n                    if (2 * x >= (((2 * n) + 1) * w)) {\n                        n += 1; // pick larger value\n                    }\n                    if (n >= pow(10, f + 1)) { // 10e-1 = 1e0\n                        n /= 10;\n                        e += 1;\n                    }\n                } else {\n                    f = 16; // start from Math.ceil(Math.log10(Number.MAX_SAFE_INTEGER)) and loop down\n                    var guess_n = round(pow(10, L - e + f));\n                    var target_f = f;\n                    while (f-- > 0) {\n                        guess_n = round(pow(10, L - e + f));\n                        if (\n                            abs((guess_n * pow(10, e - f)) - x)\n                            <= abs((n * pow(10, e - target_f)) - x)\n                        ) {\n                            target_f = f;\n                            n = guess_n;\n                        }\n                    }\n                }\n                m = numberToString(n, 10);\n                if (typeof fractionDigits === 'undefined') {\n                    while (strSlice(m, -1) === '0') {\n                        m = strSlice(m, 0, -1);\n                        d += 1;\n                    }\n                }\n            }\n\n            // 10: If f != 0, then\n            if (f !== 0) {\n                m = strSlice(m, 0, 1) + '.' + strSlice(m, 1);\n            }\n\n            // 11: If e = 0, then\n            if (e === 0) {\n                c = '+';\n                d = '0';\n            } else { // 12: Else\n                c = e > 0 ? '+' : '-';\n                d = numberToString(abs(e), 10);\n            }\n\n            // 13: Let m be the concatenation of the four Strings m, \"e\", c, and d.\n            m += 'e' + c + d;\n\n            // 14: Return the concatenation of the Strings s and m.\n            return s + m;\n        }\n    }, hasToExponentialRoundingBug || toExponentialAllowsInfiniteDigits);\n\n    var hasToPrecisionUndefinedBug = (function () {\n        try {\n            return 1.0.toPrecision(undefined) === '1';\n        } catch (e) {\n            return true;\n        }\n    }());\n    var originalToPrecision = call.bind(NumberPrototype.toPrecision);\n    defineProperties(NumberPrototype, {\n        toPrecision: function toPrecision(precision) {\n            return typeof precision === 'undefined' ? originalToPrecision(this) : originalToPrecision(this, precision);\n        }\n    }, hasToPrecisionUndefinedBug);\n\n    //\n    // String\n    // ======\n    //\n\n    // ES5 15.5.4.14\n    // https://es5.github.io/#x15.5.4.14\n\n    // [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]\n    // Many browsers do not split properly with regular expressions or they\n    // do not perform the split correctly under obscure conditions.\n    // See https://blog.stevenlevithan.com/archives/cross-browser-split\n    // I've tested in many browsers and this seems to cover the deviant ones:\n    //    'ab'.split(/(?:ab)*/) should be [\"\", \"\"], not [\"\"]\n    //    '.'.split(/(.?)(.?)/) should be [\"\", \".\", \"\", \"\"], not [\"\", \"\"]\n    //    'tesst'.split(/(s)*/) should be [\"t\", undefined, \"e\", \"s\", \"t\"], not\n    //       [undefined, \"t\", undefined, \"e\", ...]\n    //    ''.split(/.?/) should be [], not [\"\"]\n    //    '.'.split(/()()/) should be [\".\"], not [\"\", \"\", \".\"]\n\n    if (\n        'ab'.split(/(?:ab)*/).length !== 2\n        || '.'.split(/(.?)(.?)/).length !== 4\n        || 'tesst'.split(/(s)*/)[1] === 't'\n        || 'test'.split(/(?:)/, -1).length !== 4\n        || ''.split(/.?/).length\n        || '.'.split(/()()/).length > 1\n    ) {\n        (function () {\n            var compliantExecNpcg = typeof (/()??/).exec('')[1] === 'undefined'; // NPCG: nonparticipating capturing group\n            var maxSafe32BitInt = pow(2, 32) - 1;\n\n            StringPrototype.split = function split(separator, limit) {\n                var string = String(this);\n                if (typeof separator === 'undefined' && limit === 0) {\n                    return [];\n                }\n\n                // If `separator` is not a regex, use native split\n                if (!isRegex(separator)) {\n                    return strSplit(this, separator, limit);\n                }\n\n                var output = [];\n                var flags = (separator.ignoreCase ? 'i' : '')\n                            + (separator.multiline ? 'm' : '')\n                            + (separator.unicode ? 'u' : '') // in ES6\n                            + (separator.sticky ? 'y' : ''), // Firefox 3+ and ES6\n                    lastLastIndex = 0,\n                    // Make `global` and avoid `lastIndex` issues by working with a copy\n                    separator2, match, lastIndex, lastLength;\n                var separatorCopy = new RegExp(separator.source, flags + 'g');\n                if (!compliantExecNpcg) {\n                    // Doesn't need flags gy, but they don't hurt\n                    separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\\\s)', flags);\n                }\n                /* Values for `limit`, per the spec:\n                 * If undefined: 4294967295 // maxSafe32BitInt\n                 * If 0, Infinity, or NaN: 0\n                 * If positive number: limit = floor(limit); if (limit > 4294967295) limit -= 4294967296;\n                 * If negative number: 4294967296 - floor(abs(limit))\n                 * If other: Type-convert, then use the above rules\n                 */\n                var splitLimit = typeof limit === 'undefined' ? maxSafe32BitInt : ES.ToUint32(limit);\n                match = separatorCopy.exec(string);\n                while (match) {\n                    // `separatorCopy.lastIndex` is not reliable cross-browser\n                    lastIndex = match.index + match[0].length;\n                    if (lastIndex > lastLastIndex) {\n                        pushCall(output, strSlice(string, lastLastIndex, match.index));\n                        // Fix browsers whose `exec` methods don't consistently return `undefined` for\n                        // nonparticipating capturing groups\n                        if (!compliantExecNpcg && match.length > 1) {\n                            /* eslint-disable no-loop-func */\n                            match[0].replace(separator2, function () {\n                                for (var i = 1; i < arguments.length - 2; i++) {\n                                    if (typeof arguments[i] === 'undefined') {\n                                        match[i] = void 0;\n                                    }\n                                }\n                            });\n                            /* eslint-enable no-loop-func */\n                        }\n                        if (match.length > 1 && match.index < string.length) {\n                            array_push.apply(output, arraySlice(match, 1));\n                        }\n                        lastLength = match[0].length;\n                        lastLastIndex = lastIndex;\n                        if (output.length >= splitLimit) {\n                            break;\n                        }\n                    }\n                    if (separatorCopy.lastIndex === match.index) {\n                        separatorCopy.lastIndex++; // Avoid an infinite loop\n                    }\n                    match = separatorCopy.exec(string);\n                }\n                if (lastLastIndex === string.length) {\n                    if (lastLength || !separatorCopy.test('')) {\n                        pushCall(output, '');\n                    }\n                } else {\n                    pushCall(output, strSlice(string, lastLastIndex));\n                }\n                return output.length > splitLimit ? arraySlice(output, 0, splitLimit) : output;\n            };\n        }());\n\n    // [bugfix, chrome]\n    // If separator is undefined, then the result array contains just one String,\n    // which is the this value (converted to a String). If limit is not undefined,\n    // then the output array is truncated so that it contains no more than limit\n    // elements.\n    // \"0\".split(undefined, 0) -> []\n    } else if ('0'.split(void 0, 0).length) {\n        StringPrototype.split = function split(separator, limit) {\n            if (typeof separator === 'undefined' && limit === 0) {\n                return [];\n            }\n            return strSplit(this, separator, limit);\n        };\n    }\n\n    var str_replace = StringPrototype.replace;\n    var replaceReportsGroupsCorrectly = (function () {\n        var groups = [];\n        'x'.replace(/x(.)?/g, function (match, group) {\n            pushCall(groups, group);\n        });\n        return groups.length === 1 && typeof groups[0] === 'undefined';\n    }());\n\n    if (!replaceReportsGroupsCorrectly) {\n        StringPrototype.replace = function replace(searchValue, replaceValue) {\n            var isFn = isCallable(replaceValue);\n            var hasCapturingGroups = isRegex(searchValue) && (/\\)[*?]/).test(searchValue.source);\n            if (!isFn || !hasCapturingGroups) {\n                return str_replace.call(this, searchValue, replaceValue);\n            }\n            var wrappedReplaceValue = function (match) {\n                var length = arguments.length;\n                var originalLastIndex = searchValue.lastIndex;\n                searchValue.lastIndex = 0; // eslint-disable-line no-param-reassign\n                var args = searchValue.exec(match) || [];\n                searchValue.lastIndex = originalLastIndex; // eslint-disable-line no-param-reassign\n                pushCall(args, arguments[length - 2], arguments[length - 1]);\n                return replaceValue.apply(this, args);\n            };\n            return str_replace.call(this, searchValue, wrappedReplaceValue);\n\n        };\n    }\n\n    // ECMA-262, 3rd B.2.3\n    // Not an ECMAScript standard, although ECMAScript 3rd Edition has a\n    // non-normative section suggesting uniform semantics and it should be\n    // normalized across all browsers\n    // [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE\n    var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';\n    var string_substr = hasNegativeSubstrBug && call.bind(StringPrototype.substr);\n    defineProperties(StringPrototype, {\n        substr: function substr(start, length) {\n            var normalizedStart = start;\n            if (start < 0) {\n                normalizedStart = max(this.length + start, 0);\n            }\n            return string_substr(this, normalizedStart, length);\n        }\n    }, hasNegativeSubstrBug);\n\n    // ES5 15.5.4.20\n    // whitespace from: https://es5.github.io/#x15.5.4.20\n    var mvs = '\\u180E';\n    var mvsIsWS = (/\\s/).test(mvs);\n    var ws = '\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF'\n        .replace(/\\S/g, ''); // remove the mongolian vowel separator (\\u180E) in modern engines\n    var zeroWidth = '\\u200b';\n    var wsRegexChars = '[' + ws + ']';\n    var trimBeginRegexp = new RegExp('^' + wsRegexChars + wsRegexChars + '*');\n    var trimEndRegexp = new RegExp(wsRegexChars + wsRegexChars + '*$');\n    var hasTrimWhitespaceBug = StringPrototype.trim && (\n        ws.trim() !== '' // if ws is not considered whitespace\n        || zeroWidth.trim() === '' // if zero-width IS considered whitespace\n        || mvs.trim() !== (mvsIsWS ? '' : mvs) // if MVS is either wrongly considered whitespace, or, wrongly considered NOT whitespace\n    );\n    defineProperties(StringPrototype, {\n        // https://blog.stevenlevithan.com/archives/faster-trim-javascript\n        // http://perfectionkills.com/whitespace-deviations/\n        trim: function trim() {\n            'use strict';\n\n            if (typeof this === 'undefined' || this === null) {\n                throw new TypeError(\"can't convert \" + this + ' to object');\n            }\n            return $String(this).replace(trimBeginRegexp, '').replace(trimEndRegexp, '');\n        }\n    }, hasTrimWhitespaceBug);\n    var trim = call.bind(String.prototype.trim);\n\n    var hasLastIndexBug = StringPrototype.lastIndexOf && 'abcあい'.lastIndexOf('あい', 2) !== -1;\n    defineProperties(StringPrototype, {\n        lastIndexOf: function lastIndexOf(searchString) {\n            if (typeof this === 'undefined' || this === null) {\n                throw new TypeError(\"can't convert \" + this + ' to object');\n            }\n            var S = $String(this);\n            var searchStr = $String(searchString);\n            var numPos = arguments.length > 1 ? $Number(arguments[1]) : NaN;\n            var pos = isActualNaN(numPos) ? Infinity : ES.ToInteger(numPos);\n            var start = min(max(pos, 0), S.length);\n            var searchLen = searchStr.length;\n            var k = start + searchLen;\n            while (k > 0) {\n                k = max(0, k - searchLen);\n                var index = strIndexOf(strSlice(S, k, start + searchLen), searchStr);\n                if (index !== -1) {\n                    return k + index;\n                }\n            }\n            return -1;\n        }\n    }, hasLastIndexBug);\n\n    var originalLastIndexOf = StringPrototype.lastIndexOf;\n    defineProperties(StringPrototype, {\n        lastIndexOf: function lastIndexOf(searchString) {\n            return originalLastIndexOf.apply(this, arguments);\n        }\n    }, StringPrototype.lastIndexOf.length !== 1);\n\n    var hexRegex = /^[-+]?0[xX]/;\n\n    // ES-5 15.1.2.2\n    if (\n        parseInt(ws + '08') !== 8 // eslint-disable-line radix\n        || parseInt(ws + '0x16') !== 22 // eslint-disable-line radix\n        || (mvsIsWS ? parseInt(mvs + 1) !== 1 : !isNaN(parseInt(mvs + 1))) // eslint-disable-line radix\n    ) {\n        // eslint-disable-next-line no-global-assign, no-implicit-globals\n        parseInt = (function (origParseInt) {\n            return function parseInt(str, radix) {\n                if (this instanceof parseInt) { new origParseInt(); } // eslint-disable-line new-cap, no-new, max-statements-per-line\n                var string = trim(String(str));\n                var defaultedRadix = $Number(radix) || (hexRegex.test(string) ? 16 : 10);\n                return origParseInt(string, defaultedRadix);\n            };\n        }(parseInt));\n    }\n    // Edge 15-18\n    var parseIntFailsToThrowOnBoxedSymbols = (function () {\n        if (typeof Symbol !== 'function') {\n            return false;\n        }\n        try {\n            // eslint-disable-next-line radix\n            parseInt(Object(Symbol.iterator));\n            return true;\n        } catch (e) { /**/ }\n\n        try {\n            // eslint-disable-next-line radix\n            parseInt(Symbol.iterator);\n            return true;\n        } catch (e) { /**/ }\n\n        return false;\n    }());\n    if (parseIntFailsToThrowOnBoxedSymbols) {\n        var symbolValueOf = Symbol.prototype.valueOf;\n        // eslint-disable-next-line no-global-assign, no-implicit-globals\n        parseInt = (function (origParseInt) {\n            return function parseInt(str, radix) {\n                if (this instanceof parseInt) { new origParseInt(); } // eslint-disable-line new-cap, no-new, max-statements-per-line\n                var isSym = typeof str === 'symbol';\n                if (!isSym && str && typeof str === 'object') {\n                    try {\n                        symbolValueOf.call(str);\n                        isSym = true;\n                    } catch (e) { /**/ }\n                }\n                if (isSym) {\n                    // handle Symbols in node 8.3/8.4\n                    // eslint-disable-next-line no-implicit-coercion, no-unused-expressions\n                    '' + str; // jscs:ignore disallowImplicitTypeConversion\n                }\n                var string = trim(String(str));\n                var defaultedRadix = $Number(radix) || (hexRegex.test(string) ? 16 : 10);\n                return origParseInt(string, defaultedRadix);\n            };\n        }(parseInt));\n    }\n\n    // https://es5.github.io/#x15.1.2.3\n    if (1 / parseFloat('-0') !== -Infinity) {\n        // eslint-disable-next-line no-global-assign, no-implicit-globals, no-native-reassign\n        parseFloat = (function (origParseFloat) {\n            return function parseFloat(string) {\n                var inputString = trim(String(string));\n                var result = origParseFloat(inputString);\n                return result === 0 && strSlice(inputString, 0, 1) === '-' ? -0 : result;\n            };\n        }(parseFloat));\n    }\n\n    if (String(new RangeError('test')) !== 'RangeError: test') {\n        var errorToStringShim = function toString() {\n            if (typeof this === 'undefined' || this === null) {\n                throw new TypeError(\"can't convert \" + this + ' to object');\n            }\n            var name = this.name;\n            if (typeof name === 'undefined') {\n                name = 'Error';\n            } else if (typeof name !== 'string') {\n                name = $String(name);\n            }\n            var msg = this.message;\n            if (typeof msg === 'undefined') {\n                msg = '';\n            } else if (typeof msg !== 'string') {\n                msg = $String(msg);\n            }\n            if (!name) {\n                return msg;\n            }\n            if (!msg) {\n                return name;\n            }\n            return name + ': ' + msg;\n        };\n        // can't use defineProperties here because of toString enumeration issue in IE <= 8\n        Error.prototype.toString = errorToStringShim;\n    }\n\n    if (supportsDescriptors) {\n        var ensureNonEnumerable = function (obj, prop) {\n            if (isEnum(obj, prop)) {\n                var desc = Object.getOwnPropertyDescriptor(obj, prop);\n                if (desc.configurable) {\n                    desc.enumerable = false;\n                    Object.defineProperty(obj, prop, desc);\n                }\n            }\n        };\n        ensureNonEnumerable(Error.prototype, 'message');\n        if (Error.prototype.message !== '') {\n            Error.prototype.message = '';\n        }\n        ensureNonEnumerable(Error.prototype, 'name');\n    }\n\n    if (String(/a/mig) !== '/a/gim') {\n        var regexToString = function toString() {\n            var str = '/' + this.source + '/';\n            if (this.global) {\n                str += 'g';\n            }\n            if (this.ignoreCase) {\n                str += 'i';\n            }\n            if (this.multiline) {\n                str += 'm';\n            }\n            return str;\n        };\n        // can't use defineProperties here because of toString enumeration issue in IE <= 8\n        RegExp.prototype.toString = regexToString;\n    }\n}));\n\n\n//# sourceURL=webpack://equicore/./node_modules/es5-shim/es5-shim.js?"
        );

        /***/
      },

    /***/ './node_modules/es6-shim/es6-shim.js':
      /*!*******************************************!*\
  !*** ./node_modules/es6-shim/es6-shim.js ***!
  \*******************************************/
      /***/ function (module, exports, __webpack_require__) {
        eval(
          "var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n * https://github.com/paulmillr/es6-shim\n * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com)\n *   and contributors,  MIT License\n * es6-shim: v0.35.4\n * see https://github.com/paulmillr/es6-shim/blob/0.35.3/LICENSE\n * Details and documentation:\n * https://github.com/paulmillr/es6-shim/\n */\n\n// UMD (Universal Module Definition)\n// see https://github.com/umdjs/umd/blob/master/returnExports.js\n(function (root, factory) {\n  /*global define */\n  if (true) {\n    // AMD. Register as an anonymous module.\n    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n}(this, function () {\n  'use strict';\n\n  var _apply = Function.call.bind(Function.apply);\n  var _call = Function.call.bind(Function.call);\n  var isArray = Array.isArray;\n  var keys = Object.keys;\n\n  var not = function notThunker(func) {\n    return function notThunk() {\n      return !_apply(func, this, arguments);\n    };\n  };\n  var throwsError = function (func) {\n    try {\n      func();\n      return false;\n    } catch (e) {\n      return true;\n    }\n  };\n  var valueOrFalseIfThrows = function valueOrFalseIfThrows(func) {\n    try {\n      return func();\n    } catch (e) {\n      return false;\n    }\n  };\n\n  var isCallableWithoutNew = not(throwsError);\n  var arePropertyDescriptorsSupported = function () {\n    // if Object.defineProperty exists but throws, it's IE 8\n    return !throwsError(function () {\n      return Object.defineProperty({}, 'x', { get: function () { } }); // eslint-disable-line getter-return\n    });\n  };\n  var supportsDescriptors = !!Object.defineProperty && arePropertyDescriptorsSupported();\n  var functionsHaveNames = (function foo() {}).name === 'foo';\n\n  var _forEach = Function.call.bind(Array.prototype.forEach);\n  var _reduce = Function.call.bind(Array.prototype.reduce);\n  var _filter = Function.call.bind(Array.prototype.filter);\n  var _some = Function.call.bind(Array.prototype.some);\n\n  var defineProperty = function (object, name, value, force) {\n    if (!force && name in object) { return; }\n    if (supportsDescriptors) {\n      Object.defineProperty(object, name, {\n        configurable: true,\n        enumerable: false,\n        writable: true,\n        value: value\n      });\n    } else {\n      object[name] = value;\n    }\n  };\n\n  // Define configurable, writable and non-enumerable props\n  // if they don’t exist.\n  var defineProperties = function (object, map, forceOverride) {\n    _forEach(keys(map), function (name) {\n      var method = map[name];\n      defineProperty(object, name, method, !!forceOverride);\n    });\n  };\n\n  var _toString = Function.call.bind(Object.prototype.toString);\n  var isCallable =  false ? 0 : function IsCallableFast(x) { return typeof x === 'function'; };\n\n  var Value = {\n    getter: function (object, name, getter) {\n      if (!supportsDescriptors) {\n        throw new TypeError('getters require true ES5 support');\n      }\n      Object.defineProperty(object, name, {\n        configurable: true,\n        enumerable: false,\n        get: getter\n      });\n    },\n    proxy: function (originalObject, key, targetObject) {\n      if (!supportsDescriptors) {\n        throw new TypeError('getters require true ES5 support');\n      }\n      var originalDescriptor = Object.getOwnPropertyDescriptor(originalObject, key);\n      Object.defineProperty(targetObject, key, {\n        configurable: originalDescriptor.configurable,\n        enumerable: originalDescriptor.enumerable,\n        get: function getKey() { return originalObject[key]; },\n        set: function setKey(value) { originalObject[key] = value; }\n      });\n    },\n    redefine: function (object, property, newValue) {\n      if (supportsDescriptors) {\n        var descriptor = Object.getOwnPropertyDescriptor(object, property);\n        descriptor.value = newValue;\n        Object.defineProperty(object, property, descriptor);\n      } else {\n        object[property] = newValue;\n      }\n    },\n    defineByDescriptor: function (object, property, descriptor) {\n      if (supportsDescriptors) {\n        Object.defineProperty(object, property, descriptor);\n      } else if ('value' in descriptor) {\n        object[property] = descriptor.value;\n      }\n    },\n    preserveToString: function (target, source) {\n      if (source && isCallable(source.toString)) {\n        defineProperty(target, 'toString', source.toString.bind(source), true);\n      }\n    }\n  };\n\n  // Simple shim for Object.create on ES3 browsers\n  // (unlike real shim, no attempt to support `prototype === null`)\n  var create = Object.create || function (prototype, properties) {\n    var Prototype = function Prototype() {};\n    Prototype.prototype = prototype;\n    var object = new Prototype();\n    if (typeof properties !== 'undefined') {\n      keys(properties).forEach(function (key) {\n        Value.defineByDescriptor(object, key, properties[key]);\n      });\n    }\n    return object;\n  };\n\n  var supportsSubclassing = function (C, f) {\n    if (!Object.setPrototypeOf) { return false; /* skip test on IE < 11 */ }\n    return valueOrFalseIfThrows(function () {\n      var Sub = function Subclass(arg) {\n        var o = new C(arg);\n        Object.setPrototypeOf(o, Subclass.prototype);\n        return o;\n      };\n      Object.setPrototypeOf(Sub, C);\n      Sub.prototype = create(C.prototype, {\n        constructor: { value: Sub }\n      });\n      return f(Sub);\n    });\n  };\n\n  var getGlobal = function () {\n    /* global self, window */\n    // the only reliable means to get the global object is\n    // `Function('return this')()`\n    // However, this causes CSP violations in Chrome apps.\n    if (typeof self !== 'undefined') { return self; }\n    if (typeof window !== 'undefined') { return window; }\n    if (typeof __webpack_require__.g !== 'undefined') { return __webpack_require__.g; }\n    throw new Error('unable to locate global object');\n  };\n\n  var globals = getGlobal();\n  var globalIsFinite = globals.isFinite;\n  var _indexOf = Function.call.bind(String.prototype.indexOf);\n  var _arrayIndexOfApply = Function.apply.bind(Array.prototype.indexOf);\n  var _concat = Function.call.bind(Array.prototype.concat);\n  // var _sort = Function.call.bind(Array.prototype.sort);\n  var _strSlice = Function.call.bind(String.prototype.slice);\n  var _push = Function.call.bind(Array.prototype.push);\n  var _pushApply = Function.apply.bind(Array.prototype.push);\n  var _join = Function.call.bind(Array.prototype.join);\n  var _shift = Function.call.bind(Array.prototype.shift);\n  var _max = Math.max;\n  var _min = Math.min;\n  var _floor = Math.floor;\n  var _abs = Math.abs;\n  var _exp = Math.exp;\n  var _log = Math.log;\n  var _sqrt = Math.sqrt;\n  var _hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);\n  var ArrayIterator; // make our implementation private\n  var noop = function () {};\n\n  var OrigMap = globals.Map;\n  var origMapDelete = OrigMap && OrigMap.prototype['delete'];\n  var origMapGet = OrigMap && OrigMap.prototype.get;\n  var origMapHas = OrigMap && OrigMap.prototype.has;\n  var origMapSet = OrigMap && OrigMap.prototype.set;\n\n  var Symbol = globals.Symbol || {};\n  var symbolSpecies = Symbol.species || '@@species';\n\n  var numberIsNaN = Number.isNaN || function isNaN(value) {\n    // NaN !== NaN, but they are identical.\n    // NaNs are the only non-reflexive value, i.e., if x !== x,\n    // then x is NaN.\n    // isNaN is broken: it converts its argument to number, so\n    // isNaN('foo') => true\n    return value !== value;\n  };\n  var numberIsFinite = Number.isFinite || function isFinite(value) {\n    return typeof value === 'number' && globalIsFinite(value);\n  };\n  var _sign = isCallable(Math.sign) ? Math.sign : function sign(value) {\n    var number = Number(value);\n    if (number === 0) { return number; }\n    if (numberIsNaN(number)) { return number; }\n    return number < 0 ? -1 : 1;\n  };\n  var _log1p = function log1p(value) {\n    var x = Number(value);\n    if (x < -1 || numberIsNaN(x)) { return NaN; }\n    if (x === 0 || x === Infinity) { return x; }\n    if (x === -1) { return -Infinity; }\n\n    return (1 + x) - 1 === 0 ? x : x * (_log(1 + x) / ((1 + x) - 1));\n  };\n\n  // taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js\n  // can be replaced with require('is-arguments') if we ever use a build process instead\n  var isStandardArguments = function isArguments(value) {\n    return _toString(value) === '[object Arguments]';\n  };\n  var isLegacyArguments = function isArguments(value) {\n    return value !== null\n      && typeof value === 'object'\n      && typeof value.length === 'number'\n      && value.length >= 0\n      && _toString(value) !== '[object Array]'\n      && _toString(value.callee) === '[object Function]';\n  };\n  var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;\n\n  var Type = {\n    primitive: function (x) { return x === null || (typeof x !== 'function' && typeof x !== 'object'); },\n    string: function (x) { return _toString(x) === '[object String]'; },\n    regex: function (x) { return _toString(x) === '[object RegExp]'; },\n    symbol: function (x) {\n      return typeof globals.Symbol === 'function' && typeof x === 'symbol';\n    }\n  };\n\n  var overrideNative = function overrideNative(object, property, replacement) {\n    var original = object[property];\n    defineProperty(object, property, replacement, true);\n    Value.preserveToString(object[property], original);\n  };\n\n  // eslint-disable-next-line no-restricted-properties\n  var hasSymbols = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' && Type.symbol(Symbol());\n\n  // This is a private name in the es6 spec, equal to '[Symbol.iterator]'\n  // we're going to use an arbitrary _-prefixed name to make our shims\n  // work properly with each other, even though we don't have full Iterator\n  // support.  That is, `Array.from(map.keys())` will work, but we don't\n  // pretend to export a \"real\" Iterator interface.\n  var $iterator$ = Type.symbol(Symbol.iterator) ? Symbol.iterator : '_es6-shim iterator_';\n  // Firefox ships a partial implementation using the name @@iterator.\n  // https://bugzilla.mozilla.org/show_bug.cgi?id=907077#c14\n  // So use that name if we detect it.\n  if (globals.Set && typeof new globals.Set()['@@iterator'] === 'function') {\n    $iterator$ = '@@iterator';\n  }\n\n  // Reflect\n  if (!globals.Reflect) {\n    defineProperty(globals, 'Reflect', {}, true);\n  }\n  var Reflect = globals.Reflect;\n\n  var $String = String;\n\n  /* global document */\n  var domAll = (typeof document === 'undefined' || !document) ? null : document.all;\n  var isNullOrUndefined = domAll == null ? function isNullOrUndefined(x) {\n    return x == null;\n  } : function isNullOrUndefinedAndNotDocumentAll(x) {\n    return x == null && x !== domAll;\n  };\n\n  var ES = {\n    // http://www.ecma-international.org/ecma-262/6.0/#sec-call\n    Call: function Call(F, V) {\n      var args = arguments.length > 2 ? arguments[2] : [];\n      if (!ES.IsCallable(F)) {\n        throw new TypeError(F + ' is not a function');\n      }\n      return _apply(F, V, args);\n    },\n\n    RequireObjectCoercible: function (x, optMessage) {\n      if (isNullOrUndefined(x)) {\n        throw new TypeError(optMessage || 'Cannot call method on ' + x);\n      }\n      return x;\n    },\n\n    // This might miss the \"(non-standard exotic and does not implement\n    // [[Call]])\" case from\n    // http://www.ecma-international.org/ecma-262/6.0/#sec-typeof-operator-runtime-semantics-evaluation\n    // but we can't find any evidence these objects exist in practice.\n    // If we find some in the future, you could test `Object(x) === x`,\n    // which is reliable according to\n    // http://www.ecma-international.org/ecma-262/6.0/#sec-toobject\n    // but is not well optimized by runtimes and creates an object\n    // whenever it returns false, and thus is very slow.\n    TypeIsObject: function (x) {\n      if (x === void 0 || x === null || x === true || x === false) {\n        return false;\n      }\n      return typeof x === 'function' || typeof x === 'object' || x === domAll;\n    },\n\n    ToObject: function (o, optMessage) {\n      return Object(ES.RequireObjectCoercible(o, optMessage));\n    },\n\n    IsCallable: isCallable,\n\n    IsConstructor: function (x) {\n      // We can't tell callables from constructors in ES5\n      return ES.IsCallable(x);\n    },\n\n    ToInt32: function (x) {\n      return ES.ToNumber(x) >> 0;\n    },\n\n    ToUint32: function (x) {\n      return ES.ToNumber(x) >>> 0;\n    },\n\n    ToNumber: function (value) {\n      if (hasSymbols && _toString(value) === '[object Symbol]') {\n        throw new TypeError('Cannot convert a Symbol value to a number');\n      }\n      return +value;\n    },\n\n    ToInteger: function (value) {\n      var number = ES.ToNumber(value);\n      if (numberIsNaN(number)) { return 0; }\n      if (number === 0 || !numberIsFinite(number)) { return number; }\n      return (number > 0 ? 1 : -1) * _floor(_abs(number));\n    },\n\n    ToLength: function (value) {\n      var len = ES.ToInteger(value);\n      if (len <= 0) { return 0; } // includes converting -0 to +0\n      if (len > Number.MAX_SAFE_INTEGER) { return Number.MAX_SAFE_INTEGER; }\n      return len;\n    },\n\n    SameValue: function (a, b) {\n      if (a === b) {\n        // 0 === -0, but they are not identical.\n        if (a === 0) { return 1 / a === 1 / b; }\n        return true;\n      }\n      return numberIsNaN(a) && numberIsNaN(b);\n    },\n\n    SameValueZero: function (a, b) {\n      // same as SameValue except for SameValueZero(+0, -0) == true\n      return (a === b) || (numberIsNaN(a) && numberIsNaN(b));\n    },\n\n    GetIterator: function (o) {\n      if (isArguments(o)) {\n        // special case support for `arguments`\n        return new ArrayIterator(o, 'value');\n      }\n      var itFn = ES.GetMethod(o, $iterator$);\n      if (!ES.IsCallable(itFn)) {\n        // Better diagnostics if itFn is null or undefined\n        throw new TypeError('value is not an iterable');\n      }\n      var it = ES.Call(itFn, o);\n      if (!ES.TypeIsObject(it)) {\n        throw new TypeError('bad iterator');\n      }\n      return it;\n    },\n\n    GetMethod: function (o, p) {\n      var func = ES.ToObject(o)[p];\n      if (isNullOrUndefined(func)) {\n        return void 0;\n      }\n      if (!ES.IsCallable(func)) {\n        throw new TypeError('Method not callable: ' + p);\n      }\n      return func;\n    },\n\n    IteratorComplete: function (iterResult) {\n      return !!iterResult.done;\n    },\n\n    IteratorClose: function (iterator, completionIsThrow) {\n      var returnMethod = ES.GetMethod(iterator, 'return');\n      if (returnMethod === void 0) {\n        return;\n      }\n      var innerResult, innerException;\n      try {\n        innerResult = ES.Call(returnMethod, iterator);\n      } catch (e) {\n        innerException = e;\n      }\n      if (completionIsThrow) {\n        return;\n      }\n      if (innerException) {\n        throw innerException;\n      }\n      if (!ES.TypeIsObject(innerResult)) {\n        throw new TypeError(\"Iterator's return method returned a non-object.\");\n      }\n    },\n\n    IteratorNext: function (it) {\n      var result = arguments.length > 1 ? it.next(arguments[1]) : it.next();\n      if (!ES.TypeIsObject(result)) {\n        throw new TypeError('bad iterator');\n      }\n      return result;\n    },\n\n    IteratorStep: function (it) {\n      var result = ES.IteratorNext(it);\n      var done = ES.IteratorComplete(result);\n      return done ? false : result;\n    },\n\n    Construct: function (C, args, newTarget, isES6internal) {\n      var target = typeof newTarget === 'undefined' ? C : newTarget;\n\n      if (!isES6internal && Reflect.construct) {\n        // Try to use Reflect.construct if available\n        return Reflect.construct(C, args, target);\n      }\n      // OK, we have to fake it.  This will only work if the\n      // C.[[ConstructorKind]] == \"base\" -- but that's the only\n      // kind we can make in ES5 code anyway.\n\n      // OrdinaryCreateFromConstructor(target, \"%ObjectPrototype%\")\n      var proto = target.prototype;\n      if (!ES.TypeIsObject(proto)) {\n        proto = Object.prototype;\n      }\n      var obj = create(proto);\n      // Call the constructor.\n      var result = ES.Call(C, obj, args);\n      return ES.TypeIsObject(result) ? result : obj;\n    },\n\n    SpeciesConstructor: function (O, defaultConstructor) {\n      var C = O.constructor;\n      if (C === void 0) {\n        return defaultConstructor;\n      }\n      if (!ES.TypeIsObject(C)) {\n        throw new TypeError('Bad constructor');\n      }\n      var S = C[symbolSpecies];\n      if (isNullOrUndefined(S)) {\n        return defaultConstructor;\n      }\n      if (!ES.IsConstructor(S)) {\n        throw new TypeError('Bad @@species');\n      }\n      return S;\n    },\n\n    CreateHTML: function (string, tag, attribute, value) {\n      var S = ES.ToString(string);\n      var p1 = '<' + tag;\n      if (attribute !== '') {\n        var V = ES.ToString(value);\n        var escapedV = V.replace(/\"/g, '&quot;');\n        p1 += ' ' + attribute + '=\"' + escapedV + '\"';\n      }\n      var p2 = p1 + '>';\n      var p3 = p2 + S;\n      return p3 + '</' + tag + '>';\n    },\n\n    IsRegExp: function IsRegExp(argument) {\n      if (!ES.TypeIsObject(argument)) {\n        return false;\n      }\n      var isRegExp = argument[Symbol.match];\n      if (typeof isRegExp !== 'undefined') {\n        return !!isRegExp;\n      }\n      return Type.regex(argument);\n    },\n\n    ToString: function ToString(string) {\n      if (hasSymbols && _toString(string) === '[object Symbol]') {\n        throw new TypeError('Cannot convert a Symbol value to a number');\n      }\n      return $String(string);\n    }\n  };\n\n  // Well-known Symbol shims\n  if (supportsDescriptors && hasSymbols) {\n    var defineWellKnownSymbol = function defineWellKnownSymbol(name) {\n      if (Type.symbol(Symbol[name])) {\n        return Symbol[name];\n      }\n      // eslint-disable-next-line no-restricted-properties\n      var sym = Symbol['for']('Symbol.' + name);\n      Object.defineProperty(Symbol, name, {\n        configurable: false,\n        enumerable: false,\n        writable: false,\n        value: sym\n      });\n      return sym;\n    };\n    if (!Type.symbol(Symbol.search)) {\n      var symbolSearch = defineWellKnownSymbol('search');\n      var originalSearch = String.prototype.search;\n      defineProperty(RegExp.prototype, symbolSearch, function search(string) {\n        return ES.Call(originalSearch, string, [this]);\n      });\n      var searchShim = function search(regexp) {\n        var O = ES.RequireObjectCoercible(this);\n        if (!isNullOrUndefined(regexp)) {\n          var searcher = ES.GetMethod(regexp, symbolSearch);\n          if (typeof searcher !== 'undefined') {\n            return ES.Call(searcher, regexp, [O]);\n          }\n        }\n        return ES.Call(originalSearch, O, [ES.ToString(regexp)]);\n      };\n      overrideNative(String.prototype, 'search', searchShim);\n    }\n    if (!Type.symbol(Symbol.replace)) {\n      var symbolReplace = defineWellKnownSymbol('replace');\n      var originalReplace = String.prototype.replace;\n      defineProperty(RegExp.prototype, symbolReplace, function replace(string, replaceValue) {\n        return ES.Call(originalReplace, string, [this, replaceValue]);\n      });\n      var replaceShim = function replace(searchValue, replaceValue) {\n        var O = ES.RequireObjectCoercible(this);\n        if (!isNullOrUndefined(searchValue)) {\n          var replacer = ES.GetMethod(searchValue, symbolReplace);\n          if (typeof replacer !== 'undefined') {\n            return ES.Call(replacer, searchValue, [O, replaceValue]);\n          }\n        }\n        return ES.Call(originalReplace, O, [ES.ToString(searchValue), replaceValue]);\n      };\n      overrideNative(String.prototype, 'replace', replaceShim);\n    }\n    if (!Type.symbol(Symbol.split)) {\n      var symbolSplit = defineWellKnownSymbol('split');\n      var originalSplit = String.prototype.split;\n      defineProperty(RegExp.prototype, symbolSplit, function split(string, limit) {\n        return ES.Call(originalSplit, string, [this, limit]);\n      });\n      var splitShim = function split(separator, limit) {\n        var O = ES.RequireObjectCoercible(this);\n        if (!isNullOrUndefined(separator)) {\n          var splitter = ES.GetMethod(separator, symbolSplit);\n          if (typeof splitter !== 'undefined') {\n            return ES.Call(splitter, separator, [O, limit]);\n          }\n        }\n        return ES.Call(originalSplit, O, [ES.ToString(separator), limit]);\n      };\n      overrideNative(String.prototype, 'split', splitShim);\n    }\n    var symbolMatchExists = Type.symbol(Symbol.match);\n    var stringMatchIgnoresSymbolMatch = symbolMatchExists && (function () {\n      // Firefox 41, through Nightly 45 has Symbol.match, but String#match ignores it.\n      // Firefox 40 and below have Symbol.match but String#match works fine.\n      var o = {};\n      o[Symbol.match] = function () { return 42; };\n      return 'a'.match(o) !== 42;\n    }());\n    if (!symbolMatchExists || stringMatchIgnoresSymbolMatch) {\n      var symbolMatch = defineWellKnownSymbol('match');\n\n      var originalMatch = String.prototype.match;\n      defineProperty(RegExp.prototype, symbolMatch, function match(string) {\n        return ES.Call(originalMatch, string, [this]);\n      });\n\n      var matchShim = function match(regexp) {\n        var O = ES.RequireObjectCoercible(this);\n        if (!isNullOrUndefined(regexp)) {\n          var matcher = ES.GetMethod(regexp, symbolMatch);\n          if (typeof matcher !== 'undefined') {\n            return ES.Call(matcher, regexp, [O]);\n          }\n        }\n        return ES.Call(originalMatch, O, [ES.ToString(regexp)]);\n      };\n      overrideNative(String.prototype, 'match', matchShim);\n    }\n  }\n\n  var wrapConstructor = function wrapConstructor(original, replacement, keysToSkip) {\n    Value.preserveToString(replacement, original);\n    if (Object.setPrototypeOf) {\n      // sets up proper prototype chain where possible\n      Object.setPrototypeOf(original, replacement);\n    }\n    if (supportsDescriptors) {\n      _forEach(Object.getOwnPropertyNames(original), function (key) {\n        if (key in noop || keysToSkip[key]) { return; }\n        Value.proxy(original, key, replacement);\n      });\n    } else {\n      _forEach(Object.keys(original), function (key) {\n        if (key in noop || keysToSkip[key]) { return; }\n        replacement[key] = original[key];\n      });\n    }\n    replacement.prototype = original.prototype;\n    Value.redefine(original.prototype, 'constructor', replacement);\n  };\n\n  var defaultSpeciesGetter = function () { return this; };\n  var addDefaultSpecies = function (C) {\n    if (supportsDescriptors && !_hasOwnProperty(C, symbolSpecies)) {\n      Value.getter(C, symbolSpecies, defaultSpeciesGetter);\n    }\n  };\n\n  var addIterator = function (prototype, impl) {\n    var implementation = impl || function iterator() { return this; };\n    defineProperty(prototype, $iterator$, implementation);\n    if (!prototype[$iterator$] && Type.symbol($iterator$)) {\n      // implementations are buggy when $iterator$ is a Symbol\n      prototype[$iterator$] = implementation;\n    }\n  };\n\n  var createDataProperty = function createDataProperty(object, name, value) {\n    if (supportsDescriptors) {\n      Object.defineProperty(object, name, {\n        configurable: true,\n        enumerable: true,\n        writable: true,\n        value: value\n      });\n    } else {\n      object[name] = value;\n    }\n  };\n  var createDataPropertyOrThrow = function createDataPropertyOrThrow(object, name, value) {\n    createDataProperty(object, name, value);\n    if (!ES.SameValue(object[name], value)) {\n      throw new TypeError('property is nonconfigurable');\n    }\n  };\n\n  var emulateES6construct = function (o, defaultNewTarget, defaultProto, slots) {\n    // This is an es5 approximation to es6 construct semantics.  in es6,\n    // 'new Foo' invokes Foo.[[Construct]] which (for almost all objects)\n    // just sets the internal variable NewTarget (in es6 syntax `new.target`)\n    // to Foo and then returns Foo().\n\n    // Many ES6 object then have constructors of the form:\n    // 1. If NewTarget is undefined, throw a TypeError exception\n    // 2. Let xxx by OrdinaryCreateFromConstructor(NewTarget, yyy, zzz)\n\n    // So we're going to emulate those first two steps.\n    if (!ES.TypeIsObject(o)) {\n      throw new TypeError('Constructor requires `new`: ' + defaultNewTarget.name);\n    }\n    var proto = defaultNewTarget.prototype;\n    if (!ES.TypeIsObject(proto)) {\n      proto = defaultProto;\n    }\n    var obj = create(proto);\n    for (var name in slots) {\n      if (_hasOwnProperty(slots, name)) {\n        var value = slots[name];\n        defineProperty(obj, name, value, true);\n      }\n    }\n    return obj;\n  };\n\n  // Firefox 31 reports this function's length as 0\n  // https://bugzilla.mozilla.org/show_bug.cgi?id=1062484\n  if (String.fromCodePoint && String.fromCodePoint.length !== 1) {\n    var originalFromCodePoint = String.fromCodePoint;\n    overrideNative(String, 'fromCodePoint', function fromCodePoint(codePoints) {\n      return ES.Call(originalFromCodePoint, this, arguments);\n    });\n  }\n\n  var StringShims = {\n    fromCodePoint: function fromCodePoint(codePoints) {\n      var result = [];\n      var next;\n      for (var i = 0, length = arguments.length; i < length; i++) {\n        next = Number(arguments[i]);\n        if (!ES.SameValue(next, ES.ToInteger(next)) || next < 0 || next > 0x10FFFF) {\n          throw new RangeError('Invalid code point ' + next);\n        }\n\n        if (next < 0x10000) {\n          _push(result, String.fromCharCode(next));\n        } else {\n          next -= 0x10000;\n          _push(result, String.fromCharCode((next >> 10) + 0xD800));\n          _push(result, String.fromCharCode((next % 0x400) + 0xDC00));\n        }\n      }\n      return _join(result, '');\n    },\n\n    raw: function raw(template) {\n      var numberOfSubstitutions = arguments.length - 1;\n      var cooked = ES.ToObject(template, 'bad template');\n      var raw = ES.ToObject(cooked.raw, 'bad raw value');\n      var len = raw.length;\n      var literalSegments = ES.ToLength(len);\n      if (literalSegments <= 0) {\n        return '';\n      }\n\n      var stringElements = [];\n      var nextIndex = 0;\n      var nextKey, next, nextSeg, nextSub;\n      while (nextIndex < literalSegments) {\n        nextKey = ES.ToString(nextIndex);\n        nextSeg = ES.ToString(raw[nextKey]);\n        _push(stringElements, nextSeg);\n        if (nextIndex + 1 >= literalSegments) {\n          break;\n        }\n        next = nextIndex + 1 < arguments.length ? arguments[nextIndex + 1] : '';\n        nextSub = ES.ToString(next);\n        _push(stringElements, nextSub);\n        nextIndex += 1;\n      }\n      return _join(stringElements, '');\n    }\n  };\n  if (String.raw && String.raw({ raw: { 0: 'x', 1: 'y', length: 2 } }) !== 'xy') {\n    // IE 11 TP has a broken String.raw implementation\n    overrideNative(String, 'raw', StringShims.raw);\n  }\n  defineProperties(String, StringShims);\n\n  // Fast repeat, uses the `Exponentiation by squaring` algorithm.\n  // Perf: http://jsperf.com/string-repeat2/2\n  var stringRepeat = function repeat(s, times) {\n    if (times < 1) { return ''; }\n    if (times % 2) { return repeat(s, times - 1) + s; }\n    var half = repeat(s, times / 2);\n    return half + half;\n  };\n  var stringMaxLength = Infinity;\n\n  var StringPrototypeShims = {\n    repeat: function repeat(times) {\n      var thisStr = ES.ToString(ES.RequireObjectCoercible(this));\n      var numTimes = ES.ToInteger(times);\n      if (numTimes < 0 || numTimes >= stringMaxLength) {\n        throw new RangeError('repeat count must be less than infinity and not overflow maximum string size');\n      }\n      return stringRepeat(thisStr, numTimes);\n    },\n\n    startsWith: function startsWith(searchString) {\n      var S = ES.ToString(ES.RequireObjectCoercible(this));\n      if (ES.IsRegExp(searchString)) {\n        throw new TypeError('Cannot call method \"startsWith\" with a regex');\n      }\n      var searchStr = ES.ToString(searchString);\n      var position;\n      if (arguments.length > 1) {\n        position = arguments[1];\n      }\n      var start = _max(ES.ToInteger(position), 0);\n      return _strSlice(S, start, start + searchStr.length) === searchStr;\n    },\n\n    endsWith: function endsWith(searchString) {\n      var S = ES.ToString(ES.RequireObjectCoercible(this));\n      if (ES.IsRegExp(searchString)) {\n        throw new TypeError('Cannot call method \"endsWith\" with a regex');\n      }\n      var searchStr = ES.ToString(searchString);\n      var len = S.length;\n      var endPosition;\n      if (arguments.length > 1) {\n        endPosition = arguments[1];\n      }\n      var pos = typeof endPosition === 'undefined' ? len : ES.ToInteger(endPosition);\n      var end = _min(_max(pos, 0), len);\n      return _strSlice(S, end - searchStr.length, end) === searchStr;\n    },\n\n    includes: function includes(searchString) {\n      if (ES.IsRegExp(searchString)) {\n        throw new TypeError('\"includes\" does not accept a RegExp');\n      }\n      var searchStr = ES.ToString(searchString);\n      var position;\n      if (arguments.length > 1) {\n        position = arguments[1];\n      }\n      // Somehow this trick makes method 100% compat with the spec.\n      return _indexOf(this, searchStr, position) !== -1;\n    },\n\n    codePointAt: function codePointAt(pos) {\n      var thisStr = ES.ToString(ES.RequireObjectCoercible(this));\n      var position = ES.ToInteger(pos);\n      var length = thisStr.length;\n      if (position >= 0 && position < length) {\n        var first = thisStr.charCodeAt(position);\n        var isEnd = position + 1 === length;\n        if (first < 0xD800 || first > 0xDBFF || isEnd) { return first; }\n        var second = thisStr.charCodeAt(position + 1);\n        if (second < 0xDC00 || second > 0xDFFF) { return first; }\n        return ((first - 0xD800) * 1024) + (second - 0xDC00) + 0x10000;\n      }\n    }\n  };\n  if (String.prototype.includes && 'a'.includes('a', Infinity) !== false) {\n    overrideNative(String.prototype, 'includes', StringPrototypeShims.includes);\n  }\n\n  if (String.prototype.startsWith && String.prototype.endsWith) {\n    var startsWithRejectsRegex = throwsError(function () {\n      /* throws if spec-compliant */\n      return '/a/'.startsWith(/a/);\n    });\n    var startsWithHandlesInfinity = valueOrFalseIfThrows(function () {\n      return 'abc'.startsWith('a', Infinity) === false;\n    });\n    if (!startsWithRejectsRegex || !startsWithHandlesInfinity) {\n      // Firefox (< 37?) and IE 11 TP have a noncompliant startsWith implementation\n      overrideNative(String.prototype, 'startsWith', StringPrototypeShims.startsWith);\n      overrideNative(String.prototype, 'endsWith', StringPrototypeShims.endsWith);\n    }\n  }\n  if (hasSymbols) {\n    var startsWithSupportsSymbolMatch = valueOrFalseIfThrows(function () {\n      var re = /a/;\n      re[Symbol.match] = false;\n      return '/a/'.startsWith(re);\n    });\n    if (!startsWithSupportsSymbolMatch) {\n      overrideNative(String.prototype, 'startsWith', StringPrototypeShims.startsWith);\n    }\n    var endsWithSupportsSymbolMatch = valueOrFalseIfThrows(function () {\n      var re = /a/;\n      re[Symbol.match] = false;\n      return '/a/'.endsWith(re);\n    });\n    if (!endsWithSupportsSymbolMatch) {\n      overrideNative(String.prototype, 'endsWith', StringPrototypeShims.endsWith);\n    }\n    var includesSupportsSymbolMatch = valueOrFalseIfThrows(function () {\n      var re = /a/;\n      re[Symbol.match] = false;\n      return '/a/'.includes(re);\n    });\n    if (!includesSupportsSymbolMatch) {\n      overrideNative(String.prototype, 'includes', StringPrototypeShims.includes);\n    }\n  }\n\n  defineProperties(String.prototype, StringPrototypeShims);\n\n  // whitespace from: http://es5.github.io/#x15.5.4.20\n  // implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324\n  var ws = [\n    '\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003',\n    '\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028',\n    '\\u2029\\uFEFF'\n  ].join('');\n  var trimRegexp = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');\n  var trimShim = function trim() {\n    return ES.ToString(ES.RequireObjectCoercible(this)).replace(trimRegexp, '');\n  };\n  var nonWS = ['\\u0085', '\\u200b', '\\ufffe'].join('');\n  var nonWSregex = new RegExp('[' + nonWS + ']', 'g');\n  var isBadHexRegex = /^[-+]0x[0-9a-f]+$/i;\n  var hasStringTrimBug = nonWS.trim().length !== nonWS.length;\n  defineProperty(String.prototype, 'trim', trimShim, hasStringTrimBug);\n\n  // Given an argument x, it will return an IteratorResult object,\n  // with value set to x and done to false.\n  // Given no arguments, it will return an iterator completion object.\n  var iteratorResult = function (x) {\n    return { value: x, done: arguments.length === 0 };\n  };\n\n  // see http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype-@@iterator\n  var StringIterator = function (s) {\n    ES.RequireObjectCoercible(s);\n    defineProperty(this, '_s', ES.ToString(s));\n    defineProperty(this, '_i', 0);\n  };\n  StringIterator.prototype.next = function () {\n    var s = this._s;\n    var i = this._i;\n    if (typeof s === 'undefined' || i >= s.length) {\n      this._s = void 0;\n      return iteratorResult();\n    }\n    var first = s.charCodeAt(i);\n    var second, len;\n    if (first < 0xD800 || first > 0xDBFF || (i + 1) === s.length) {\n      len = 1;\n    } else {\n      second = s.charCodeAt(i + 1);\n      len = (second < 0xDC00 || second > 0xDFFF) ? 1 : 2;\n    }\n    this._i = i + len;\n    return iteratorResult(s.substr(i, len));\n  };\n  addIterator(StringIterator.prototype);\n  addIterator(String.prototype, function () {\n    return new StringIterator(this);\n  });\n\n  var ArrayShims = {\n    from: function from(items) {\n      var C = this;\n      var mapFn;\n      if (arguments.length > 1) {\n        mapFn = arguments[1];\n      }\n      var mapping, T;\n      if (typeof mapFn === 'undefined') {\n        mapping = false;\n      } else {\n        if (!ES.IsCallable(mapFn)) {\n          throw new TypeError('Array.from: when provided, the second argument must be a function');\n        }\n        if (arguments.length > 2) {\n          T = arguments[2];\n        }\n        mapping = true;\n      }\n\n      // Note that that Arrays will use ArrayIterator:\n      // https://bugs.ecmascript.org/show_bug.cgi?id=2416\n      var usingIterator = typeof (isArguments(items) || ES.GetMethod(items, $iterator$)) !== 'undefined';\n\n      var length, result, i;\n      if (usingIterator) {\n        result = ES.IsConstructor(C) ? Object(new C()) : [];\n        var iterator = ES.GetIterator(items);\n        var next, nextValue;\n\n        i = 0;\n        while (true) {\n          next = ES.IteratorStep(iterator);\n          if (next === false) {\n            break;\n          }\n          nextValue = next.value;\n          try {\n            if (mapping) {\n              nextValue = typeof T === 'undefined' ? mapFn(nextValue, i) : _call(mapFn, T, nextValue, i);\n            }\n            result[i] = nextValue;\n          } catch (e) {\n            ES.IteratorClose(iterator, true);\n            throw e;\n          }\n          i += 1;\n        }\n        length = i;\n      } else {\n        var arrayLike = ES.ToObject(items);\n        length = ES.ToLength(arrayLike.length);\n        result = ES.IsConstructor(C) ? Object(new C(length)) : new Array(length);\n        var value;\n        for (i = 0; i < length; ++i) {\n          value = arrayLike[i];\n          if (mapping) {\n            value = typeof T === 'undefined' ? mapFn(value, i) : _call(mapFn, T, value, i);\n          }\n          createDataPropertyOrThrow(result, i, value);\n        }\n      }\n\n      result.length = length;\n      return result;\n    },\n\n    of: function of() {\n      var len = arguments.length;\n      var C = this;\n      var A = isArray(C) || !ES.IsCallable(C) ? new Array(len) : ES.Construct(C, [len]);\n      for (var k = 0; k < len; ++k) {\n        createDataPropertyOrThrow(A, k, arguments[k]);\n      }\n      A.length = len;\n      return A;\n    }\n  };\n  defineProperties(Array, ArrayShims);\n  addDefaultSpecies(Array);\n\n  // Our ArrayIterator is private; see\n  // https://github.com/paulmillr/es6-shim/issues/252\n  ArrayIterator = function (array, kind) {\n    defineProperty(this, 'i', 0);\n    defineProperty(this, 'array', array);\n    defineProperty(this, 'kind', kind);\n  };\n\n  defineProperties(ArrayIterator.prototype, {\n    next: function () {\n      var i = this.i;\n      var array = this.array;\n      if (!(this instanceof ArrayIterator)) {\n        throw new TypeError('Not an ArrayIterator');\n      }\n      if (typeof array !== 'undefined') {\n        var len = ES.ToLength(array.length);\n        if (i < len) {\n        //for (; i < len; i++) {\n          var kind = this.kind;\n          var retval;\n          if (kind === 'key') {\n            retval = i;\n          } else if (kind === 'value') {\n            retval = array[i];\n          } else if (kind === 'entry') {\n            retval = [i, array[i]];\n          }\n          this.i = i + 1;\n          return iteratorResult(retval);\n        }\n      }\n      this.array = void 0;\n      return iteratorResult();\n    }\n  });\n  addIterator(ArrayIterator.prototype);\n\n  /*\n  var orderKeys = function orderKeys(a, b) {\n    var aNumeric = String(ES.ToInteger(a)) === a;\n    var bNumeric = String(ES.ToInteger(b)) === b;\n    if (aNumeric && bNumeric) {\n      return b - a;\n    } else if (aNumeric && !bNumeric) {\n      return -1;\n    } else if (!aNumeric && bNumeric) {\n      return 1;\n    } else {\n      return a.localeCompare(b);\n    }\n  };\n\n  var getAllKeys = function getAllKeys(object) {\n    var ownKeys = [];\n    var keys = [];\n\n    for (var key in object) {\n      _push(_hasOwnProperty(object, key) ? ownKeys : keys, key);\n    }\n    _sort(ownKeys, orderKeys);\n    _sort(keys, orderKeys);\n\n    return _concat(ownKeys, keys);\n  };\n  */\n\n  // note: this is positioned here because it depends on ArrayIterator\n  var arrayOfSupportsSubclassing = Array.of === ArrayShims.of || (function () {\n    // Detects a bug in Webkit nightly r181886\n    var Foo = function Foo(len) { this.length = len; };\n    Foo.prototype = [];\n    var fooArr = Array.of.apply(Foo, [1, 2]);\n    return fooArr instanceof Foo && fooArr.length === 2;\n  }());\n  if (!arrayOfSupportsSubclassing) {\n    overrideNative(Array, 'of', ArrayShims.of);\n  }\n\n  var ArrayPrototypeShims = {\n    copyWithin: function copyWithin(target, start) {\n      var o = ES.ToObject(this);\n      var len = ES.ToLength(o.length);\n      var relativeTarget = ES.ToInteger(target);\n      var relativeStart = ES.ToInteger(start);\n      var to = relativeTarget < 0 ? _max(len + relativeTarget, 0) : _min(relativeTarget, len);\n      var from = relativeStart < 0 ? _max(len + relativeStart, 0) : _min(relativeStart, len);\n      var end;\n      if (arguments.length > 2) {\n        end = arguments[2];\n      }\n      var relativeEnd = typeof end === 'undefined' ? len : ES.ToInteger(end);\n      var finalItem = relativeEnd < 0 ? _max(len + relativeEnd, 0) : _min(relativeEnd, len);\n      var count = _min(finalItem - from, len - to);\n      var direction = 1;\n      if (from < to && to < (from + count)) {\n        direction = -1;\n        from += count - 1;\n        to += count - 1;\n      }\n      while (count > 0) {\n        if (from in o) {\n          o[to] = o[from];\n        } else {\n          delete o[to];\n        }\n        from += direction;\n        to += direction;\n        count -= 1;\n      }\n      return o;\n    },\n\n    fill: function fill(value) {\n      var start;\n      if (arguments.length > 1) {\n        start = arguments[1];\n      }\n      var end;\n      if (arguments.length > 2) {\n        end = arguments[2];\n      }\n      var O = ES.ToObject(this);\n      var len = ES.ToLength(O.length);\n      start = ES.ToInteger(typeof start === 'undefined' ? 0 : start);\n      end = ES.ToInteger(typeof end === 'undefined' ? len : end);\n\n      var relativeStart = start < 0 ? _max(len + start, 0) : _min(start, len);\n      var relativeEnd = end < 0 ? len + end : end;\n\n      for (var i = relativeStart; i < len && i < relativeEnd; ++i) {\n        O[i] = value;\n      }\n      return O;\n    },\n\n    find: function find(predicate) {\n      var list = ES.ToObject(this);\n      var length = ES.ToLength(list.length);\n      if (!ES.IsCallable(predicate)) {\n        throw new TypeError('Array#find: predicate must be a function');\n      }\n      var thisArg = arguments.length > 1 ? arguments[1] : null;\n      for (var i = 0, value; i < length; i++) {\n        value = list[i];\n        if (thisArg) {\n          if (_call(predicate, thisArg, value, i, list)) {\n            return value;\n          }\n        } else if (predicate(value, i, list)) {\n          return value;\n        }\n      }\n    },\n\n    findIndex: function findIndex(predicate) {\n      var list = ES.ToObject(this);\n      var length = ES.ToLength(list.length);\n      if (!ES.IsCallable(predicate)) {\n        throw new TypeError('Array#findIndex: predicate must be a function');\n      }\n      var thisArg = arguments.length > 1 ? arguments[1] : null;\n      for (var i = 0; i < length; i++) {\n        if (thisArg) {\n          if (_call(predicate, thisArg, list[i], i, list)) {\n            return i;\n          }\n        } else if (predicate(list[i], i, list)) {\n          return i;\n        }\n      }\n      return -1;\n    },\n\n    keys: function keys() {\n      return new ArrayIterator(this, 'key');\n    },\n\n    values: function values() {\n      return new ArrayIterator(this, 'value');\n    },\n\n    entries: function entries() {\n      return new ArrayIterator(this, 'entry');\n    }\n  };\n  // Safari 7.1 defines Array#keys and Array#entries natively,\n  // but the resulting ArrayIterator objects don't have a \"next\" method.\n  if (Array.prototype.keys && !ES.IsCallable([1].keys().next)) {\n    delete Array.prototype.keys;\n  }\n  if (Array.prototype.entries && !ES.IsCallable([1].entries().next)) {\n    delete Array.prototype.entries;\n  }\n\n  // Chrome 38 defines Array#keys and Array#entries, and Array#@@iterator, but not Array#values\n  if (Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[$iterator$]) {\n    defineProperties(Array.prototype, {\n      values: Array.prototype[$iterator$]\n    });\n    if (Type.symbol(Symbol.unscopables)) {\n      Array.prototype[Symbol.unscopables].values = true;\n    }\n  }\n  // Chrome 40 defines Array#values with the incorrect name, although Array#{keys,entries} have the correct name\n  if (functionsHaveNames && Array.prototype.values && Array.prototype.values.name !== 'values') {\n    var originalArrayPrototypeValues = Array.prototype.values;\n    overrideNative(Array.prototype, 'values', function values() { return ES.Call(originalArrayPrototypeValues, this, arguments); });\n    defineProperty(Array.prototype, $iterator$, Array.prototype.values, true);\n  }\n  defineProperties(Array.prototype, ArrayPrototypeShims);\n\n  if (1 / [true].indexOf(true, -0) < 0) {\n    // indexOf when given a position arg of -0 should return +0.\n    // https://github.com/tc39/ecma262/pull/316\n    defineProperty(Array.prototype, 'indexOf', function indexOf(searchElement) {\n      var value = _arrayIndexOfApply(this, arguments);\n      if (value === 0 && (1 / value) < 0) {\n        return 0;\n      }\n      return value;\n    }, true);\n  }\n\n  addIterator(Array.prototype, function () { return this.values(); });\n  // Chrome defines keys/values/entries on Array, but doesn't give us\n  // any way to identify its iterator.  So add our own shimmed field.\n  if (Object.getPrototypeOf) {\n    var ChromeArrayIterator = Object.getPrototypeOf([].values());\n    if (ChromeArrayIterator) { // in WSH, this is `undefined`\n      addIterator(ChromeArrayIterator);\n    }\n  }\n\n  // note: this is positioned here because it relies on Array#entries\n  var arrayFromSwallowsNegativeLengths = (function () {\n    // Detects a Firefox bug in v32\n    // https://bugzilla.mozilla.org/show_bug.cgi?id=1063993\n    return valueOrFalseIfThrows(function () {\n      return Array.from({ length: -1 }).length === 0;\n    });\n  }());\n  var arrayFromHandlesIterables = (function () {\n    // Detects a bug in Webkit nightly r181886\n    var arr = Array.from([0].entries());\n    return arr.length === 1 && isArray(arr[0]) && arr[0][0] === 0 && arr[0][1] === 0;\n  }());\n  if (!arrayFromSwallowsNegativeLengths || !arrayFromHandlesIterables) {\n    overrideNative(Array, 'from', ArrayShims.from);\n  }\n  var arrayFromHandlesUndefinedMapFunction = (function () {\n    // Microsoft Edge v0.11 throws if the mapFn argument is *provided* but undefined,\n    // but the spec doesn't care if it's provided or not - undefined doesn't throw.\n    return valueOrFalseIfThrows(function () {\n      return Array.from([0], void 0);\n    });\n  }());\n  if (!arrayFromHandlesUndefinedMapFunction) {\n    var origArrayFrom = Array.from;\n    overrideNative(Array, 'from', function from(items) {\n      if (arguments.length > 1 && typeof arguments[1] !== 'undefined') {\n        return ES.Call(origArrayFrom, this, arguments);\n      }\n      return _call(origArrayFrom, this, items);\n\n    });\n  }\n\n  var int32sAsOne = -(Math.pow(2, 32) - 1);\n  var toLengthsCorrectly = function (method, reversed) {\n    var obj = { length: int32sAsOne };\n    obj[reversed ? (obj.length >>> 0) - 1 : 0] = true;\n    return valueOrFalseIfThrows(function () {\n      _call(method, obj, function () {\n        // note: in nonconforming browsers, this will be called\n        // -1 >>> 0 times, which is 4294967295, so the throw matters.\n        throw new RangeError('should not reach here');\n      }, []);\n      return true;\n    });\n  };\n  if (!toLengthsCorrectly(Array.prototype.forEach)) {\n    var originalForEach = Array.prototype.forEach;\n    overrideNative(Array.prototype, 'forEach', function forEach(callbackFn) {\n      return ES.Call(originalForEach, this.length >= 0 ? this : [], arguments);\n    });\n  }\n  if (!toLengthsCorrectly(Array.prototype.map)) {\n    var originalMap = Array.prototype.map;\n    overrideNative(Array.prototype, 'map', function map(callbackFn) {\n      return ES.Call(originalMap, this.length >= 0 ? this : [], arguments);\n    });\n  }\n  if (!toLengthsCorrectly(Array.prototype.filter)) {\n    var originalFilter = Array.prototype.filter;\n    overrideNative(Array.prototype, 'filter', function filter(callbackFn) {\n      return ES.Call(originalFilter, this.length >= 0 ? this : [], arguments);\n    });\n  }\n  if (!toLengthsCorrectly(Array.prototype.some)) {\n    var originalSome = Array.prototype.some;\n    overrideNative(Array.prototype, 'some', function some(callbackFn) {\n      return ES.Call(originalSome, this.length >= 0 ? this : [], arguments);\n    });\n  }\n  if (!toLengthsCorrectly(Array.prototype.every)) {\n    var originalEvery = Array.prototype.every;\n    overrideNative(Array.prototype, 'every', function every(callbackFn) {\n      return ES.Call(originalEvery, this.length >= 0 ? this : [], arguments);\n    });\n  }\n  if (!toLengthsCorrectly(Array.prototype.reduce)) {\n    var originalReduce = Array.prototype.reduce;\n    overrideNative(Array.prototype, 'reduce', function reduce(callbackFn) {\n      return ES.Call(originalReduce, this.length >= 0 ? this : [], arguments);\n    });\n  }\n  if (!toLengthsCorrectly(Array.prototype.reduceRight, true)) {\n    var originalReduceRight = Array.prototype.reduceRight;\n    overrideNative(Array.prototype, 'reduceRight', function reduceRight(callbackFn) {\n      return ES.Call(originalReduceRight, this.length >= 0 ? this : [], arguments);\n    });\n  }\n\n  var lacksOctalSupport = Number('0o10') !== 8;\n  var lacksBinarySupport = Number('0b10') !== 2;\n  var trimsNonWhitespace = _some(nonWS, function (c) {\n    return Number(c + 0 + c) === 0;\n  });\n  if (lacksOctalSupport || lacksBinarySupport || trimsNonWhitespace) {\n    var OrigNumber = Number;\n    var binaryRegex = /^0b[01]+$/i;\n    var octalRegex = /^0o[0-7]+$/i;\n    // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, \"test\" is an own property of regexes. wtf.\n    var isBinary = binaryRegex.test.bind(binaryRegex);\n    var isOctal = octalRegex.test.bind(octalRegex);\n    var toPrimitive = function (O, hint) { // need to replace this with `es-to-primitive/es6`\n      var result;\n      if (typeof O.valueOf === 'function') {\n        result = O.valueOf();\n        if (Type.primitive(result)) {\n          return result;\n        }\n      }\n      if (typeof O.toString === 'function') {\n        result = O.toString();\n        if (Type.primitive(result)) {\n          return result;\n        }\n      }\n      throw new TypeError('No default value');\n    };\n    var hasNonWS = nonWSregex.test.bind(nonWSregex);\n    var isBadHex = isBadHexRegex.test.bind(isBadHexRegex);\n    var NumberShim = (function () {\n      // this is wrapped in an IIFE because of IE 6-8's wacky scoping issues with named function expressions.\n      var NumberShim = function Number(value) {\n        var primValue;\n        if (arguments.length > 0) {\n          primValue = Type.primitive(value) ? value : toPrimitive(value, 'number');\n        } else {\n          primValue = 0;\n        }\n        if (typeof primValue === 'string') {\n          primValue = ES.Call(trimShim, primValue);\n          if (isBinary(primValue)) {\n            primValue = parseInt(_strSlice(primValue, 2), 2);\n          } else if (isOctal(primValue)) {\n            primValue = parseInt(_strSlice(primValue, 2), 8);\n          } else if (hasNonWS(primValue) || isBadHex(primValue)) {\n            primValue = NaN;\n          }\n        }\n        var receiver = this;\n        var valueOfSucceeds = valueOrFalseIfThrows(function () {\n          OrigNumber.prototype.valueOf.call(receiver);\n          return true;\n        });\n        if (receiver instanceof NumberShim && !valueOfSucceeds) {\n          return new OrigNumber(primValue);\n        }\n        return OrigNumber(primValue);\n      };\n      return NumberShim;\n    }());\n    wrapConstructor(OrigNumber, NumberShim, {});\n    // this is necessary for ES3 browsers, where these properties are non-enumerable.\n    defineProperties(NumberShim, {\n      NaN: OrigNumber.NaN,\n      MAX_VALUE: OrigNumber.MAX_VALUE,\n      MIN_VALUE: OrigNumber.MIN_VALUE,\n      NEGATIVE_INFINITY: OrigNumber.NEGATIVE_INFINITY,\n      POSITIVE_INFINITY: OrigNumber.POSITIVE_INFINITY\n    });\n    Number = NumberShim; // eslint-disable-line no-global-assign\n    Value.redefine(globals, 'Number', NumberShim);\n  }\n\n  var maxSafeInteger = Math.pow(2, 53) - 1;\n  defineProperties(Number, {\n    MAX_SAFE_INTEGER: maxSafeInteger,\n    MIN_SAFE_INTEGER: -maxSafeInteger,\n    EPSILON: 2.220446049250313e-16,\n\n    parseInt: globals.parseInt,\n    parseFloat: globals.parseFloat,\n\n    isFinite: numberIsFinite,\n\n    isInteger: function isInteger(value) {\n      return numberIsFinite(value) && ES.ToInteger(value) === value;\n    },\n\n    isSafeInteger: function isSafeInteger(value) {\n      return Number.isInteger(value) && _abs(value) <= Number.MAX_SAFE_INTEGER;\n    },\n\n    isNaN: numberIsNaN\n  });\n  // Firefox 37 has a conforming Number.parseInt, but it's not === to the global parseInt (fixed in v40)\n  defineProperty(Number, 'parseInt', globals.parseInt, Number.parseInt !== globals.parseInt);\n\n  // Work around bugs in Array#find and Array#findIndex -- early\n  // implementations skipped holes in sparse arrays. (Note that the\n  // implementations of find/findIndex indirectly use shimmed\n  // methods of Number, so this test has to happen down here.)\n  /* eslint-disable no-sparse-arrays */\n  if ([, 1].find(function () { return true; }) === 1) {\n    overrideNative(Array.prototype, 'find', ArrayPrototypeShims.find);\n  }\n  if ([, 1].findIndex(function () { return true; }) !== 0) {\n    overrideNative(Array.prototype, 'findIndex', ArrayPrototypeShims.findIndex);\n  }\n  /* eslint-enable no-sparse-arrays */\n\n  var isEnumerableOn = Function.bind.call(Function.bind, Object.prototype.propertyIsEnumerable);\n  var ensureEnumerable = function ensureEnumerable(obj, prop) {\n    if (supportsDescriptors && isEnumerableOn(obj, prop)) {\n      Object.defineProperty(obj, prop, { enumerable: false });\n    }\n  };\n  var sliceArgs = function sliceArgs() {\n    // per https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments\n    // and https://gist.github.com/WebReflection/4327762cb87a8c634a29\n    var initial = Number(this);\n    var len = arguments.length;\n    var desiredArgCount = len - initial;\n    var args = new Array(desiredArgCount < 0 ? 0 : desiredArgCount);\n    for (var i = initial; i < len; ++i) {\n      args[i - initial] = arguments[i];\n    }\n    return args;\n  };\n  var assignTo = function assignTo(source) {\n    return function assignToSource(target, key) {\n      target[key] = source[key];\n      return target;\n    };\n  };\n  var assignReducer = function (target, source) {\n    var sourceKeys = keys(Object(source));\n    var symbols;\n    if (ES.IsCallable(Object.getOwnPropertySymbols)) {\n      symbols = _filter(Object.getOwnPropertySymbols(Object(source)), isEnumerableOn(source));\n    }\n    return _reduce(_concat(sourceKeys, symbols || []), assignTo(source), target);\n  };\n\n  var ObjectShims = {\n    // 19.1.3.1\n    assign: function (target, source) {\n      var to = ES.ToObject(target, 'Cannot convert undefined or null to object');\n      return _reduce(ES.Call(sliceArgs, 1, arguments), assignReducer, to);\n    },\n\n    // Added in WebKit in https://bugs.webkit.org/show_bug.cgi?id=143865\n    is: function is(a, b) {\n      return ES.SameValue(a, b);\n    }\n  };\n  var assignHasPendingExceptions = Object.assign && Object.preventExtensions && (function () {\n    // Firefox 37 still has \"pending exception\" logic in its Object.assign implementation,\n    // which is 72% slower than our shim, and Firefox 40's native implementation.\n    var thrower = Object.preventExtensions({ 1: 2 });\n    try {\n      Object.assign(thrower, 'xy');\n    } catch (e) {\n      return thrower[1] === 'y';\n    }\n  }());\n  if (assignHasPendingExceptions) {\n    overrideNative(Object, 'assign', ObjectShims.assign);\n  }\n  defineProperties(Object, ObjectShims);\n\n  if (supportsDescriptors) {\n    var ES5ObjectShims = {\n      // 19.1.3.9\n      // shim from https://gist.github.com/WebReflection/5593554\n      setPrototypeOf: (function (Object) {\n        var set;\n\n        var checkArgs = function (O, proto) {\n          if (!ES.TypeIsObject(O)) {\n            throw new TypeError('cannot set prototype on a non-object');\n          }\n          if (!(proto === null || ES.TypeIsObject(proto))) {\n            throw new TypeError('can only set prototype to an object or null' + proto);\n          }\n        };\n\n        var setPrototypeOf = function (O, proto) {\n          checkArgs(O, proto);\n          _call(set, O, proto);\n          return O;\n        };\n\n        try {\n          // this works already in Firefox and Safari\n          set = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;\n          _call(set, {}, null);\n        } catch (e) {\n          if (Object.prototype !== ({}).__proto__) { // eslint-disable-line no-proto\n            // IE < 11 cannot be shimmed\n            return;\n          }\n          // probably Chrome or some old Mobile stock browser\n          set = function (proto) {\n            this.__proto__ = proto; // eslint-disable-line no-proto\n          };\n          // please note that this will **not** work\n          // in those browsers that do not inherit\n          // __proto__ by mistake from Object.prototype\n          // in these cases we should probably throw an error\n          // or at least be informed about the issue\n          setPrototypeOf.polyfill = setPrototypeOf(\n            setPrototypeOf({}, null),\n            Object.prototype\n          ) instanceof Object;\n          // setPrototypeOf.polyfill === true means it works as meant\n          // setPrototypeOf.polyfill === false means it's not 100% reliable\n          // setPrototypeOf.polyfill === undefined\n          // or\n          // setPrototypeOf.polyfill ==  null means it's not a polyfill\n          // which means it works as expected\n          // we can even delete Object.prototype.__proto__;\n        }\n        return setPrototypeOf;\n      }(Object))\n    };\n\n    defineProperties(Object, ES5ObjectShims);\n  }\n\n  // Workaround bug in Opera 12 where setPrototypeOf(x, null) doesn't work,\n  // but Object.create(null) does.\n  if (\n    Object.setPrototypeOf\n    && Object.getPrototypeOf\n    && Object.getPrototypeOf(Object.setPrototypeOf({}, null)) !== null\n    && Object.getPrototypeOf(Object.create(null)) === null\n  ) {\n    (function () {\n      var FAKENULL = Object.create(null);\n      var gpo = Object.getPrototypeOf;\n      var spo = Object.setPrototypeOf;\n      Object.getPrototypeOf = function (o) {\n        var result = gpo(o);\n        return result === FAKENULL ? null : result;\n      };\n      Object.setPrototypeOf = function (o, p) {\n        var proto = p === null ? FAKENULL : p;\n        return spo(o, proto);\n      };\n      Object.setPrototypeOf.polyfill = false;\n    }());\n  }\n\n  var objectKeysAcceptsPrimitives = !throwsError(function () { return Object.keys('foo'); });\n  if (!objectKeysAcceptsPrimitives) {\n    var originalObjectKeys = Object.keys;\n    overrideNative(Object, 'keys', function keys(value) {\n      return originalObjectKeys(ES.ToObject(value));\n    });\n    keys = Object.keys;\n  }\n  var objectKeysRejectsRegex = throwsError(function () { return Object.keys(/a/g); });\n  if (objectKeysRejectsRegex) {\n    var regexRejectingObjectKeys = Object.keys;\n    overrideNative(Object, 'keys', function keys(value) {\n      if (Type.regex(value)) {\n        var regexKeys = [];\n        for (var k in value) {\n          if (_hasOwnProperty(value, k)) {\n            _push(regexKeys, k);\n          }\n        }\n        return regexKeys;\n      }\n      return regexRejectingObjectKeys(value);\n    });\n    keys = Object.keys;\n  }\n\n  if (Object.getOwnPropertyNames) {\n    var objectGOPNAcceptsPrimitives = !throwsError(function () { return Object.getOwnPropertyNames('foo'); });\n    if (!objectGOPNAcceptsPrimitives) {\n      var cachedWindowNames = typeof window === 'object' ? Object.getOwnPropertyNames(window) : [];\n      var originalObjectGetOwnPropertyNames = Object.getOwnPropertyNames;\n      overrideNative(Object, 'getOwnPropertyNames', function getOwnPropertyNames(value) {\n        var val = ES.ToObject(value);\n        if (_toString(val) === '[object Window]') {\n          try {\n            return originalObjectGetOwnPropertyNames(val);\n          } catch (e) {\n            // IE bug where layout engine calls userland gOPN for cross-domain `window` objects\n            return _concat([], cachedWindowNames);\n          }\n        }\n        return originalObjectGetOwnPropertyNames(val);\n      });\n    }\n  }\n  if (Object.getOwnPropertyDescriptor) {\n    var objectGOPDAcceptsPrimitives = !throwsError(function () { return Object.getOwnPropertyDescriptor('foo', 'bar'); });\n    if (!objectGOPDAcceptsPrimitives) {\n      var originalObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n      overrideNative(Object, 'getOwnPropertyDescriptor', function getOwnPropertyDescriptor(value, property) {\n        return originalObjectGetOwnPropertyDescriptor(ES.ToObject(value), property);\n      });\n    }\n  }\n  if (Object.seal) {\n    var objectSealAcceptsPrimitives = !throwsError(function () { return Object.seal('foo'); });\n    if (!objectSealAcceptsPrimitives) {\n      var originalObjectSeal = Object.seal;\n      overrideNative(Object, 'seal', function seal(value) {\n        if (!ES.TypeIsObject(value)) { return value; }\n        return originalObjectSeal(value);\n      });\n    }\n  }\n  if (Object.isSealed) {\n    var objectIsSealedAcceptsPrimitives = !throwsError(function () { return Object.isSealed('foo'); });\n    if (!objectIsSealedAcceptsPrimitives) {\n      var originalObjectIsSealed = Object.isSealed;\n      overrideNative(Object, 'isSealed', function isSealed(value) {\n        if (!ES.TypeIsObject(value)) { return true; }\n        return originalObjectIsSealed(value);\n      });\n    }\n  }\n  if (Object.freeze) {\n    var objectFreezeAcceptsPrimitives = !throwsError(function () { return Object.freeze('foo'); });\n    if (!objectFreezeAcceptsPrimitives) {\n      var originalObjectFreeze = Object.freeze;\n      overrideNative(Object, 'freeze', function freeze(value) {\n        if (!ES.TypeIsObject(value)) { return value; }\n        return originalObjectFreeze(value);\n      });\n    }\n  }\n  if (Object.isFrozen) {\n    var objectIsFrozenAcceptsPrimitives = !throwsError(function () { return Object.isFrozen('foo'); });\n    if (!objectIsFrozenAcceptsPrimitives) {\n      var originalObjectIsFrozen = Object.isFrozen;\n      overrideNative(Object, 'isFrozen', function isFrozen(value) {\n        if (!ES.TypeIsObject(value)) { return true; }\n        return originalObjectIsFrozen(value);\n      });\n    }\n  }\n  if (Object.preventExtensions) {\n    var objectPreventExtensionsAcceptsPrimitives = !throwsError(function () { return Object.preventExtensions('foo'); });\n    if (!objectPreventExtensionsAcceptsPrimitives) {\n      var originalObjectPreventExtensions = Object.preventExtensions;\n      overrideNative(Object, 'preventExtensions', function preventExtensions(value) {\n        if (!ES.TypeIsObject(value)) { return value; }\n        return originalObjectPreventExtensions(value);\n      });\n    }\n  }\n  if (Object.isExtensible) {\n    var objectIsExtensibleAcceptsPrimitives = !throwsError(function () { return Object.isExtensible('foo'); });\n    if (!objectIsExtensibleAcceptsPrimitives) {\n      var originalObjectIsExtensible = Object.isExtensible;\n      overrideNative(Object, 'isExtensible', function isExtensible(value) {\n        if (!ES.TypeIsObject(value)) { return false; }\n        return originalObjectIsExtensible(value);\n      });\n    }\n  }\n  if (Object.getPrototypeOf) {\n    var objectGetProtoAcceptsPrimitives = !throwsError(function () { return Object.getPrototypeOf('foo'); });\n    if (!objectGetProtoAcceptsPrimitives) {\n      var originalGetProto = Object.getPrototypeOf;\n      overrideNative(Object, 'getPrototypeOf', function getPrototypeOf(value) {\n        return originalGetProto(ES.ToObject(value));\n      });\n    }\n  }\n\n  var hasFlags = supportsDescriptors && (function () {\n    var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags');\n    return desc && ES.IsCallable(desc.get);\n  }());\n  if (supportsDescriptors && !hasFlags) {\n    var regExpFlagsGetter = function flags() {\n      if (!ES.TypeIsObject(this)) {\n        throw new TypeError('Method called on incompatible type: must be an object.');\n      }\n      var result = '';\n      if (this.global) {\n        result += 'g';\n      }\n      if (this.ignoreCase) {\n        result += 'i';\n      }\n      if (this.multiline) {\n        result += 'm';\n      }\n      if (this.unicode) {\n        result += 'u';\n      }\n      if (this.sticky) {\n        result += 'y';\n      }\n      return result;\n    };\n\n    Value.getter(RegExp.prototype, 'flags', regExpFlagsGetter);\n  }\n\n  var regExpSupportsFlagsWithRegex = supportsDescriptors && valueOrFalseIfThrows(function () {\n    return String(new RegExp(/a/g, 'i')) === '/a/i';\n  });\n  var regExpNeedsToSupportSymbolMatch = hasSymbols && supportsDescriptors && (function () {\n    // Edge 0.12 supports flags fully, but does not support Symbol.match\n    var regex = /./;\n    regex[Symbol.match] = false;\n    return RegExp(regex) === regex;\n  }());\n\n  var regexToStringIsGeneric = valueOrFalseIfThrows(function () {\n    return RegExp.prototype.toString.call({ source: 'abc' }) === '/abc/';\n  });\n  var regexToStringSupportsGenericFlags = regexToStringIsGeneric && valueOrFalseIfThrows(function () {\n    return RegExp.prototype.toString.call({ source: 'a', flags: 'b' }) === '/a/b';\n  });\n  if (!regexToStringIsGeneric || !regexToStringSupportsGenericFlags) {\n    var origRegExpToString = RegExp.prototype.toString;\n    defineProperty(RegExp.prototype, 'toString', function toString() {\n      var R = ES.RequireObjectCoercible(this);\n      if (Type.regex(R)) {\n        return _call(origRegExpToString, R);\n      }\n      var pattern = $String(R.source);\n      var flags = $String(R.flags);\n      return '/' + pattern + '/' + flags;\n    }, true);\n    Value.preserveToString(RegExp.prototype.toString, origRegExpToString);\n    RegExp.prototype.toString.prototype = void 0;\n  }\n\n  if (supportsDescriptors && (!regExpSupportsFlagsWithRegex || regExpNeedsToSupportSymbolMatch)) {\n    var flagsGetter = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get;\n    var sourceDesc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'source') || {};\n    var legacySourceGetter = function () {\n      // prior to it being a getter, it's own + nonconfigurable\n      return this.source;\n    };\n    var sourceGetter = ES.IsCallable(sourceDesc.get) ? sourceDesc.get : legacySourceGetter;\n\n    var OrigRegExp = RegExp;\n    var RegExpShim = (function () {\n      return function RegExp(pattern, flags) {\n        var patternIsRegExp = ES.IsRegExp(pattern);\n        var calledWithNew = this instanceof RegExp;\n        if (!calledWithNew && patternIsRegExp && typeof flags === 'undefined' && pattern.constructor === RegExp) {\n          return pattern;\n        }\n\n        var P = pattern;\n        var F = flags;\n        if (Type.regex(pattern)) {\n          P = ES.Call(sourceGetter, pattern);\n          F = typeof flags === 'undefined' ? ES.Call(flagsGetter, pattern) : flags;\n          return new RegExp(P, F);\n        } else if (patternIsRegExp) {\n          P = pattern.source;\n          F = typeof flags === 'undefined' ? pattern.flags : flags;\n        }\n        return new OrigRegExp(pattern, flags);\n      };\n    }());\n    wrapConstructor(OrigRegExp, RegExpShim, {\n      $input: true // Chrome < v39 & Opera < 26 have a nonstandard \"$input\" property\n    });\n    RegExp = RegExpShim; // eslint-disable-line no-global-assign\n    Value.redefine(globals, 'RegExp', RegExpShim);\n  }\n\n  if (supportsDescriptors) {\n    var regexGlobals = {\n      input: '$_',\n      lastMatch: '$&',\n      lastParen: '$+',\n      leftContext: '$`',\n      rightContext: '$\\''\n    };\n    _forEach(keys(regexGlobals), function (prop) {\n      if (prop in RegExp && !(regexGlobals[prop] in RegExp)) {\n        Value.getter(RegExp, regexGlobals[prop], function get() {\n          return RegExp[prop];\n        });\n      }\n    });\n  }\n  addDefaultSpecies(RegExp);\n\n  var inverseEpsilon = 1 / Number.EPSILON;\n  var roundTiesToEven = function roundTiesToEven(n) {\n    // Even though this reduces down to `return n`, it takes advantage of built-in rounding.\n    return (n + inverseEpsilon) - inverseEpsilon;\n  };\n  var BINARY_32_EPSILON = Math.pow(2, -23);\n  var BINARY_32_MAX_VALUE = Math.pow(2, 127) * (2 - BINARY_32_EPSILON);\n  var BINARY_32_MIN_VALUE = Math.pow(2, -126);\n  var E = Math.E;\n  var LOG2E = Math.LOG2E;\n  var LOG10E = Math.LOG10E;\n  var numberCLZ = Number.prototype.clz;\n  delete Number.prototype.clz; // Safari 8 has Number#clz\n\n  var MathShims = {\n    acosh: function acosh(value) {\n      var x = Number(value);\n      if (numberIsNaN(x) || value < 1) { return NaN; }\n      if (x === 1) { return 0; }\n      if (x === Infinity) { return x; }\n\n      var xInvSquared = 1 / (x * x);\n      if (x < 2) {\n        return _log1p(x - 1 + (_sqrt(1 - xInvSquared) * x));\n      }\n      var halfX = x / 2;\n      return _log1p(halfX + (_sqrt(1 - xInvSquared) * halfX) - 1) + (1 / LOG2E);\n    },\n\n    asinh: function asinh(value) {\n      var x = Number(value);\n      if (x === 0 || !globalIsFinite(x)) {\n        return x;\n      }\n\n      var a = _abs(x);\n      var aSquared = a * a;\n      var s = _sign(x);\n      if (a < 1) {\n        return s * _log1p(a + (aSquared / (_sqrt(aSquared + 1) + 1)));\n      }\n      return s * (_log1p((a / 2) + (_sqrt(1 + (1 / aSquared)) * a / 2) - 1) + (1 / LOG2E));\n    },\n\n    atanh: function atanh(value) {\n      var x = Number(value);\n\n      if (x === 0) { return x; }\n      if (x === -1) { return -Infinity; }\n      if (x === 1) { return Infinity; }\n      if (numberIsNaN(x) || x < -1 || x > 1) {\n        return NaN;\n      }\n\n      var a = _abs(x);\n      return _sign(x) * _log1p(2 * a / (1 - a)) / 2;\n    },\n\n    cbrt: function cbrt(value) {\n      var x = Number(value);\n      if (x === 0) { return x; }\n      var negate = x < 0;\n      var result;\n      if (negate) { x = -x; }\n      if (x === Infinity) {\n        result = Infinity;\n      } else {\n        result = _exp(_log(x) / 3);\n        // from http://en.wikipedia.org/wiki/Cube_root#Numerical_methods\n        result = ((x / (result * result)) + (2 * result)) / 3;\n      }\n      return negate ? -result : result;\n    },\n\n    clz32: function clz32(value) {\n      // See https://bugs.ecmascript.org/show_bug.cgi?id=2465\n      var x = Number(value);\n      var number = ES.ToUint32(x);\n      if (number === 0) {\n        return 32;\n      }\n      return numberCLZ ? ES.Call(numberCLZ, number) : 31 - _floor(_log(number + 0.5) * LOG2E);\n    },\n\n    cosh: function cosh(value) {\n      var x = Number(value);\n      if (x === 0) { return 1; } // +0 or -0\n      if (numberIsNaN(x)) { return NaN; }\n      if (!globalIsFinite(x)) { return Infinity; }\n\n      var t = _exp(_abs(x) - 1);\n      return (t + (1 / (t * E * E))) * (E / 2);\n    },\n\n    expm1: function expm1(value) {\n      var x = Number(value);\n      if (x === -Infinity) { return -1; }\n      if (!globalIsFinite(x) || x === 0) { return x; }\n      if (_abs(x) > 0.5) {\n        return _exp(x) - 1;\n      }\n      // A more precise approximation using Taylor series expansion\n      // from https://github.com/paulmillr/es6-shim/issues/314#issuecomment-70293986\n      var t = x;\n      var sum = 0;\n      var n = 1;\n      while (sum + t !== sum) {\n        sum += t;\n        n += 1;\n        t *= x / n;\n      }\n      return sum;\n    },\n\n    hypot: function hypot(x, y) {\n      var result = 0;\n      var largest = 0;\n      for (var i = 0; i < arguments.length; ++i) {\n        var value = _abs(Number(arguments[i]));\n        if (largest < value) {\n          result *= (largest / value) * (largest / value);\n          result += 1;\n          largest = value;\n        } else {\n          result += value > 0 ? (value / largest) * (value / largest) : value;\n        }\n      }\n      return largest === Infinity ? Infinity : largest * _sqrt(result);\n    },\n\n    log2: function log2(value) {\n      return _log(value) * LOG2E;\n    },\n\n    log10: function log10(value) {\n      return _log(value) * LOG10E;\n    },\n\n    log1p: _log1p,\n\n    sign: _sign,\n\n    sinh: function sinh(value) {\n      var x = Number(value);\n      if (!globalIsFinite(x) || x === 0) { return x; }\n\n      var a = _abs(x);\n      if (a < 1) {\n        var u = Math.expm1(a);\n        return _sign(x) * u * (1 + (1 / (u + 1))) / 2;\n      }\n      var t = _exp(a - 1);\n      return _sign(x) * (t - (1 / (t * E * E))) * (E / 2);\n    },\n\n    tanh: function tanh(value) {\n      var x = Number(value);\n      if (numberIsNaN(x) || x === 0) { return x; }\n      // can exit early at +-20 as JS loses precision for true value at this integer\n      if (x >= 20) { return 1; }\n      if (x <= -20) { return -1; }\n\n      return (Math.expm1(x) - Math.expm1(-x)) / (_exp(x) + _exp(-x));\n    },\n\n    trunc: function trunc(value) {\n      var x = Number(value);\n      return x < 0 ? -_floor(-x) : _floor(x);\n    },\n\n    imul: function imul(x, y) {\n      // taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul\n      var a = ES.ToUint32(x);\n      var b = ES.ToUint32(y);\n      var ah = (a >>> 16) & 0xffff;\n      var al = a & 0xffff;\n      var bh = (b >>> 16) & 0xffff;\n      var bl = b & 0xffff;\n      // the shift by 0 fixes the sign on the high part\n      // the final |0 converts the unsigned value into a signed value\n      return (al * bl) + ((((ah * bl) + (al * bh)) << 16) >>> 0) | 0;\n    },\n\n    fround: function fround(x) {\n      var v = Number(x);\n      if (v === 0 || v === Infinity || v === -Infinity || numberIsNaN(v)) {\n        return v;\n      }\n      var sign = _sign(v);\n      var abs = _abs(v);\n      if (abs < BINARY_32_MIN_VALUE) {\n        return sign * roundTiesToEven(abs / BINARY_32_MIN_VALUE / BINARY_32_EPSILON) * BINARY_32_MIN_VALUE * BINARY_32_EPSILON;\n      }\n      // Veltkamp's splitting (?)\n      var a = (1 + (BINARY_32_EPSILON / Number.EPSILON)) * abs;\n      var result = a - (a - abs);\n      if (result > BINARY_32_MAX_VALUE || numberIsNaN(result)) {\n        return sign * Infinity;\n      }\n      return sign * result;\n    }\n  };\n\n  var withinULPDistance = function withinULPDistance(result, expected, distance) {\n    return _abs(1 - (result / expected)) / Number.EPSILON < (distance || 8);\n  };\n\n  defineProperties(Math, MathShims);\n  // Chrome < 40 sinh returns ∞ for large numbers\n  defineProperty(Math, 'sinh', MathShims.sinh, Math.sinh(710) === Infinity);\n  // Chrome < 40 cosh returns ∞ for large numbers\n  defineProperty(Math, 'cosh', MathShims.cosh, Math.cosh(710) === Infinity);\n  // IE 11 TP has an imprecise log1p: reports Math.log1p(-1e-17) as 0\n  defineProperty(Math, 'log1p', MathShims.log1p, Math.log1p(-1e-17) !== -1e-17);\n  // IE 11 TP has an imprecise asinh: reports Math.asinh(-1e7) as not exactly equal to -Math.asinh(1e7)\n  defineProperty(Math, 'asinh', MathShims.asinh, Math.asinh(-1e7) !== -Math.asinh(1e7));\n  // Chrome < 54 asinh returns ∞ for large numbers and should not\n  defineProperty(Math, 'asinh', MathShims.asinh, Math.asinh(1e+300) === Infinity);\n  // Chrome < 54 atanh incorrectly returns 0 for large numbers\n  defineProperty(Math, 'atanh', MathShims.atanh, Math.atanh(1e-300) === 0);\n  // Chrome 40 has an imprecise Math.tanh with very small numbers\n  defineProperty(Math, 'tanh', MathShims.tanh, Math.tanh(-2e-17) !== -2e-17);\n  // Chrome 40 loses Math.acosh precision with high numbers\n  defineProperty(Math, 'acosh', MathShims.acosh, Math.acosh(Number.MAX_VALUE) === Infinity);\n  // Chrome < 54 has an inaccurate acosh for EPSILON deltas\n  defineProperty(Math, 'acosh', MathShims.acosh, !withinULPDistance(Math.acosh(1 + Number.EPSILON), Math.sqrt(2 * Number.EPSILON)));\n  // Firefox 38 on Windows\n  defineProperty(Math, 'cbrt', MathShims.cbrt, !withinULPDistance(Math.cbrt(1e-300), 1e-100));\n  // node 0.11 has an imprecise Math.sinh with very small numbers\n  defineProperty(Math, 'sinh', MathShims.sinh, Math.sinh(-2e-17) !== -2e-17);\n  // FF 35 on Linux reports 22025.465794806725 for Math.expm1(10)\n  var expm1OfTen = Math.expm1(10);\n  defineProperty(Math, 'expm1', MathShims.expm1, expm1OfTen > 22025.465794806719 || expm1OfTen < 22025.4657948067165168);\n  // node v12.11 - v12.15 report NaN\n  defineProperty(Math, 'hypot', MathShims.hypot, Math.hypot(Infinity, NaN) !== Infinity);\n\n  var origMathRound = Math.round;\n  // breaks in e.g. Safari 8, Internet Explorer 11, Opera 12\n  var roundHandlesBoundaryConditions = Math.round(0.5 - (Number.EPSILON / 4)) === 0\n    && Math.round(-0.5 + (Number.EPSILON / 3.99)) === 1;\n\n  // When engines use Math.floor(x + 0.5) internally, Math.round can be buggy for large integers.\n  // This behavior should be governed by \"round to nearest, ties to even mode\"\n  // see http://www.ecma-international.org/ecma-262/6.0/#sec-terms-and-definitions-number-type\n  // These are the boundary cases where it breaks.\n  var smallestPositiveNumberWhereRoundBreaks = inverseEpsilon + 1;\n  var largestPositiveNumberWhereRoundBreaks = (2 * inverseEpsilon) - 1;\n  var roundDoesNotIncreaseIntegers = [\n    smallestPositiveNumberWhereRoundBreaks,\n    largestPositiveNumberWhereRoundBreaks\n  ].every(function (num) {\n    return Math.round(num) === num;\n  });\n  defineProperty(Math, 'round', function round(x) {\n    var floor = _floor(x);\n    var ceil = floor === -1 ? -0 : floor + 1;\n    return x - floor < 0.5 ? floor : ceil;\n  }, !roundHandlesBoundaryConditions || !roundDoesNotIncreaseIntegers);\n  Value.preserveToString(Math.round, origMathRound);\n\n  var origImul = Math.imul;\n  if (Math.imul(0xffffffff, 5) !== -5) {\n    // Safari 6.1, at least, reports \"0\" for this value\n    Math.imul = MathShims.imul;\n    Value.preserveToString(Math.imul, origImul);\n  }\n  if (Math.imul.length !== 2) {\n    // Safari 8.0.4 has a length of 1\n    // fixed in https://bugs.webkit.org/show_bug.cgi?id=143658\n    overrideNative(Math, 'imul', function imul(x, y) {\n      return ES.Call(origImul, Math, arguments);\n    });\n  }\n\n  // Promises\n  // Simplest possible implementation; use a 3rd-party library if you\n  // want the best possible speed and/or long stack traces.\n  var PromiseShim = (function () {\n    var setTimeout = globals.setTimeout;\n    // some environments don't have setTimeout - no way to shim here.\n    if (typeof setTimeout !== 'function' && typeof setTimeout !== 'object') { return; }\n\n    ES.IsPromise = function (promise) {\n      if (!ES.TypeIsObject(promise)) {\n        return false;\n      }\n      if (typeof promise._promise === 'undefined') {\n        return false; // uninitialized, or missing our hidden field.\n      }\n      return true;\n    };\n\n    // \"PromiseCapability\" in the spec is what most promise implementations\n    // call a \"deferred\".\n    var PromiseCapability = function (C) {\n      if (!ES.IsConstructor(C)) {\n        throw new TypeError('Bad promise constructor');\n      }\n      var capability = this;\n      var resolver = function (resolve, reject) {\n        if (capability.resolve !== void 0 || capability.reject !== void 0) {\n          throw new TypeError('Bad Promise implementation!');\n        }\n        capability.resolve = resolve;\n        capability.reject = reject;\n      };\n      // Initialize fields to inform optimizers about the object shape.\n      capability.resolve = void 0;\n      capability.reject = void 0;\n      capability.promise = new C(resolver);\n      if (!(ES.IsCallable(capability.resolve) && ES.IsCallable(capability.reject))) {\n        throw new TypeError('Bad promise constructor');\n      }\n    };\n\n    // find an appropriate setImmediate-alike\n    var makeZeroTimeout;\n    if (typeof window !== 'undefined' && ES.IsCallable(window.postMessage)) {\n      makeZeroTimeout = function () {\n        // from http://dbaron.org/log/20100309-faster-timeouts\n        var timeouts = [];\n        var messageName = 'zero-timeout-message';\n        var setZeroTimeout = function (fn) {\n          _push(timeouts, fn);\n          window.postMessage(messageName, '*');\n        };\n        var handleMessage = function (event) {\n          if (event.source === window && event.data === messageName) {\n            event.stopPropagation();\n            if (timeouts.length === 0) { return; }\n            var fn = _shift(timeouts);\n            fn();\n          }\n        };\n        window.addEventListener('message', handleMessage, true);\n        return setZeroTimeout;\n      };\n    }\n    var makePromiseAsap = function () {\n      // An efficient task-scheduler based on a pre-existing Promise\n      // implementation, which we can use even if we override the\n      // global Promise below (in order to workaround bugs)\n      // https://github.com/Raynos/observ-hash/issues/2#issuecomment-35857671\n      var P = globals.Promise;\n      var pr = P && P.resolve && P.resolve();\n      return pr && function (task) {\n        return pr.then(task);\n      };\n    };\n    var enqueue = ES.IsCallable(globals.setImmediate)\n      ? globals.setImmediate\n      : (\n        typeof process === 'object' && process.nextTick\n          ? process.nextTick\n          : makePromiseAsap() || (ES.IsCallable(makeZeroTimeout) ? makeZeroTimeout() : function (task) { setTimeout(task, 0); })\n      ); // fallback\n\n    // Constants for Promise implementation\n    var PROMISE_IDENTITY = function (x) { return x; };\n    var PROMISE_THROWER = function (e) { throw e; };\n    var PROMISE_PENDING = 0;\n    var PROMISE_FULFILLED = 1;\n    var PROMISE_REJECTED = 2;\n    // We store fulfill/reject handlers and capabilities in a single array.\n    var PROMISE_FULFILL_OFFSET = 0;\n    var PROMISE_REJECT_OFFSET = 1;\n    var PROMISE_CAPABILITY_OFFSET = 2;\n    // This is used in an optimization for chaining promises via then.\n    var PROMISE_FAKE_CAPABILITY = {};\n\n    var enqueuePromiseReactionJob = function (handler, capability, argument) {\n      enqueue(function () {\n        promiseReactionJob(handler, capability, argument);\n      });\n    };\n\n    var promiseReactionJob = function (handler, promiseCapability, argument) {\n      var handlerResult, f;\n      if (promiseCapability === PROMISE_FAKE_CAPABILITY) {\n        // Fast case, when we don't actually need to chain through to a\n        // (real) promiseCapability.\n        return handler(argument);\n      }\n      try {\n        handlerResult = handler(argument);\n        f = promiseCapability.resolve;\n      } catch (e) {\n        handlerResult = e;\n        f = promiseCapability.reject;\n      }\n      f(handlerResult);\n    };\n\n    var fulfillPromise = function (promise, value) {\n      var _promise = promise._promise;\n      var length = _promise.reactionLength;\n      if (length > 0) {\n        enqueuePromiseReactionJob(\n          _promise.fulfillReactionHandler0,\n          _promise.reactionCapability0,\n          value\n        );\n        _promise.fulfillReactionHandler0 = void 0;\n        _promise.rejectReactions0 = void 0;\n        _promise.reactionCapability0 = void 0;\n        if (length > 1) {\n          for (var i = 1, idx = 0; i < length; i++, idx += 3) {\n            enqueuePromiseReactionJob(\n              _promise[idx + PROMISE_FULFILL_OFFSET],\n              _promise[idx + PROMISE_CAPABILITY_OFFSET],\n              value\n            );\n            promise[idx + PROMISE_FULFILL_OFFSET] = void 0;\n            promise[idx + PROMISE_REJECT_OFFSET] = void 0;\n            promise[idx + PROMISE_CAPABILITY_OFFSET] = void 0;\n          }\n        }\n      }\n      _promise.result = value;\n      _promise.state = PROMISE_FULFILLED;\n      _promise.reactionLength = 0;\n    };\n\n    var rejectPromise = function (promise, reason) {\n      var _promise = promise._promise;\n      var length = _promise.reactionLength;\n      if (length > 0) {\n        enqueuePromiseReactionJob(\n          _promise.rejectReactionHandler0,\n          _promise.reactionCapability0,\n          reason\n        );\n        _promise.fulfillReactionHandler0 = void 0;\n        _promise.rejectReactions0 = void 0;\n        _promise.reactionCapability0 = void 0;\n        if (length > 1) {\n          for (var i = 1, idx = 0; i < length; i++, idx += 3) {\n            enqueuePromiseReactionJob(\n              _promise[idx + PROMISE_REJECT_OFFSET],\n              _promise[idx + PROMISE_CAPABILITY_OFFSET],\n              reason\n            );\n            promise[idx + PROMISE_FULFILL_OFFSET] = void 0;\n            promise[idx + PROMISE_REJECT_OFFSET] = void 0;\n            promise[idx + PROMISE_CAPABILITY_OFFSET] = void 0;\n          }\n        }\n      }\n      _promise.result = reason;\n      _promise.state = PROMISE_REJECTED;\n      _promise.reactionLength = 0;\n    };\n\n    var createResolvingFunctions = function (promise) {\n      var alreadyResolved = false;\n      var resolve = function (resolution) {\n        var then;\n        if (alreadyResolved) { return; }\n        alreadyResolved = true;\n        if (resolution === promise) {\n          return rejectPromise(promise, new TypeError('Self resolution'));\n        }\n        if (!ES.TypeIsObject(resolution)) {\n          return fulfillPromise(promise, resolution);\n        }\n        try {\n          then = resolution.then;\n        } catch (e) {\n          return rejectPromise(promise, e);\n        }\n        if (!ES.IsCallable(then)) {\n          return fulfillPromise(promise, resolution);\n        }\n        enqueue(function () {\n          promiseResolveThenableJob(promise, resolution, then);\n        });\n      };\n      var reject = function (reason) {\n        if (alreadyResolved) { return; }\n        alreadyResolved = true;\n        return rejectPromise(promise, reason);\n      };\n      return { resolve: resolve, reject: reject };\n    };\n\n    var optimizedThen = function (then, thenable, resolve, reject) {\n      // Optimization: since we discard the result, we can pass our\n      // own then implementation a special hint to let it know it\n      // doesn't have to create it.  (The PROMISE_FAKE_CAPABILITY\n      // object is local to this implementation and unforgeable outside.)\n      if (then === Promise$prototype$then) {\n        _call(then, thenable, resolve, reject, PROMISE_FAKE_CAPABILITY);\n      } else {\n        _call(then, thenable, resolve, reject);\n      }\n    };\n    var promiseResolveThenableJob = function (promise, thenable, then) {\n      var resolvingFunctions = createResolvingFunctions(promise);\n      var resolve = resolvingFunctions.resolve;\n      var reject = resolvingFunctions.reject;\n      try {\n        optimizedThen(then, thenable, resolve, reject);\n      } catch (e) {\n        reject(e);\n      }\n    };\n\n    var Promise$prototype, Promise$prototype$then;\n    var Promise = (function () {\n      var PromiseShim = function Promise(resolver) {\n        if (!(this instanceof PromiseShim)) {\n          throw new TypeError('Constructor Promise requires \"new\"');\n        }\n        if (this && this._promise) {\n          throw new TypeError('Bad construction');\n        }\n        // see https://bugs.ecmascript.org/show_bug.cgi?id=2482\n        if (!ES.IsCallable(resolver)) {\n          throw new TypeError('not a valid resolver');\n        }\n        var promise = emulateES6construct(this, PromiseShim, Promise$prototype, {\n          _promise: {\n            result: void 0,\n            state: PROMISE_PENDING,\n            // The first member of the \"reactions\" array is inlined here,\n            // since most promises only have one reaction.\n            // We've also exploded the 'reaction' object to inline the\n            // \"handler\" and \"capability\" fields, since both fulfill and\n            // reject reactions share the same capability.\n            reactionLength: 0,\n            fulfillReactionHandler0: void 0,\n            rejectReactionHandler0: void 0,\n            reactionCapability0: void 0\n          }\n        });\n        var resolvingFunctions = createResolvingFunctions(promise);\n        var reject = resolvingFunctions.reject;\n        try {\n          resolver(resolvingFunctions.resolve, reject);\n        } catch (e) {\n          reject(e);\n        }\n        return promise;\n      };\n      return PromiseShim;\n    }());\n    Promise$prototype = Promise.prototype;\n\n    var _promiseAllResolver = function (index, values, capability, remaining) {\n      var alreadyCalled = false;\n      return function (x) {\n        if (alreadyCalled) { return; }\n        alreadyCalled = true;\n        values[index] = x;\n        if ((--remaining.count) === 0) {\n          var resolve = capability.resolve;\n          resolve(values); // call w/ this===undefined\n        }\n      };\n    };\n\n    var performPromiseAll = function (iteratorRecord, C, resultCapability) {\n      var it = iteratorRecord.iterator;\n      var values = [];\n      var remaining = { count: 1 };\n      var next, nextValue;\n      var index = 0;\n      while (true) {\n        try {\n          next = ES.IteratorStep(it);\n          if (next === false) {\n            iteratorRecord.done = true;\n            break;\n          }\n          nextValue = next.value;\n        } catch (e) {\n          iteratorRecord.done = true;\n          throw e;\n        }\n        values[index] = void 0;\n        var nextPromise = C.resolve(nextValue);\n        var resolveElement = _promiseAllResolver(\n          index,\n          values,\n          resultCapability,\n          remaining\n        );\n        remaining.count += 1;\n        optimizedThen(nextPromise.then, nextPromise, resolveElement, resultCapability.reject);\n        index += 1;\n      }\n      if ((--remaining.count) === 0) {\n        var resolve = resultCapability.resolve;\n        resolve(values); // call w/ this===undefined\n      }\n      return resultCapability.promise;\n    };\n\n    var performPromiseRace = function (iteratorRecord, C, resultCapability) {\n      var it = iteratorRecord.iterator;\n      var next, nextValue, nextPromise;\n      while (true) {\n        try {\n          next = ES.IteratorStep(it);\n          if (next === false) {\n            // NOTE: If iterable has no items, resulting promise will never\n            // resolve; see:\n            // https://github.com/domenic/promises-unwrapping/issues/75\n            // https://bugs.ecmascript.org/show_bug.cgi?id=2515\n            iteratorRecord.done = true;\n            break;\n          }\n          nextValue = next.value;\n        } catch (e) {\n          iteratorRecord.done = true;\n          throw e;\n        }\n        nextPromise = C.resolve(nextValue);\n        optimizedThen(nextPromise.then, nextPromise, resultCapability.resolve, resultCapability.reject);\n      }\n      return resultCapability.promise;\n    };\n\n    defineProperties(Promise, {\n      all: function all(iterable) {\n        var C = this;\n        if (!ES.TypeIsObject(C)) {\n          throw new TypeError('Promise is not object');\n        }\n        var capability = new PromiseCapability(C);\n        var iterator, iteratorRecord;\n        try {\n          iterator = ES.GetIterator(iterable);\n          iteratorRecord = { iterator: iterator, done: false };\n          return performPromiseAll(iteratorRecord, C, capability);\n        } catch (e) {\n          var exception = e;\n          if (iteratorRecord && !iteratorRecord.done) {\n            try {\n              ES.IteratorClose(iterator, true);\n            } catch (ee) {\n              exception = ee;\n            }\n          }\n          var reject = capability.reject;\n          reject(exception);\n          return capability.promise;\n        }\n      },\n\n      race: function race(iterable) {\n        var C = this;\n        if (!ES.TypeIsObject(C)) {\n          throw new TypeError('Promise is not object');\n        }\n        var capability = new PromiseCapability(C);\n        var iterator, iteratorRecord;\n        try {\n          iterator = ES.GetIterator(iterable);\n          iteratorRecord = { iterator: iterator, done: false };\n          return performPromiseRace(iteratorRecord, C, capability);\n        } catch (e) {\n          var exception = e;\n          if (iteratorRecord && !iteratorRecord.done) {\n            try {\n              ES.IteratorClose(iterator, true);\n            } catch (ee) {\n              exception = ee;\n            }\n          }\n          var reject = capability.reject;\n          reject(exception);\n          return capability.promise;\n        }\n      },\n\n      reject: function reject(reason) {\n        var C = this;\n        if (!ES.TypeIsObject(C)) {\n          throw new TypeError('Bad promise constructor');\n        }\n        var capability = new PromiseCapability(C);\n        var rejectFunc = capability.reject;\n        rejectFunc(reason); // call with this===undefined\n        return capability.promise;\n      },\n\n      resolve: function resolve(v) {\n        // See https://esdiscuss.org/topic/fixing-promise-resolve for spec\n        var C = this;\n        if (!ES.TypeIsObject(C)) {\n          throw new TypeError('Bad promise constructor');\n        }\n        if (ES.IsPromise(v)) {\n          var constructor = v.constructor;\n          if (constructor === C) {\n            return v;\n          }\n        }\n        var capability = new PromiseCapability(C);\n        var resolveFunc = capability.resolve;\n        resolveFunc(v); // call with this===undefined\n        return capability.promise;\n      }\n    });\n\n    defineProperties(Promise$prototype, {\n      'catch': function (onRejected) {\n        return this.then(null, onRejected);\n      },\n\n      then: function then(onFulfilled, onRejected) {\n        var promise = this;\n        if (!ES.IsPromise(promise)) { throw new TypeError('not a promise'); }\n        var C = ES.SpeciesConstructor(promise, Promise);\n        var resultCapability;\n        var returnValueIsIgnored = arguments.length > 2 && arguments[2] === PROMISE_FAKE_CAPABILITY;\n        if (returnValueIsIgnored && C === Promise) {\n          resultCapability = PROMISE_FAKE_CAPABILITY;\n        } else {\n          resultCapability = new PromiseCapability(C);\n        }\n        // PerformPromiseThen(promise, onFulfilled, onRejected, resultCapability)\n        // Note that we've split the 'reaction' object into its two\n        // components, \"capabilities\" and \"handler\"\n        // \"capabilities\" is always equal to `resultCapability`\n        var fulfillReactionHandler = ES.IsCallable(onFulfilled) ? onFulfilled : PROMISE_IDENTITY;\n        var rejectReactionHandler = ES.IsCallable(onRejected) ? onRejected : PROMISE_THROWER;\n        var _promise = promise._promise;\n        var value;\n        if (_promise.state === PROMISE_PENDING) {\n          if (_promise.reactionLength === 0) {\n            _promise.fulfillReactionHandler0 = fulfillReactionHandler;\n            _promise.rejectReactionHandler0 = rejectReactionHandler;\n            _promise.reactionCapability0 = resultCapability;\n          } else {\n            var idx = 3 * (_promise.reactionLength - 1);\n            _promise[idx + PROMISE_FULFILL_OFFSET] = fulfillReactionHandler;\n            _promise[idx + PROMISE_REJECT_OFFSET] = rejectReactionHandler;\n            _promise[idx + PROMISE_CAPABILITY_OFFSET] = resultCapability;\n          }\n          _promise.reactionLength += 1;\n        } else if (_promise.state === PROMISE_FULFILLED) {\n          value = _promise.result;\n          enqueuePromiseReactionJob(\n            fulfillReactionHandler,\n            resultCapability,\n            value\n          );\n        } else if (_promise.state === PROMISE_REJECTED) {\n          value = _promise.result;\n          enqueuePromiseReactionJob(\n            rejectReactionHandler,\n            resultCapability,\n            value\n          );\n        } else {\n          throw new TypeError('unexpected Promise state');\n        }\n        return resultCapability.promise;\n      }\n    });\n    // This helps the optimizer by ensuring that methods which take\n    // capabilities aren't polymorphic.\n    PROMISE_FAKE_CAPABILITY = new PromiseCapability(Promise);\n    Promise$prototype$then = Promise$prototype.then;\n\n    return Promise;\n  }());\n\n  // Chrome's native Promise has extra methods that it shouldn't have. Let's remove them.\n  if (globals.Promise) {\n    delete globals.Promise.accept;\n    delete globals.Promise.defer;\n    delete globals.Promise.prototype.chain;\n  }\n\n  if (typeof PromiseShim === 'function') {\n    // export the Promise constructor.\n    defineProperties(globals, { Promise: PromiseShim });\n    // In Chrome 33 (and thereabouts) Promise is defined, but the\n    // implementation is buggy in a number of ways.  Let's check subclassing\n    // support to see if we have a buggy implementation.\n    var promiseSupportsSubclassing = supportsSubclassing(globals.Promise, function (S) {\n      return S.resolve(42).then(function () {}) instanceof S;\n    });\n    var promiseIgnoresNonFunctionThenCallbacks = !throwsError(function () {\n      return globals.Promise.reject(42).then(null, 5).then(null, noop);\n    });\n    var promiseRequiresObjectContext = throwsError(function () { return globals.Promise.call(3, noop); });\n    // Promise.resolve() was errata'ed late in the ES6 process.\n    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1170742\n    //      https://code.google.com/p/v8/issues/detail?id=4161\n    // It serves as a proxy for a number of other bugs in early Promise\n    // implementations.\n    var promiseResolveBroken = (function (Promise) {\n      var p = Promise.resolve(5);\n      p.constructor = {};\n      var p2 = Promise.resolve(p);\n      try {\n        p2.then(null, noop).then(null, noop); // avoid \"uncaught rejection\" warnings in console\n      } catch (e) {\n        return true; // v8 native Promises break here https://code.google.com/p/chromium/issues/detail?id=575314\n      }\n      return p === p2; // This *should* be false!\n    }(globals.Promise));\n\n    // Chrome 46 (probably older too) does not retrieve a thenable's .then synchronously\n    var getsThenSynchronously = supportsDescriptors && (function () {\n      var count = 0;\n      // eslint-disable-next-line getter-return\n      var thenable = Object.defineProperty({}, 'then', { get: function () { count += 1; } });\n      Promise.resolve(thenable);\n      return count === 1;\n    }());\n\n    var BadResolverPromise = function BadResolverPromise(executor) {\n      var p = new Promise(executor);\n      executor(3, function () {});\n      this.then = p.then;\n      this.constructor = BadResolverPromise;\n    };\n    BadResolverPromise.prototype = Promise.prototype;\n    BadResolverPromise.all = Promise.all;\n    // Chrome Canary 49 (probably older too) has some implementation bugs\n    var hasBadResolverPromise = valueOrFalseIfThrows(function () {\n      return !!BadResolverPromise.all([1, 2]);\n    });\n\n    if (\n      !promiseSupportsSubclassing\n      || !promiseIgnoresNonFunctionThenCallbacks\n      || !promiseRequiresObjectContext\n      || promiseResolveBroken\n      || !getsThenSynchronously\n      || hasBadResolverPromise\n    ) {\n      Promise = PromiseShim; // eslint-disable-line no-global-assign\n      overrideNative(globals, 'Promise', PromiseShim);\n    }\n    if (Promise.all.length !== 1) {\n      var origAll = Promise.all;\n      overrideNative(Promise, 'all', function all(iterable) {\n        return ES.Call(origAll, this, arguments);\n      });\n    }\n    if (Promise.race.length !== 1) {\n      var origRace = Promise.race;\n      overrideNative(Promise, 'race', function race(iterable) {\n        return ES.Call(origRace, this, arguments);\n      });\n    }\n    if (Promise.resolve.length !== 1) {\n      var origResolve = Promise.resolve;\n      overrideNative(Promise, 'resolve', function resolve(x) {\n        return ES.Call(origResolve, this, arguments);\n      });\n    }\n    if (Promise.reject.length !== 1) {\n      var origReject = Promise.reject;\n      overrideNative(Promise, 'reject', function reject(r) {\n        return ES.Call(origReject, this, arguments);\n      });\n    }\n    ensureEnumerable(Promise, 'all');\n    ensureEnumerable(Promise, 'race');\n    ensureEnumerable(Promise, 'resolve');\n    ensureEnumerable(Promise, 'reject');\n    addDefaultSpecies(Promise);\n  }\n\n  // Map and Set require a true ES5 environment\n  // Their fast path also requires that the environment preserve\n  // property insertion order, which is not guaranteed by the spec.\n  var testOrder = function (a) {\n    var b = keys(_reduce(a, function (o, k) {\n      o[k] = true;\n      return o;\n    }, {}));\n    return a.join(':') === b.join(':');\n  };\n  var preservesInsertionOrder = testOrder(['z', 'a', 'bb']);\n  // some engines (eg, Chrome) only preserve insertion order for string keys\n  var preservesNumericInsertionOrder = testOrder(['z', 1, 'a', '3', 2]);\n\n  if (supportsDescriptors) {\n\n    var fastkey = function fastkey(key, skipInsertionOrderCheck) {\n      if (!skipInsertionOrderCheck && !preservesInsertionOrder) {\n        return null;\n      }\n      if (isNullOrUndefined(key)) {\n        return '^' + ES.ToString(key);\n      } else if (typeof key === 'string') {\n        return '$' + key;\n      } else if (typeof key === 'number') {\n        // note that -0 will get coerced to \"0\" when used as a property key\n        if (!preservesNumericInsertionOrder) {\n          return 'n' + key;\n        }\n        return key;\n      } else if (typeof key === 'boolean') {\n        return 'b' + key;\n      }\n      return null;\n    };\n\n    var emptyObject = function emptyObject() {\n      // accomodate some older not-quite-ES5 browsers\n      return Object.create ? Object.create(null) : {};\n    };\n\n    var addIterableToMap = function addIterableToMap(MapConstructor, map, iterable) {\n      if (isArray(iterable) || Type.string(iterable)) {\n        _forEach(iterable, function (entry) {\n          if (!ES.TypeIsObject(entry)) {\n            throw new TypeError('Iterator value ' + entry + ' is not an entry object');\n          }\n          map.set(entry[0], entry[1]);\n        });\n      } else if (iterable instanceof MapConstructor) {\n        _call(MapConstructor.prototype.forEach, iterable, function (value, key) {\n          map.set(key, value);\n        });\n      } else {\n        var iter, adder;\n        if (!isNullOrUndefined(iterable)) {\n          adder = map.set;\n          if (!ES.IsCallable(adder)) { throw new TypeError('bad map'); }\n          iter = ES.GetIterator(iterable);\n        }\n        if (typeof iter !== 'undefined') {\n          while (true) {\n            var next = ES.IteratorStep(iter);\n            if (next === false) { break; }\n            var nextItem = next.value;\n            try {\n              if (!ES.TypeIsObject(nextItem)) {\n                throw new TypeError('Iterator value ' + nextItem + ' is not an entry object');\n              }\n              _call(adder, map, nextItem[0], nextItem[1]);\n            } catch (e) {\n              ES.IteratorClose(iter, true);\n              throw e;\n            }\n          }\n        }\n      }\n    };\n    var addIterableToSet = function addIterableToSet(SetConstructor, set, iterable) {\n      if (isArray(iterable) || Type.string(iterable)) {\n        _forEach(iterable, function (value) {\n          set.add(value);\n        });\n      } else if (iterable instanceof SetConstructor) {\n        _call(SetConstructor.prototype.forEach, iterable, function (value) {\n          set.add(value);\n        });\n      } else {\n        var iter, adder;\n        if (!isNullOrUndefined(iterable)) {\n          adder = set.add;\n          if (!ES.IsCallable(adder)) { throw new TypeError('bad set'); }\n          iter = ES.GetIterator(iterable);\n        }\n        if (typeof iter !== 'undefined') {\n          while (true) {\n            var next = ES.IteratorStep(iter);\n            if (next === false) { break; }\n            var nextValue = next.value;\n            try {\n              _call(adder, set, nextValue);\n            } catch (e) {\n              ES.IteratorClose(iter, true);\n              throw e;\n            }\n          }\n        }\n      }\n    };\n\n    var collectionShims = {\n      Map: (function () {\n\n        var empty = {};\n\n        var MapEntry = function MapEntry(key, value) {\n          this.key = key;\n          this.value = value;\n          this.next = null;\n          this.prev = null;\n        };\n\n        MapEntry.prototype.isRemoved = function isRemoved() {\n          return this.key === empty;\n        };\n\n        var isMap = function isMap(map) {\n          return !!map._es6map;\n        };\n\n        var requireMapSlot = function requireMapSlot(map, method) {\n          if (!ES.TypeIsObject(map) || !isMap(map)) {\n            throw new TypeError('Method Map.prototype.' + method + ' called on incompatible receiver ' + ES.ToString(map));\n          }\n        };\n\n        var MapIterator = function MapIterator(map, kind) {\n          requireMapSlot(map, '[[MapIterator]]');\n          defineProperty(this, 'head', map._head);\n          defineProperty(this, 'i', this.head);\n          defineProperty(this, 'kind', kind);\n        };\n\n        MapIterator.prototype = {\n          isMapIterator: true,\n          next: function next() {\n            if (!this.isMapIterator) {\n              throw new TypeError('Not a MapIterator');\n            }\n            var i = this.i;\n            var kind = this.kind;\n            var head = this.head;\n            if (typeof this.i === 'undefined') {\n              return iteratorResult();\n            }\n            while (i.isRemoved() && i !== head) {\n              // back up off of removed entries\n              i = i.prev;\n            }\n            // advance to next unreturned element.\n            var result;\n            while (i.next !== head) {\n              i = i.next;\n              if (!i.isRemoved()) {\n                if (kind === 'key') {\n                  result = i.key;\n                } else if (kind === 'value') {\n                  result = i.value;\n                } else {\n                  result = [i.key, i.value];\n                }\n                this.i = i;\n                return iteratorResult(result);\n              }\n            }\n            // once the iterator is done, it is done forever.\n            this.i = void 0;\n            return iteratorResult();\n          }\n        };\n        addIterator(MapIterator.prototype);\n\n        var Map$prototype;\n        var MapShim = function Map() {\n          if (!(this instanceof Map)) {\n            throw new TypeError('Constructor Map requires \"new\"');\n          }\n          if (this && this._es6map) {\n            throw new TypeError('Bad construction');\n          }\n          var map = emulateES6construct(this, Map, Map$prototype, {\n            _es6map: true,\n            _head: null,\n            _map: OrigMap ? new OrigMap() : null,\n            _size: 0,\n            _storage: emptyObject()\n          });\n\n          var head = new MapEntry(null, null);\n          // circular doubly-linked list.\n          /* eslint no-multi-assign: 1 */\n          head.next = head.prev = head;\n          map._head = head;\n\n          // Optionally initialize map from iterable\n          if (arguments.length > 0) {\n            addIterableToMap(Map, map, arguments[0]);\n          }\n          return map;\n        };\n        Map$prototype = MapShim.prototype;\n\n        Value.getter(Map$prototype, 'size', function () {\n          if (typeof this._size === 'undefined') {\n            throw new TypeError('size method called on incompatible Map');\n          }\n          return this._size;\n        });\n\n        defineProperties(Map$prototype, {\n          get: function get(key) {\n            requireMapSlot(this, 'get');\n            var entry;\n            var fkey = fastkey(key, true);\n            if (fkey !== null) {\n              // fast O(1) path\n              entry = this._storage[fkey];\n              if (entry) {\n                return entry.value;\n              }\n              return;\n\n            }\n            if (this._map) {\n              // fast object key path\n              entry = origMapGet.call(this._map, key);\n              if (entry) {\n                return entry.value;\n              }\n              return;\n\n            }\n            var head = this._head;\n            var i = head;\n            while ((i = i.next) !== head) {\n              if (ES.SameValueZero(i.key, key)) {\n                return i.value;\n              }\n            }\n          },\n\n          has: function has(key) {\n            requireMapSlot(this, 'has');\n            var fkey = fastkey(key, true);\n            if (fkey !== null) {\n              // fast O(1) path\n              return typeof this._storage[fkey] !== 'undefined';\n            }\n            if (this._map) {\n              // fast object key path\n              return origMapHas.call(this._map, key);\n            }\n            var head = this._head;\n            var i = head;\n            while ((i = i.next) !== head) {\n              if (ES.SameValueZero(i.key, key)) {\n                return true;\n              }\n            }\n            return false;\n          },\n\n          set: function set(key, value) {\n            requireMapSlot(this, 'set');\n            var head = this._head;\n            var i = head;\n            var entry;\n            var fkey = fastkey(key, true);\n            if (fkey !== null) {\n              // fast O(1) path\n              if (typeof this._storage[fkey] !== 'undefined') {\n                this._storage[fkey].value = value;\n                return this;\n              }\n              entry = this._storage[fkey] = new MapEntry(key, value); /* eslint no-multi-assign: 1 */\n              i = head.prev;\n              // fall through\n\n            } else if (this._map) {\n              // fast object key path\n              if (origMapHas.call(this._map, key)) {\n                origMapGet.call(this._map, key).value = value;\n              } else {\n                entry = new MapEntry(key, value);\n                origMapSet.call(this._map, key, entry);\n                i = head.prev;\n                // fall through\n              }\n            }\n            while ((i = i.next) !== head) {\n              if (ES.SameValueZero(i.key, key)) {\n                i.value = value;\n                return this;\n              }\n            }\n            entry = entry || new MapEntry(key, value);\n            if (ES.SameValue(-0, key)) {\n              entry.key = +0; // coerce -0 to +0 in entry\n            }\n            entry.next = this._head;\n            entry.prev = this._head.prev;\n            entry.prev.next = entry;\n            entry.next.prev = entry;\n            this._size += 1;\n            return this;\n          },\n\n          'delete': function (key) {\n            requireMapSlot(this, 'delete');\n            var head = this._head;\n            var i = head;\n            var fkey = fastkey(key, true);\n            if (fkey !== null) {\n              // fast O(1) path\n              if (typeof this._storage[fkey] === 'undefined') {\n                return false;\n              }\n              i = this._storage[fkey].prev;\n              delete this._storage[fkey];\n              // fall through\n            } else if (this._map) {\n              // fast object key path\n              if (!origMapHas.call(this._map, key)) {\n                return false;\n              }\n              i = origMapGet.call(this._map, key).prev;\n              origMapDelete.call(this._map, key);\n              // fall through\n            }\n            while ((i = i.next) !== head) {\n              if (ES.SameValueZero(i.key, key)) {\n                i.key = empty;\n                i.value = empty;\n                i.prev.next = i.next;\n                i.next.prev = i.prev;\n                this._size -= 1;\n                return true;\n              }\n            }\n            return false;\n          },\n\n          clear: function clear() {\n            /* eslint no-multi-assign: 1 */\n            requireMapSlot(this, 'clear');\n            this._map = OrigMap ? new OrigMap() : null;\n            this._size = 0;\n            this._storage = emptyObject();\n            var head = this._head;\n            var i = head;\n            var p = i.next;\n            while ((i = p) !== head) {\n              i.key = empty;\n              i.value = empty;\n              p = i.next;\n              i.next = i.prev = head;\n            }\n            head.next = head.prev = head;\n          },\n\n          keys: function keys() {\n            requireMapSlot(this, 'keys');\n            return new MapIterator(this, 'key');\n          },\n\n          values: function values() {\n            requireMapSlot(this, 'values');\n            return new MapIterator(this, 'value');\n          },\n\n          entries: function entries() {\n            requireMapSlot(this, 'entries');\n            return new MapIterator(this, 'key+value');\n          },\n\n          forEach: function forEach(callback) {\n            requireMapSlot(this, 'forEach');\n            var context = arguments.length > 1 ? arguments[1] : null;\n            var it = this.entries();\n            for (var entry = it.next(); !entry.done; entry = it.next()) {\n              if (context) {\n                _call(callback, context, entry.value[1], entry.value[0], this);\n              } else {\n                callback(entry.value[1], entry.value[0], this);\n              }\n            }\n          }\n        });\n        addIterator(Map$prototype, Map$prototype.entries);\n\n        return MapShim;\n      }()),\n\n      Set: (function () {\n        var isSet = function isSet(set) {\n          return set._es6set && typeof set._storage !== 'undefined';\n        };\n        var requireSetSlot = function requireSetSlot(set, method) {\n          if (!ES.TypeIsObject(set) || !isSet(set)) {\n            // https://github.com/paulmillr/es6-shim/issues/176\n            throw new TypeError('Set.prototype.' + method + ' called on incompatible receiver ' + ES.ToString(set));\n          }\n        };\n\n        // Creating a Map is expensive.  To speed up the common case of\n        // Sets containing only string or numeric keys, we use an object\n        // as backing storage and lazily create a full Map only when\n        // required.\n        var Set$prototype;\n        var SetShim = function Set() {\n          if (!(this instanceof Set)) {\n            throw new TypeError('Constructor Set requires \"new\"');\n          }\n          if (this && this._es6set) {\n            throw new TypeError('Bad construction');\n          }\n          var set = emulateES6construct(this, Set, Set$prototype, {\n            _es6set: true,\n            '[[SetData]]': null,\n            _storage: emptyObject()\n          });\n          if (!set._es6set) {\n            throw new TypeError('bad set');\n          }\n\n          // Optionally initialize Set from iterable\n          if (arguments.length > 0) {\n            addIterableToSet(Set, set, arguments[0]);\n          }\n          return set;\n        };\n        Set$prototype = SetShim.prototype;\n\n        var decodeKey = function (key) {\n          var k = key;\n          if (k === '^null') {\n            return null;\n          } else if (k === '^undefined') {\n            return void 0;\n          }\n          var first = k.charAt(0);\n          if (first === '$') {\n            return _strSlice(k, 1);\n          } else if (first === 'n') {\n            return +_strSlice(k, 1);\n          } else if (first === 'b') {\n            return k === 'btrue';\n          }\n\n          return +k;\n        };\n        // Switch from the object backing storage to a full Map.\n        var ensureMap = function ensureMap(set) {\n          if (!set['[[SetData]]']) {\n            var m = new collectionShims.Map();\n            set['[[SetData]]'] = m;\n            _forEach(keys(set._storage), function (key) {\n              var k = decodeKey(key);\n              m.set(k, k);\n            });\n            set['[[SetData]]'] = m;\n          }\n          set._storage = null; // free old backing storage\n        };\n\n        Value.getter(SetShim.prototype, 'size', function () {\n          requireSetSlot(this, 'size');\n          if (this._storage) {\n            return keys(this._storage).length;\n          }\n          ensureMap(this);\n          return this['[[SetData]]'].size;\n        });\n\n        defineProperties(SetShim.prototype, {\n          has: function has(key) {\n            requireSetSlot(this, 'has');\n            var fkey;\n            if (this._storage && (fkey = fastkey(key)) !== null) {\n              return !!this._storage[fkey];\n            }\n            ensureMap(this);\n            return this['[[SetData]]'].has(key);\n          },\n\n          add: function add(key) {\n            requireSetSlot(this, 'add');\n            var fkey;\n            if (this._storage && (fkey = fastkey(key)) !== null) {\n              this._storage[fkey] = true;\n              return this;\n            }\n            ensureMap(this);\n            this['[[SetData]]'].set(key, key);\n            return this;\n          },\n\n          'delete': function (key) {\n            requireSetSlot(this, 'delete');\n            var fkey;\n            if (this._storage && (fkey = fastkey(key)) !== null) {\n              var hasFKey = _hasOwnProperty(this._storage, fkey);\n              return (delete this._storage[fkey]) && hasFKey;\n            }\n            ensureMap(this);\n            return this['[[SetData]]']['delete'](key);\n          },\n\n          clear: function clear() {\n            requireSetSlot(this, 'clear');\n            if (this._storage) {\n              this._storage = emptyObject();\n            }\n            if (this['[[SetData]]']) {\n              this['[[SetData]]'].clear();\n            }\n          },\n\n          values: function values() {\n            requireSetSlot(this, 'values');\n            ensureMap(this);\n            return new SetIterator(this['[[SetData]]'].values());\n          },\n\n          entries: function entries() {\n            requireSetSlot(this, 'entries');\n            ensureMap(this);\n            return new SetIterator(this['[[SetData]]'].entries());\n          },\n\n          forEach: function forEach(callback) {\n            requireSetSlot(this, 'forEach');\n            var context = arguments.length > 1 ? arguments[1] : null;\n            var entireSet = this;\n            ensureMap(entireSet);\n            this['[[SetData]]'].forEach(function (value, key) {\n              if (context) {\n                _call(callback, context, key, key, entireSet);\n              } else {\n                callback(key, key, entireSet);\n              }\n            });\n          }\n        });\n        defineProperty(SetShim.prototype, 'keys', SetShim.prototype.values, true);\n        addIterator(SetShim.prototype, SetShim.prototype.values);\n\n        var SetIterator = function SetIterator(it) {\n          defineProperty(this, 'it', it);\n        };\n        SetIterator.prototype = {\n          isSetIterator: true,\n          next: function next() {\n            if (!this.isSetIterator) {\n              throw new TypeError('Not a SetIterator');\n            }\n            return this.it.next();\n          }\n        };\n        addIterator(SetIterator.prototype);\n\n        return SetShim;\n      }())\n    };\n\n    var isGoogleTranslate = globals.Set && !Set.prototype['delete'] && Set.prototype.remove && Set.prototype.items && Set.prototype.map && Array.isArray(new Set().keys);\n    if (isGoogleTranslate) {\n      // special-case force removal of wildly invalid Set implementation in Google Translate iframes\n      // see https://github.com/paulmillr/es6-shim/issues/438 / https://twitter.com/ljharb/status/849335573114363904\n      globals.Set = collectionShims.Set;\n    }\n    if (globals.Map || globals.Set) {\n      // Safari 8, for example, doesn't accept an iterable.\n      var mapAcceptsArguments = valueOrFalseIfThrows(function () { return new Map([[1, 2]]).get(1) === 2; });\n      if (!mapAcceptsArguments) {\n        globals.Map = function Map() {\n          if (!(this instanceof Map)) {\n            throw new TypeError('Constructor Map requires \"new\"');\n          }\n          var m = new OrigMap();\n          if (arguments.length > 0) {\n            addIterableToMap(Map, m, arguments[0]);\n          }\n          delete m.constructor;\n          Object.setPrototypeOf(m, globals.Map.prototype);\n          return m;\n        };\n        globals.Map.prototype = create(OrigMap.prototype);\n        defineProperty(globals.Map.prototype, 'constructor', globals.Map, true);\n        Value.preserveToString(globals.Map, OrigMap);\n      }\n      var testMap = new Map();\n      var mapUsesSameValueZero = (function () {\n        // Chrome 38-42, node 0.11/0.12, iojs 1/2 also have a bug when the Map has a size > 4\n        var m = new Map([[1, 0], [2, 0], [3, 0], [4, 0]]);\n        m.set(-0, m);\n        return m.get(0) === m && m.get(-0) === m && m.has(0) && m.has(-0);\n      }());\n      var mapSupportsChaining = testMap.set(1, 2) === testMap;\n      if (!mapUsesSameValueZero || !mapSupportsChaining) {\n        overrideNative(Map.prototype, 'set', function set(k, v) {\n          _call(origMapSet, this, k === 0 ? 0 : k, v);\n          return this;\n        });\n      }\n      if (!mapUsesSameValueZero) {\n        defineProperties(Map.prototype, {\n          get: function get(k) {\n            return _call(origMapGet, this, k === 0 ? 0 : k);\n          },\n          has: function has(k) {\n            return _call(origMapHas, this, k === 0 ? 0 : k);\n          }\n        }, true);\n        Value.preserveToString(Map.prototype.get, origMapGet);\n        Value.preserveToString(Map.prototype.has, origMapHas);\n      }\n      var testSet = new Set();\n      var setUsesSameValueZero = Set.prototype['delete'] && Set.prototype.add && Set.prototype.has && (function (s) {\n        s['delete'](0);\n        s.add(-0);\n        return !s.has(0);\n      }(testSet));\n      var setSupportsChaining = testSet.add(1) === testSet;\n      if (!setUsesSameValueZero || !setSupportsChaining) {\n        var origSetAdd = Set.prototype.add;\n        Set.prototype.add = function add(v) {\n          _call(origSetAdd, this, v === 0 ? 0 : v);\n          return this;\n        };\n        Value.preserveToString(Set.prototype.add, origSetAdd);\n      }\n      if (!setUsesSameValueZero) {\n        var origSetHas = Set.prototype.has;\n        Set.prototype.has = function has(v) {\n          return _call(origSetHas, this, v === 0 ? 0 : v);\n        };\n        Value.preserveToString(Set.prototype.has, origSetHas);\n        var origSetDel = Set.prototype['delete'];\n        Set.prototype['delete'] = function SetDelete(v) {\n          return _call(origSetDel, this, v === 0 ? 0 : v);\n        };\n        Value.preserveToString(Set.prototype['delete'], origSetDel);\n      }\n      var mapSupportsSubclassing = supportsSubclassing(globals.Map, function (M) {\n        var m = new M([]);\n        // Firefox 32 is ok with the instantiating the subclass but will\n        // throw when the map is used.\n        m.set(42, 42);\n        return m instanceof M;\n      });\n      // without Object.setPrototypeOf, subclassing is not possible\n      var mapFailsToSupportSubclassing = Object.setPrototypeOf && !mapSupportsSubclassing;\n      var mapRequiresNew = (function () {\n        try {\n          return !(globals.Map() instanceof globals.Map);\n        } catch (e) {\n          return e instanceof TypeError;\n        }\n      }());\n      if (globals.Map.length !== 0 || mapFailsToSupportSubclassing || !mapRequiresNew) {\n        globals.Map = function Map() {\n          if (!(this instanceof Map)) {\n            throw new TypeError('Constructor Map requires \"new\"');\n          }\n          var m = new OrigMap();\n          if (arguments.length > 0) {\n            addIterableToMap(Map, m, arguments[0]);\n          }\n          delete m.constructor;\n          Object.setPrototypeOf(m, Map.prototype);\n          return m;\n        };\n        globals.Map.prototype = OrigMap.prototype;\n        defineProperty(globals.Map.prototype, 'constructor', globals.Map, true);\n        Value.preserveToString(globals.Map, OrigMap);\n      }\n      var setSupportsSubclassing = supportsSubclassing(globals.Set, function (S) {\n        var s = new S([]);\n        s.add(42, 42);\n        return s instanceof S;\n      });\n      // without Object.setPrototypeOf, subclassing is not possible\n      var setFailsToSupportSubclassing = Object.setPrototypeOf && !setSupportsSubclassing;\n      var setRequiresNew = (function () {\n        try {\n          return !(globals.Set() instanceof globals.Set);\n        } catch (e) {\n          return e instanceof TypeError;\n        }\n      }());\n      if (globals.Set.length !== 0 || setFailsToSupportSubclassing || !setRequiresNew) {\n        var OrigSet = globals.Set;\n        globals.Set = function Set() {\n          if (!(this instanceof Set)) {\n            throw new TypeError('Constructor Set requires \"new\"');\n          }\n          var s = new OrigSet();\n          if (arguments.length > 0) {\n            addIterableToSet(Set, s, arguments[0]);\n          }\n          delete s.constructor;\n          Object.setPrototypeOf(s, Set.prototype);\n          return s;\n        };\n        globals.Set.prototype = OrigSet.prototype;\n        defineProperty(globals.Set.prototype, 'constructor', globals.Set, true);\n        Value.preserveToString(globals.Set, OrigSet);\n      }\n      var newMap = new globals.Map();\n      var mapIterationThrowsStopIterator = !valueOrFalseIfThrows(function () {\n        return newMap.keys().next().done;\n      });\n      /*\n        - In Firefox < 23, Map#size is a function.\n        - In all current Firefox, Set#entries/keys/values & Map#clear do not exist\n        - https://bugzilla.mozilla.org/show_bug.cgi?id=869996\n        - In Firefox 24, Map and Set do not implement forEach\n        - In Firefox 25 at least, Map and Set are callable without \"new\"\n      */\n      if (\n        typeof globals.Map.prototype.clear !== 'function'\n        || new globals.Set().size !== 0\n        || newMap.size !== 0\n        || typeof globals.Map.prototype.keys !== 'function'\n        || typeof globals.Set.prototype.keys !== 'function'\n        || typeof globals.Map.prototype.forEach !== 'function'\n        || typeof globals.Set.prototype.forEach !== 'function'\n        || isCallableWithoutNew(globals.Map)\n        || isCallableWithoutNew(globals.Set)\n        || typeof newMap.keys().next !== 'function' // Safari 8\n        || mapIterationThrowsStopIterator // Firefox 25\n        || !mapSupportsSubclassing\n      ) {\n        defineProperties(globals, {\n          Map: collectionShims.Map,\n          Set: collectionShims.Set\n        }, true);\n      }\n\n      if (globals.Set.prototype.keys !== globals.Set.prototype.values) {\n        // Fixed in WebKit with https://bugs.webkit.org/show_bug.cgi?id=144190\n        defineProperty(globals.Set.prototype, 'keys', globals.Set.prototype.values, true);\n      }\n\n      // Shim incomplete iterator implementations.\n      addIterator(Object.getPrototypeOf((new globals.Map()).keys()));\n      addIterator(Object.getPrototypeOf((new globals.Set()).keys()));\n\n      if (functionsHaveNames && globals.Set.prototype.has.name !== 'has') {\n        // Microsoft Edge v0.11.10074.0 is missing a name on Set#has\n        var anonymousSetHas = globals.Set.prototype.has;\n        overrideNative(globals.Set.prototype, 'has', function has(key) {\n          return _call(anonymousSetHas, this, key);\n        });\n      }\n    }\n    defineProperties(globals, collectionShims);\n    addDefaultSpecies(globals.Map);\n    addDefaultSpecies(globals.Set);\n  }\n\n  var throwUnlessTargetIsObject = function throwUnlessTargetIsObject(target) {\n    if (!ES.TypeIsObject(target)) {\n      throw new TypeError('target must be an object');\n    }\n  };\n\n  // Some Reflect methods are basically the same as\n  // those on the Object global, except that a TypeError is thrown if\n  // target isn't an object. As well as returning a boolean indicating\n  // the success of the operation.\n  var ReflectShims = {\n    // Apply method in a functional form.\n    apply: function apply() {\n      return ES.Call(ES.Call, null, arguments);\n    },\n\n    // New operator in a functional form.\n    construct: function construct(constructor, args) {\n      if (!ES.IsConstructor(constructor)) {\n        throw new TypeError('First argument must be a constructor.');\n      }\n      var newTarget = arguments.length > 2 ? arguments[2] : constructor;\n      if (!ES.IsConstructor(newTarget)) {\n        throw new TypeError('new.target must be a constructor.');\n      }\n      return ES.Construct(constructor, args, newTarget, 'internal');\n    },\n\n    // When deleting a non-existent or configurable property,\n    // true is returned.\n    // When attempting to delete a non-configurable property,\n    // it will return false.\n    deleteProperty: function deleteProperty(target, key) {\n      throwUnlessTargetIsObject(target);\n      if (supportsDescriptors) {\n        var desc = Object.getOwnPropertyDescriptor(target, key);\n\n        if (desc && !desc.configurable) {\n          return false;\n        }\n      }\n\n      // Will return true.\n      return delete target[key];\n    },\n\n    has: function has(target, key) {\n      throwUnlessTargetIsObject(target);\n      return key in target;\n    }\n  };\n\n  if (Object.getOwnPropertyNames) {\n    Object.assign(ReflectShims, {\n      // Basically the result of calling the internal [[OwnPropertyKeys]].\n      // Concatenating propertyNames and propertySymbols should do the trick.\n      // This should continue to work together with a Symbol shim\n      // which overrides Object.getOwnPropertyNames and implements\n      // Object.getOwnPropertySymbols.\n      ownKeys: function ownKeys(target) {\n        throwUnlessTargetIsObject(target);\n        var keys = Object.getOwnPropertyNames(target);\n\n        if (ES.IsCallable(Object.getOwnPropertySymbols)) {\n          _pushApply(keys, Object.getOwnPropertySymbols(target));\n        }\n\n        return keys;\n      }\n    });\n  }\n\n  var callAndCatchException = function ConvertExceptionToBoolean(func) {\n    return !throwsError(func);\n  };\n\n  if (Object.preventExtensions) {\n    Object.assign(ReflectShims, {\n      isExtensible: function isExtensible(target) {\n        throwUnlessTargetIsObject(target);\n        return Object.isExtensible(target);\n      },\n      preventExtensions: function preventExtensions(target) {\n        throwUnlessTargetIsObject(target);\n        return callAndCatchException(function () {\n          return Object.preventExtensions(target);\n        });\n      }\n    });\n  }\n\n  if (supportsDescriptors) {\n    var internalGet = function get(target, key, receiver) {\n      var desc = Object.getOwnPropertyDescriptor(target, key);\n\n      if (!desc) {\n        var parent = Object.getPrototypeOf(target);\n\n        if (parent === null) {\n          return void 0;\n        }\n\n        return internalGet(parent, key, receiver);\n      }\n\n      if ('value' in desc) {\n        return desc.value;\n      }\n\n      if (desc.get) {\n        return ES.Call(desc.get, receiver);\n      }\n\n      return void 0;\n    };\n\n    var internalSet = function set(target, key, value, receiver) {\n      var desc = Object.getOwnPropertyDescriptor(target, key);\n\n      if (!desc) {\n        var parent = Object.getPrototypeOf(target);\n\n        if (parent !== null) {\n          return internalSet(parent, key, value, receiver);\n        }\n\n        desc = {\n          value: void 0,\n          writable: true,\n          enumerable: true,\n          configurable: true\n        };\n      }\n\n      if ('value' in desc) {\n        if (!desc.writable) {\n          return false;\n        }\n\n        if (!ES.TypeIsObject(receiver)) {\n          return false;\n        }\n\n        var existingDesc = Object.getOwnPropertyDescriptor(receiver, key);\n\n        if (existingDesc) {\n          return Reflect.defineProperty(receiver, key, {\n            value: value\n          });\n        }\n        return Reflect.defineProperty(receiver, key, {\n          value: value,\n          writable: true,\n          enumerable: true,\n          configurable: true\n        });\n\n      }\n\n      if (desc.set) {\n        _call(desc.set, receiver, value);\n        return true;\n      }\n\n      return false;\n    };\n\n    Object.assign(ReflectShims, {\n      defineProperty: function defineProperty(target, propertyKey, attributes) {\n        throwUnlessTargetIsObject(target);\n        return callAndCatchException(function () {\n          return Object.defineProperty(target, propertyKey, attributes);\n        });\n      },\n\n      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {\n        throwUnlessTargetIsObject(target);\n        return Object.getOwnPropertyDescriptor(target, propertyKey);\n      },\n\n      // Syntax in a functional form.\n      get: function get(target, key) {\n        throwUnlessTargetIsObject(target);\n        var receiver = arguments.length > 2 ? arguments[2] : target;\n\n        return internalGet(target, key, receiver);\n      },\n\n      set: function set(target, key, value) {\n        throwUnlessTargetIsObject(target);\n        var receiver = arguments.length > 3 ? arguments[3] : target;\n\n        return internalSet(target, key, value, receiver);\n      }\n    });\n  }\n\n  if (Object.getPrototypeOf) {\n    var objectDotGetPrototypeOf = Object.getPrototypeOf;\n    ReflectShims.getPrototypeOf = function getPrototypeOf(target) {\n      throwUnlessTargetIsObject(target);\n      return objectDotGetPrototypeOf(target);\n    };\n  }\n\n  if (Object.setPrototypeOf && ReflectShims.getPrototypeOf) {\n    var willCreateCircularPrototype = function (object, lastProto) {\n      var proto = lastProto;\n      while (proto) {\n        if (object === proto) {\n          return true;\n        }\n        proto = ReflectShims.getPrototypeOf(proto);\n      }\n      return false;\n    };\n\n    Object.assign(ReflectShims, {\n      // Sets the prototype of the given object.\n      // Returns true on success, otherwise false.\n      setPrototypeOf: function setPrototypeOf(object, proto) {\n        throwUnlessTargetIsObject(object);\n        if (proto !== null && !ES.TypeIsObject(proto)) {\n          throw new TypeError('proto must be an object or null');\n        }\n\n        // If they already are the same, we're done.\n        if (proto === Reflect.getPrototypeOf(object)) {\n          return true;\n        }\n\n        // Cannot alter prototype if object not extensible.\n        if (Reflect.isExtensible && !Reflect.isExtensible(object)) {\n          return false;\n        }\n\n        // Ensure that we do not create a circular prototype chain.\n        if (willCreateCircularPrototype(object, proto)) {\n          return false;\n        }\n\n        Object.setPrototypeOf(object, proto);\n\n        return true;\n      }\n    });\n  }\n  var defineOrOverrideReflectProperty = function (key, shim) {\n    if (!ES.IsCallable(globals.Reflect[key])) {\n      defineProperty(globals.Reflect, key, shim);\n    } else {\n      var acceptsPrimitives = valueOrFalseIfThrows(function () {\n        globals.Reflect[key](1);\n        globals.Reflect[key](NaN);\n        globals.Reflect[key](true);\n        return true;\n      });\n      if (acceptsPrimitives) {\n        overrideNative(globals.Reflect, key, shim);\n      }\n    }\n  };\n  Object.keys(ReflectShims).forEach(function (key) {\n    defineOrOverrideReflectProperty(key, ReflectShims[key]);\n  });\n  var originalReflectGetProto = globals.Reflect.getPrototypeOf;\n  if (functionsHaveNames && originalReflectGetProto && originalReflectGetProto.name !== 'getPrototypeOf') {\n    overrideNative(globals.Reflect, 'getPrototypeOf', function getPrototypeOf(target) {\n      return _call(originalReflectGetProto, globals.Reflect, target);\n    });\n  }\n  if (globals.Reflect.setPrototypeOf) {\n    if (valueOrFalseIfThrows(function () {\n      globals.Reflect.setPrototypeOf(1, {});\n      return true;\n    })) {\n      overrideNative(globals.Reflect, 'setPrototypeOf', ReflectShims.setPrototypeOf);\n    }\n  }\n  if (globals.Reflect.defineProperty) {\n    if (!valueOrFalseIfThrows(function () {\n      var basic = !globals.Reflect.defineProperty(1, 'test', { value: 1 });\n      // \"extensible\" fails on Edge 0.12\n      var extensible = typeof Object.preventExtensions !== 'function' || !globals.Reflect.defineProperty(Object.preventExtensions({}), 'test', {});\n      return basic && extensible;\n    })) {\n      overrideNative(globals.Reflect, 'defineProperty', ReflectShims.defineProperty);\n    }\n  }\n  if (globals.Reflect.construct) {\n    if (!valueOrFalseIfThrows(function () {\n      var F = function F() {};\n      return globals.Reflect.construct(function () {}, [], F) instanceof F;\n    })) {\n      overrideNative(globals.Reflect, 'construct', ReflectShims.construct);\n    }\n  }\n\n  if (String(new Date(NaN)) !== 'Invalid Date') {\n    var dateToString = Date.prototype.toString;\n    var shimmedDateToString = function toString() {\n      var valueOf = +this;\n      if (valueOf !== valueOf) {\n        return 'Invalid Date';\n      }\n      return ES.Call(dateToString, this);\n    };\n    overrideNative(Date.prototype, 'toString', shimmedDateToString);\n  }\n\n  // Annex B HTML methods\n  // http://www.ecma-international.org/ecma-262/6.0/#sec-additional-properties-of-the-string.prototype-object\n  var stringHTMLshims = {\n    anchor: function anchor(name) { return ES.CreateHTML(this, 'a', 'name', name); },\n    big: function big() { return ES.CreateHTML(this, 'big', '', ''); },\n    blink: function blink() { return ES.CreateHTML(this, 'blink', '', ''); },\n    bold: function bold() { return ES.CreateHTML(this, 'b', '', ''); },\n    fixed: function fixed() { return ES.CreateHTML(this, 'tt', '', ''); },\n    fontcolor: function fontcolor(color) { return ES.CreateHTML(this, 'font', 'color', color); },\n    fontsize: function fontsize(size) { return ES.CreateHTML(this, 'font', 'size', size); },\n    italics: function italics() { return ES.CreateHTML(this, 'i', '', ''); },\n    link: function link(url) { return ES.CreateHTML(this, 'a', 'href', url); },\n    small: function small() { return ES.CreateHTML(this, 'small', '', ''); },\n    strike: function strike() { return ES.CreateHTML(this, 'strike', '', ''); },\n    sub: function sub() { return ES.CreateHTML(this, 'sub', '', ''); },\n    sup: function sub() { return ES.CreateHTML(this, 'sup', '', ''); }\n  };\n  _forEach(Object.keys(stringHTMLshims), function (key) {\n    var method = String.prototype[key];\n    var shouldOverwrite = false;\n    if (ES.IsCallable(method)) {\n      var output = _call(method, '', ' \" ');\n      var quotesCount = _concat([], output.match(/\"/g)).length;\n      shouldOverwrite = output !== output.toLowerCase() || quotesCount > 2;\n    } else {\n      shouldOverwrite = true;\n    }\n    if (shouldOverwrite) {\n      overrideNative(String.prototype, key, stringHTMLshims[key]);\n    }\n  });\n\n  var JSONstringifiesSymbols = (function () {\n    // Microsoft Edge v0.12 stringifies Symbols incorrectly\n    if (!hasSymbols) { return false; } // Symbols are not supported\n    var stringify = typeof JSON === 'object' && typeof JSON.stringify === 'function' ? JSON.stringify : null;\n    if (!stringify) { return false; } // JSON.stringify is not supported\n    if (typeof stringify(Symbol()) !== 'undefined') { return true; } // Symbols should become `undefined`\n    if (stringify([Symbol()]) !== '[null]') { return true; } // Symbols in arrays should become `null`\n    var obj = { a: Symbol() };\n    obj[Symbol()] = true;\n    if (stringify(obj) !== '{}') { return true; } // Symbol-valued keys *and* Symbol-valued properties should be omitted\n    return false;\n  }());\n  var JSONstringifyAcceptsObjectSymbol = valueOrFalseIfThrows(function () {\n    // Chrome 45 throws on stringifying object symbols\n    if (!hasSymbols) { return true; } // Symbols are not supported\n    return JSON.stringify(Object(Symbol())) === '{}' && JSON.stringify([Object(Symbol())]) === '[{}]';\n  });\n  if (JSONstringifiesSymbols || !JSONstringifyAcceptsObjectSymbol) {\n    var origStringify = JSON.stringify;\n    overrideNative(JSON, 'stringify', function stringify(value) {\n      if (typeof value === 'symbol') { return; }\n      var replacer;\n      if (arguments.length > 1) {\n        replacer = arguments[1];\n      }\n      var args = [value];\n      if (!isArray(replacer)) {\n        var replaceFn = ES.IsCallable(replacer) ? replacer : null;\n        var wrappedReplacer = function (key, val) {\n          var parsedValue = replaceFn ? _call(replaceFn, this, key, val) : val;\n          if (typeof parsedValue !== 'symbol') {\n            if (Type.symbol(parsedValue)) {\n              return assignTo({})(parsedValue);\n            }\n            return parsedValue;\n\n          }\n        };\n        args.push(wrappedReplacer);\n      } else {\n        // create wrapped replacer that handles an array replacer?\n        args.push(replacer);\n      }\n      if (arguments.length > 2) {\n        args.push(arguments[2]);\n      }\n      return origStringify.apply(this, args);\n    });\n  }\n\n  return globals;\n}));\n\n\n//# sourceURL=webpack://equicore/./node_modules/es6-shim/es6-shim.js?"
        );

        /***/
      },

    /***/ './node_modules/focus-visible/dist/focus-visible.js':
      /*!**********************************************************!*\
  !*** ./node_modules/focus-visible/dist/focus-visible.js ***!
  \**********************************************************/
      /***/ function () {
        eval(
          "(function (global, factory) {\n   true ? factory() :\n  0;\n}(this, (function () { 'use strict';\n\n  /**\n   * Applies the :focus-visible polyfill at the given scope.\n   * A scope in this case is either the top-level Document or a Shadow Root.\n   *\n   * @param {(Document|ShadowRoot)} scope\n   * @see https://github.com/WICG/focus-visible\n   */\n  function applyFocusVisiblePolyfill(scope) {\n    var hadKeyboardEvent = true;\n    var hadFocusVisibleRecently = false;\n    var hadFocusVisibleRecentlyTimeout = null;\n\n    var inputTypesAllowlist = {\n      text: true,\n      search: true,\n      url: true,\n      tel: true,\n      email: true,\n      password: true,\n      number: true,\n      date: true,\n      month: true,\n      week: true,\n      time: true,\n      datetime: true,\n      'datetime-local': true\n    };\n\n    /**\n     * Helper function for legacy browsers and iframes which sometimes focus\n     * elements like document, body, and non-interactive SVG.\n     * @param {Element} el\n     */\n    function isValidFocusTarget(el) {\n      if (\n        el &&\n        el !== document &&\n        el.nodeName !== 'HTML' &&\n        el.nodeName !== 'BODY' &&\n        'classList' in el &&\n        'contains' in el.classList\n      ) {\n        return true;\n      }\n      return false;\n    }\n\n    /**\n     * Computes whether the given element should automatically trigger the\n     * `focus-visible` class being added, i.e. whether it should always match\n     * `:focus-visible` when focused.\n     * @param {Element} el\n     * @return {boolean}\n     */\n    function focusTriggersKeyboardModality(el) {\n      var type = el.type;\n      var tagName = el.tagName;\n\n      if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {\n        return true;\n      }\n\n      if (tagName === 'TEXTAREA' && !el.readOnly) {\n        return true;\n      }\n\n      if (el.isContentEditable) {\n        return true;\n      }\n\n      return false;\n    }\n\n    /**\n     * Add the `focus-visible` class to the given element if it was not added by\n     * the author.\n     * @param {Element} el\n     */\n    function addFocusVisibleClass(el) {\n      if (el.classList.contains('focus-visible')) {\n        return;\n      }\n      el.classList.add('focus-visible');\n      el.setAttribute('data-focus-visible-added', '');\n    }\n\n    /**\n     * Remove the `focus-visible` class from the given element if it was not\n     * originally added by the author.\n     * @param {Element} el\n     */\n    function removeFocusVisibleClass(el) {\n      if (!el.hasAttribute('data-focus-visible-added')) {\n        return;\n      }\n      el.classList.remove('focus-visible');\n      el.removeAttribute('data-focus-visible-added');\n    }\n\n    /**\n     * If the most recent user interaction was via the keyboard;\n     * and the key press did not include a meta, alt/option, or control key;\n     * then the modality is keyboard. Otherwise, the modality is not keyboard.\n     * Apply `focus-visible` to any current active element and keep track\n     * of our keyboard modality state with `hadKeyboardEvent`.\n     * @param {KeyboardEvent} e\n     */\n    function onKeyDown(e) {\n      if (e.metaKey || e.altKey || e.ctrlKey) {\n        return;\n      }\n\n      if (isValidFocusTarget(scope.activeElement)) {\n        addFocusVisibleClass(scope.activeElement);\n      }\n\n      hadKeyboardEvent = true;\n    }\n\n    /**\n     * If at any point a user clicks with a pointing device, ensure that we change\n     * the modality away from keyboard.\n     * This avoids the situation where a user presses a key on an already focused\n     * element, and then clicks on a different element, focusing it with a\n     * pointing device, while we still think we're in keyboard modality.\n     * @param {Event} e\n     */\n    function onPointerDown(e) {\n      hadKeyboardEvent = false;\n    }\n\n    /**\n     * On `focus`, add the `focus-visible` class to the target if:\n     * - the target received focus as a result of keyboard navigation, or\n     * - the event target is an element that will likely require interaction\n     *   via the keyboard (e.g. a text box)\n     * @param {Event} e\n     */\n    function onFocus(e) {\n      // Prevent IE from focusing the document or HTML element.\n      if (!isValidFocusTarget(e.target)) {\n        return;\n      }\n\n      if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {\n        addFocusVisibleClass(e.target);\n      }\n    }\n\n    /**\n     * On `blur`, remove the `focus-visible` class from the target.\n     * @param {Event} e\n     */\n    function onBlur(e) {\n      if (!isValidFocusTarget(e.target)) {\n        return;\n      }\n\n      if (\n        e.target.classList.contains('focus-visible') ||\n        e.target.hasAttribute('data-focus-visible-added')\n      ) {\n        // To detect a tab/window switch, we look for a blur event followed\n        // rapidly by a visibility change.\n        // If we don't see a visibility change within 100ms, it's probably a\n        // regular focus change.\n        hadFocusVisibleRecently = true;\n        window.clearTimeout(hadFocusVisibleRecentlyTimeout);\n        hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {\n          hadFocusVisibleRecently = false;\n        }, 100);\n        removeFocusVisibleClass(e.target);\n      }\n    }\n\n    /**\n     * If the user changes tabs, keep track of whether or not the previously\n     * focused element had .focus-visible.\n     * @param {Event} e\n     */\n    function onVisibilityChange(e) {\n      if (document.visibilityState === 'hidden') {\n        // If the tab becomes active again, the browser will handle calling focus\n        // on the element (Safari actually calls it twice).\n        // If this tab change caused a blur on an element with focus-visible,\n        // re-apply the class when the user switches back to the tab.\n        if (hadFocusVisibleRecently) {\n          hadKeyboardEvent = true;\n        }\n        addInitialPointerMoveListeners();\n      }\n    }\n\n    /**\n     * Add a group of listeners to detect usage of any pointing devices.\n     * These listeners will be added when the polyfill first loads, and anytime\n     * the window is blurred, so that they are active when the window regains\n     * focus.\n     */\n    function addInitialPointerMoveListeners() {\n      document.addEventListener('mousemove', onInitialPointerMove);\n      document.addEventListener('mousedown', onInitialPointerMove);\n      document.addEventListener('mouseup', onInitialPointerMove);\n      document.addEventListener('pointermove', onInitialPointerMove);\n      document.addEventListener('pointerdown', onInitialPointerMove);\n      document.addEventListener('pointerup', onInitialPointerMove);\n      document.addEventListener('touchmove', onInitialPointerMove);\n      document.addEventListener('touchstart', onInitialPointerMove);\n      document.addEventListener('touchend', onInitialPointerMove);\n    }\n\n    function removeInitialPointerMoveListeners() {\n      document.removeEventListener('mousemove', onInitialPointerMove);\n      document.removeEventListener('mousedown', onInitialPointerMove);\n      document.removeEventListener('mouseup', onInitialPointerMove);\n      document.removeEventListener('pointermove', onInitialPointerMove);\n      document.removeEventListener('pointerdown', onInitialPointerMove);\n      document.removeEventListener('pointerup', onInitialPointerMove);\n      document.removeEventListener('touchmove', onInitialPointerMove);\n      document.removeEventListener('touchstart', onInitialPointerMove);\n      document.removeEventListener('touchend', onInitialPointerMove);\n    }\n\n    /**\n     * When the polfyill first loads, assume the user is in keyboard modality.\n     * If any event is received from a pointing device (e.g. mouse, pointer,\n     * touch), turn off keyboard modality.\n     * This accounts for situations where focus enters the page from the URL bar.\n     * @param {Event} e\n     */\n    function onInitialPointerMove(e) {\n      // Work around a Safari quirk that fires a mousemove on <html> whenever the\n      // window blurs, even if you're tabbing out of the page. ¯\\_(ツ)_/¯\n      if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {\n        return;\n      }\n\n      hadKeyboardEvent = false;\n      removeInitialPointerMoveListeners();\n    }\n\n    // For some kinds of state, we are interested in changes at the global scope\n    // only. For example, global pointer input, global key presses and global\n    // visibility change should affect the state at every scope:\n    document.addEventListener('keydown', onKeyDown, true);\n    document.addEventListener('mousedown', onPointerDown, true);\n    document.addEventListener('pointerdown', onPointerDown, true);\n    document.addEventListener('touchstart', onPointerDown, true);\n    document.addEventListener('visibilitychange', onVisibilityChange, true);\n\n    addInitialPointerMoveListeners();\n\n    // For focus and blur, we specifically care about state changes in the local\n    // scope. This is because focus / blur events that originate from within a\n    // shadow root are not re-dispatched from the host element if it was already\n    // the active element in its own scope:\n    scope.addEventListener('focus', onFocus, true);\n    scope.addEventListener('blur', onBlur, true);\n\n    // We detect that a node is a ShadowRoot by ensuring that it is a\n    // DocumentFragment and also has a host property. This check covers native\n    // implementation and polyfill implementation transparently. If we only cared\n    // about the native implementation, we could just check if the scope was\n    // an instance of a ShadowRoot.\n    if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {\n      // Since a ShadowRoot is a special kind of DocumentFragment, it does not\n      // have a root element to add a class to. So, we add this attribute to the\n      // host element instead:\n      scope.host.setAttribute('data-js-focus-visible', '');\n    } else if (scope.nodeType === Node.DOCUMENT_NODE) {\n      document.documentElement.classList.add('js-focus-visible');\n      document.documentElement.setAttribute('data-js-focus-visible', '');\n    }\n  }\n\n  // It is important to wrap all references to global window and document in\n  // these checks to support server-side rendering use cases\n  // @see https://github.com/WICG/focus-visible/issues/199\n  if (typeof window !== 'undefined' && typeof document !== 'undefined') {\n    // Make the polyfill helper globally available. This can be used as a signal\n    // to interested libraries that wish to coordinate with the polyfill for e.g.,\n    // applying the polyfill to a shadow root:\n    window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;\n\n    // Notify interested libraries of the polyfill's presence, in case the\n    // polyfill was loaded lazily:\n    var event;\n\n    try {\n      event = new CustomEvent('focus-visible-polyfill-ready');\n    } catch (error) {\n      // IE11 does not support using CustomEvent as a constructor directly:\n      event = document.createEvent('CustomEvent');\n      event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});\n    }\n\n    window.dispatchEvent(event);\n  }\n\n  if (typeof document !== 'undefined') {\n    // Apply the polyfill to the global document, so that no JavaScript\n    // coordination is required to use the polyfill in the top-level document:\n    applyFocusVisiblePolyfill(document);\n  }\n\n})));\n\n\n//# sourceURL=webpack://equicore/./node_modules/focus-visible/dist/focus-visible.js?"
        );

        /***/
      },

    /***/ './node_modules/function-bind/implementation.js':
      /*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\n/* eslint no-invalid-this: 1 */\n\nvar ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';\nvar toStr = Object.prototype.toString;\nvar max = Math.max;\nvar funcType = '[object Function]';\n\nvar concatty = function concatty(a, b) {\n    var arr = [];\n\n    for (var i = 0; i < a.length; i += 1) {\n        arr[i] = a[i];\n    }\n    for (var j = 0; j < b.length; j += 1) {\n        arr[j + a.length] = b[j];\n    }\n\n    return arr;\n};\n\nvar slicy = function slicy(arrLike, offset) {\n    var arr = [];\n    for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {\n        arr[j] = arrLike[i];\n    }\n    return arr;\n};\n\nvar joiny = function (arr, joiner) {\n    var str = '';\n    for (var i = 0; i < arr.length; i += 1) {\n        str += arr[i];\n        if (i + 1 < arr.length) {\n            str += joiner;\n        }\n    }\n    return str;\n};\n\nmodule.exports = function bind(that) {\n    var target = this;\n    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {\n        throw new TypeError(ERROR_MESSAGE + target);\n    }\n    var args = slicy(arguments, 1);\n\n    var bound;\n    var binder = function () {\n        if (this instanceof bound) {\n            var result = target.apply(\n                this,\n                concatty(args, arguments)\n            );\n            if (Object(result) === result) {\n                return result;\n            }\n            return this;\n        }\n        return target.apply(\n            that,\n            concatty(args, arguments)\n        );\n\n    };\n\n    var boundLength = max(0, target.length - args.length);\n    var boundArgs = [];\n    for (var i = 0; i < boundLength; i++) {\n        boundArgs[i] = '$' + i;\n    }\n\n    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);\n\n    if (target.prototype) {\n        var Empty = function Empty() {};\n        Empty.prototype = target.prototype;\n        bound.prototype = new Empty();\n        Empty.prototype = null;\n    }\n\n    return bound;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/function-bind/implementation.js?"
        );

        /***/
      },

    /***/ './node_modules/function-bind/index.js':
      /*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");\n\nmodule.exports = Function.prototype.bind || implementation;\n\n\n//# sourceURL=webpack://equicore/./node_modules/function-bind/index.js?'
        );

        /***/
      },

    /***/ './node_modules/function.prototype.name/implementation.js':
      /*!****************************************************************!*\
  !*** ./node_modules/function.prototype.name/implementation.js ***!
  \****************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar IsCallable = __webpack_require__(/*! es-abstract/2023/IsCallable */ \"./node_modules/es-abstract/2023/IsCallable.js\");\nvar HasOwnProperty = __webpack_require__(/*! es-abstract/2023/HasOwnProperty */ \"./node_modules/es-abstract/2023/HasOwnProperty.js\");\nvar functionsHaveNames = __webpack_require__(/*! functions-have-names */ \"./node_modules/functions-have-names/index.js\")();\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar $functionToString = callBound('Function.prototype.toString');\nvar $stringMatch = callBound('String.prototype.match');\nvar toStr = callBound('Object.prototype.toString');\n\nvar classRegex = /^class /;\n\nvar isClass = function isClassConstructor(fn) {\n\tif (IsCallable(fn)) {\n\t\treturn false;\n\t}\n\tif (typeof fn !== 'function') {\n\t\treturn false;\n\t}\n\ttry {\n\t\tvar match = $stringMatch($functionToString(fn), classRegex);\n\t\treturn !!match;\n\t} catch (e) {}\n\treturn false;\n};\n\nvar regex = /\\s*function\\s+([^(\\s]*)\\s*/;\n\nvar isIE68 = !(0 in [,]); // eslint-disable-line no-sparse-arrays, comma-spacing\n\nvar objectClass = '[object Object]';\nvar ddaClass = '[object HTMLAllCollection]';\n\nvar functionProto = Function.prototype;\n\nvar isDDA = function isDocumentDotAll() {\n\treturn false;\n};\nif (typeof document === 'object') {\n\t// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly\n\tvar all = document.all;\n\tif (toStr(all) === toStr(document.all)) {\n\t\tisDDA = function isDocumentDotAll(value) {\n\t\t\t/* globals document: false */\n\t\t\t// in IE 6-8, typeof document.all is \"object\" and it's truthy\n\t\t\tif ((isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) {\n\t\t\t\ttry {\n\t\t\t\t\tvar str = toStr(value);\n\t\t\t\t\t// IE 6-8 uses `objectClass`\n\t\t\t\t\treturn (str === ddaClass || str === objectClass) && value('') == null; // eslint-disable-line eqeqeq\n\t\t\t\t} catch (e) { /**/ }\n\t\t\t}\n\t\t\treturn false;\n\t\t};\n\t}\n}\n\nmodule.exports = function getName() {\n\tif (isDDA(this) || (!isClass(this) && !IsCallable(this))) {\n\t\tthrow new TypeError('Function.prototype.name sham getter called on non-function');\n\t}\n\tif (functionsHaveNames && HasOwnProperty(this, 'name')) {\n\t\treturn this.name;\n\t}\n\tif (this === functionProto) {\n\t\treturn '';\n\t}\n\tvar str = $functionToString(this);\n\tvar match = $stringMatch(str, regex);\n\tvar name = match && match[1];\n\treturn name;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/function.prototype.name/implementation.js?"
        );

        /***/
      },

    /***/ './node_modules/function.prototype.name/polyfill.js':
      /*!**********************************************************!*\
  !*** ./node_modules/function.prototype.name/polyfill.js ***!
  \**********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function.prototype.name/implementation.js");\n\nmodule.exports = function getPolyfill() {\n\treturn implementation;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/function.prototype.name/polyfill.js?'
        );

        /***/
      },

    /***/ './node_modules/function.prototype.name/shim.js':
      /*!******************************************************!*\
  !*** ./node_modules/function.prototype.name/shim.js ***!
  \******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar supportsDescriptors = (__webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js").supportsDescriptors);\nvar functionsHaveNames = __webpack_require__(/*! functions-have-names */ "./node_modules/functions-have-names/index.js")();\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/function.prototype.name/polyfill.js");\nvar defineProperty = Object.defineProperty;\nvar TypeErr = TypeError;\n\nmodule.exports = function shimName() {\n\tvar polyfill = getPolyfill();\n\tif (functionsHaveNames) {\n\t\treturn polyfill;\n\t}\n\tif (!supportsDescriptors) {\n\t\tthrow new TypeErr(\'Shimming Function.prototype.name support requires ES5 property descriptor support.\');\n\t}\n\tvar functionProto = Function.prototype;\n\tdefineProperty(functionProto, \'name\', {\n\t\tconfigurable: true,\n\t\tenumerable: false,\n\t\tget: function () {\n\t\t\tvar name = polyfill.call(this);\n\t\t\tif (this !== functionProto) {\n\t\t\t\tdefineProperty(this, \'name\', {\n\t\t\t\t\tconfigurable: true,\n\t\t\t\t\tenumerable: false,\n\t\t\t\t\tvalue: name,\n\t\t\t\t\twritable: false\n\t\t\t\t});\n\t\t\t}\n\t\t\treturn name;\n\t\t}\n\t});\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/function.prototype.name/shim.js?'
        );

        /***/
      },

    /***/ './node_modules/functions-have-names/index.js':
      /*!****************************************************!*\
  !*** ./node_modules/functions-have-names/index.js ***!
  \****************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\nvar functionsHaveNames = function functionsHaveNames() {\n\treturn typeof function f() {}.name === 'string';\n};\n\nvar gOPD = Object.getOwnPropertyDescriptor;\nif (gOPD) {\n\ttry {\n\t\tgOPD([], 'length');\n\t} catch (e) {\n\t\t// IE 8 has a broken gOPD\n\t\tgOPD = null;\n\t}\n}\n\nfunctionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {\n\tif (!functionsHaveNames() || !gOPD) {\n\t\treturn false;\n\t}\n\tvar desc = gOPD(function () {}, 'name');\n\treturn !!desc && !!desc.configurable;\n};\n\nvar $bind = Function.prototype.bind;\n\nfunctionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {\n\treturn functionsHaveNames() && typeof $bind === 'function' && function f() {}.bind().name !== '';\n};\n\nmodule.exports = functionsHaveNames;\n\n\n//# sourceURL=webpack://equicore/./node_modules/functions-have-names/index.js?"
        );

        /***/
      },

    /***/ './node_modules/get-intrinsic/index.js':
      /*!*********************************************!*\
  !*** ./node_modules/get-intrinsic/index.js ***!
  \*********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar undefined;\n\nvar $Error = __webpack_require__(/*! es-errors */ \"./node_modules/es-errors/index.js\");\nvar $EvalError = __webpack_require__(/*! es-errors/eval */ \"./node_modules/es-errors/eval.js\");\nvar $RangeError = __webpack_require__(/*! es-errors/range */ \"./node_modules/es-errors/range.js\");\nvar $ReferenceError = __webpack_require__(/*! es-errors/ref */ \"./node_modules/es-errors/ref.js\");\nvar $SyntaxError = __webpack_require__(/*! es-errors/syntax */ \"./node_modules/es-errors/syntax.js\");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\nvar $URIError = __webpack_require__(/*! es-errors/uri */ \"./node_modules/es-errors/uri.js\");\n\nvar $Function = Function;\n\n// eslint-disable-next-line consistent-return\nvar getEvalledConstructor = function (expressionSyntax) {\n\ttry {\n\t\treturn $Function('\"use strict\"; return (' + expressionSyntax + ').constructor;')();\n\t} catch (e) {}\n};\n\nvar $gOPD = Object.getOwnPropertyDescriptor;\nif ($gOPD) {\n\ttry {\n\t\t$gOPD({}, '');\n\t} catch (e) {\n\t\t$gOPD = null; // this is IE 8, which has a broken gOPD\n\t}\n}\n\nvar throwTypeError = function () {\n\tthrow new $TypeError();\n};\nvar ThrowTypeError = $gOPD\n\t? (function () {\n\t\ttry {\n\t\t\t// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties\n\t\t\targuments.callee; // IE 8 does not throw here\n\t\t\treturn throwTypeError;\n\t\t} catch (calleeThrows) {\n\t\t\ttry {\n\t\t\t\t// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')\n\t\t\t\treturn $gOPD(arguments, 'callee').get;\n\t\t\t} catch (gOPDthrows) {\n\t\t\t\treturn throwTypeError;\n\t\t\t}\n\t\t}\n\t}())\n\t: throwTypeError;\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\nvar hasProto = __webpack_require__(/*! has-proto */ \"./node_modules/has-proto/index.js\")();\n\nvar getProto = Object.getPrototypeOf || (\n\thasProto\n\t\t? function (x) { return x.__proto__; } // eslint-disable-line no-proto\n\t\t: null\n);\n\nvar needsEval = {};\n\nvar TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);\n\nvar INTRINSICS = {\n\t__proto__: null,\n\t'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,\n\t'%Array%': Array,\n\t'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,\n\t'%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,\n\t'%AsyncFromSyncIteratorPrototype%': undefined,\n\t'%AsyncFunction%': needsEval,\n\t'%AsyncGenerator%': needsEval,\n\t'%AsyncGeneratorFunction%': needsEval,\n\t'%AsyncIteratorPrototype%': needsEval,\n\t'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,\n\t'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,\n\t'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,\n\t'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,\n\t'%Boolean%': Boolean,\n\t'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,\n\t'%Date%': Date,\n\t'%decodeURI%': decodeURI,\n\t'%decodeURIComponent%': decodeURIComponent,\n\t'%encodeURI%': encodeURI,\n\t'%encodeURIComponent%': encodeURIComponent,\n\t'%Error%': $Error,\n\t'%eval%': eval, // eslint-disable-line no-eval\n\t'%EvalError%': $EvalError,\n\t'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,\n\t'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,\n\t'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,\n\t'%Function%': $Function,\n\t'%GeneratorFunction%': needsEval,\n\t'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,\n\t'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,\n\t'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,\n\t'%isFinite%': isFinite,\n\t'%isNaN%': isNaN,\n\t'%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,\n\t'%JSON%': typeof JSON === 'object' ? JSON : undefined,\n\t'%Map%': typeof Map === 'undefined' ? undefined : Map,\n\t'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),\n\t'%Math%': Math,\n\t'%Number%': Number,\n\t'%Object%': Object,\n\t'%parseFloat%': parseFloat,\n\t'%parseInt%': parseInt,\n\t'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,\n\t'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,\n\t'%RangeError%': $RangeError,\n\t'%ReferenceError%': $ReferenceError,\n\t'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,\n\t'%RegExp%': RegExp,\n\t'%Set%': typeof Set === 'undefined' ? undefined : Set,\n\t'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),\n\t'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,\n\t'%String%': String,\n\t'%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,\n\t'%Symbol%': hasSymbols ? Symbol : undefined,\n\t'%SyntaxError%': $SyntaxError,\n\t'%ThrowTypeError%': ThrowTypeError,\n\t'%TypedArray%': TypedArray,\n\t'%TypeError%': $TypeError,\n\t'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,\n\t'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,\n\t'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,\n\t'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,\n\t'%URIError%': $URIError,\n\t'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,\n\t'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,\n\t'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet\n};\n\nif (getProto) {\n\ttry {\n\t\tnull.error; // eslint-disable-line no-unused-expressions\n\t} catch (e) {\n\t\t// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229\n\t\tvar errorProto = getProto(getProto(e));\n\t\tINTRINSICS['%Error.prototype%'] = errorProto;\n\t}\n}\n\nvar doEval = function doEval(name) {\n\tvar value;\n\tif (name === '%AsyncFunction%') {\n\t\tvalue = getEvalledConstructor('async function () {}');\n\t} else if (name === '%GeneratorFunction%') {\n\t\tvalue = getEvalledConstructor('function* () {}');\n\t} else if (name === '%AsyncGeneratorFunction%') {\n\t\tvalue = getEvalledConstructor('async function* () {}');\n\t} else if (name === '%AsyncGenerator%') {\n\t\tvar fn = doEval('%AsyncGeneratorFunction%');\n\t\tif (fn) {\n\t\t\tvalue = fn.prototype;\n\t\t}\n\t} else if (name === '%AsyncIteratorPrototype%') {\n\t\tvar gen = doEval('%AsyncGenerator%');\n\t\tif (gen && getProto) {\n\t\t\tvalue = getProto(gen.prototype);\n\t\t}\n\t}\n\n\tINTRINSICS[name] = value;\n\n\treturn value;\n};\n\nvar LEGACY_ALIASES = {\n\t__proto__: null,\n\t'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],\n\t'%ArrayPrototype%': ['Array', 'prototype'],\n\t'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],\n\t'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],\n\t'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],\n\t'%ArrayProto_values%': ['Array', 'prototype', 'values'],\n\t'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],\n\t'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],\n\t'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],\n\t'%BooleanPrototype%': ['Boolean', 'prototype'],\n\t'%DataViewPrototype%': ['DataView', 'prototype'],\n\t'%DatePrototype%': ['Date', 'prototype'],\n\t'%ErrorPrototype%': ['Error', 'prototype'],\n\t'%EvalErrorPrototype%': ['EvalError', 'prototype'],\n\t'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],\n\t'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],\n\t'%FunctionPrototype%': ['Function', 'prototype'],\n\t'%Generator%': ['GeneratorFunction', 'prototype'],\n\t'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],\n\t'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],\n\t'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],\n\t'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],\n\t'%JSONParse%': ['JSON', 'parse'],\n\t'%JSONStringify%': ['JSON', 'stringify'],\n\t'%MapPrototype%': ['Map', 'prototype'],\n\t'%NumberPrototype%': ['Number', 'prototype'],\n\t'%ObjectPrototype%': ['Object', 'prototype'],\n\t'%ObjProto_toString%': ['Object', 'prototype', 'toString'],\n\t'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],\n\t'%PromisePrototype%': ['Promise', 'prototype'],\n\t'%PromiseProto_then%': ['Promise', 'prototype', 'then'],\n\t'%Promise_all%': ['Promise', 'all'],\n\t'%Promise_reject%': ['Promise', 'reject'],\n\t'%Promise_resolve%': ['Promise', 'resolve'],\n\t'%RangeErrorPrototype%': ['RangeError', 'prototype'],\n\t'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],\n\t'%RegExpPrototype%': ['RegExp', 'prototype'],\n\t'%SetPrototype%': ['Set', 'prototype'],\n\t'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],\n\t'%StringPrototype%': ['String', 'prototype'],\n\t'%SymbolPrototype%': ['Symbol', 'prototype'],\n\t'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],\n\t'%TypedArrayPrototype%': ['TypedArray', 'prototype'],\n\t'%TypeErrorPrototype%': ['TypeError', 'prototype'],\n\t'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],\n\t'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],\n\t'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],\n\t'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],\n\t'%URIErrorPrototype%': ['URIError', 'prototype'],\n\t'%WeakMapPrototype%': ['WeakMap', 'prototype'],\n\t'%WeakSetPrototype%': ['WeakSet', 'prototype']\n};\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar hasOwn = __webpack_require__(/*! hasown */ \"./node_modules/hasown/index.js\");\nvar $concat = bind.call(Function.call, Array.prototype.concat);\nvar $spliceApply = bind.call(Function.apply, Array.prototype.splice);\nvar $replace = bind.call(Function.call, String.prototype.replace);\nvar $strSlice = bind.call(Function.call, String.prototype.slice);\nvar $exec = bind.call(Function.call, RegExp.prototype.exec);\n\n/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */\nvar rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;\nvar reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */\nvar stringToPath = function stringToPath(string) {\n\tvar first = $strSlice(string, 0, 1);\n\tvar last = $strSlice(string, -1);\n\tif (first === '%' && last !== '%') {\n\t\tthrow new $SyntaxError('invalid intrinsic syntax, expected closing `%`');\n\t} else if (last === '%' && first !== '%') {\n\t\tthrow new $SyntaxError('invalid intrinsic syntax, expected opening `%`');\n\t}\n\tvar result = [];\n\t$replace(string, rePropName, function (match, number, quote, subString) {\n\t\tresult[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;\n\t});\n\treturn result;\n};\n/* end adaptation */\n\nvar getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {\n\tvar intrinsicName = name;\n\tvar alias;\n\tif (hasOwn(LEGACY_ALIASES, intrinsicName)) {\n\t\talias = LEGACY_ALIASES[intrinsicName];\n\t\tintrinsicName = '%' + alias[0] + '%';\n\t}\n\n\tif (hasOwn(INTRINSICS, intrinsicName)) {\n\t\tvar value = INTRINSICS[intrinsicName];\n\t\tif (value === needsEval) {\n\t\t\tvalue = doEval(intrinsicName);\n\t\t}\n\t\tif (typeof value === 'undefined' && !allowMissing) {\n\t\t\tthrow new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');\n\t\t}\n\n\t\treturn {\n\t\t\talias: alias,\n\t\t\tname: intrinsicName,\n\t\t\tvalue: value\n\t\t};\n\t}\n\n\tthrow new $SyntaxError('intrinsic ' + name + ' does not exist!');\n};\n\nmodule.exports = function GetIntrinsic(name, allowMissing) {\n\tif (typeof name !== 'string' || name.length === 0) {\n\t\tthrow new $TypeError('intrinsic name must be a non-empty string');\n\t}\n\tif (arguments.length > 1 && typeof allowMissing !== 'boolean') {\n\t\tthrow new $TypeError('\"allowMissing\" argument must be a boolean');\n\t}\n\n\tif ($exec(/^%?[^%]*%?$/, name) === null) {\n\t\tthrow new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');\n\t}\n\tvar parts = stringToPath(name);\n\tvar intrinsicBaseName = parts.length > 0 ? parts[0] : '';\n\n\tvar intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);\n\tvar intrinsicRealName = intrinsic.name;\n\tvar value = intrinsic.value;\n\tvar skipFurtherCaching = false;\n\n\tvar alias = intrinsic.alias;\n\tif (alias) {\n\t\tintrinsicBaseName = alias[0];\n\t\t$spliceApply(parts, $concat([0, 1], alias));\n\t}\n\n\tfor (var i = 1, isOwn = true; i < parts.length; i += 1) {\n\t\tvar part = parts[i];\n\t\tvar first = $strSlice(part, 0, 1);\n\t\tvar last = $strSlice(part, -1);\n\t\tif (\n\t\t\t(\n\t\t\t\t(first === '\"' || first === \"'\" || first === '`')\n\t\t\t\t|| (last === '\"' || last === \"'\" || last === '`')\n\t\t\t)\n\t\t\t&& first !== last\n\t\t) {\n\t\t\tthrow new $SyntaxError('property names with quotes must have matching quotes');\n\t\t}\n\t\tif (part === 'constructor' || !isOwn) {\n\t\t\tskipFurtherCaching = true;\n\t\t}\n\n\t\tintrinsicBaseName += '.' + part;\n\t\tintrinsicRealName = '%' + intrinsicBaseName + '%';\n\n\t\tif (hasOwn(INTRINSICS, intrinsicRealName)) {\n\t\t\tvalue = INTRINSICS[intrinsicRealName];\n\t\t} else if (value != null) {\n\t\t\tif (!(part in value)) {\n\t\t\t\tif (!allowMissing) {\n\t\t\t\t\tthrow new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');\n\t\t\t\t}\n\t\t\t\treturn void undefined;\n\t\t\t}\n\t\t\tif ($gOPD && (i + 1) >= parts.length) {\n\t\t\t\tvar desc = $gOPD(value, part);\n\t\t\t\tisOwn = !!desc;\n\n\t\t\t\t// By convention, when a data property is converted to an accessor\n\t\t\t\t// property to emulate a data property that does not suffer from\n\t\t\t\t// the override mistake, that accessor's getter is marked with\n\t\t\t\t// an `originalValue` property. Here, when we detect this, we\n\t\t\t\t// uphold the illusion by pretending to see that original data\n\t\t\t\t// property, i.e., returning the value rather than the getter\n\t\t\t\t// itself.\n\t\t\t\tif (isOwn && 'get' in desc && !('originalValue' in desc.get)) {\n\t\t\t\t\tvalue = desc.get;\n\t\t\t\t} else {\n\t\t\t\t\tvalue = value[part];\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tisOwn = hasOwn(value, part);\n\t\t\t\tvalue = value[part];\n\t\t\t}\n\n\t\t\tif (isOwn && !skipFurtherCaching) {\n\t\t\t\tINTRINSICS[intrinsicRealName] = value;\n\t\t\t}\n\t\t}\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/get-intrinsic/index.js?"
        );

        /***/
      },

    /***/ './node_modules/get-symbol-description/getInferredName.js':
      /*!****************************************************************!*\
  !*** ./node_modules/get-symbol-description/getInferredName.js ***!
  \****************************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\nvar getInferredName;\ntry {\n\t// eslint-disable-next-line no-new-func\n\tgetInferredName = Function('s', 'return { [s]() {} }[s].name;');\n} catch (e) {}\n\nvar inferred = function () {};\nmodule.exports = getInferredName && inferred.name === 'inferred' ? getInferredName : null;\n\n\n//# sourceURL=webpack://equicore/./node_modules/get-symbol-description/getInferredName.js?"
        );

        /***/
      },

    /***/ './node_modules/get-symbol-description/index.js':
      /*!******************************************************!*\
  !*** ./node_modules/get-symbol-description/index.js ***!
  \******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\n\nvar $SyntaxError = __webpack_require__(/*! es-errors/syntax */ \"./node_modules/es-errors/syntax.js\");\nvar getGlobalSymbolDescription = GetIntrinsic('%Symbol.keyFor%', true);\nvar thisSymbolValue = callBound('%Symbol.prototype.valueOf%', true);\nvar symToStr = callBound('Symbol.prototype.toString', true);\nvar $strSlice = callBound('String.prototype.slice');\n\nvar getInferredName = __webpack_require__(/*! ./getInferredName */ \"./node_modules/get-symbol-description/getInferredName.js\");\n\n/* eslint-disable consistent-return */\nmodule.exports = callBound('%Symbol.prototype.description%', true) || function getSymbolDescription(symbol) {\n\tif (!thisSymbolValue) {\n\t\tthrow new $SyntaxError('Symbols are not supported in this environment');\n\t}\n\n\t// will throw if not a symbol primitive or wrapper object\n\tvar sym = thisSymbolValue(symbol);\n\n\tif (getInferredName) {\n\t\tvar name = getInferredName(sym);\n\t\tif (name === '') {\n\t\t\treturn;\n\t\t}\n\t\treturn name.slice(1, -1); // name.slice('['.length, -']'.length);\n\t}\n\n\tvar desc;\n\tif (getGlobalSymbolDescription) {\n\t\tdesc = getGlobalSymbolDescription(sym);\n\t\tif (typeof desc === 'string') {\n\t\t\treturn desc;\n\t\t}\n\t}\n\n\tdesc = $strSlice(symToStr(sym), 7, -1); // str.slice('Symbol('.length, -')'.length);\n\tif (desc) {\n\t\treturn desc;\n\t}\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/get-symbol-description/index.js?"
        );

        /***/
      },

    /***/ './node_modules/globalthis/auto.js':
      /*!*****************************************!*\
  !*** ./node_modules/globalthis/auto.js ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict';
        eval(
          '\n\n__webpack_require__(/*! ./shim */ "./node_modules/globalthis/shim.js")();\n\n\n//# sourceURL=webpack://equicore/./node_modules/globalthis/auto.js?'
        );

        /***/
      },

    /***/ './node_modules/globalthis/implementation.browser.js':
      /*!***********************************************************!*\
  !*** ./node_modules/globalthis/implementation.browser.js ***!
  \***********************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "/* eslint no-negated-condition: 0, no-new-func: 0 */\n\n\n\nif (typeof self !== 'undefined') {\n\tmodule.exports = self;\n} else if (typeof window !== 'undefined') {\n\tmodule.exports = window;\n} else {\n\tmodule.exports = Function('return this')();\n}\n\n\n//# sourceURL=webpack://equicore/./node_modules/globalthis/implementation.browser.js?"
        );

        /***/
      },

    /***/ './node_modules/globalthis/polyfill.js':
      /*!*********************************************!*\
  !*** ./node_modules/globalthis/polyfill.js ***!
  \*********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar implementation = __webpack_require__(/*! ./implementation */ "./node_modules/globalthis/implementation.browser.js");\n\nmodule.exports = function getPolyfill() {\n\tif (typeof __webpack_require__.g !== \'object\' || !__webpack_require__.g || __webpack_require__.g.Math !== Math || __webpack_require__.g.Array !== Array) {\n\t\treturn implementation;\n\t}\n\treturn __webpack_require__.g;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/globalthis/polyfill.js?'
        );

        /***/
      },

    /***/ './node_modules/globalthis/shim.js':
      /*!*****************************************!*\
  !*** ./node_modules/globalthis/shim.js ***!
  \*****************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");\nvar gOPD = __webpack_require__(/*! gopd */ "./node_modules/gopd/index.js");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/globalthis/polyfill.js");\n\nmodule.exports = function shimGlobal() {\n\tvar polyfill = getPolyfill();\n\tif (define.supportsDescriptors) {\n\t\tvar descriptor = gOPD(polyfill, \'globalThis\');\n\t\tif (\n\t\t\t!descriptor\n\t\t\t|| (\n\t\t\t\tdescriptor.configurable\n\t\t\t\t&& (descriptor.enumerable || !descriptor.writable || globalThis !== polyfill)\n\t\t\t)\n\t\t) {\n\t\t\tObject.defineProperty(polyfill, \'globalThis\', {\n\t\t\t\tconfigurable: true,\n\t\t\t\tenumerable: false,\n\t\t\t\tvalue: polyfill,\n\t\t\t\twritable: true\n\t\t\t});\n\t\t}\n\t} else if (typeof globalThis !== \'object\' || globalThis !== polyfill) {\n\t\tpolyfill.globalThis = polyfill;\n\t}\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/globalthis/shim.js?'
        );

        /***/
      },

    /***/ './node_modules/gopd/index.js':
      /*!************************************!*\
  !*** ./node_modules/gopd/index.js ***!
  \************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);\n\nif ($gOPD) {\n\ttry {\n\t\t$gOPD([], 'length');\n\t} catch (e) {\n\t\t// IE 8 has a broken gOPD\n\t\t$gOPD = null;\n\t}\n}\n\nmodule.exports = $gOPD;\n\n\n//# sourceURL=webpack://equicore/./node_modules/gopd/index.js?"
        );

        /***/
      },

    /***/ './node_modules/has-property-descriptors/index.js':
      /*!********************************************************!*\
  !*** ./node_modules/has-property-descriptors/index.js ***!
  \********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $defineProperty = __webpack_require__(/*! es-define-property */ "./node_modules/es-define-property/index.js");\n\nvar hasPropertyDescriptors = function hasPropertyDescriptors() {\n\treturn !!$defineProperty;\n};\n\nhasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {\n\t// node v0.6 has a bug where array lengths can be Set but not Defined\n\tif (!$defineProperty) {\n\t\treturn null;\n\t}\n\ttry {\n\t\treturn $defineProperty([], \'length\', { value: 1 }).length !== 1;\n\t} catch (e) {\n\t\t// In Firefox 4-22, defining length on an array throws an exception.\n\t\treturn true;\n\t}\n};\n\nmodule.exports = hasPropertyDescriptors;\n\n\n//# sourceURL=webpack://equicore/./node_modules/has-property-descriptors/index.js?'
        );

        /***/
      },

    /***/ './node_modules/has-proto/index.js':
      /*!*****************************************!*\
  !*** ./node_modules/has-proto/index.js ***!
  \*****************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\nvar test = {\n\t__proto__: null,\n\tfoo: {}\n};\n\nvar $Object = Object;\n\n/** @type {import('.')} */\nmodule.exports = function hasProto() {\n\t// @ts-expect-error: TS errors on an inherited property for some reason\n\treturn { __proto__: test }.foo === test.foo\n\t\t&& !(test instanceof $Object);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/has-proto/index.js?"
        );

        /***/
      },

    /***/ './node_modules/has-symbols/index.js':
      /*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar origSymbol = typeof Symbol !== 'undefined' && Symbol;\nvar hasSymbolSham = __webpack_require__(/*! ./shams */ \"./node_modules/has-symbols/shams.js\");\n\nmodule.exports = function hasNativeSymbols() {\n\tif (typeof origSymbol !== 'function') { return false; }\n\tif (typeof Symbol !== 'function') { return false; }\n\tif (typeof origSymbol('foo') !== 'symbol') { return false; }\n\tif (typeof Symbol('bar') !== 'symbol') { return false; }\n\n\treturn hasSymbolSham();\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/has-symbols/index.js?"
        );

        /***/
      },

    /***/ './node_modules/has-symbols/shams.js':
      /*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\n/* eslint complexity: [2, 18], max-statements: [2, 33] */\nmodule.exports = function hasSymbols() {\n\tif (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }\n\tif (typeof Symbol.iterator === 'symbol') { return true; }\n\n\tvar obj = {};\n\tvar sym = Symbol('test');\n\tvar symObj = Object(sym);\n\tif (typeof sym === 'string') { return false; }\n\n\tif (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }\n\tif (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }\n\n\t// temp disabled per https://github.com/ljharb/object.assign/issues/17\n\t// if (sym instanceof Symbol) { return false; }\n\t// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4\n\t// if (!(symObj instanceof Symbol)) { return false; }\n\n\t// if (typeof Symbol.prototype.toString !== 'function') { return false; }\n\t// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }\n\n\tvar symVal = 42;\n\tobj[sym] = symVal;\n\tfor (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop\n\tif (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }\n\n\tif (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }\n\n\tvar syms = Object.getOwnPropertySymbols(obj);\n\tif (syms.length !== 1 || syms[0] !== sym) { return false; }\n\n\tif (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }\n\n\tif (typeof Object.getOwnPropertyDescriptor === 'function') {\n\t\tvar descriptor = Object.getOwnPropertyDescriptor(obj, sym);\n\t\tif (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }\n\t}\n\n\treturn true;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/has-symbols/shams.js?"
        );

        /***/
      },

    /***/ './node_modules/has-tostringtag/shams.js':
      /*!***********************************************!*\
  !*** ./node_modules/has-tostringtag/shams.js ***!
  \***********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar hasSymbols = __webpack_require__(/*! has-symbols/shams */ "./node_modules/has-symbols/shams.js");\n\n/** @type {import(\'.\')} */\nmodule.exports = function hasToStringTagShams() {\n\treturn hasSymbols() && !!Symbol.toStringTag;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/has-tostringtag/shams.js?'
        );

        /***/
      },

    /***/ './node_modules/hasown/index.js':
      /*!**************************************!*\
  !*** ./node_modules/hasown/index.js ***!
  \**************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar call = Function.prototype.call;\nvar $hasOwn = Object.prototype.hasOwnProperty;\nvar bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");\n\n/** @type {import(\'.\')} */\nmodule.exports = bind.call(call, $hasOwn);\n\n\n//# sourceURL=webpack://equicore/./node_modules/hasown/index.js?'
        );

        /***/
      },

    /***/ './node_modules/ima-babel6-polyfill/index.js':
      /*!***************************************************!*\
  !*** ./node_modules/ima-babel6-polyfill/index.js ***!
  \***************************************************/
      /***/ () => {
        eval(
          '(function() {\n\tvar testObject = {};\n\n\tif (!(Object.setPrototypeOf || testObject.__proto__)) {\n\t\tvar nativeGetPrototypeOf = Object.getPrototypeOf;\n\n\t\tObject.getPrototypeOf = function(object) {\n\t\t\tif (object.__proto__) {\n\t\t\t\treturn object.__proto__;\n\t\t\t} else {\n\t\t\t\treturn nativeGetPrototypeOf.call(Object, object);\n\t\t\t}\n\t\t}\n\t}\n})();\n\n\n//# sourceURL=webpack://equicore/./node_modules/ima-babel6-polyfill/index.js?'
        );

        /***/
      },

    /***/ './node_modules/input-placeholder-polyfill/dist/main.min.js':
      /*!******************************************************************!*\
  !*** ./node_modules/input-placeholder-polyfill/dist/main.min.js ***!
  \******************************************************************/
      /***/ () => {
        eval(
          'function hidePlaceholderOnFocus(a){target=a.currentTarget?a.currentTarget:a.srcElement,target.value==target.getAttribute("placeholder")&&(target.value="")}function unfocusOnAnElement(a){target=a.currentTarget?a.currentTarget:a.srcElement,""==target.value&&(target.value=target.getAttribute("placeholder"))}if(!("placeholder"in document.createElement("input")))for(var inputs=document.getElementsByTagName("input"),i=0;i<inputs.length;i++)inputs[i].value||(inputs[i].value=inputs[i].getAttribute("placeholder")),inputs[i].addEventListener?(inputs[i].addEventListener("click",hidePlaceholderOnFocus,!1),inputs[i].addEventListener("blur",unfocusOnAnElement,!1)):inputs[i].attachEvent&&(inputs[i].attachEvent("onclick",hidePlaceholderOnFocus),inputs[i].attachEvent("onblur",unfocusOnAnElement));\n\n//# sourceURL=webpack://equicore/./node_modules/input-placeholder-polyfill/dist/main.min.js?'
        );

        /***/
      },

    /***/ './node_modules/internal-slot/index.js':
      /*!*********************************************!*\
  !*** ./node_modules/internal-slot/index.js ***!
  \*********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar hasOwn = __webpack_require__(/*! hasown */ \"./node_modules/hasown/index.js\");\nvar channel = __webpack_require__(/*! side-channel */ \"./node_modules/side-channel/index.js\")();\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar SLOT = {\n\tassert: function (O, slot) {\n\t\tif (!O || (typeof O !== 'object' && typeof O !== 'function')) {\n\t\t\tthrow new $TypeError('`O` is not an object');\n\t\t}\n\t\tif (typeof slot !== 'string') {\n\t\t\tthrow new $TypeError('`slot` must be a string');\n\t\t}\n\t\tchannel.assert(O);\n\t\tif (!SLOT.has(O, slot)) {\n\t\t\tthrow new $TypeError('`' + slot + '` is not present on `O`');\n\t\t}\n\t},\n\tget: function (O, slot) {\n\t\tif (!O || (typeof O !== 'object' && typeof O !== 'function')) {\n\t\t\tthrow new $TypeError('`O` is not an object');\n\t\t}\n\t\tif (typeof slot !== 'string') {\n\t\t\tthrow new $TypeError('`slot` must be a string');\n\t\t}\n\t\tvar slots = channel.get(O);\n\t\treturn slots && slots['$' + slot];\n\t},\n\thas: function (O, slot) {\n\t\tif (!O || (typeof O !== 'object' && typeof O !== 'function')) {\n\t\t\tthrow new $TypeError('`O` is not an object');\n\t\t}\n\t\tif (typeof slot !== 'string') {\n\t\t\tthrow new $TypeError('`slot` must be a string');\n\t\t}\n\t\tvar slots = channel.get(O);\n\t\treturn !!slots && hasOwn(slots, '$' + slot);\n\t},\n\tset: function (O, slot, V) {\n\t\tif (!O || (typeof O !== 'object' && typeof O !== 'function')) {\n\t\t\tthrow new $TypeError('`O` is not an object');\n\t\t}\n\t\tif (typeof slot !== 'string') {\n\t\t\tthrow new $TypeError('`slot` must be a string');\n\t\t}\n\t\tvar slots = channel.get(O);\n\t\tif (!slots) {\n\t\t\tslots = {};\n\t\t\tchannel.set(O, slots);\n\t\t}\n\t\tslots['$' + slot] = V;\n\t}\n};\n\nif (Object.freeze) {\n\tObject.freeze(SLOT);\n}\n\nmodule.exports = SLOT;\n\n\n//# sourceURL=webpack://equicore/./node_modules/internal-slot/index.js?"
        );

        /***/
      },

    /***/ './node_modules/intersection-observer/intersection-observer.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/intersection-observer/intersection-observer.js ***!
  \*********************************************************************/
      /***/ () => {
        eval(
          "/**\n * Copyright 2016 Google Inc. All Rights Reserved.\n *\n * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.\n *\n *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document\n *\n */\n\n(function(window, document) {\n'use strict';\n\n\n// Exits early if all IntersectionObserver and IntersectionObserverEntry\n// features are natively supported.\nif ('IntersectionObserver' in window &&\n    'IntersectionObserverEntry' in window &&\n    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {\n\n  // Minimal polyfill for Edge 15's lack of `isIntersecting`\n  // See: https://github.com/w3c/IntersectionObserver/issues/211\n  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {\n    Object.defineProperty(window.IntersectionObserverEntry.prototype,\n      'isIntersecting', {\n      get: function () {\n        return this.intersectionRatio > 0;\n      }\n    });\n  }\n  return;\n}\n\n\n/**\n * An IntersectionObserver registry. This registry exists to hold a strong\n * reference to IntersectionObserver instances currently observing a target\n * element. Without this registry, instances without another reference may be\n * garbage collected.\n */\nvar registry = [];\n\n\n/**\n * Creates the global IntersectionObserverEntry constructor.\n * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry\n * @param {Object} entry A dictionary of instance properties.\n * @constructor\n */\nfunction IntersectionObserverEntry(entry) {\n  this.time = entry.time;\n  this.target = entry.target;\n  this.rootBounds = entry.rootBounds;\n  this.boundingClientRect = entry.boundingClientRect;\n  this.intersectionRect = entry.intersectionRect || getEmptyRect();\n  this.isIntersecting = !!entry.intersectionRect;\n\n  // Calculates the intersection ratio.\n  var targetRect = this.boundingClientRect;\n  var targetArea = targetRect.width * targetRect.height;\n  var intersectionRect = this.intersectionRect;\n  var intersectionArea = intersectionRect.width * intersectionRect.height;\n\n  // Sets intersection ratio.\n  if (targetArea) {\n    // Round the intersection ratio to avoid floating point math issues:\n    // https://github.com/w3c/IntersectionObserver/issues/324\n    this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));\n  } else {\n    // If area is zero and is intersecting, sets to 1, otherwise to 0\n    this.intersectionRatio = this.isIntersecting ? 1 : 0;\n  }\n}\n\n\n/**\n * Creates the global IntersectionObserver constructor.\n * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface\n * @param {Function} callback The function to be invoked after intersection\n *     changes have queued. The function is not invoked if the queue has\n *     been emptied by calling the `takeRecords` method.\n * @param {Object=} opt_options Optional configuration options.\n * @constructor\n */\nfunction IntersectionObserver(callback, opt_options) {\n\n  var options = opt_options || {};\n\n  if (typeof callback != 'function') {\n    throw new Error('callback must be a function');\n  }\n\n  if (options.root && options.root.nodeType != 1) {\n    throw new Error('root must be an Element');\n  }\n\n  // Binds and throttles `this._checkForIntersections`.\n  this._checkForIntersections = throttle(\n      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);\n\n  // Private properties.\n  this._callback = callback;\n  this._observationTargets = [];\n  this._queuedEntries = [];\n  this._rootMarginValues = this._parseRootMargin(options.rootMargin);\n\n  // Public properties.\n  this.thresholds = this._initThresholds(options.threshold);\n  this.root = options.root || null;\n  this.rootMargin = this._rootMarginValues.map(function(margin) {\n    return margin.value + margin.unit;\n  }).join(' ');\n}\n\n\n/**\n * The minimum interval within which the document will be checked for\n * intersection changes.\n */\nIntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;\n\n\n/**\n * The frequency in which the polyfill polls for intersection changes.\n * this can be updated on a per instance basis and must be set prior to\n * calling `observe` on the first target.\n */\nIntersectionObserver.prototype.POLL_INTERVAL = null;\n\n/**\n * Use a mutation observer on the root element\n * to detect intersection changes.\n */\nIntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;\n\n\n/**\n * Starts observing a target element for intersection changes based on\n * the thresholds values.\n * @param {Element} target The DOM element to observe.\n */\nIntersectionObserver.prototype.observe = function(target) {\n  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {\n    return item.element == target;\n  });\n\n  if (isTargetAlreadyObserved) {\n    return;\n  }\n\n  if (!(target && target.nodeType == 1)) {\n    throw new Error('target must be an Element');\n  }\n\n  this._registerInstance();\n  this._observationTargets.push({element: target, entry: null});\n  this._monitorIntersections();\n  this._checkForIntersections();\n};\n\n\n/**\n * Stops observing a target element for intersection changes.\n * @param {Element} target The DOM element to observe.\n */\nIntersectionObserver.prototype.unobserve = function(target) {\n  this._observationTargets =\n      this._observationTargets.filter(function(item) {\n\n    return item.element != target;\n  });\n  if (!this._observationTargets.length) {\n    this._unmonitorIntersections();\n    this._unregisterInstance();\n  }\n};\n\n\n/**\n * Stops observing all target elements for intersection changes.\n */\nIntersectionObserver.prototype.disconnect = function() {\n  this._observationTargets = [];\n  this._unmonitorIntersections();\n  this._unregisterInstance();\n};\n\n\n/**\n * Returns any queue entries that have not yet been reported to the\n * callback and clears the queue. This can be used in conjunction with the\n * callback to obtain the absolute most up-to-date intersection information.\n * @return {Array} The currently queued entries.\n */\nIntersectionObserver.prototype.takeRecords = function() {\n  var records = this._queuedEntries.slice();\n  this._queuedEntries = [];\n  return records;\n};\n\n\n/**\n * Accepts the threshold value from the user configuration object and\n * returns a sorted array of unique threshold values. If a value is not\n * between 0 and 1 and error is thrown.\n * @private\n * @param {Array|number=} opt_threshold An optional threshold value or\n *     a list of threshold values, defaulting to [0].\n * @return {Array} A sorted list of unique and valid threshold values.\n */\nIntersectionObserver.prototype._initThresholds = function(opt_threshold) {\n  var threshold = opt_threshold || [0];\n  if (!Array.isArray(threshold)) threshold = [threshold];\n\n  return threshold.sort().filter(function(t, i, a) {\n    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {\n      throw new Error('threshold must be a number between 0 and 1 inclusively');\n    }\n    return t !== a[i - 1];\n  });\n};\n\n\n/**\n * Accepts the rootMargin value from the user configuration object\n * and returns an array of the four margin values as an object containing\n * the value and unit properties. If any of the values are not properly\n * formatted or use a unit other than px or %, and error is thrown.\n * @private\n * @param {string=} opt_rootMargin An optional rootMargin value,\n *     defaulting to '0px'.\n * @return {Array<Object>} An array of margin objects with the keys\n *     value and unit.\n */\nIntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {\n  var marginString = opt_rootMargin || '0px';\n  var margins = marginString.split(/\\s+/).map(function(margin) {\n    var parts = /^(-?\\d*\\.?\\d+)(px|%)$/.exec(margin);\n    if (!parts) {\n      throw new Error('rootMargin must be specified in pixels or percent');\n    }\n    return {value: parseFloat(parts[1]), unit: parts[2]};\n  });\n\n  // Handles shorthand.\n  margins[1] = margins[1] || margins[0];\n  margins[2] = margins[2] || margins[0];\n  margins[3] = margins[3] || margins[1];\n\n  return margins;\n};\n\n\n/**\n * Starts polling for intersection changes if the polling is not already\n * happening, and if the page's visibility state is visible.\n * @private\n */\nIntersectionObserver.prototype._monitorIntersections = function() {\n  if (!this._monitoringIntersections) {\n    this._monitoringIntersections = true;\n\n    // If a poll interval is set, use polling instead of listening to\n    // resize and scroll events or DOM mutations.\n    if (this.POLL_INTERVAL) {\n      this._monitoringInterval = setInterval(\n          this._checkForIntersections, this.POLL_INTERVAL);\n    }\n    else {\n      addEvent(window, 'resize', this._checkForIntersections, true);\n      addEvent(document, 'scroll', this._checkForIntersections, true);\n\n      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {\n        this._domObserver = new MutationObserver(this._checkForIntersections);\n        this._domObserver.observe(document, {\n          attributes: true,\n          childList: true,\n          characterData: true,\n          subtree: true\n        });\n      }\n    }\n  }\n};\n\n\n/**\n * Stops polling for intersection changes.\n * @private\n */\nIntersectionObserver.prototype._unmonitorIntersections = function() {\n  if (this._monitoringIntersections) {\n    this._monitoringIntersections = false;\n\n    clearInterval(this._monitoringInterval);\n    this._monitoringInterval = null;\n\n    removeEvent(window, 'resize', this._checkForIntersections, true);\n    removeEvent(document, 'scroll', this._checkForIntersections, true);\n\n    if (this._domObserver) {\n      this._domObserver.disconnect();\n      this._domObserver = null;\n    }\n  }\n};\n\n\n/**\n * Scans each observation target for intersection changes and adds them\n * to the internal entries queue. If new entries are found, it\n * schedules the callback to be invoked.\n * @private\n */\nIntersectionObserver.prototype._checkForIntersections = function() {\n  var rootIsInDom = this._rootIsInDom();\n  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();\n\n  this._observationTargets.forEach(function(item) {\n    var target = item.element;\n    var targetRect = getBoundingClientRect(target);\n    var rootContainsTarget = this._rootContainsTarget(target);\n    var oldEntry = item.entry;\n    var intersectionRect = rootIsInDom && rootContainsTarget &&\n        this._computeTargetAndRootIntersection(target, rootRect);\n\n    var newEntry = item.entry = new IntersectionObserverEntry({\n      time: now(),\n      target: target,\n      boundingClientRect: targetRect,\n      rootBounds: rootRect,\n      intersectionRect: intersectionRect\n    });\n\n    if (!oldEntry) {\n      this._queuedEntries.push(newEntry);\n    } else if (rootIsInDom && rootContainsTarget) {\n      // If the new entry intersection ratio has crossed any of the\n      // thresholds, add a new entry.\n      if (this._hasCrossedThreshold(oldEntry, newEntry)) {\n        this._queuedEntries.push(newEntry);\n      }\n    } else {\n      // If the root is not in the DOM or target is not contained within\n      // root but the previous entry for this target had an intersection,\n      // add a new record indicating removal.\n      if (oldEntry && oldEntry.isIntersecting) {\n        this._queuedEntries.push(newEntry);\n      }\n    }\n  }, this);\n\n  if (this._queuedEntries.length) {\n    this._callback(this.takeRecords(), this);\n  }\n};\n\n\n/**\n * Accepts a target and root rect computes the intersection between then\n * following the algorithm in the spec.\n * TODO(philipwalton): at this time clip-path is not considered.\n * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo\n * @param {Element} target The target DOM element\n * @param {Object} rootRect The bounding rect of the root after being\n *     expanded by the rootMargin value.\n * @return {?Object} The final intersection rect object or undefined if no\n *     intersection is found.\n * @private\n */\nIntersectionObserver.prototype._computeTargetAndRootIntersection =\n    function(target, rootRect) {\n\n  // If the element isn't displayed, an intersection can't happen.\n  if (window.getComputedStyle(target).display == 'none') return;\n\n  var targetRect = getBoundingClientRect(target);\n  var intersectionRect = targetRect;\n  var parent = getParentNode(target);\n  var atRoot = false;\n\n  while (!atRoot) {\n    var parentRect = null;\n    var parentComputedStyle = parent.nodeType == 1 ?\n        window.getComputedStyle(parent) : {};\n\n    // If the parent isn't displayed, an intersection can't happen.\n    if (parentComputedStyle.display == 'none') return;\n\n    if (parent == this.root || parent == document) {\n      atRoot = true;\n      parentRect = rootRect;\n    } else {\n      // If the element has a non-visible overflow, and it's not the <body>\n      // or <html> element, update the intersection rect.\n      // Note: <body> and <html> cannot be clipped to a rect that's not also\n      // the document rect, so no need to compute a new intersection.\n      if (parent != document.body &&\n          parent != document.documentElement &&\n          parentComputedStyle.overflow != 'visible') {\n        parentRect = getBoundingClientRect(parent);\n      }\n    }\n\n    // If either of the above conditionals set a new parentRect,\n    // calculate new intersection data.\n    if (parentRect) {\n      intersectionRect = computeRectIntersection(parentRect, intersectionRect);\n\n      if (!intersectionRect) break;\n    }\n    parent = getParentNode(parent);\n  }\n  return intersectionRect;\n};\n\n\n/**\n * Returns the root rect after being expanded by the rootMargin value.\n * @return {Object} The expanded root rect.\n * @private\n */\nIntersectionObserver.prototype._getRootRect = function() {\n  var rootRect;\n  if (this.root) {\n    rootRect = getBoundingClientRect(this.root);\n  } else {\n    // Use <html>/<body> instead of window since scroll bars affect size.\n    var html = document.documentElement;\n    var body = document.body;\n    rootRect = {\n      top: 0,\n      left: 0,\n      right: html.clientWidth || body.clientWidth,\n      width: html.clientWidth || body.clientWidth,\n      bottom: html.clientHeight || body.clientHeight,\n      height: html.clientHeight || body.clientHeight\n    };\n  }\n  return this._expandRectByRootMargin(rootRect);\n};\n\n\n/**\n * Accepts a rect and expands it by the rootMargin value.\n * @param {Object} rect The rect object to expand.\n * @return {Object} The expanded rect.\n * @private\n */\nIntersectionObserver.prototype._expandRectByRootMargin = function(rect) {\n  var margins = this._rootMarginValues.map(function(margin, i) {\n    return margin.unit == 'px' ? margin.value :\n        margin.value * (i % 2 ? rect.width : rect.height) / 100;\n  });\n  var newRect = {\n    top: rect.top - margins[0],\n    right: rect.right + margins[1],\n    bottom: rect.bottom + margins[2],\n    left: rect.left - margins[3]\n  };\n  newRect.width = newRect.right - newRect.left;\n  newRect.height = newRect.bottom - newRect.top;\n\n  return newRect;\n};\n\n\n/**\n * Accepts an old and new entry and returns true if at least one of the\n * threshold values has been crossed.\n * @param {?IntersectionObserverEntry} oldEntry The previous entry for a\n *    particular target element or null if no previous entry exists.\n * @param {IntersectionObserverEntry} newEntry The current entry for a\n *    particular target element.\n * @return {boolean} Returns true if a any threshold has been crossed.\n * @private\n */\nIntersectionObserver.prototype._hasCrossedThreshold =\n    function(oldEntry, newEntry) {\n\n  // To make comparing easier, an entry that has a ratio of 0\n  // but does not actually intersect is given a value of -1\n  var oldRatio = oldEntry && oldEntry.isIntersecting ?\n      oldEntry.intersectionRatio || 0 : -1;\n  var newRatio = newEntry.isIntersecting ?\n      newEntry.intersectionRatio || 0 : -1;\n\n  // Ignore unchanged ratios\n  if (oldRatio === newRatio) return;\n\n  for (var i = 0; i < this.thresholds.length; i++) {\n    var threshold = this.thresholds[i];\n\n    // Return true if an entry matches a threshold or if the new ratio\n    // and the old ratio are on the opposite sides of a threshold.\n    if (threshold == oldRatio || threshold == newRatio ||\n        threshold < oldRatio !== threshold < newRatio) {\n      return true;\n    }\n  }\n};\n\n\n/**\n * Returns whether or not the root element is an element and is in the DOM.\n * @return {boolean} True if the root element is an element and is in the DOM.\n * @private\n */\nIntersectionObserver.prototype._rootIsInDom = function() {\n  return !this.root || containsDeep(document, this.root);\n};\n\n\n/**\n * Returns whether or not the target element is a child of root.\n * @param {Element} target The target element to check.\n * @return {boolean} True if the target element is a child of root.\n * @private\n */\nIntersectionObserver.prototype._rootContainsTarget = function(target) {\n  return containsDeep(this.root || document, target);\n};\n\n\n/**\n * Adds the instance to the global IntersectionObserver registry if it isn't\n * already present.\n * @private\n */\nIntersectionObserver.prototype._registerInstance = function() {\n  if (registry.indexOf(this) < 0) {\n    registry.push(this);\n  }\n};\n\n\n/**\n * Removes the instance from the global IntersectionObserver registry.\n * @private\n */\nIntersectionObserver.prototype._unregisterInstance = function() {\n  var index = registry.indexOf(this);\n  if (index != -1) registry.splice(index, 1);\n};\n\n\n/**\n * Returns the result of the performance.now() method or null in browsers\n * that don't support the API.\n * @return {number} The elapsed time since the page was requested.\n */\nfunction now() {\n  return window.performance && performance.now && performance.now();\n}\n\n\n/**\n * Throttles a function and delays its execution, so it's only called at most\n * once within a given time period.\n * @param {Function} fn The function to throttle.\n * @param {number} timeout The amount of time that must pass before the\n *     function can be called again.\n * @return {Function} The throttled function.\n */\nfunction throttle(fn, timeout) {\n  var timer = null;\n  return function () {\n    if (!timer) {\n      timer = setTimeout(function() {\n        fn();\n        timer = null;\n      }, timeout);\n    }\n  };\n}\n\n\n/**\n * Adds an event handler to a DOM node ensuring cross-browser compatibility.\n * @param {Node} node The DOM node to add the event handler to.\n * @param {string} event The event name.\n * @param {Function} fn The event handler to add.\n * @param {boolean} opt_useCapture Optionally adds the even to the capture\n *     phase. Note: this only works in modern browsers.\n */\nfunction addEvent(node, event, fn, opt_useCapture) {\n  if (typeof node.addEventListener == 'function') {\n    node.addEventListener(event, fn, opt_useCapture || false);\n  }\n  else if (typeof node.attachEvent == 'function') {\n    node.attachEvent('on' + event, fn);\n  }\n}\n\n\n/**\n * Removes a previously added event handler from a DOM node.\n * @param {Node} node The DOM node to remove the event handler from.\n * @param {string} event The event name.\n * @param {Function} fn The event handler to remove.\n * @param {boolean} opt_useCapture If the event handler was added with this\n *     flag set to true, it should be set to true here in order to remove it.\n */\nfunction removeEvent(node, event, fn, opt_useCapture) {\n  if (typeof node.removeEventListener == 'function') {\n    node.removeEventListener(event, fn, opt_useCapture || false);\n  }\n  else if (typeof node.detatchEvent == 'function') {\n    node.detatchEvent('on' + event, fn);\n  }\n}\n\n\n/**\n * Returns the intersection between two rect objects.\n * @param {Object} rect1 The first rect.\n * @param {Object} rect2 The second rect.\n * @return {?Object} The intersection rect or undefined if no intersection\n *     is found.\n */\nfunction computeRectIntersection(rect1, rect2) {\n  var top = Math.max(rect1.top, rect2.top);\n  var bottom = Math.min(rect1.bottom, rect2.bottom);\n  var left = Math.max(rect1.left, rect2.left);\n  var right = Math.min(rect1.right, rect2.right);\n  var width = right - left;\n  var height = bottom - top;\n\n  return (width >= 0 && height >= 0) && {\n    top: top,\n    bottom: bottom,\n    left: left,\n    right: right,\n    width: width,\n    height: height\n  };\n}\n\n\n/**\n * Shims the native getBoundingClientRect for compatibility with older IE.\n * @param {Element} el The element whose bounding rect to get.\n * @return {Object} The (possibly shimmed) rect of the element.\n */\nfunction getBoundingClientRect(el) {\n  var rect;\n\n  try {\n    rect = el.getBoundingClientRect();\n  } catch (err) {\n    // Ignore Windows 7 IE11 \"Unspecified error\"\n    // https://github.com/w3c/IntersectionObserver/pull/205\n  }\n\n  if (!rect) return getEmptyRect();\n\n  // Older IE\n  if (!(rect.width && rect.height)) {\n    rect = {\n      top: rect.top,\n      right: rect.right,\n      bottom: rect.bottom,\n      left: rect.left,\n      width: rect.right - rect.left,\n      height: rect.bottom - rect.top\n    };\n  }\n  return rect;\n}\n\n\n/**\n * Returns an empty rect object. An empty rect is returned when an element\n * is not in the DOM.\n * @return {Object} The empty rect.\n */\nfunction getEmptyRect() {\n  return {\n    top: 0,\n    bottom: 0,\n    left: 0,\n    right: 0,\n    width: 0,\n    height: 0\n  };\n}\n\n/**\n * Checks to see if a parent element contains a child element (including inside\n * shadow DOM).\n * @param {Node} parent The parent element.\n * @param {Node} child The child element.\n * @return {boolean} True if the parent node contains the child node.\n */\nfunction containsDeep(parent, child) {\n  var node = child;\n  while (node) {\n    if (node == parent) return true;\n\n    node = getParentNode(node);\n  }\n  return false;\n}\n\n\n/**\n * Gets the parent node of an element or its host element if the parent node\n * is a shadow root.\n * @param {Node} node The node whose parent to get.\n * @return {Node|null} The parent node or null if no parent exists.\n */\nfunction getParentNode(node) {\n  var parent = node.parentNode;\n\n  if (parent && parent.nodeType == 11 && parent.host) {\n    // If the parent is a shadow root, return the host element.\n    return parent.host;\n  }\n  return parent;\n}\n\n\n// Exposes the constructors globally.\nwindow.IntersectionObserver = IntersectionObserver;\nwindow.IntersectionObserverEntry = IntersectionObserverEntry;\n\n}(window, document));\n\n\n//# sourceURL=webpack://equicore/./node_modules/intersection-observer/intersection-observer.js?"
        );

        /***/
      },

    /***/ './node_modules/is-arguments/index.js':
      /*!********************************************!*\
  !*** ./node_modules/is-arguments/index.js ***!
  \********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ \"./node_modules/has-tostringtag/shams.js\")();\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\n\nvar $toString = callBound('Object.prototype.toString');\n\nvar isStandardArguments = function isArguments(value) {\n\tif (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {\n\t\treturn false;\n\t}\n\treturn $toString(value) === '[object Arguments]';\n};\n\nvar isLegacyArguments = function isArguments(value) {\n\tif (isStandardArguments(value)) {\n\t\treturn true;\n\t}\n\treturn value !== null &&\n\t\ttypeof value === 'object' &&\n\t\ttypeof value.length === 'number' &&\n\t\tvalue.length >= 0 &&\n\t\t$toString(value) !== '[object Array]' &&\n\t\t$toString(value.callee) === '[object Function]';\n};\n\nvar supportsStandardArguments = (function () {\n\treturn isStandardArguments(arguments);\n}());\n\nisStandardArguments.isLegacyArguments = isLegacyArguments; // for tests\n\nmodule.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;\n\n\n//# sourceURL=webpack://equicore/./node_modules/is-arguments/index.js?"
        );

        /***/
      },

    /***/ './node_modules/is-callable/index.js':
      /*!*******************************************!*\
  !*** ./node_modules/is-callable/index.js ***!
  \*******************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\nvar fnToStr = Function.prototype.toString;\nvar reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;\nvar badArrayLike;\nvar isCallableMarker;\nif (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {\n\ttry {\n\t\tbadArrayLike = Object.defineProperty({}, 'length', {\n\t\t\tget: function () {\n\t\t\t\tthrow isCallableMarker;\n\t\t\t}\n\t\t});\n\t\tisCallableMarker = {};\n\t\t// eslint-disable-next-line no-throw-literal\n\t\treflectApply(function () { throw 42; }, null, badArrayLike);\n\t} catch (_) {\n\t\tif (_ !== isCallableMarker) {\n\t\t\treflectApply = null;\n\t\t}\n\t}\n} else {\n\treflectApply = null;\n}\n\nvar constructorRegex = /^\\s*class\\b/;\nvar isES6ClassFn = function isES6ClassFunction(value) {\n\ttry {\n\t\tvar fnStr = fnToStr.call(value);\n\t\treturn constructorRegex.test(fnStr);\n\t} catch (e) {\n\t\treturn false; // not a function\n\t}\n};\n\nvar tryFunctionObject = function tryFunctionToStr(value) {\n\ttry {\n\t\tif (isES6ClassFn(value)) { return false; }\n\t\tfnToStr.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\nvar toStr = Object.prototype.toString;\nvar objectClass = '[object Object]';\nvar fnClass = '[object Function]';\nvar genClass = '[object GeneratorFunction]';\nvar ddaClass = '[object HTMLAllCollection]'; // IE 11\nvar ddaClass2 = '[object HTML document.all class]';\nvar ddaClass3 = '[object HTMLCollection]'; // IE 9-10\nvar hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`\n\nvar isIE68 = !(0 in [,]); // eslint-disable-line no-sparse-arrays, comma-spacing\n\nvar isDDA = function isDocumentDotAll() { return false; };\nif (typeof document === 'object') {\n\t// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly\n\tvar all = document.all;\n\tif (toStr.call(all) === toStr.call(document.all)) {\n\t\tisDDA = function isDocumentDotAll(value) {\n\t\t\t/* globals document: false */\n\t\t\t// in IE 6-8, typeof document.all is \"object\" and it's truthy\n\t\t\tif ((isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) {\n\t\t\t\ttry {\n\t\t\t\t\tvar str = toStr.call(value);\n\t\t\t\t\treturn (\n\t\t\t\t\t\tstr === ddaClass\n\t\t\t\t\t\t|| str === ddaClass2\n\t\t\t\t\t\t|| str === ddaClass3 // opera 12.16\n\t\t\t\t\t\t|| str === objectClass // IE 6-8\n\t\t\t\t\t) && value('') == null; // eslint-disable-line eqeqeq\n\t\t\t\t} catch (e) { /**/ }\n\t\t\t}\n\t\t\treturn false;\n\t\t};\n\t}\n}\n\nmodule.exports = reflectApply\n\t? function isCallable(value) {\n\t\tif (isDDA(value)) { return true; }\n\t\tif (!value) { return false; }\n\t\tif (typeof value !== 'function' && typeof value !== 'object') { return false; }\n\t\ttry {\n\t\t\treflectApply(value, null, badArrayLike);\n\t\t} catch (e) {\n\t\t\tif (e !== isCallableMarker) { return false; }\n\t\t}\n\t\treturn !isES6ClassFn(value) && tryFunctionObject(value);\n\t}\n\t: function isCallable(value) {\n\t\tif (isDDA(value)) { return true; }\n\t\tif (!value) { return false; }\n\t\tif (typeof value !== 'function' && typeof value !== 'object') { return false; }\n\t\tif (hasToStringTag) { return tryFunctionObject(value); }\n\t\tif (isES6ClassFn(value)) { return false; }\n\t\tvar strClass = toStr.call(value);\n\t\tif (strClass !== fnClass && strClass !== genClass && !(/^\\[object HTML/).test(strClass)) { return false; }\n\t\treturn tryFunctionObject(value);\n\t};\n\n\n//# sourceURL=webpack://equicore/./node_modules/is-callable/index.js?"
        );

        /***/
      },

    /***/ './node_modules/is-date-object/index.js':
      /*!**********************************************!*\
  !*** ./node_modules/is-date-object/index.js ***!
  \**********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar getDay = Date.prototype.getDay;\nvar tryDateObject = function tryDateGetDayCall(value) {\n\ttry {\n\t\tgetDay.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\n\nvar toStr = Object.prototype.toString;\nvar dateClass = '[object Date]';\nvar hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ \"./node_modules/has-tostringtag/shams.js\")();\n\nmodule.exports = function isDateObject(value) {\n\tif (typeof value !== 'object' || value === null) {\n\t\treturn false;\n\t}\n\treturn hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/is-date-object/index.js?"
        );

        /***/
      },

    /***/ './node_modules/is-map/index.js':
      /*!**************************************!*\
  !*** ./node_modules/is-map/index.js ***!
  \**************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\n/** @const */\nvar $Map = typeof Map === 'function' && Map.prototype ? Map : null;\nvar $Set = typeof Set === 'function' && Set.prototype ? Set : null;\n\nvar exported;\n\nif (!$Map) {\n\t/** @type {import('.')} */\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isMap(x) {\n\t\t// `Map` is not present in this environment.\n\t\treturn false;\n\t};\n}\n\nvar $mapHas = $Map ? Map.prototype.has : null;\nvar $setHas = $Set ? Set.prototype.has : null;\nif (!exported && !$mapHas) {\n\t/** @type {import('.')} */\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isMap(x) {\n\t\t// `Map` does not have a `has` method\n\t\treturn false;\n\t};\n}\n\n/** @type {import('.')} */\nmodule.exports = exported || function isMap(x) {\n\tif (!x || typeof x !== 'object') {\n\t\treturn false;\n\t}\n\ttry {\n\t\t$mapHas.call(x);\n\t\tif ($setHas) {\n\t\t\ttry {\n\t\t\t\t$setHas.call(x);\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\t// @ts-expect-error TS can't figure out that $Map is always truthy here\n\t\treturn x instanceof $Map; // core-js workaround, pre-v2.5.0\n\t} catch (e) {}\n\treturn false;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/is-map/index.js?"
        );

        /***/
      },

    /***/ './node_modules/is-regex/index.js':
      /*!****************************************!*\
  !*** ./node_modules/is-regex/index.js ***!
  \****************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ \"./node_modules/has-tostringtag/shams.js\")();\nvar has;\nvar $exec;\nvar isRegexMarker;\nvar badStringifier;\n\nif (hasToStringTag) {\n\thas = callBound('Object.prototype.hasOwnProperty');\n\t$exec = callBound('RegExp.prototype.exec');\n\tisRegexMarker = {};\n\n\tvar throwRegexMarker = function () {\n\t\tthrow isRegexMarker;\n\t};\n\tbadStringifier = {\n\t\ttoString: throwRegexMarker,\n\t\tvalueOf: throwRegexMarker\n\t};\n\n\tif (typeof Symbol.toPrimitive === 'symbol') {\n\t\tbadStringifier[Symbol.toPrimitive] = throwRegexMarker;\n\t}\n}\n\nvar $toString = callBound('Object.prototype.toString');\nvar gOPD = Object.getOwnPropertyDescriptor;\nvar regexClass = '[object RegExp]';\n\nmodule.exports = hasToStringTag\n\t// eslint-disable-next-line consistent-return\n\t? function isRegex(value) {\n\t\tif (!value || typeof value !== 'object') {\n\t\t\treturn false;\n\t\t}\n\n\t\tvar descriptor = gOPD(value, 'lastIndex');\n\t\tvar hasLastIndexDataProperty = descriptor && has(descriptor, 'value');\n\t\tif (!hasLastIndexDataProperty) {\n\t\t\treturn false;\n\t\t}\n\n\t\ttry {\n\t\t\t$exec(value, badStringifier);\n\t\t} catch (e) {\n\t\t\treturn e === isRegexMarker;\n\t\t}\n\t}\n\t: function isRegex(value) {\n\t\t// In older browsers, typeof regex incorrectly returns 'function'\n\t\tif (!value || (typeof value !== 'object' && typeof value !== 'function')) {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn $toString(value) === regexClass;\n\t};\n\n\n//# sourceURL=webpack://equicore/./node_modules/is-regex/index.js?"
        );

        /***/
      },

    /***/ './node_modules/is-set/index.js':
      /*!**************************************!*\
  !*** ./node_modules/is-set/index.js ***!
  \**************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\nvar $Map = typeof Map === 'function' && Map.prototype ? Map : null;\nvar $Set = typeof Set === 'function' && Set.prototype ? Set : null;\n\nvar exported;\n\nif (!$Set) {\n\t/** @type {import('.')} */\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isSet(x) {\n\t\t// `Set` is not present in this environment.\n\t\treturn false;\n\t};\n}\n\nvar $mapHas = $Map ? Map.prototype.has : null;\nvar $setHas = $Set ? Set.prototype.has : null;\nif (!exported && !$setHas) {\n\t/** @type {import('.')} */\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isSet(x) {\n\t\t// `Set` does not have a `has` method\n\t\treturn false;\n\t};\n}\n\n/** @type {import('.')} */\nmodule.exports = exported || function isSet(x) {\n\tif (!x || typeof x !== 'object') {\n\t\treturn false;\n\t}\n\ttry {\n\t\t$setHas.call(x);\n\t\tif ($mapHas) {\n\t\t\ttry {\n\t\t\t\t$mapHas.call(x);\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\t// @ts-expect-error TS can't figure out that $Set is always truthy here\n\t\treturn x instanceof $Set; // core-js workaround, pre-v2.5.0\n\t} catch (e) {}\n\treturn false;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/is-set/index.js?"
        );

        /***/
      },

    /***/ './node_modules/is-string/index.js':
      /*!*****************************************!*\
  !*** ./node_modules/is-string/index.js ***!
  \*****************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar strValue = String.prototype.valueOf;\nvar tryStringObject = function tryStringObject(value) {\n\ttry {\n\t\tstrValue.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\nvar toStr = Object.prototype.toString;\nvar strClass = '[object String]';\nvar hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ \"./node_modules/has-tostringtag/shams.js\")();\n\nmodule.exports = function isString(value) {\n\tif (typeof value === 'string') {\n\t\treturn true;\n\t}\n\tif (typeof value !== 'object') {\n\t\treturn false;\n\t}\n\treturn hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/is-string/index.js?"
        );

        /***/
      },

    /***/ './node_modules/is-symbol/index.js':
      /*!*****************************************!*\
  !*** ./node_modules/is-symbol/index.js ***!
  \*****************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar toStr = Object.prototype.toString;\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nif (hasSymbols) {\n\tvar symToStr = Symbol.prototype.toString;\n\tvar symStringRegex = /^Symbol\\(.*\\)$/;\n\tvar isSymbolObject = function isRealSymbolObject(value) {\n\t\tif (typeof value.valueOf() !== 'symbol') {\n\t\t\treturn false;\n\t\t}\n\t\treturn symStringRegex.test(symToStr.call(value));\n\t};\n\n\tmodule.exports = function isSymbol(value) {\n\t\tif (typeof value === 'symbol') {\n\t\t\treturn true;\n\t\t}\n\t\tif (toStr.call(value) !== '[object Symbol]') {\n\t\t\treturn false;\n\t\t}\n\t\ttry {\n\t\t\treturn isSymbolObject(value);\n\t\t} catch (e) {\n\t\t\treturn false;\n\t\t}\n\t};\n} else {\n\n\tmodule.exports = function isSymbol(value) {\n\t\t// this environment does not support Symbols.\n\t\treturn  false && 0;\n\t};\n}\n\n\n//# sourceURL=webpack://equicore/./node_modules/is-symbol/index.js?"
        );

        /***/
      },

    /***/ './node_modules/isarray/index.js':
      /*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
      /***/ (module) => {
        eval(
          "var toString = {}.toString;\n\nmodule.exports = Array.isArray || function (arr) {\n  return toString.call(arr) == '[object Array]';\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/isarray/index.js?"
        );

        /***/
      },

    /***/ './node_modules/iterate-iterator/index.js':
      /*!************************************************!*\
  !*** ./node_modules/iterate-iterator/index.js ***!
  \************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\nvar $TypeError = TypeError;\n\n// eslint-disable-next-line consistent-return\nmodule.exports = function iterateIterator(iterator) {\n\tif (!iterator || typeof iterator.next !== 'function') {\n\t\tthrow new $TypeError('iterator must be an object with a `next` method');\n\t}\n\tif (arguments.length > 1) {\n\t\tvar callback = arguments[1];\n\t\tif (typeof callback !== 'function') {\n\t\t\tthrow new $TypeError('`callback`, if provided, must be a function');\n\t\t}\n\t}\n\tvar values = callback || [];\n\tvar result;\n\twhile ((result = iterator.next()) && !result.done) {\n\t\tif (callback) {\n\t\t\tcallback(result.value); // eslint-disable-line callback-return\n\t\t} else {\n\t\t\tvalues.push(result.value);\n\t\t}\n\t}\n\tif (!callback) {\n\t\treturn values;\n\t}\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/iterate-iterator/index.js?"
        );

        /***/
      },

    /***/ './node_modules/matchmedia-polyfill/matchMedia.addListener.js':
      /*!********************************************************************!*\
  !*** ./node_modules/matchmedia-polyfill/matchMedia.addListener.js ***!
  \********************************************************************/
      /***/ () => {
        eval(
          "/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. MIT license */\n(function(){\n    // Bail out for browsers that have addListener support\n    if (window.matchMedia && window.matchMedia('all').addListener) {\n        return false;\n    }\n\n    var localMatchMedia = window.matchMedia,\n        hasMediaQueries = localMatchMedia('only all').matches,\n        isListening     = false,\n        timeoutID       = 0,    // setTimeout for debouncing 'handleChange'\n        queries         = [],   // Contains each 'mql' and associated 'listeners' if 'addListener' is used\n        handleChange    = function(evt) {\n            // Debounce\n            clearTimeout(timeoutID);\n\n            timeoutID = setTimeout(function() {\n                for (var i = 0, il = queries.length; i < il; i++) {\n                    var mql         = queries[i].mql,\n                        listeners   = queries[i].listeners || [],\n                        matches     = localMatchMedia(mql.media).matches;\n\n                    // Update mql.matches value and call listeners\n                    // Fire listeners only if transitioning to or from matched state\n                    if (matches !== mql.matches) {\n                        mql.matches = matches;\n\n                        for (var j = 0, jl = listeners.length; j < jl; j++) {\n                            listeners[j].call(window, mql);\n                        }\n                    }\n                }\n            }, 30);\n        };\n\n    window.matchMedia = function(media) {\n        var mql         = localMatchMedia(media),\n            listeners   = [],\n            index       = 0;\n\n        mql.addListener = function(listener) {\n            // Changes would not occur to css media type so return now (Affects IE <= 8)\n            if (!hasMediaQueries) {\n                return;\n            }\n\n            // Set up 'resize' listener for browsers that support CSS3 media queries (Not for IE <= 8)\n            // There should only ever be 1 resize listener running for performance\n            if (!isListening) {\n                isListening = true;\n                window.addEventListener('resize', handleChange, true);\n            }\n\n            // Push object only if it has not been pushed already\n            if (index === 0) {\n                index = queries.push({\n                    mql         : mql,\n                    listeners   : listeners\n                });\n            }\n\n            listeners.push(listener);\n        };\n\n        mql.removeListener = function(listener) {\n            for (var i = 0, il = listeners.length; i < il; i++){\n                if (listeners[i] === listener){\n                    listeners.splice(i, 1);\n                }\n            }\n        };\n\n        return mql;\n    };\n}());\n\n\n//# sourceURL=webpack://equicore/./node_modules/matchmedia-polyfill/matchMedia.addListener.js?"
        );

        /***/
      },

    /***/ './node_modules/matchmedia-polyfill/matchMedia.js':
      /*!********************************************************!*\
  !*** ./node_modules/matchmedia-polyfill/matchMedia.js ***!
  \********************************************************/
      /***/ () => {
        eval(
          "/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license */\n\nwindow.matchMedia || (window.matchMedia = function() {\n    \"use strict\";\n\n    // For browsers that support matchMedium api such as IE 9 and webkit\n    var styleMedia = (window.styleMedia || window.media);\n\n    // For those that don't support matchMedium\n    if (!styleMedia) {\n        var style       = document.createElement('style'),\n            script      = document.getElementsByTagName('script')[0],\n            info        = null;\n\n        style.type  = 'text/css';\n        style.id    = 'matchmediajs-test';\n\n        if (!script) {\n          document.head.appendChild(style);\n        } else {\n          script.parentNode.insertBefore(style, script);\n        }\n\n        // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers\n        info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;\n\n        styleMedia = {\n            matchMedium: function(media) {\n                var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';\n\n                // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers\n                if (style.styleSheet) {\n                    style.styleSheet.cssText = text;\n                } else {\n                    style.textContent = text;\n                }\n\n                // Test if media query is true or false\n                return info.width === '1px';\n            }\n        };\n    }\n\n    return function(media) {\n        return {\n            matches: styleMedia.matchMedium(media || 'all'),\n            media: media || 'all'\n        };\n    };\n}());\n\n\n//# sourceURL=webpack://equicore/./node_modules/matchmedia-polyfill/matchMedia.js?"
        );

        /***/
      },

    /***/ './node_modules/object-inspect/index.js':
      /*!**********************************************!*\
  !*** ./node_modules/object-inspect/index.js ***!
  \**********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          "var hasMap = typeof Map === 'function' && Map.prototype;\nvar mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;\nvar mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;\nvar mapForEach = hasMap && Map.prototype.forEach;\nvar hasSet = typeof Set === 'function' && Set.prototype;\nvar setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;\nvar setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;\nvar setForEach = hasSet && Set.prototype.forEach;\nvar hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;\nvar weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;\nvar hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;\nvar weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;\nvar hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;\nvar weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;\nvar booleanValueOf = Boolean.prototype.valueOf;\nvar objectToString = Object.prototype.toString;\nvar functionToString = Function.prototype.toString;\nvar $match = String.prototype.match;\nvar $slice = String.prototype.slice;\nvar $replace = String.prototype.replace;\nvar $toUpperCase = String.prototype.toUpperCase;\nvar $toLowerCase = String.prototype.toLowerCase;\nvar $test = RegExp.prototype.test;\nvar $concat = Array.prototype.concat;\nvar $join = Array.prototype.join;\nvar $arrSlice = Array.prototype.slice;\nvar $floor = Math.floor;\nvar bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;\nvar gOPS = Object.getOwnPropertySymbols;\nvar symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;\nvar hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';\n// ie, `has-tostringtag/shams\nvar toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')\n    ? Symbol.toStringTag\n    : null;\nvar isEnumerable = Object.prototype.propertyIsEnumerable;\n\nvar gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (\n    [].__proto__ === Array.prototype // eslint-disable-line no-proto\n        ? function (O) {\n            return O.__proto__; // eslint-disable-line no-proto\n        }\n        : null\n);\n\nfunction addNumericSeparator(num, str) {\n    if (\n        num === Infinity\n        || num === -Infinity\n        || num !== num\n        || (num && num > -1000 && num < 1000)\n        || $test.call(/e/, str)\n    ) {\n        return str;\n    }\n    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;\n    if (typeof num === 'number') {\n        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)\n        if (int !== num) {\n            var intStr = String(int);\n            var dec = $slice.call(str, intStr.length + 1);\n            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');\n        }\n    }\n    return $replace.call(str, sepRegex, '$&_');\n}\n\nvar utilInspect = __webpack_require__(/*! ./util.inspect */ \"?4f7e\");\nvar inspectCustom = utilInspect.custom;\nvar inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;\n\nmodule.exports = function inspect_(obj, options, depth, seen) {\n    var opts = options || {};\n\n    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {\n        throw new TypeError('option \"quoteStyle\" must be \"single\" or \"double\"');\n    }\n    if (\n        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'\n            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity\n            : opts.maxStringLength !== null\n        )\n    ) {\n        throw new TypeError('option \"maxStringLength\", if provided, must be a positive integer, Infinity, or `null`');\n    }\n    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;\n    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {\n        throw new TypeError('option \"customInspect\", if provided, must be `true`, `false`, or `\\'symbol\\'`');\n    }\n\n    if (\n        has(opts, 'indent')\n        && opts.indent !== null\n        && opts.indent !== '\\t'\n        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)\n    ) {\n        throw new TypeError('option \"indent\" must be \"\\\\t\", an integer > 0, or `null`');\n    }\n    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {\n        throw new TypeError('option \"numericSeparator\", if provided, must be `true` or `false`');\n    }\n    var numericSeparator = opts.numericSeparator;\n\n    if (typeof obj === 'undefined') {\n        return 'undefined';\n    }\n    if (obj === null) {\n        return 'null';\n    }\n    if (typeof obj === 'boolean') {\n        return obj ? 'true' : 'false';\n    }\n\n    if (typeof obj === 'string') {\n        return inspectString(obj, opts);\n    }\n    if (typeof obj === 'number') {\n        if (obj === 0) {\n            return Infinity / obj > 0 ? '0' : '-0';\n        }\n        var str = String(obj);\n        return numericSeparator ? addNumericSeparator(obj, str) : str;\n    }\n    if (typeof obj === 'bigint') {\n        var bigIntStr = String(obj) + 'n';\n        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;\n    }\n\n    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;\n    if (typeof depth === 'undefined') { depth = 0; }\n    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {\n        return isArray(obj) ? '[Array]' : '[Object]';\n    }\n\n    var indent = getIndent(opts, depth);\n\n    if (typeof seen === 'undefined') {\n        seen = [];\n    } else if (indexOf(seen, obj) >= 0) {\n        return '[Circular]';\n    }\n\n    function inspect(value, from, noIndent) {\n        if (from) {\n            seen = $arrSlice.call(seen);\n            seen.push(from);\n        }\n        if (noIndent) {\n            var newOpts = {\n                depth: opts.depth\n            };\n            if (has(opts, 'quoteStyle')) {\n                newOpts.quoteStyle = opts.quoteStyle;\n            }\n            return inspect_(value, newOpts, depth + 1, seen);\n        }\n        return inspect_(value, opts, depth + 1, seen);\n    }\n\n    if (typeof obj === 'function' && !isRegExp(obj)) { // in older engines, regexes are callable\n        var name = nameOf(obj);\n        var keys = arrObjKeys(obj, inspect);\n        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');\n    }\n    if (isSymbol(obj)) {\n        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\\(.*\\))_[^)]*$/, '$1') : symToString.call(obj);\n        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;\n    }\n    if (isElement(obj)) {\n        var s = '<' + $toLowerCase.call(String(obj.nodeName));\n        var attrs = obj.attributes || [];\n        for (var i = 0; i < attrs.length; i++) {\n            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);\n        }\n        s += '>';\n        if (obj.childNodes && obj.childNodes.length) { s += '...'; }\n        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';\n        return s;\n    }\n    if (isArray(obj)) {\n        if (obj.length === 0) { return '[]'; }\n        var xs = arrObjKeys(obj, inspect);\n        if (indent && !singleLineValues(xs)) {\n            return '[' + indentedJoin(xs, indent) + ']';\n        }\n        return '[ ' + $join.call(xs, ', ') + ' ]';\n    }\n    if (isError(obj)) {\n        var parts = arrObjKeys(obj, inspect);\n        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {\n            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';\n        }\n        if (parts.length === 0) { return '[' + String(obj) + ']'; }\n        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';\n    }\n    if (typeof obj === 'object' && customInspect) {\n        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {\n            return utilInspect(obj, { depth: maxDepth - depth });\n        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {\n            return obj.inspect();\n        }\n    }\n    if (isMap(obj)) {\n        var mapParts = [];\n        if (mapForEach) {\n            mapForEach.call(obj, function (value, key) {\n                mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));\n            });\n        }\n        return collectionOf('Map', mapSize.call(obj), mapParts, indent);\n    }\n    if (isSet(obj)) {\n        var setParts = [];\n        if (setForEach) {\n            setForEach.call(obj, function (value) {\n                setParts.push(inspect(value, obj));\n            });\n        }\n        return collectionOf('Set', setSize.call(obj), setParts, indent);\n    }\n    if (isWeakMap(obj)) {\n        return weakCollectionOf('WeakMap');\n    }\n    if (isWeakSet(obj)) {\n        return weakCollectionOf('WeakSet');\n    }\n    if (isWeakRef(obj)) {\n        return weakCollectionOf('WeakRef');\n    }\n    if (isNumber(obj)) {\n        return markBoxed(inspect(Number(obj)));\n    }\n    if (isBigInt(obj)) {\n        return markBoxed(inspect(bigIntValueOf.call(obj)));\n    }\n    if (isBoolean(obj)) {\n        return markBoxed(booleanValueOf.call(obj));\n    }\n    if (isString(obj)) {\n        return markBoxed(inspect(String(obj)));\n    }\n    // note: in IE 8, sometimes `global !== window` but both are the prototypes of each other\n    /* eslint-env browser */\n    if (typeof window !== 'undefined' && obj === window) {\n        return '{ [object Window] }';\n    }\n    if (\n        (typeof globalThis !== 'undefined' && obj === globalThis)\n        || (typeof __webpack_require__.g !== 'undefined' && obj === __webpack_require__.g)\n    ) {\n        return '{ [object globalThis] }';\n    }\n    if (!isDate(obj) && !isRegExp(obj)) {\n        var ys = arrObjKeys(obj, inspect);\n        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;\n        var protoTag = obj instanceof Object ? '' : 'null prototype';\n        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';\n        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';\n        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');\n        if (ys.length === 0) { return tag + '{}'; }\n        if (indent) {\n            return tag + '{' + indentedJoin(ys, indent) + '}';\n        }\n        return tag + '{ ' + $join.call(ys, ', ') + ' }';\n    }\n    return String(obj);\n};\n\nfunction wrapQuotes(s, defaultStyle, opts) {\n    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '\"' : \"'\";\n    return quoteChar + s + quoteChar;\n}\n\nfunction quote(s) {\n    return $replace.call(String(s), /\"/g, '&quot;');\n}\n\nfunction isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }\nfunction isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }\nfunction isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }\nfunction isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }\nfunction isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }\nfunction isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }\nfunction isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }\n\n// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives\nfunction isSymbol(obj) {\n    if (hasShammedSymbols) {\n        return obj && typeof obj === 'object' && obj instanceof Symbol;\n    }\n    if (typeof obj === 'symbol') {\n        return true;\n    }\n    if (!obj || typeof obj !== 'object' || !symToString) {\n        return false;\n    }\n    try {\n        symToString.call(obj);\n        return true;\n    } catch (e) {}\n    return false;\n}\n\nfunction isBigInt(obj) {\n    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {\n        return false;\n    }\n    try {\n        bigIntValueOf.call(obj);\n        return true;\n    } catch (e) {}\n    return false;\n}\n\nvar hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };\nfunction has(obj, key) {\n    return hasOwn.call(obj, key);\n}\n\nfunction toStr(obj) {\n    return objectToString.call(obj);\n}\n\nfunction nameOf(f) {\n    if (f.name) { return f.name; }\n    var m = $match.call(functionToString.call(f), /^function\\s*([\\w$]+)/);\n    if (m) { return m[1]; }\n    return null;\n}\n\nfunction indexOf(xs, x) {\n    if (xs.indexOf) { return xs.indexOf(x); }\n    for (var i = 0, l = xs.length; i < l; i++) {\n        if (xs[i] === x) { return i; }\n    }\n    return -1;\n}\n\nfunction isMap(x) {\n    if (!mapSize || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        mapSize.call(x);\n        try {\n            setSize.call(x);\n        } catch (s) {\n            return true;\n        }\n        return x instanceof Map; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isWeakMap(x) {\n    if (!weakMapHas || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        weakMapHas.call(x, weakMapHas);\n        try {\n            weakSetHas.call(x, weakSetHas);\n        } catch (s) {\n            return true;\n        }\n        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isWeakRef(x) {\n    if (!weakRefDeref || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        weakRefDeref.call(x);\n        return true;\n    } catch (e) {}\n    return false;\n}\n\nfunction isSet(x) {\n    if (!setSize || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        setSize.call(x);\n        try {\n            mapSize.call(x);\n        } catch (m) {\n            return true;\n        }\n        return x instanceof Set; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isWeakSet(x) {\n    if (!weakSetHas || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        weakSetHas.call(x, weakSetHas);\n        try {\n            weakMapHas.call(x, weakMapHas);\n        } catch (s) {\n            return true;\n        }\n        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isElement(x) {\n    if (!x || typeof x !== 'object') { return false; }\n    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {\n        return true;\n    }\n    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';\n}\n\nfunction inspectString(str, opts) {\n    if (str.length > opts.maxStringLength) {\n        var remaining = str.length - opts.maxStringLength;\n        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');\n        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;\n    }\n    // eslint-disable-next-line no-control-regex\n    var s = $replace.call($replace.call(str, /(['\\\\])/g, '\\\\$1'), /[\\x00-\\x1f]/g, lowbyte);\n    return wrapQuotes(s, 'single', opts);\n}\n\nfunction lowbyte(c) {\n    var n = c.charCodeAt(0);\n    var x = {\n        8: 'b',\n        9: 't',\n        10: 'n',\n        12: 'f',\n        13: 'r'\n    }[n];\n    if (x) { return '\\\\' + x; }\n    return '\\\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));\n}\n\nfunction markBoxed(str) {\n    return 'Object(' + str + ')';\n}\n\nfunction weakCollectionOf(type) {\n    return type + ' { ? }';\n}\n\nfunction collectionOf(type, size, entries, indent) {\n    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');\n    return type + ' (' + size + ') {' + joinedEntries + '}';\n}\n\nfunction singleLineValues(xs) {\n    for (var i = 0; i < xs.length; i++) {\n        if (indexOf(xs[i], '\\n') >= 0) {\n            return false;\n        }\n    }\n    return true;\n}\n\nfunction getIndent(opts, depth) {\n    var baseIndent;\n    if (opts.indent === '\\t') {\n        baseIndent = '\\t';\n    } else if (typeof opts.indent === 'number' && opts.indent > 0) {\n        baseIndent = $join.call(Array(opts.indent + 1), ' ');\n    } else {\n        return null;\n    }\n    return {\n        base: baseIndent,\n        prev: $join.call(Array(depth + 1), baseIndent)\n    };\n}\n\nfunction indentedJoin(xs, indent) {\n    if (xs.length === 0) { return ''; }\n    var lineJoiner = '\\n' + indent.prev + indent.base;\n    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\\n' + indent.prev;\n}\n\nfunction arrObjKeys(obj, inspect) {\n    var isArr = isArray(obj);\n    var xs = [];\n    if (isArr) {\n        xs.length = obj.length;\n        for (var i = 0; i < obj.length; i++) {\n            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';\n        }\n    }\n    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];\n    var symMap;\n    if (hasShammedSymbols) {\n        symMap = {};\n        for (var k = 0; k < syms.length; k++) {\n            symMap['$' + syms[k]] = syms[k];\n        }\n    }\n\n    for (var key in obj) { // eslint-disable-line no-restricted-syntax\n        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue\n        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue\n        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {\n            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section\n            continue; // eslint-disable-line no-restricted-syntax, no-continue\n        } else if ($test.call(/[^\\w$]/, key)) {\n            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));\n        } else {\n            xs.push(key + ': ' + inspect(obj[key], obj));\n        }\n    }\n    if (typeof gOPS === 'function') {\n        for (var j = 0; j < syms.length; j++) {\n            if (isEnumerable.call(obj, syms[j])) {\n                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));\n            }\n        }\n    }\n    return xs;\n}\n\n\n//# sourceURL=webpack://equicore/./node_modules/object-inspect/index.js?"
        );

        /***/
      },

    /***/ './node_modules/object-keys/implementation.js':
      /*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar keysShim;\nif (!Object.keys) {\n\t// modified from https://github.com/es-shims/es5-shim\n\tvar has = Object.prototype.hasOwnProperty;\n\tvar toStr = Object.prototype.toString;\n\tvar isArgs = __webpack_require__(/*! ./isArguments */ \"./node_modules/object-keys/isArguments.js\"); // eslint-disable-line global-require\n\tvar isEnumerable = Object.prototype.propertyIsEnumerable;\n\tvar hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');\n\tvar hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');\n\tvar dontEnums = [\n\t\t'toString',\n\t\t'toLocaleString',\n\t\t'valueOf',\n\t\t'hasOwnProperty',\n\t\t'isPrototypeOf',\n\t\t'propertyIsEnumerable',\n\t\t'constructor'\n\t];\n\tvar equalsConstructorPrototype = function (o) {\n\t\tvar ctor = o.constructor;\n\t\treturn ctor && ctor.prototype === o;\n\t};\n\tvar excludedKeys = {\n\t\t$applicationCache: true,\n\t\t$console: true,\n\t\t$external: true,\n\t\t$frame: true,\n\t\t$frameElement: true,\n\t\t$frames: true,\n\t\t$innerHeight: true,\n\t\t$innerWidth: true,\n\t\t$onmozfullscreenchange: true,\n\t\t$onmozfullscreenerror: true,\n\t\t$outerHeight: true,\n\t\t$outerWidth: true,\n\t\t$pageXOffset: true,\n\t\t$pageYOffset: true,\n\t\t$parent: true,\n\t\t$scrollLeft: true,\n\t\t$scrollTop: true,\n\t\t$scrollX: true,\n\t\t$scrollY: true,\n\t\t$self: true,\n\t\t$webkitIndexedDB: true,\n\t\t$webkitStorageInfo: true,\n\t\t$window: true\n\t};\n\tvar hasAutomationEqualityBug = (function () {\n\t\t/* global window */\n\t\tif (typeof window === 'undefined') { return false; }\n\t\tfor (var k in window) {\n\t\t\ttry {\n\t\t\t\tif (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {\n\t\t\t\t\ttry {\n\t\t\t\t\t\tequalsConstructorPrototype(window[k]);\n\t\t\t\t\t} catch (e) {\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}());\n\tvar equalsConstructorPrototypeIfNotBuggy = function (o) {\n\t\t/* global window */\n\t\tif (typeof window === 'undefined' || !hasAutomationEqualityBug) {\n\t\t\treturn equalsConstructorPrototype(o);\n\t\t}\n\t\ttry {\n\t\t\treturn equalsConstructorPrototype(o);\n\t\t} catch (e) {\n\t\t\treturn false;\n\t\t}\n\t};\n\n\tkeysShim = function keys(object) {\n\t\tvar isObject = object !== null && typeof object === 'object';\n\t\tvar isFunction = toStr.call(object) === '[object Function]';\n\t\tvar isArguments = isArgs(object);\n\t\tvar isString = isObject && toStr.call(object) === '[object String]';\n\t\tvar theKeys = [];\n\n\t\tif (!isObject && !isFunction && !isArguments) {\n\t\t\tthrow new TypeError('Object.keys called on a non-object');\n\t\t}\n\n\t\tvar skipProto = hasProtoEnumBug && isFunction;\n\t\tif (isString && object.length > 0 && !has.call(object, 0)) {\n\t\t\tfor (var i = 0; i < object.length; ++i) {\n\t\t\t\ttheKeys.push(String(i));\n\t\t\t}\n\t\t}\n\n\t\tif (isArguments && object.length > 0) {\n\t\t\tfor (var j = 0; j < object.length; ++j) {\n\t\t\t\ttheKeys.push(String(j));\n\t\t\t}\n\t\t} else {\n\t\t\tfor (var name in object) {\n\t\t\t\tif (!(skipProto && name === 'prototype') && has.call(object, name)) {\n\t\t\t\t\ttheKeys.push(String(name));\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tif (hasDontEnumBug) {\n\t\t\tvar skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);\n\n\t\t\tfor (var k = 0; k < dontEnums.length; ++k) {\n\t\t\t\tif (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {\n\t\t\t\t\ttheKeys.push(dontEnums[k]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn theKeys;\n\t};\n}\nmodule.exports = keysShim;\n\n\n//# sourceURL=webpack://equicore/./node_modules/object-keys/implementation.js?"
        );

        /***/
      },

    /***/ './node_modules/object-keys/index.js':
      /*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar slice = Array.prototype.slice;\nvar isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js");\n\nvar origKeys = Object.keys;\nvar keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ "./node_modules/object-keys/implementation.js");\n\nvar originalKeys = Object.keys;\n\nkeysShim.shim = function shimObjectKeys() {\n\tif (Object.keys) {\n\t\tvar keysWorksWithArguments = (function () {\n\t\t\t// Safari 5.0 bug\n\t\t\tvar args = Object.keys(arguments);\n\t\t\treturn args && args.length === arguments.length;\n\t\t}(1, 2));\n\t\tif (!keysWorksWithArguments) {\n\t\t\tObject.keys = function keys(object) { // eslint-disable-line func-name-matching\n\t\t\t\tif (isArgs(object)) {\n\t\t\t\t\treturn originalKeys(slice.call(object));\n\t\t\t\t}\n\t\t\t\treturn originalKeys(object);\n\t\t\t};\n\t\t}\n\t} else {\n\t\tObject.keys = keysShim;\n\t}\n\treturn Object.keys || keysShim;\n};\n\nmodule.exports = keysShim;\n\n\n//# sourceURL=webpack://equicore/./node_modules/object-keys/index.js?'
        );

        /***/
      },

    /***/ './node_modules/object-keys/isArguments.js':
      /*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\nvar toStr = Object.prototype.toString;\n\nmodule.exports = function isArguments(value) {\n\tvar str = toStr.call(value);\n\tvar isArgs = str === '[object Arguments]';\n\tif (!isArgs) {\n\t\tisArgs = str !== '[object Array]' &&\n\t\t\tvalue !== null &&\n\t\t\ttypeof value === 'object' &&\n\t\t\ttypeof value.length === 'number' &&\n\t\t\tvalue.length >= 0 &&\n\t\t\ttoStr.call(value.callee) === '[object Function]';\n\t}\n\treturn isArgs;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/object-keys/isArguments.js?"
        );

        /***/
      },

    /***/ './node_modules/object.entries/implementation.js':
      /*!*******************************************************!*\
  !*** ./node_modules/object.entries/implementation.js ***!
  \*******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar RequireObjectCoercible = __webpack_require__(/*! es-object-atoms/RequireObjectCoercible */ "./node_modules/es-object-atoms/RequireObjectCoercible.js");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");\nvar $isEnumerable = callBound(\'Object.prototype.propertyIsEnumerable\');\nvar $push = callBound(\'Array.prototype.push\');\n\nmodule.exports = function entries(O) {\n\tvar obj = RequireObjectCoercible(O);\n\tvar entrys = [];\n\tfor (var key in obj) {\n\t\tif ($isEnumerable(obj, key)) { // checks own-ness as well\n\t\t\t$push(entrys, [key, obj[key]]);\n\t\t}\n\t}\n\treturn entrys;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/object.entries/implementation.js?'
        );

        /***/
      },

    /***/ './node_modules/object.entries/polyfill.js':
      /*!*************************************************!*\
  !*** ./node_modules/object.entries/polyfill.js ***!
  \*************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.entries/implementation.js");\n\nmodule.exports = function getPolyfill() {\n\treturn typeof Object.entries === \'function\' ? Object.entries : implementation;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/object.entries/polyfill.js?'
        );

        /***/
      },

    /***/ './node_modules/object.entries/shim.js':
      /*!*********************************************!*\
  !*** ./node_modules/object.entries/shim.js ***!
  \*********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.entries/polyfill.js");\nvar define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");\n\nmodule.exports = function shimEntries() {\n\tvar polyfill = getPolyfill();\n\tdefine(Object, { entries: polyfill }, {\n\t\tentries: function testEntries() {\n\t\t\treturn Object.entries !== polyfill;\n\t\t}\n\t});\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/object.entries/shim.js?'
        );

        /***/
      },

    /***/ './node_modules/object.fromentries/auto.js':
      /*!*************************************************!*\
  !*** ./node_modules/object.fromentries/auto.js ***!
  \*************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict';
        eval(
          '\n\n__webpack_require__(/*! ./shim */ "./node_modules/object.fromentries/shim.js")();\n\n\n//# sourceURL=webpack://equicore/./node_modules/object.fromentries/auto.js?'
        );

        /***/
      },

    /***/ './node_modules/object.fromentries/implementation.js':
      /*!***********************************************************!*\
  !*** ./node_modules/object.fromentries/implementation.js ***!
  \***********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar AddEntriesFromIterable = __webpack_require__(/*! es-abstract/2024/AddEntriesFromIterable */ "./node_modules/es-abstract/2024/AddEntriesFromIterable.js");\nvar CreateDataPropertyOrThrow = __webpack_require__(/*! es-abstract/2024/CreateDataPropertyOrThrow */ "./node_modules/es-abstract/2024/CreateDataPropertyOrThrow.js");\nvar RequireObjectCoercible = __webpack_require__(/*! es-object-atoms/RequireObjectCoercible */ "./node_modules/es-object-atoms/RequireObjectCoercible.js");\nvar ToPropertyKey = __webpack_require__(/*! es-abstract/2024/ToPropertyKey */ "./node_modules/es-abstract/2024/ToPropertyKey.js");\n\nvar adder = function addDataProperty(key, value) {\n\tvar O = this; // eslint-disable-line no-invalid-this\n\tvar propertyKey = ToPropertyKey(key);\n\tCreateDataPropertyOrThrow(O, propertyKey, value);\n};\n\nmodule.exports = function fromEntries(iterable) {\n\tRequireObjectCoercible(iterable);\n\n\treturn AddEntriesFromIterable({}, iterable, adder);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/object.fromentries/implementation.js?'
        );

        /***/
      },

    /***/ './node_modules/object.fromentries/polyfill.js':
      /*!*****************************************************!*\
  !*** ./node_modules/object.fromentries/polyfill.js ***!
  \*****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.fromentries/implementation.js");\n\nmodule.exports = function getPolyfill() {\n\treturn typeof Object.fromEntries === \'function\' ? Object.fromEntries : implementation;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/object.fromentries/polyfill.js?'
        );

        /***/
      },

    /***/ './node_modules/object.fromentries/shim.js':
      /*!*************************************************!*\
  !*** ./node_modules/object.fromentries/shim.js ***!
  \*************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.fromentries/polyfill.js");\nvar define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");\n\nmodule.exports = function shimEntries() {\n\tvar polyfill = getPolyfill();\n\tdefine(Object, { fromEntries: polyfill }, {\n\t\tfromEntries: function testEntries() {\n\t\t\treturn Object.fromEntries !== polyfill;\n\t\t}\n\t});\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/object.fromentries/shim.js?'
        );

        /***/
      },

    /***/ './node_modules/object.getownpropertydescriptors/implementation.js':
      /*!*************************************************************************!*\
  !*** ./node_modules/object.getownpropertydescriptors/implementation.js ***!
  \*************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar CreateDataProperty = __webpack_require__(/*! es-abstract/2024/CreateDataProperty */ "./node_modules/es-abstract/2024/CreateDataProperty.js");\nvar RequireObjectCoercible = __webpack_require__(/*! es-object-atoms/RequireObjectCoercible */ "./node_modules/es-object-atoms/RequireObjectCoercible.js");\nvar ToObject = __webpack_require__(/*! es-object-atoms/ToObject */ "./node_modules/es-object-atoms/ToObject.js");\nvar safeConcat = __webpack_require__(/*! safe-array-concat */ "./node_modules/safe-array-concat/index.js");\nvar reduce = __webpack_require__(/*! array.prototype.reduce */ "./node_modules/array.prototype.reduce/index.js");\nvar gOPD = __webpack_require__(/*! gopd */ "./node_modules/gopd/index.js");\nvar $Object = __webpack_require__(/*! es-object-atoms */ "./node_modules/es-object-atoms/index.js");\n\nvar $getOwnNames = $Object.getOwnPropertyNames;\nvar $getSymbols = $Object.getOwnPropertySymbols;\n\nvar getAll = $getSymbols ? function (obj) {\n\treturn safeConcat($getOwnNames(obj), $getSymbols(obj));\n} : $getOwnNames;\n\nvar isES5 = gOPD && typeof $getOwnNames === \'function\';\n\nmodule.exports = function getOwnPropertyDescriptors(value) {\n\tRequireObjectCoercible(value);\n\tif (!isES5) {\n\t\tthrow new TypeError(\'getOwnPropertyDescriptors requires Object.getOwnPropertyDescriptor\');\n\t}\n\n\tvar O = ToObject(value);\n\treturn reduce(\n\t\tgetAll(O),\n\t\tfunction (acc, key) {\n\t\t\tvar descriptor = gOPD(O, key);\n\t\t\tif (typeof descriptor !== \'undefined\') {\n\t\t\t\tCreateDataProperty(acc, key, descriptor);\n\t\t\t}\n\t\t\treturn acc;\n\t\t},\n\t\t{}\n\t);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/object.getownpropertydescriptors/implementation.js?'
        );

        /***/
      },

    /***/ './node_modules/object.getownpropertydescriptors/polyfill.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/object.getownpropertydescriptors/polyfill.js ***!
  \*******************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.getownpropertydescriptors/implementation.js");\n\nmodule.exports = function getPolyfill() {\n\treturn typeof Object.getOwnPropertyDescriptors === \'function\' ? Object.getOwnPropertyDescriptors : implementation;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/object.getownpropertydescriptors/polyfill.js?'
        );

        /***/
      },

    /***/ './node_modules/object.getownpropertydescriptors/shim.js':
      /*!***************************************************************!*\
  !*** ./node_modules/object.getownpropertydescriptors/shim.js ***!
  \***************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.getownpropertydescriptors/polyfill.js");\nvar define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");\n\nmodule.exports = function shimGetOwnPropertyDescriptors() {\n\tvar polyfill = getPolyfill();\n\tdefine(\n\t\tObject,\n\t\t{ getOwnPropertyDescriptors: polyfill },\n\t\t{ getOwnPropertyDescriptors: function () { return Object.getOwnPropertyDescriptors !== polyfill; } }\n\t);\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/object.getownpropertydescriptors/shim.js?'
        );

        /***/
      },

    /***/ './node_modules/object.values/implementation.js':
      /*!******************************************************!*\
  !*** ./node_modules/object.values/implementation.js ***!
  \******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar RequireObjectCoercible = __webpack_require__(/*! es-object-atoms/RequireObjectCoercible */ "./node_modules/es-object-atoms/RequireObjectCoercible.js");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");\n\nvar $isEnumerable = callBound(\'Object.prototype.propertyIsEnumerable\');\nvar $push = callBound(\'Array.prototype.push\');\n\nmodule.exports = function values(O) {\n\tvar obj = RequireObjectCoercible(O);\n\tvar vals = [];\n\tfor (var key in obj) {\n\t\tif ($isEnumerable(obj, key)) { // checks own-ness as well\n\t\t\t$push(vals, obj[key]);\n\t\t}\n\t}\n\treturn vals;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/object.values/implementation.js?'
        );

        /***/
      },

    /***/ './node_modules/object.values/polyfill.js':
      /*!************************************************!*\
  !*** ./node_modules/object.values/polyfill.js ***!
  \************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.values/implementation.js");\n\nmodule.exports = function getPolyfill() {\n\treturn typeof Object.values === \'function\' ? Object.values : implementation;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/object.values/polyfill.js?'
        );

        /***/
      },

    /***/ './node_modules/object.values/shim.js':
      /*!********************************************!*\
  !*** ./node_modules/object.values/shim.js ***!
  \********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.values/polyfill.js");\nvar define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");\n\nmodule.exports = function shimValues() {\n\tvar polyfill = getPolyfill();\n\tdefine(Object, { values: polyfill }, {\n\t\tvalues: function testValues() {\n\t\t\treturn Object.values !== polyfill;\n\t\t}\n\t});\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/object.values/shim.js?'
        );

        /***/
      },

    /***/ './node_modules/performance-now/lib/performance-now.js':
      /*!*************************************************************!*\
  !*** ./node_modules/performance-now/lib/performance-now.js ***!
  \*************************************************************/
      /***/ function (module) {
        eval(
          '// Generated by CoffeeScript 1.12.2\n(function() {\n  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;\n\n  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {\n    module.exports = function() {\n      return performance.now();\n    };\n  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {\n    module.exports = function() {\n      return (getNanoSeconds() - nodeLoadTime) / 1e6;\n    };\n    hrtime = process.hrtime;\n    getNanoSeconds = function() {\n      var hr;\n      hr = hrtime();\n      return hr[0] * 1e9 + hr[1];\n    };\n    moduleLoadTime = getNanoSeconds();\n    upTime = process.uptime() * 1e9;\n    nodeLoadTime = moduleLoadTime - upTime;\n  } else if (Date.now) {\n    module.exports = function() {\n      return Date.now() - loadTime;\n    };\n    loadTime = Date.now();\n  } else {\n    module.exports = function() {\n      return new Date().getTime() - loadTime;\n    };\n    loadTime = new Date().getTime();\n  }\n\n}).call(this);\n\n//# sourceMappingURL=performance-now.js.map\n\n\n//# sourceURL=webpack://equicore/./node_modules/performance-now/lib/performance-now.js?'
        );

        /***/
      },

    /***/ './node_modules/promise.allsettled/auto.js':
      /*!*************************************************!*\
  !*** ./node_modules/promise.allsettled/auto.js ***!
  \*************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict';
        eval(
          '\n\n__webpack_require__(/*! ./shim */ "./node_modules/promise.allsettled/shim.js")();\n\n\n//# sourceURL=webpack://equicore/./node_modules/promise.allsettled/auto.js?'
        );

        /***/
      },

    /***/ './node_modules/promise.allsettled/implementation.js':
      /*!***********************************************************!*\
  !*** ./node_modules/promise.allsettled/implementation.js ***!
  \***********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar requirePromise = __webpack_require__(/*! ./requirePromise */ "./node_modules/promise.allsettled/requirePromise.js");\n\nrequirePromise();\n\nvar PromiseResolve = __webpack_require__(/*! es-abstract/2023/PromiseResolve */ "./node_modules/es-abstract/2023/PromiseResolve.js");\nvar Type = __webpack_require__(/*! es-abstract/2023/Type */ "./node_modules/es-abstract/2023/Type.js");\nvar iterate = __webpack_require__(/*! iterate-value */ "./node_modules/iterate-value/index.js");\nvar map = __webpack_require__(/*! array.prototype.map */ "./node_modules/array.prototype.map/index.js");\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");\nvar callBind = __webpack_require__(/*! call-bind */ "./node_modules/call-bind/index.js");\n\nvar all = callBind(GetIntrinsic(\'%Promise.all%\'));\nvar reject = callBind(GetIntrinsic(\'%Promise.reject%\'));\n\nmodule.exports = function allSettled(iterable) {\n\tvar C = this;\n\tif (Type(C) !== \'Object\') {\n\t\tthrow new TypeError(\'`this` value must be an object\');\n\t}\n\tvar values = iterate(iterable);\n\treturn all(C, map(values, function (item) {\n\t\tvar onFulfill = function (value) {\n\t\t\treturn { status: \'fulfilled\', value: value };\n\t\t};\n\t\tvar onReject = function (reason) {\n\t\t\treturn { status: \'rejected\', reason: reason };\n\t\t};\n\t\tvar itemPromise = PromiseResolve(C, item);\n\t\ttry {\n\t\t\treturn itemPromise.then(onFulfill, onReject);\n\t\t} catch (e) {\n\t\t\treturn reject(C, e);\n\t\t}\n\t}));\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/promise.allsettled/implementation.js?'
        );

        /***/
      },

    /***/ './node_modules/promise.allsettled/polyfill.js':
      /*!*****************************************************!*\
  !*** ./node_modules/promise.allsettled/polyfill.js ***!
  \*****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar requirePromise = __webpack_require__(/*! ./requirePromise */ "./node_modules/promise.allsettled/requirePromise.js");\n\nvar implementation = __webpack_require__(/*! ./implementation */ "./node_modules/promise.allsettled/implementation.js");\n\nmodule.exports = function getPolyfill() {\n\trequirePromise();\n\treturn typeof Promise.allSettled === \'function\' ? Promise.allSettled : implementation;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/promise.allsettled/polyfill.js?'
        );

        /***/
      },

    /***/ './node_modules/promise.allsettled/requirePromise.js':
      /*!***********************************************************!*\
  !*** ./node_modules/promise.allsettled/requirePromise.js ***!
  \***********************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\nmodule.exports = function requirePromise() {\n\tif (typeof Promise !== 'function') {\n\t\tthrow new TypeError('`Promise.allSettled` requires a global `Promise` be available.');\n\t}\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/promise.allsettled/requirePromise.js?"
        );

        /***/
      },

    /***/ './node_modules/promise.allsettled/shim.js':
      /*!*************************************************!*\
  !*** ./node_modules/promise.allsettled/shim.js ***!
  \*************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar requirePromise = __webpack_require__(/*! ./requirePromise */ "./node_modules/promise.allsettled/requirePromise.js");\n\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/promise.allsettled/polyfill.js");\nvar define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");\n\nmodule.exports = function shimAllSettled() {\n\trequirePromise();\n\n\tvar polyfill = getPolyfill();\n\tdefine(Promise, { allSettled: polyfill }, {\n\t\tallSettled: function testAllSettled() {\n\t\t\treturn Promise.allSettled !== polyfill;\n\t\t}\n\t});\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/promise.allsettled/shim.js?'
        );

        /***/
      },

    /***/ './node_modules/promise.prototype.finally/auto.js':
      /*!********************************************************!*\
  !*** ./node_modules/promise.prototype.finally/auto.js ***!
  \********************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict';
        eval(
          '\n\n__webpack_require__(/*! ./shim */ "./node_modules/promise.prototype.finally/shim.js")();\n\n\n//# sourceURL=webpack://equicore/./node_modules/promise.prototype.finally/auto.js?'
        );

        /***/
      },

    /***/ './node_modules/promise.prototype.finally/implementation.js':
      /*!******************************************************************!*\
  !*** ./node_modules/promise.prototype.finally/implementation.js ***!
  \******************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar requirePromise = __webpack_require__(/*! ./requirePromise */ "./node_modules/promise.prototype.finally/requirePromise.js");\n\nrequirePromise();\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar PromiseResolve = __webpack_require__(/*! es-abstract/2023/PromiseResolve */ "./node_modules/es-abstract/2023/PromiseResolve.js");\nvar IsCallable = __webpack_require__(/*! es-abstract/2023/IsCallable */ "./node_modules/es-abstract/2023/IsCallable.js");\nvar SpeciesConstructor = __webpack_require__(/*! es-abstract/2023/SpeciesConstructor */ "./node_modules/es-abstract/2023/SpeciesConstructor.js");\nvar Type = __webpack_require__(/*! es-abstract/2023/Type */ "./node_modules/es-abstract/2023/Type.js");\n\nvar setFunctionName = __webpack_require__(/*! set-function-name */ "./node_modules/set-function-name/index.js");\n\nvar OriginalPromise = Promise;\n\nvar createThenFinally = function CreateThenFinally(C, onFinally) {\n\treturn function (value) {\n\t\tvar result = onFinally();\n\t\tvar promise = PromiseResolve(C, result);\n\t\tvar valueThunk = function () {\n\t\t\treturn value;\n\t\t};\n\t\treturn promise.then(valueThunk);\n\t};\n};\n\nvar createCatchFinally = function CreateCatchFinally(C, onFinally) {\n\treturn function (reason) {\n\t\tvar result = onFinally();\n\t\tvar promise = PromiseResolve(C, result);\n\t\tvar thrower = function () {\n\t\t\tthrow reason;\n\t\t};\n\t\treturn promise.then(thrower);\n\t};\n};\n\n/* eslint no-invalid-this: 0 */\n\nmodule.exports = setFunctionName(function finally_(onFinally) {\n\tvar promise = this;\n\n\tif (Type(promise) !== \'Object\') {\n\t\tthrow new $TypeError(\'receiver is not an Object\');\n\t}\n\n\tvar C = SpeciesConstructor(promise, OriginalPromise); // may throw\n\n\tvar thenFinally = onFinally;\n\tvar catchFinally = onFinally;\n\tif (IsCallable(onFinally)) {\n\t\tthenFinally = createThenFinally(C, onFinally);\n\t\tcatchFinally = createCatchFinally(C, onFinally);\n\t}\n\n\treturn promise.then(thenFinally, catchFinally);\n}, \'finally\', true);\n\n\n//# sourceURL=webpack://equicore/./node_modules/promise.prototype.finally/implementation.js?'
        );

        /***/
      },

    /***/ './node_modules/promise.prototype.finally/polyfill.js':
      /*!************************************************************!*\
  !*** ./node_modules/promise.prototype.finally/polyfill.js ***!
  \************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar requirePromise = __webpack_require__(/*! ./requirePromise */ \"./node_modules/promise.prototype.finally/requirePromise.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/promise.prototype.finally/implementation.js\");\n\nmodule.exports = function getPolyfill() {\n\trequirePromise();\n\treturn typeof Promise.prototype['finally'] === 'function' ? Promise.prototype['finally'] : implementation;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/promise.prototype.finally/polyfill.js?"
        );

        /***/
      },

    /***/ './node_modules/promise.prototype.finally/requirePromise.js':
      /*!******************************************************************!*\
  !*** ./node_modules/promise.prototype.finally/requirePromise.js ***!
  \******************************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\nmodule.exports = function requirePromise() {\n\tif (typeof Promise !== 'function') {\n\t\tthrow new TypeError('`Promise.prototype.finally` requires a global `Promise` be available.');\n\t}\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/promise.prototype.finally/requirePromise.js?"
        );

        /***/
      },

    /***/ './node_modules/promise.prototype.finally/shim.js':
      /*!********************************************************!*\
  !*** ./node_modules/promise.prototype.finally/shim.js ***!
  \********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar requirePromise = __webpack_require__(/*! ./requirePromise */ "./node_modules/promise.prototype.finally/requirePromise.js");\n\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/promise.prototype.finally/polyfill.js");\nvar define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");\n\nmodule.exports = function shimPromiseFinally() {\n\trequirePromise();\n\n\tvar polyfill = getPolyfill();\n\tdefine(Promise.prototype, { \'finally\': polyfill }, {\n\t\t\'finally\': function testFinally() {\n\t\t\treturn Promise.prototype[\'finally\'] !== polyfill;\n\t\t}\n\t});\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/promise.prototype.finally/shim.js?'
        );

        /***/
      },

    /***/ './node_modules/raf/index.js':
      /*!***********************************!*\
  !*** ./node_modules/raf/index.js ***!
  \***********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          "var now = __webpack_require__(/*! performance-now */ \"./node_modules/performance-now/lib/performance-now.js\")\n  , root = typeof window === 'undefined' ? __webpack_require__.g : window\n  , vendors = ['moz', 'webkit']\n  , suffix = 'AnimationFrame'\n  , raf = root['request' + suffix]\n  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]\n\nfor(var i = 0; !raf && i < vendors.length; i++) {\n  raf = root[vendors[i] + 'Request' + suffix]\n  caf = root[vendors[i] + 'Cancel' + suffix]\n      || root[vendors[i] + 'CancelRequest' + suffix]\n}\n\n// Some versions of FF have rAF but not cAF\nif(!raf || !caf) {\n  var last = 0\n    , id = 0\n    , queue = []\n    , frameDuration = 1000 / 60\n\n  raf = function(callback) {\n    if(queue.length === 0) {\n      var _now = now()\n        , next = Math.max(0, frameDuration - (_now - last))\n      last = next + _now\n      setTimeout(function() {\n        var cp = queue.slice(0)\n        // Clear queue here to prevent\n        // callbacks from appending listeners\n        // to the current frame's queue\n        queue.length = 0\n        for(var i = 0; i < cp.length; i++) {\n          if(!cp[i].cancelled) {\n            try{\n              cp[i].callback(last)\n            } catch(e) {\n              setTimeout(function() { throw e }, 0)\n            }\n          }\n        }\n      }, Math.round(next))\n    }\n    queue.push({\n      handle: ++id,\n      callback: callback,\n      cancelled: false\n    })\n    return id\n  }\n\n  caf = function(handle) {\n    for(var i = 0; i < queue.length; i++) {\n      if(queue[i].handle === handle) {\n        queue[i].cancelled = true\n      }\n    }\n  }\n}\n\nmodule.exports = function(fn) {\n  // Wrap in a new function to prevent\n  // `cancel` potentially being assigned\n  // to the native rAF function\n  return raf.call(root, fn)\n}\nmodule.exports.cancel = function() {\n  caf.apply(root, arguments)\n}\nmodule.exports.polyfill = function(object) {\n  if (!object) {\n    object = root;\n  }\n  object.requestAnimationFrame = raf\n  object.cancelAnimationFrame = caf\n}\n\n\n//# sourceURL=webpack://equicore/./node_modules/raf/index.js?"
        );

        /***/
      },

    /***/ './node_modules/raf/polyfill.js':
      /*!**************************************!*\
  !*** ./node_modules/raf/polyfill.js ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        eval(
          '(__webpack_require__(/*! ./ */ "./node_modules/raf/index.js").polyfill)()\n\n\n//# sourceURL=webpack://equicore/./node_modules/raf/polyfill.js?'
        );

        /***/
      },

    /***/ './node_modules/regexp.prototype.flags/implementation.js':
      /*!***************************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/implementation.js ***!
  \***************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar setFunctionName = __webpack_require__(/*! set-function-name */ \"./node_modules/set-function-name/index.js\");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar $Object = Object;\n\nmodule.exports = setFunctionName(function flags() {\n\tif (this == null || this !== $Object(this)) {\n\t\tthrow new $TypeError('RegExp.prototype.flags getter called on non-object');\n\t}\n\tvar result = '';\n\tif (this.hasIndices) {\n\t\tresult += 'd';\n\t}\n\tif (this.global) {\n\t\tresult += 'g';\n\t}\n\tif (this.ignoreCase) {\n\t\tresult += 'i';\n\t}\n\tif (this.multiline) {\n\t\tresult += 'm';\n\t}\n\tif (this.dotAll) {\n\t\tresult += 's';\n\t}\n\tif (this.unicode) {\n\t\tresult += 'u';\n\t}\n\tif (this.unicodeSets) {\n\t\tresult += 'v';\n\t}\n\tif (this.sticky) {\n\t\tresult += 'y';\n\t}\n\treturn result;\n}, 'get flags', true);\n\n\n\n//# sourceURL=webpack://equicore/./node_modules/regexp.prototype.flags/implementation.js?"
        );

        /***/
      },

    /***/ './node_modules/regexp.prototype.flags/index.js':
      /*!******************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/index.js ***!
  \******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");\nvar callBind = __webpack_require__(/*! call-bind */ "./node_modules/call-bind/index.js");\n\nvar implementation = __webpack_require__(/*! ./implementation */ "./node_modules/regexp.prototype.flags/implementation.js");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/regexp.prototype.flags/polyfill.js");\nvar shim = __webpack_require__(/*! ./shim */ "./node_modules/regexp.prototype.flags/shim.js");\n\nvar flagsBound = callBind(getPolyfill());\n\ndefine(flagsBound, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = flagsBound;\n\n\n//# sourceURL=webpack://equicore/./node_modules/regexp.prototype.flags/index.js?'
        );

        /***/
      },

    /***/ './node_modules/regexp.prototype.flags/polyfill.js':
      /*!*********************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/polyfill.js ***!
  \*********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/regexp.prototype.flags/implementation.js\");\n\nvar supportsDescriptors = (__webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\").supportsDescriptors);\nvar $gOPD = Object.getOwnPropertyDescriptor;\n\nmodule.exports = function getPolyfill() {\n\tif (supportsDescriptors && (/a/mig).flags === 'gim') {\n\t\tvar descriptor = $gOPD(RegExp.prototype, 'flags');\n\t\tif (\n\t\t\tdescriptor\n\t\t\t&& typeof descriptor.get === 'function'\n\t\t\t&& typeof RegExp.prototype.dotAll === 'boolean'\n\t\t\t&& typeof RegExp.prototype.hasIndices === 'boolean'\n\t\t) {\n\t\t\t/* eslint getter-return: 0 */\n\t\t\tvar calls = '';\n\t\t\tvar o = {};\n\t\t\tObject.defineProperty(o, 'hasIndices', {\n\t\t\t\tget: function () {\n\t\t\t\t\tcalls += 'd';\n\t\t\t\t}\n\t\t\t});\n\t\t\tObject.defineProperty(o, 'sticky', {\n\t\t\t\tget: function () {\n\t\t\t\t\tcalls += 'y';\n\t\t\t\t}\n\t\t\t});\n\t\t\tif (calls === 'dy') {\n\t\t\t\treturn descriptor.get;\n\t\t\t}\n\t\t}\n\t}\n\treturn implementation;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/regexp.prototype.flags/polyfill.js?"
        );

        /***/
      },

    /***/ './node_modules/regexp.prototype.flags/shim.js':
      /*!*****************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/shim.js ***!
  \*****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar supportsDescriptors = (__webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\").supportsDescriptors);\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/regexp.prototype.flags/polyfill.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\nvar defineProperty = Object.defineProperty;\nvar TypeErr = TypeError;\nvar getProto = Object.getPrototypeOf;\nvar regex = /a/;\n\nmodule.exports = function shimFlags() {\n\tif (!supportsDescriptors || !getProto) {\n\t\tthrow new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');\n\t}\n\tvar polyfill = getPolyfill();\n\tvar proto = getProto(regex);\n\tvar descriptor = gOPD(proto, 'flags');\n\tif (!descriptor || descriptor.get !== polyfill) {\n\t\tdefineProperty(proto, 'flags', {\n\t\t\tconfigurable: true,\n\t\t\tenumerable: false,\n\t\t\tget: polyfill\n\t\t});\n\t}\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/regexp.prototype.flags/shim.js?"
        );

        /***/
      },

    /***/ './node_modules/ric-shim/index.js':
      /*!****************************************!*\
  !*** ./node_modules/ric-shim/index.js ***!
  \****************************************/
      /***/ (module) => {
        eval(
          "/* globals requestIdleCallback, cancelIdleCallback */\nvar fallback = function (cb) {\n  return setTimeout(function () {\n    var start = Date.now()\n    cb({\n      didTimeout: false,\n      timeRemaining: function () {\n        return Math.max(0, 50 - (Date.now() - start))\n      }\n    })\n  }, 1)\n}\n\nvar isSupported = (typeof requestIdleCallback !== 'undefined')\n\nmodule.exports = isSupported ? requestIdleCallback : fallback\nmodule.exports.cancelIdleCallback = isSupported ? cancelIdleCallback : clearTimeout\n\n\n//# sourceURL=webpack://equicore/./node_modules/ric-shim/index.js?"
        );

        /***/
      },

    /***/ './node_modules/safe-array-concat/index.js':
      /*!*************************************************!*\
  !*** ./node_modules/safe-array-concat/index.js ***!
  \*************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\nvar $concat = GetIntrinsic('%Array.prototype.concat%');\n\nvar callBind = __webpack_require__(/*! call-bind */ \"./node_modules/call-bind/index.js\");\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar $slice = callBound('Array.prototype.slice');\n\nvar hasSymbols = __webpack_require__(/*! has-symbols/shams */ \"./node_modules/has-symbols/shams.js\")();\nvar isConcatSpreadable = hasSymbols && Symbol.isConcatSpreadable;\n\n/** @type {never[]} */ var empty = [];\nvar $concatApply = isConcatSpreadable ? callBind.apply($concat, empty) : null;\n\n// eslint-disable-next-line no-extra-parens\nvar isArray = isConcatSpreadable ? /** @type {(value: unknown) => value is unknown[]} */ (__webpack_require__(/*! isarray */ \"./node_modules/isarray/index.js\")) : null;\n\n/** @type {import('.')} */\nmodule.exports = isConcatSpreadable\n\t// eslint-disable-next-line no-unused-vars\n\t? function safeArrayConcat(item) {\n\t\tfor (var i = 0; i < arguments.length; i += 1) {\n\t\t\t/** @type {typeof item} */ var arg = arguments[i];\n\t\t\t// @ts-expect-error ts(2538) see https://github.com/microsoft/TypeScript/issues/9998#issuecomment-1890787975; works if `const`\n\t\t\tif (arg && typeof arg === 'object' && typeof arg[isConcatSpreadable] === 'boolean') {\n\t\t\t\t// @ts-expect-error ts(7015) TS doesn't yet support Symbol indexing\n\t\t\t\tif (!empty[isConcatSpreadable]) {\n\t\t\t\t\t// @ts-expect-error ts(7015) TS doesn't yet support Symbol indexing\n\t\t\t\t\tempty[isConcatSpreadable] = true;\n\t\t\t\t}\n\t\t\t\t// @ts-expect-error ts(2721) ts(18047) not sure why TS can't figure out this can't be null\n\t\t\t\tvar arr = isArray(arg) ? $slice(arg) : [arg];\n\t\t\t\t// @ts-expect-error ts(7015) TS can't handle expandos on an array\n\t\t\t\tarr[isConcatSpreadable] = true; // shadow the property. TODO: use [[Define]]\n\t\t\t\targuments[i] = arr;\n\t\t\t}\n\t\t}\n\t\t// @ts-expect-error ts(2345) https://github.com/microsoft/TypeScript/issues/57164 TS doesn't understand that apply can take an arguments object\n\t\treturn $concatApply(arguments);\n\t}\n\t: callBind($concat, empty);\n\n\n//# sourceURL=webpack://equicore/./node_modules/safe-array-concat/index.js?"
        );

        /***/
      },

    /***/ './node_modules/safe-regex-test/index.js':
      /*!***********************************************!*\
  !*** ./node_modules/safe-regex-test/index.js ***!
  \***********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");\nvar isRegex = __webpack_require__(/*! is-regex */ "./node_modules/is-regex/index.js");\n\nvar $exec = callBound(\'RegExp.prototype.exec\');\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nmodule.exports = function regexTester(regex) {\n\tif (!isRegex(regex)) {\n\t\tthrow new $TypeError(\'`regex` must be a RegExp\');\n\t}\n\treturn function test(s) {\n\t\treturn $exec(regex, s) !== null;\n\t};\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/safe-regex-test/index.js?'
        );

        /***/
      },

    /***/ './node_modules/set-function-length/index.js':
      /*!***************************************************!*\
  !*** ./node_modules/set-function-length/index.js ***!
  \***************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\nvar define = __webpack_require__(/*! define-data-property */ \"./node_modules/define-data-property/index.js\");\nvar hasDescriptors = __webpack_require__(/*! has-property-descriptors */ \"./node_modules/has-property-descriptors/index.js\")();\nvar gOPD = __webpack_require__(/*! gopd */ \"./node_modules/gopd/index.js\");\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\nvar $floor = GetIntrinsic('%Math.floor%');\n\n/** @type {import('.')} */\nmodule.exports = function setFunctionLength(fn, length) {\n\tif (typeof fn !== 'function') {\n\t\tthrow new $TypeError('`fn` is not a function');\n\t}\n\tif (typeof length !== 'number' || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) {\n\t\tthrow new $TypeError('`length` must be a positive 32-bit integer');\n\t}\n\n\tvar loose = arguments.length > 2 && !!arguments[2];\n\n\tvar functionLengthIsConfigurable = true;\n\tvar functionLengthIsWritable = true;\n\tif ('length' in fn && gOPD) {\n\t\tvar desc = gOPD(fn, 'length');\n\t\tif (desc && !desc.configurable) {\n\t\t\tfunctionLengthIsConfigurable = false;\n\t\t}\n\t\tif (desc && !desc.writable) {\n\t\t\tfunctionLengthIsWritable = false;\n\t\t}\n\t}\n\n\tif (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {\n\t\tif (hasDescriptors) {\n\t\t\tdefine(/** @type {Parameters<define>[0]} */ (fn), 'length', length, true, true);\n\t\t} else {\n\t\t\tdefine(/** @type {Parameters<define>[0]} */ (fn), 'length', length);\n\t\t}\n\t}\n\treturn fn;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/set-function-length/index.js?"
        );

        /***/
      },

    /***/ './node_modules/set-function-name/index.js':
      /*!*************************************************!*\
  !*** ./node_modules/set-function-name/index.js ***!
  \*************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar define = __webpack_require__(/*! define-data-property */ \"./node_modules/define-data-property/index.js\");\nvar hasDescriptors = __webpack_require__(/*! has-property-descriptors */ \"./node_modules/has-property-descriptors/index.js\")();\nvar functionsHaveConfigurableNames = (__webpack_require__(/*! functions-have-names */ \"./node_modules/functions-have-names/index.js\").functionsHaveConfigurableNames)();\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\n/** @type {import('.')} */\nmodule.exports = function setFunctionName(fn, name) {\n\tif (typeof fn !== 'function') {\n\t\tthrow new $TypeError('`fn` is not a function');\n\t}\n\tvar loose = arguments.length > 2 && !!arguments[2];\n\tif (!loose || functionsHaveConfigurableNames) {\n\t\tif (hasDescriptors) {\n\t\t\tdefine(/** @type {Parameters<define>[0]} */ (fn), 'name', name, true, true);\n\t\t} else {\n\t\t\tdefine(/** @type {Parameters<define>[0]} */ (fn), 'name', name);\n\t\t}\n\t}\n\treturn fn;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/set-function-name/index.js?"
        );

        /***/
      },

    /***/ './node_modules/shim-keyboard-event-key/index.js':
      /*!*******************************************************!*\
  !*** ./node_modules/shim-keyboard-event-key/index.js ***!
  \*******************************************************/
      /***/ () => {
        eval(
          '(function() {\n  "use strict"\n\n  if (!self.document) return\n\n  var event = KeyboardEvent.prototype\n  var desc = Object.getOwnPropertyDescriptor(event, "key")\n  if (!desc) return\n\n  var keys = {\n    Win: "Meta",\n    Scroll: "ScrollLock",\n    Spacebar: " ",\n\n    Down: "ArrowDown",\n    Left: "ArrowLeft",\n    Right: "ArrowRight",\n    Up: "ArrowUp",\n\n    Del: "Delete",\n    Apps: "ContextMenu",\n    Esc: "Escape",\n\n    Multiply: "*",\n    Add: "+",\n    Subtract: "-",\n    Decimal: ".",\n    Divide: "/",\n  }\n\n  Object.defineProperty(event, "key", {\n    get: function() {\n      var key = desc.get.call(this)\n\n      return keys.hasOwnProperty(key) ? keys[key] : key\n    },\n  })\n})()\n\n\n//# sourceURL=webpack://equicore/./node_modules/shim-keyboard-event-key/index.js?'
        );

        /***/
      },

    /***/ './node_modules/side-channel/index.js':
      /*!********************************************!*\
  !*** ./node_modules/side-channel/index.js ***!
  \********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar inspect = __webpack_require__(/*! object-inspect */ \"./node_modules/object-inspect/index.js\");\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\nvar $WeakMap = GetIntrinsic('%WeakMap%', true);\nvar $Map = GetIntrinsic('%Map%', true);\n\nvar $weakMapGet = callBound('WeakMap.prototype.get', true);\nvar $weakMapSet = callBound('WeakMap.prototype.set', true);\nvar $weakMapHas = callBound('WeakMap.prototype.has', true);\nvar $mapGet = callBound('Map.prototype.get', true);\nvar $mapSet = callBound('Map.prototype.set', true);\nvar $mapHas = callBound('Map.prototype.has', true);\n\n/*\n* This function traverses the list returning the node corresponding to the given key.\n*\n* That node is also moved to the head of the list, so that if it's accessed again we don't need to traverse the whole list. By doing so, all the recently used nodes can be accessed relatively quickly.\n*/\n/** @type {import('.').listGetNode} */\nvar listGetNode = function (list, key) { // eslint-disable-line consistent-return\n\t/** @type {typeof list | NonNullable<(typeof list)['next']>} */\n\tvar prev = list;\n\t/** @type {(typeof list)['next']} */\n\tvar curr;\n\tfor (; (curr = prev.next) !== null; prev = curr) {\n\t\tif (curr.key === key) {\n\t\t\tprev.next = curr.next;\n\t\t\t// eslint-disable-next-line no-extra-parens\n\t\t\tcurr.next = /** @type {NonNullable<typeof list.next>} */ (list.next);\n\t\t\tlist.next = curr; // eslint-disable-line no-param-reassign\n\t\t\treturn curr;\n\t\t}\n\t}\n};\n\n/** @type {import('.').listGet} */\nvar listGet = function (objects, key) {\n\tvar node = listGetNode(objects, key);\n\treturn node && node.value;\n};\n/** @type {import('.').listSet} */\nvar listSet = function (objects, key, value) {\n\tvar node = listGetNode(objects, key);\n\tif (node) {\n\t\tnode.value = value;\n\t} else {\n\t\t// Prepend the new node to the beginning of the list\n\t\tobjects.next = /** @type {import('.').ListNode<typeof value>} */ ({ // eslint-disable-line no-param-reassign, no-extra-parens\n\t\t\tkey: key,\n\t\t\tnext: objects.next,\n\t\t\tvalue: value\n\t\t});\n\t}\n};\n/** @type {import('.').listHas} */\nvar listHas = function (objects, key) {\n\treturn !!listGetNode(objects, key);\n};\n\n/** @type {import('.')} */\nmodule.exports = function getSideChannel() {\n\t/** @type {WeakMap<object, unknown>} */ var $wm;\n\t/** @type {Map<object, unknown>} */ var $m;\n\t/** @type {import('.').RootNode<unknown>} */ var $o;\n\n\t/** @type {import('.').Channel} */\n\tvar channel = {\n\t\tassert: function (key) {\n\t\t\tif (!channel.has(key)) {\n\t\t\t\tthrow new $TypeError('Side channel does not contain ' + inspect(key));\n\t\t\t}\n\t\t},\n\t\tget: function (key) { // eslint-disable-line consistent-return\n\t\t\tif ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {\n\t\t\t\tif ($wm) {\n\t\t\t\t\treturn $weakMapGet($wm, key);\n\t\t\t\t}\n\t\t\t} else if ($Map) {\n\t\t\t\tif ($m) {\n\t\t\t\t\treturn $mapGet($m, key);\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tif ($o) { // eslint-disable-line no-lonely-if\n\t\t\t\t\treturn listGet($o, key);\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\thas: function (key) {\n\t\t\tif ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {\n\t\t\t\tif ($wm) {\n\t\t\t\t\treturn $weakMapHas($wm, key);\n\t\t\t\t}\n\t\t\t} else if ($Map) {\n\t\t\t\tif ($m) {\n\t\t\t\t\treturn $mapHas($m, key);\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tif ($o) { // eslint-disable-line no-lonely-if\n\t\t\t\t\treturn listHas($o, key);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn false;\n\t\t},\n\t\tset: function (key, value) {\n\t\t\tif ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {\n\t\t\t\tif (!$wm) {\n\t\t\t\t\t$wm = new $WeakMap();\n\t\t\t\t}\n\t\t\t\t$weakMapSet($wm, key, value);\n\t\t\t} else if ($Map) {\n\t\t\t\tif (!$m) {\n\t\t\t\t\t$m = new $Map();\n\t\t\t\t}\n\t\t\t\t$mapSet($m, key, value);\n\t\t\t} else {\n\t\t\t\tif (!$o) {\n\t\t\t\t\t// Initialize the linked list as an empty node, so that we don't have to special-case handling of the first node: we can always refer to it as (previous node).next, instead of something like (list).head\n\t\t\t\t\t$o = { key: {}, next: null };\n\t\t\t\t}\n\t\t\t\tlistSet($o, key, value);\n\t\t\t}\n\t\t}\n\t};\n\treturn channel;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/side-channel/index.js?"
        );

        /***/
      },

    /***/ './node_modules/smoothscroll-polyfill/dist/smoothscroll.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/smoothscroll-polyfill/dist/smoothscroll.js ***!
  \*****************************************************************/
      /***/ (module) => {
        eval(
          "/*\n * smoothscroll polyfill - v0.3.5\n * https://iamdustan.github.io/smoothscroll\n * 2016 (c) Dustan Kasten, Jeremias Menichelli - MIT License\n */\n\n(function(w, d, undefined) {\n  'use strict';\n\n  /*\n   * aliases\n   * w: window global object\n   * d: document\n   * undefined: undefined\n   */\n\n  // polyfill\n  function polyfill() {\n    // return when scrollBehavior interface is supported\n    if ('scrollBehavior' in d.documentElement.style) {\n      return;\n    }\n\n    /*\n     * globals\n     */\n    var Element = w.HTMLElement || w.Element;\n    var SCROLL_TIME = 468;\n\n    /*\n     * object gathering original scroll methods\n     */\n    var original = {\n      scroll: w.scroll || w.scrollTo,\n      scrollBy: w.scrollBy,\n      elScroll: Element.prototype.scroll || scrollElement,\n      scrollIntoView: Element.prototype.scrollIntoView\n    };\n\n    /*\n     * define timing method\n     */\n    var now = w.performance && w.performance.now\n      ? w.performance.now.bind(w.performance) : Date.now;\n\n    /**\n     * changes scroll position inside an element\n     * @method scrollElement\n     * @param {Number} x\n     * @param {Number} y\n     */\n    function scrollElement(x, y) {\n      this.scrollLeft = x;\n      this.scrollTop = y;\n    }\n\n    /**\n     * returns result of applying ease math function to a number\n     * @method ease\n     * @param {Number} k\n     * @returns {Number}\n     */\n    function ease(k) {\n      return 0.5 * (1 - Math.cos(Math.PI * k));\n    }\n\n    /**\n     * indicates if a smooth behavior should be applied\n     * @method shouldBailOut\n     * @param {Number|Object} x\n     * @returns {Boolean}\n     */\n    function shouldBailOut(x) {\n      if (typeof x !== 'object'\n            || x === null\n            || x.behavior === undefined\n            || x.behavior === 'auto'\n            || x.behavior === 'instant') {\n        // first arg not an object/null\n        // or behavior is auto, instant or undefined\n        return true;\n      }\n\n      if (typeof x === 'object'\n            && x.behavior === 'smooth') {\n        // first argument is an object and behavior is smooth\n        return false;\n      }\n\n      // throw error when behavior is not supported\n      throw new TypeError('behavior not valid');\n    }\n\n    /**\n     * finds scrollable parent of an element\n     * @method findScrollableParent\n     * @param {Node} el\n     * @returns {Node} el\n     */\n    function findScrollableParent(el) {\n      var isBody;\n      var hasScrollableSpace;\n      var hasVisibleOverflow;\n\n      do {\n        el = el.parentNode;\n\n        // set condition variables\n        isBody = el === d.body;\n        hasScrollableSpace =\n          el.clientHeight < el.scrollHeight ||\n          el.clientWidth < el.scrollWidth;\n        hasVisibleOverflow =\n          w.getComputedStyle(el, null).overflow === 'visible';\n      } while (!isBody && !(hasScrollableSpace && !hasVisibleOverflow));\n\n      isBody = hasScrollableSpace = hasVisibleOverflow = null;\n\n      return el;\n    }\n\n    /**\n     * self invoked function that, given a context, steps through scrolling\n     * @method step\n     * @param {Object} context\n     */\n    function step(context) {\n      var time = now();\n      var value;\n      var currentX;\n      var currentY;\n      var elapsed = (time - context.startTime) / SCROLL_TIME;\n\n      // avoid elapsed times higher than one\n      elapsed = elapsed > 1 ? 1 : elapsed;\n\n      // apply easing to elapsed time\n      value = ease(elapsed);\n\n      currentX = context.startX + (context.x - context.startX) * value;\n      currentY = context.startY + (context.y - context.startY) * value;\n\n      context.method.call(context.scrollable, currentX, currentY);\n\n      // scroll more if we have not reached our destination\n      if (currentX !== context.x || currentY !== context.y) {\n        w.requestAnimationFrame(step.bind(w, context));\n      }\n    }\n\n    /**\n     * scrolls window with a smooth behavior\n     * @method smoothScroll\n     * @param {Object|Node} el\n     * @param {Number} x\n     * @param {Number} y\n     */\n    function smoothScroll(el, x, y) {\n      var scrollable;\n      var startX;\n      var startY;\n      var method;\n      var startTime = now();\n\n      // define scroll context\n      if (el === d.body) {\n        scrollable = w;\n        startX = w.scrollX || w.pageXOffset;\n        startY = w.scrollY || w.pageYOffset;\n        method = original.scroll;\n      } else {\n        scrollable = el;\n        startX = el.scrollLeft;\n        startY = el.scrollTop;\n        method = scrollElement;\n      }\n\n      // scroll looping over a frame\n      step({\n        scrollable: scrollable,\n        method: method,\n        startTime: startTime,\n        startX: startX,\n        startY: startY,\n        x: x,\n        y: y\n      });\n    }\n\n    /*\n     * ORIGINAL METHODS OVERRIDES\n     */\n\n    // w.scroll and w.scrollTo\n    w.scroll = w.scrollTo = function() {\n      // avoid smooth behavior if not required\n      if (shouldBailOut(arguments[0])) {\n        original.scroll.call(\n          w,\n          arguments[0].left || arguments[0],\n          arguments[0].top || arguments[1]\n        );\n        return;\n      }\n\n      // LET THE SMOOTHNESS BEGIN!\n      smoothScroll.call(\n        w,\n        d.body,\n        ~~arguments[0].left,\n        ~~arguments[0].top\n      );\n    };\n\n    // w.scrollBy\n    w.scrollBy = function() {\n      // avoid smooth behavior if not required\n      if (shouldBailOut(arguments[0])) {\n        original.scrollBy.call(\n          w,\n          arguments[0].left || arguments[0],\n          arguments[0].top || arguments[1]\n        );\n        return;\n      }\n\n      // LET THE SMOOTHNESS BEGIN!\n      smoothScroll.call(\n        w,\n        d.body,\n        ~~arguments[0].left + (w.scrollX || w.pageXOffset),\n        ~~arguments[0].top + (w.scrollY || w.pageYOffset)\n      );\n    };\n\n    // Element.prototype.scroll and Element.prototype.scrollTo\n    Element.prototype.scroll = Element.prototype.scrollTo = function() {\n      // avoid smooth behavior if not required\n      if (shouldBailOut(arguments[0])) {\n        original.elScroll.call(\n            this,\n            arguments[0].left || arguments[0],\n            arguments[0].top || arguments[1]\n        );\n        return;\n      }\n\n      var left = arguments[0].left;\n      var top = arguments[0].top;\n\n      // LET THE SMOOTHNESS BEGIN!\n      smoothScroll.call(\n          this,\n          this,\n          typeof left === 'number' ? left : this.scrollLeft,\n          typeof top === 'number' ? top : this.scrollTop\n      );\n    };\n\n    // Element.prototype.scrollBy\n    Element.prototype.scrollBy = function() {\n      var arg0 = arguments[0];\n\n      if (typeof arg0 === 'object') {\n        this.scroll({\n          left: arg0.left + this.scrollLeft,\n          top: arg0.top + this.scrollTop,\n          behavior: arg0.behavior\n        });\n      } else {\n        this.scroll(\n          this.scrollLeft + arg0,\n          this.scrollTop + arguments[1]\n        );\n      }\n    };\n\n    // Element.prototype.scrollIntoView\n    Element.prototype.scrollIntoView = function() {\n      // avoid smooth behavior if not required\n      if (shouldBailOut(arguments[0])) {\n        original.scrollIntoView.call(\n          this,\n          arguments[0] === undefined ? true : arguments[0]\n        );\n        return;\n      }\n\n      // LET THE SMOOTHNESS BEGIN!\n      var scrollableParent = findScrollableParent(this);\n      var parentRects = scrollableParent.getBoundingClientRect();\n      var clientRects = this.getBoundingClientRect();\n\n      if (scrollableParent !== d.body) {\n        // reveal element inside parent\n        smoothScroll.call(\n          this,\n          scrollableParent,\n          scrollableParent.scrollLeft + clientRects.left - parentRects.left,\n          scrollableParent.scrollTop + clientRects.top - parentRects.top\n        );\n        // reveal parent in viewport\n        w.scrollBy({\n          left: parentRects.left,\n          top: parentRects.top,\n          behavior: 'smooth'\n        });\n      } else {\n        // reveal element in viewport\n        w.scrollBy({\n          left: clientRects.left,\n          top: clientRects.top,\n          behavior: 'smooth'\n        });\n      }\n    };\n  }\n\n  if (true) {\n    // commonjs\n    module.exports = { polyfill: polyfill };\n  } else {}\n})(window, document);\n\n\n//# sourceURL=webpack://equicore/./node_modules/smoothscroll-polyfill/dist/smoothscroll.js?"
        );

        /***/
      },

    /***/ './node_modules/stop-iteration-iterator/index.js':
      /*!*******************************************************!*\
  !*** ./node_modules/stop-iteration-iterator/index.js ***!
  \*******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar SLOT = __webpack_require__(/*! internal-slot */ \"./node_modules/internal-slot/index.js\");\n\nvar $SyntaxError = SyntaxError;\nvar $StopIteration = typeof StopIteration === 'object' ? StopIteration : null;\n\nmodule.exports = function getStopIterationIterator(origIterator) {\n\tif (!$StopIteration) {\n\t\tthrow new $SyntaxError('this environment lacks StopIteration');\n\t}\n\n\tSLOT.set(origIterator, '[[Done]]', false);\n\n\tvar siIterator = {\n\t\tnext: function next() {\n\t\t\tvar iterator = SLOT.get(this, '[[Iterator]]');\n\t\t\tvar done = SLOT.get(iterator, '[[Done]]');\n\t\t\ttry {\n\t\t\t\treturn {\n\t\t\t\t\tdone: done,\n\t\t\t\t\tvalue: done ? void undefined : iterator.next()\n\t\t\t\t};\n\t\t\t} catch (e) {\n\t\t\t\tSLOT.set(iterator, '[[Done]]', true);\n\t\t\t\tif (e !== $StopIteration) {\n\t\t\t\t\tthrow e;\n\t\t\t\t}\n\t\t\t\treturn {\n\t\t\t\t\tdone: true,\n\t\t\t\t\tvalue: void undefined\n\t\t\t\t};\n\t\t\t}\n\t\t}\n\t};\n\n\tSLOT.set(siIterator, '[[Iterator]]', origIterator);\n\n\treturn siIterator;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/stop-iteration-iterator/index.js?"
        );

        /***/
      },

    /***/ './node_modules/string.prototype.matchall/auto.js':
      /*!********************************************************!*\
  !*** ./node_modules/string.prototype.matchall/auto.js ***!
  \********************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict';
        eval(
          '\n\n__webpack_require__(/*! ./shim */ "./node_modules/string.prototype.matchall/shim.js")();\n\n\n//# sourceURL=webpack://equicore/./node_modules/string.prototype.matchall/auto.js?'
        );

        /***/
      },

    /***/ './node_modules/string.prototype.matchall/implementation.js':
      /*!******************************************************************!*\
  !*** ./node_modules/string.prototype.matchall/implementation.js ***!
  \******************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar Call = __webpack_require__(/*! es-abstract/2024/Call */ "./node_modules/es-abstract/2024/Call.js");\nvar Get = __webpack_require__(/*! es-abstract/2024/Get */ "./node_modules/es-abstract/2024/Get.js");\nvar GetMethod = __webpack_require__(/*! es-abstract/2024/GetMethod */ "./node_modules/es-abstract/2024/GetMethod.js");\nvar IsRegExp = __webpack_require__(/*! es-abstract/2024/IsRegExp */ "./node_modules/es-abstract/2024/IsRegExp.js");\nvar ToString = __webpack_require__(/*! es-abstract/2024/ToString */ "./node_modules/es-abstract/2024/ToString.js");\nvar RequireObjectCoercible = __webpack_require__(/*! es-object-atoms/RequireObjectCoercible */ "./node_modules/es-object-atoms/RequireObjectCoercible.js");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");\nvar hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();\nvar flagsGetter = __webpack_require__(/*! regexp.prototype.flags */ "./node_modules/regexp.prototype.flags/index.js");\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar $RegExp = GetIntrinsic(\'%RegExp%\');\nvar $indexOf = callBound(\'String.prototype.indexOf\');\n\nvar regexpMatchAllPolyfill = __webpack_require__(/*! ./polyfill-regexp-matchall */ "./node_modules/string.prototype.matchall/polyfill-regexp-matchall.js");\n\nvar getMatcher = function getMatcher(regexp) { // eslint-disable-line consistent-return\n\tvar matcherPolyfill = regexpMatchAllPolyfill();\n\tif (hasSymbols && typeof Symbol.matchAll === \'symbol\') {\n\t\tvar matcher = GetMethod(regexp, Symbol.matchAll);\n\t\tif (matcher === $RegExp.prototype[Symbol.matchAll] && matcher !== matcherPolyfill) {\n\t\t\treturn matcherPolyfill;\n\t\t}\n\t\treturn matcher;\n\t}\n\t// fallback for pre-Symbol.matchAll environments\n\tif (IsRegExp(regexp)) {\n\t\treturn matcherPolyfill;\n\t}\n};\n\nmodule.exports = function matchAll(regexp) {\n\tvar O = RequireObjectCoercible(this);\n\n\tif (typeof regexp !== \'undefined\' && regexp !== null) {\n\t\tvar isRegExp = IsRegExp(regexp);\n\t\tif (isRegExp) {\n\t\t\t// workaround for older engines that lack RegExp.prototype.flags\n\t\t\tvar flags = \'flags\' in regexp ? Get(regexp, \'flags\') : flagsGetter(regexp);\n\t\t\tRequireObjectCoercible(flags);\n\t\t\tif ($indexOf(ToString(flags), \'g\') < 0) {\n\t\t\t\tthrow new $TypeError(\'matchAll requires a global regular expression\');\n\t\t\t}\n\t\t}\n\n\t\tvar matcher = getMatcher(regexp);\n\t\tif (typeof matcher !== \'undefined\') {\n\t\t\treturn Call(matcher, regexp, [O]);\n\t\t}\n\t}\n\n\tvar S = ToString(O);\n\t// var rx = RegExpCreate(regexp, \'g\');\n\tvar rx = new $RegExp(regexp, \'g\');\n\treturn Call(getMatcher(rx), rx, [S]);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/string.prototype.matchall/implementation.js?'
        );

        /***/
      },

    /***/ './node_modules/string.prototype.matchall/polyfill-regexp-matchall.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/string.prototype.matchall/polyfill-regexp-matchall.js ***!
  \****************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();\nvar regexpMatchAll = __webpack_require__(/*! ./regexp-matchall */ "./node_modules/string.prototype.matchall/regexp-matchall.js");\n\nmodule.exports = function getRegExpMatchAllPolyfill() {\n\tif (!hasSymbols || typeof Symbol.matchAll !== \'symbol\' || typeof RegExp.prototype[Symbol.matchAll] !== \'function\') {\n\t\treturn regexpMatchAll;\n\t}\n\treturn RegExp.prototype[Symbol.matchAll];\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/string.prototype.matchall/polyfill-regexp-matchall.js?'
        );

        /***/
      },

    /***/ './node_modules/string.prototype.matchall/polyfill.js':
      /*!************************************************************!*\
  !*** ./node_modules/string.prototype.matchall/polyfill.js ***!
  \************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar implementation = __webpack_require__(/*! ./implementation */ "./node_modules/string.prototype.matchall/implementation.js");\n\nmodule.exports = function getPolyfill() {\n\tif (String.prototype.matchAll) {\n\t\ttry {\n\t\t\t\'\'.matchAll(RegExp.prototype);\n\t\t} catch (e) {\n\t\t\treturn String.prototype.matchAll;\n\t\t}\n\t}\n\treturn implementation;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/string.prototype.matchall/polyfill.js?'
        );

        /***/
      },

    /***/ './node_modules/string.prototype.matchall/regexp-matchall.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/string.prototype.matchall/regexp-matchall.js ***!
  \*******************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\n// var Construct = require('es-abstract/2023/Construct');\nvar CreateRegExpStringIterator = __webpack_require__(/*! es-abstract/2024/CreateRegExpStringIterator */ \"./node_modules/es-abstract/2024/CreateRegExpStringIterator.js\");\nvar Get = __webpack_require__(/*! es-abstract/2024/Get */ \"./node_modules/es-abstract/2024/Get.js\");\nvar Set = __webpack_require__(/*! es-abstract/2024/Set */ \"./node_modules/es-abstract/2024/Set.js\");\nvar SpeciesConstructor = __webpack_require__(/*! es-abstract/2024/SpeciesConstructor */ \"./node_modules/es-abstract/2024/SpeciesConstructor.js\");\nvar ToLength = __webpack_require__(/*! es-abstract/2024/ToLength */ \"./node_modules/es-abstract/2024/ToLength.js\");\nvar ToString = __webpack_require__(/*! es-abstract/2024/ToString */ \"./node_modules/es-abstract/2024/ToString.js\");\nvar Type = __webpack_require__(/*! es-abstract/2024/Type */ \"./node_modules/es-abstract/2024/Type.js\");\nvar flagsGetter = __webpack_require__(/*! regexp.prototype.flags */ \"./node_modules/regexp.prototype.flags/index.js\");\nvar setFunctionName = __webpack_require__(/*! set-function-name */ \"./node_modules/set-function-name/index.js\");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar $indexOf = callBound('String.prototype.indexOf');\n\nvar OrigRegExp = GetIntrinsic('%RegExp%');\n\nvar supportsConstructingWithFlags = 'flags' in OrigRegExp.prototype;\n\nvar constructRegexWithFlags = function constructRegex(C, R) {\n\tvar matcher;\n\t// workaround for older engines that lack RegExp.prototype.flags\n\tvar flags = 'flags' in R ? Get(R, 'flags') : ToString(flagsGetter(R));\n\tif (supportsConstructingWithFlags && typeof flags === 'string') {\n\t\tmatcher = new C(R, flags);\n\t} else if (C === OrigRegExp) {\n\t\t// workaround for older engines that can not construct a RegExp with flags\n\t\tmatcher = new C(R.source, flags);\n\t} else {\n\t\tmatcher = new C(R, flags);\n\t}\n\treturn { flags: flags, matcher: matcher };\n};\n\nvar regexMatchAll = setFunctionName(function SymbolMatchAll(string) {\n\tvar R = this;\n\tif (Type(R) !== 'Object') {\n\t\tthrow new $TypeError('\"this\" value must be an Object');\n\t}\n\tvar S = ToString(string);\n\tvar C = SpeciesConstructor(R, OrigRegExp);\n\n\tvar tmp = constructRegexWithFlags(C, R);\n\t// var flags = ToString(Get(R, 'flags'));\n\tvar flags = tmp.flags;\n\t// var matcher = Construct(C, [R, flags]);\n\tvar matcher = tmp.matcher;\n\n\tvar lastIndex = ToLength(Get(R, 'lastIndex'));\n\tSet(matcher, 'lastIndex', lastIndex, true);\n\tvar global = $indexOf(flags, 'g') > -1;\n\tvar fullUnicode = $indexOf(flags, 'u') > -1;\n\treturn CreateRegExpStringIterator(matcher, S, global, fullUnicode);\n}, '[Symbol.matchAll]', true);\n\nmodule.exports = regexMatchAll;\n\n\n//# sourceURL=webpack://equicore/./node_modules/string.prototype.matchall/regexp-matchall.js?"
        );

        /***/
      },

    /***/ './node_modules/string.prototype.matchall/shim.js':
      /*!********************************************************!*\
  !*** ./node_modules/string.prototype.matchall/shim.js ***!
  \********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");\nvar hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();\nvar gOPD = __webpack_require__(/*! gopd */ "./node_modules/gopd/index.js");\n\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/string.prototype.matchall/polyfill.js");\nvar regexpMatchAllPolyfill = __webpack_require__(/*! ./polyfill-regexp-matchall */ "./node_modules/string.prototype.matchall/polyfill-regexp-matchall.js");\n\nvar defineP = Object.defineProperty;\n\nmodule.exports = function shimMatchAll() {\n\tvar polyfill = getPolyfill();\n\tdefine(\n\t\tString.prototype,\n\t\t{ matchAll: polyfill },\n\t\t{ matchAll: function () { return String.prototype.matchAll !== polyfill; } }\n\t);\n\tif (hasSymbols) {\n\t\t// eslint-disable-next-line no-restricted-properties\n\t\tvar symbol = Symbol.matchAll || (Symbol[\'for\'] ? Symbol[\'for\'](\'Symbol.matchAll\') : Symbol(\'Symbol.matchAll\'));\n\t\tdefine(\n\t\t\tSymbol,\n\t\t\t{ matchAll: symbol },\n\t\t\t{ matchAll: function () { return Symbol.matchAll !== symbol; } }\n\t\t);\n\n\t\tif (defineP && gOPD) {\n\t\t\tvar desc = gOPD(Symbol, symbol);\n\t\t\tif (!desc || desc.configurable) {\n\t\t\t\tdefineP(Symbol, symbol, {\n\t\t\t\t\tconfigurable: false,\n\t\t\t\t\tenumerable: false,\n\t\t\t\t\tvalue: symbol,\n\t\t\t\t\twritable: false\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\n\t\tvar regexpMatchAll = regexpMatchAllPolyfill();\n\t\tvar func = {};\n\t\tfunc[symbol] = regexpMatchAll;\n\t\tvar predicate = {};\n\t\tpredicate[symbol] = function () {\n\t\t\treturn RegExp.prototype[symbol] !== regexpMatchAll;\n\t\t};\n\t\tdefine(RegExp.prototype, func, predicate);\n\t}\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/string.prototype.matchall/shim.js?'
        );

        /***/
      },

    /***/ './node_modules/string.prototype.padend/implementation.js':
      /*!****************************************************************!*\
  !*** ./node_modules/string.prototype.padend/implementation.js ***!
  \****************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar ToLength = __webpack_require__(/*! es-abstract/2024/ToLength */ \"./node_modules/es-abstract/2024/ToLength.js\");\nvar ToString = __webpack_require__(/*! es-abstract/2024/ToString */ \"./node_modules/es-abstract/2024/ToString.js\");\nvar RequireObjectCoercible = __webpack_require__(/*! es-object-atoms/RequireObjectCoercible */ \"./node_modules/es-object-atoms/RequireObjectCoercible.js\");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\n\nvar $slice = callBound('String.prototype.slice');\n\nmodule.exports = function padEnd(maxLength) {\n\tvar O = RequireObjectCoercible(this);\n\tvar S = ToString(O);\n\tvar stringLength = ToLength(S.length);\n\tvar fillString;\n\tif (arguments.length > 1) {\n\t\tfillString = arguments[1];\n\t}\n\tvar filler = typeof fillString === 'undefined' ? '' : ToString(fillString);\n\tif (filler === '') {\n\t\tfiller = ' ';\n\t}\n\tvar intMaxLength = ToLength(maxLength);\n\tif (intMaxLength <= stringLength) {\n\t\treturn S;\n\t}\n\tvar fillLen = intMaxLength - stringLength;\n\twhile (filler.length < fillLen) {\n\t\tvar fLen = filler.length;\n\t\tvar remainingCodeUnits = fillLen - fLen;\n\t\tfiller += fLen > remainingCodeUnits ? $slice(filler, 0, remainingCodeUnits) : filler;\n\t}\n\n\tvar truncatedStringFiller = filler.length > fillLen ? $slice(filler, 0, fillLen) : filler;\n\treturn S + truncatedStringFiller;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/string.prototype.padend/implementation.js?"
        );

        /***/
      },

    /***/ './node_modules/string.prototype.padend/polyfill.js':
      /*!**********************************************************!*\
  !*** ./node_modules/string.prototype.padend/polyfill.js ***!
  \**********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar implementation = __webpack_require__(/*! ./implementation */ "./node_modules/string.prototype.padend/implementation.js");\n\nmodule.exports = function getPolyfill() {\n\treturn typeof String.prototype.padEnd === \'function\' ? String.prototype.padEnd : implementation;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/string.prototype.padend/polyfill.js?'
        );

        /***/
      },

    /***/ './node_modules/string.prototype.padend/shim.js':
      /*!******************************************************!*\
  !*** ./node_modules/string.prototype.padend/shim.js ***!
  \******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/string.prototype.padend/polyfill.js");\nvar define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");\n\nmodule.exports = function shimPadEnd() {\n\tvar polyfill = getPolyfill();\n\tdefine(String.prototype, { padEnd: polyfill }, {\n\t\tpadEnd: function testPadEnd() {\n\t\t\treturn String.prototype.padEnd !== polyfill;\n\t\t}\n\t});\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/string.prototype.padend/shim.js?'
        );

        /***/
      },

    /***/ './node_modules/string.prototype.padstart/implementation.js':
      /*!******************************************************************!*\
  !*** ./node_modules/string.prototype.padstart/implementation.js ***!
  \******************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar ToLength = __webpack_require__(/*! es-abstract/2024/ToLength */ \"./node_modules/es-abstract/2024/ToLength.js\");\nvar ToString = __webpack_require__(/*! es-abstract/2024/ToString */ \"./node_modules/es-abstract/2024/ToString.js\");\nvar RequireObjectCoercible = __webpack_require__(/*! es-object-atoms/RequireObjectCoercible */ \"./node_modules/es-object-atoms/RequireObjectCoercible.js\");\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar $slice = callBound('String.prototype.slice');\n\nmodule.exports = function padStart(maxLength) {\n\tvar O = RequireObjectCoercible(this);\n\tvar S = ToString(O);\n\tvar stringLength = ToLength(S.length);\n\tvar fillString;\n\tif (arguments.length > 1) {\n\t\tfillString = arguments[1];\n\t}\n\tvar filler = typeof fillString === 'undefined' ? '' : ToString(fillString);\n\tif (filler === '') {\n\t\tfiller = ' ';\n\t}\n\tvar intMaxLength = ToLength(maxLength);\n\tif (intMaxLength <= stringLength) {\n\t\treturn S;\n\t}\n\tvar fillLen = intMaxLength - stringLength;\n\twhile (filler.length < fillLen) {\n\t\tvar fLen = filler.length;\n\t\tvar remainingCodeUnits = fillLen - fLen;\n\t\tfiller += fLen > remainingCodeUnits ? $slice(filler, 0, remainingCodeUnits) : filler;\n\t}\n\n\tvar truncatedStringFiller = filler.length > fillLen ? $slice(filler, 0, fillLen) : filler;\n\treturn truncatedStringFiller + S;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/string.prototype.padstart/implementation.js?"
        );

        /***/
      },

    /***/ './node_modules/string.prototype.padstart/polyfill.js':
      /*!************************************************************!*\
  !*** ./node_modules/string.prototype.padstart/polyfill.js ***!
  \************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar implementation = __webpack_require__(/*! ./implementation */ "./node_modules/string.prototype.padstart/implementation.js");\n\nmodule.exports = function getPolyfill() {\n\treturn typeof String.prototype.padStart === \'function\' ? String.prototype.padStart : implementation;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/string.prototype.padstart/polyfill.js?'
        );

        /***/
      },

    /***/ './node_modules/string.prototype.padstart/shim.js':
      /*!********************************************************!*\
  !*** ./node_modules/string.prototype.padstart/shim.js ***!
  \********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/string.prototype.padstart/polyfill.js");\nvar define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");\n\nmodule.exports = function shimPadStart() {\n\tvar polyfill = getPolyfill();\n\tdefine(String.prototype, { padStart: polyfill }, {\n\t\tpadStart: function testPadStart() {\n\t\t\treturn String.prototype.padStart !== polyfill;\n\t\t}\n\t});\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/string.prototype.padstart/shim.js?'
        );

        /***/
      },

    /***/ './node_modules/string.prototype.trim/implementation.js':
      /*!**************************************************************!*\
  !*** ./node_modules/string.prototype.trim/implementation.js ***!
  \**************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar RequireObjectCoercible = __webpack_require__(/*! es-object-atoms/RequireObjectCoercible */ \"./node_modules/es-object-atoms/RequireObjectCoercible.js\");\nvar ToString = __webpack_require__(/*! es-abstract/2024/ToString */ \"./node_modules/es-abstract/2024/ToString.js\");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar $replace = callBound('String.prototype.replace');\n\nvar mvsIsWS = (/^\\s$/).test('\\u180E');\n/* eslint-disable no-control-regex */\nvar leftWhitespace = mvsIsWS\n\t? /^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+/\n\t: /^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+/;\nvar rightWhitespace = mvsIsWS\n\t? /[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+$/\n\t: /[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+$/;\n/* eslint-enable no-control-regex */\n\nmodule.exports = function trim() {\n\tvar S = ToString(RequireObjectCoercible(this));\n\treturn $replace($replace(S, leftWhitespace, ''), rightWhitespace, '');\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/string.prototype.trim/implementation.js?"
        );

        /***/
      },

    /***/ './node_modules/string.prototype.trim/index.js':
      /*!*****************************************************!*\
  !*** ./node_modules/string.prototype.trim/index.js ***!
  \*****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar callBind = __webpack_require__(/*! call-bind */ "./node_modules/call-bind/index.js");\nvar define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");\nvar RequireObjectCoercible = __webpack_require__(/*! es-object-atoms/RequireObjectCoercible */ "./node_modules/es-object-atoms/RequireObjectCoercible.js");\n\nvar implementation = __webpack_require__(/*! ./implementation */ "./node_modules/string.prototype.trim/implementation.js");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/string.prototype.trim/polyfill.js");\nvar shim = __webpack_require__(/*! ./shim */ "./node_modules/string.prototype.trim/shim.js");\n\nvar bound = callBind(getPolyfill());\nvar boundMethod = function trim(receiver) {\n\tRequireObjectCoercible(receiver);\n\treturn bound(receiver);\n};\n\ndefine(boundMethod, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = boundMethod;\n\n\n//# sourceURL=webpack://equicore/./node_modules/string.prototype.trim/index.js?'
        );

        /***/
      },

    /***/ './node_modules/string.prototype.trim/polyfill.js':
      /*!********************************************************!*\
  !*** ./node_modules/string.prototype.trim/polyfill.js ***!
  \********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/string.prototype.trim/implementation.js\");\n\nvar zeroWidthSpace = '\\u200b';\nvar mongolianVowelSeparator = '\\u180E';\n\nmodule.exports = function getPolyfill() {\n\tif (\n\t\tString.prototype.trim\n\t\t&& zeroWidthSpace.trim() === zeroWidthSpace\n\t\t&& mongolianVowelSeparator.trim() === mongolianVowelSeparator\n\t\t&& ('_' + mongolianVowelSeparator).trim() === ('_' + mongolianVowelSeparator)\n\t\t&& (mongolianVowelSeparator + '_').trim() === (mongolianVowelSeparator + '_')\n\t) {\n\t\treturn String.prototype.trim;\n\t}\n\treturn implementation;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/string.prototype.trim/polyfill.js?"
        );

        /***/
      },

    /***/ './node_modules/string.prototype.trim/shim.js':
      /*!****************************************************!*\
  !*** ./node_modules/string.prototype.trim/shim.js ***!
  \****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/string.prototype.trim/polyfill.js");\n\nmodule.exports = function shimStringTrim() {\n\tvar polyfill = getPolyfill();\n\tdefine(String.prototype, { trim: polyfill }, {\n\t\ttrim: function testTrim() {\n\t\t\treturn String.prototype.trim !== polyfill;\n\t\t}\n\t});\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/string.prototype.trim/shim.js?'
        );

        /***/
      },

    /***/ './node_modules/symbol.prototype.description/auto.js':
      /*!***********************************************************!*\
  !*** ./node_modules/symbol.prototype.description/auto.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict';
        eval(
          '\n\n__webpack_require__(/*! ./shim */ "./node_modules/symbol.prototype.description/shim.js")();\n\n\n//# sourceURL=webpack://equicore/./node_modules/symbol.prototype.description/auto.js?'
        );

        /***/
      },

    /***/ './node_modules/symbol.prototype.description/implementation.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/symbol.prototype.description/implementation.js ***!
  \*********************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\nvar getSymbolDescription = __webpack_require__(/*! get-symbol-description */ "./node_modules/get-symbol-description/index.js");\n\nmodule.exports = function description() {\n\tif (this == null) { // eslint-disable-line eqeqeq\n\t\tthrow new $TypeError(\'`this` value must be object-coercible\');\n\t}\n\n\treturn getSymbolDescription(this);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/symbol.prototype.description/implementation.js?'
        );

        /***/
      },

    /***/ './node_modules/symbol.prototype.description/polyfill.js':
      /*!***************************************************************!*\
  !*** ./node_modules/symbol.prototype.description/polyfill.js ***!
  \***************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/symbol.prototype.description/implementation.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nmodule.exports = function descriptionPolyfill() {\n\tif (!hasSymbols || typeof gOPD !== 'function') {\n\t\treturn implementation;\n\t}\n\n\tvar desc = gOPD(Symbol.prototype, 'description');\n\tif (!desc || typeof desc.get !== 'function') {\n\t\treturn implementation;\n\t}\n\n\tvar emptySymbolDesc = desc.get.call(Symbol());\n\tvar emptyDescValid = typeof emptySymbolDesc === 'undefined' || emptySymbolDesc === '';\n\tif (!emptyDescValid || desc.get.call(Symbol('a')) !== 'a') {\n\t\treturn implementation;\n\t}\n\treturn desc.get;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/symbol.prototype.description/polyfill.js?"
        );

        /***/
      },

    /***/ './node_modules/symbol.prototype.description/shim.js':
      /*!***********************************************************!*\
  !*** ./node_modules/symbol.prototype.description/shim.js ***!
  \***********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\nvar polyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/symbol.prototype.description/polyfill.js\");\nvar getInferredName = __webpack_require__(/*! get-symbol-description/getInferredName */ \"./node_modules/get-symbol-description/getInferredName.js\");\n\nvar gOPD = Object.getOwnPropertyDescriptor;\nvar gOPDs = __webpack_require__(/*! object.getownpropertydescriptors/polyfill */ \"./node_modules/object.getownpropertydescriptors/polyfill.js\")();\nvar dP = Object.defineProperty;\nvar dPs = Object.defineProperties;\nvar setProto = Object.setPrototypeOf;\n\nvar define = function defineGetter(getter) {\n\tdP(Symbol.prototype, 'description', {\n\t\tconfigurable: true,\n\t\tenumerable: false,\n\t\tget: getter\n\t});\n};\n\nvar shimGlobal = function shimGlobalSymbol(getter) {\n\tvar origSym = Function.apply.bind(Symbol);\n\tvar emptyStrings = Object.create ? Object.create(null) : {};\n\tvar SymNew = function Symbol() {\n\t\tvar sym = origSym(this, arguments);\n\t\tif (arguments.length > 0 && arguments[0] === '') {\n\t\t\temptyStrings[sym] = true;\n\t\t}\n\t\treturn sym;\n\t};\n\tSymNew.prototype = Symbol.prototype;\n\tsetProto(SymNew, Symbol);\n\tvar props = gOPDs(Symbol);\n\tdelete props.length;\n\tdelete props.arguments;\n\tdelete props.caller;\n\tdPs(SymNew, props);\n\tSymbol = SymNew; // eslint-disable-line no-native-reassign, no-global-assign\n\n\tvar boundGetter = Function.call.bind(getter);\n\tvar wrappedGetter = function description() {\n\t\t/* eslint no-invalid-this: 0 */\n\t\tvar symbolDescription = boundGetter(this);\n\t\tif (emptyStrings[this]) {\n\t\t\treturn '';\n\t\t}\n\t\treturn symbolDescription;\n\t};\n\tdefine(wrappedGetter);\n\treturn wrappedGetter;\n};\n\nmodule.exports = function shimSymbolDescription() {\n\tif (!hasSymbols) {\n\t\treturn false;\n\t}\n\tvar desc = gOPD(Symbol.prototype, 'description');\n\tvar getter = polyfill();\n\tvar isMissing = !desc || typeof desc.get !== 'function';\n\tvar isBroken = !isMissing && (typeof Symbol().description !== 'undefined' || Symbol('').description !== '');\n\tif (isMissing || isBroken) {\n\t\tif (!getInferredName) {\n\t\t\treturn shimGlobal(getter);\n\t\t}\n\t\tdefine(getter);\n\t}\n\treturn getter;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/symbol.prototype.description/shim.js?"
        );

        /***/
      },

    /***/ './node_modules/whatwg-fetch/fetch.js':
      /*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
      /***/ function () {
        eval(
          "(function(self) {\n  'use strict';\n\n  if (self.fetch) {\n    return\n  }\n\n  function normalizeName(name) {\n    if (typeof name !== 'string') {\n      name = String(name)\n    }\n    if (/[^a-z0-9\\-#$%&'*+.\\^_`|~]/i.test(name)) {\n      throw new TypeError('Invalid character in header field name')\n    }\n    return name.toLowerCase()\n  }\n\n  function normalizeValue(value) {\n    if (typeof value !== 'string') {\n      value = String(value)\n    }\n    return value\n  }\n\n  function Headers(headers) {\n    this.map = {}\n\n    if (headers instanceof Headers) {\n      headers.forEach(function(value, name) {\n        this.append(name, value)\n      }, this)\n\n    } else if (headers) {\n      Object.getOwnPropertyNames(headers).forEach(function(name) {\n        this.append(name, headers[name])\n      }, this)\n    }\n  }\n\n  Headers.prototype.append = function(name, value) {\n    name = normalizeName(name)\n    value = normalizeValue(value)\n    var list = this.map[name]\n    if (!list) {\n      list = []\n      this.map[name] = list\n    }\n    list.push(value)\n  }\n\n  Headers.prototype['delete'] = function(name) {\n    delete this.map[normalizeName(name)]\n  }\n\n  Headers.prototype.get = function(name) {\n    var values = this.map[normalizeName(name)]\n    return values ? values[0] : null\n  }\n\n  Headers.prototype.getAll = function(name) {\n    return this.map[normalizeName(name)] || []\n  }\n\n  Headers.prototype.has = function(name) {\n    return this.map.hasOwnProperty(normalizeName(name))\n  }\n\n  Headers.prototype.set = function(name, value) {\n    this.map[normalizeName(name)] = [normalizeValue(value)]\n  }\n\n  Headers.prototype.forEach = function(callback, thisArg) {\n    Object.getOwnPropertyNames(this.map).forEach(function(name) {\n      this.map[name].forEach(function(value) {\n        callback.call(thisArg, value, name, this)\n      }, this)\n    }, this)\n  }\n\n  function consumed(body) {\n    if (body.bodyUsed) {\n      return Promise.reject(new TypeError('Already read'))\n    }\n    body.bodyUsed = true\n  }\n\n  function fileReaderReady(reader) {\n    return new Promise(function(resolve, reject) {\n      reader.onload = function() {\n        resolve(reader.result)\n      }\n      reader.onerror = function() {\n        reject(reader.error)\n      }\n    })\n  }\n\n  function readBlobAsArrayBuffer(blob) {\n    var reader = new FileReader()\n    reader.readAsArrayBuffer(blob)\n    return fileReaderReady(reader)\n  }\n\n  function readBlobAsText(blob) {\n    var reader = new FileReader()\n    reader.readAsText(blob)\n    return fileReaderReady(reader)\n  }\n\n  var support = {\n    blob: 'FileReader' in self && 'Blob' in self && (function() {\n      try {\n        new Blob()\n        return true\n      } catch(e) {\n        return false\n      }\n    })(),\n    formData: 'FormData' in self,\n    arrayBuffer: 'ArrayBuffer' in self\n  }\n\n  function Body() {\n    this.bodyUsed = false\n\n\n    this._initBody = function(body) {\n      this._bodyInit = body\n      if (typeof body === 'string') {\n        this._bodyText = body\n      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {\n        this._bodyBlob = body\n      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {\n        this._bodyFormData = body\n      } else if (!body) {\n        this._bodyText = ''\n      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {\n        // Only support ArrayBuffers for POST method.\n        // Receiving ArrayBuffers happens via Blobs, instead.\n      } else {\n        throw new Error('unsupported BodyInit type')\n      }\n\n      if (!this.headers.get('content-type')) {\n        if (typeof body === 'string') {\n          this.headers.set('content-type', 'text/plain;charset=UTF-8')\n        } else if (this._bodyBlob && this._bodyBlob.type) {\n          this.headers.set('content-type', this._bodyBlob.type)\n        }\n      }\n    }\n\n    if (support.blob) {\n      this.blob = function() {\n        var rejected = consumed(this)\n        if (rejected) {\n          return rejected\n        }\n\n        if (this._bodyBlob) {\n          return Promise.resolve(this._bodyBlob)\n        } else if (this._bodyFormData) {\n          throw new Error('could not read FormData body as blob')\n        } else {\n          return Promise.resolve(new Blob([this._bodyText]))\n        }\n      }\n\n      this.arrayBuffer = function() {\n        return this.blob().then(readBlobAsArrayBuffer)\n      }\n\n      this.text = function() {\n        var rejected = consumed(this)\n        if (rejected) {\n          return rejected\n        }\n\n        if (this._bodyBlob) {\n          return readBlobAsText(this._bodyBlob)\n        } else if (this._bodyFormData) {\n          throw new Error('could not read FormData body as text')\n        } else {\n          return Promise.resolve(this._bodyText)\n        }\n      }\n    } else {\n      this.text = function() {\n        var rejected = consumed(this)\n        return rejected ? rejected : Promise.resolve(this._bodyText)\n      }\n    }\n\n    if (support.formData) {\n      this.formData = function() {\n        return this.text().then(decode)\n      }\n    }\n\n    this.json = function() {\n      return this.text().then(JSON.parse)\n    }\n\n    return this\n  }\n\n  // HTTP methods whose capitalization should be normalized\n  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']\n\n  function normalizeMethod(method) {\n    var upcased = method.toUpperCase()\n    return (methods.indexOf(upcased) > -1) ? upcased : method\n  }\n\n  function Request(input, options) {\n    options = options || {}\n    var body = options.body\n    if (Request.prototype.isPrototypeOf(input)) {\n      if (input.bodyUsed) {\n        throw new TypeError('Already read')\n      }\n      this.url = input.url\n      this.credentials = input.credentials\n      if (!options.headers) {\n        this.headers = new Headers(input.headers)\n      }\n      this.method = input.method\n      this.mode = input.mode\n      if (!body) {\n        body = input._bodyInit\n        input.bodyUsed = true\n      }\n    } else {\n      this.url = input\n    }\n\n    this.credentials = options.credentials || this.credentials || 'omit'\n    if (options.headers || !this.headers) {\n      this.headers = new Headers(options.headers)\n    }\n    this.method = normalizeMethod(options.method || this.method || 'GET')\n    this.mode = options.mode || this.mode || null\n    this.referrer = null\n\n    if ((this.method === 'GET' || this.method === 'HEAD') && body) {\n      throw new TypeError('Body not allowed for GET or HEAD requests')\n    }\n    this._initBody(body)\n  }\n\n  Request.prototype.clone = function() {\n    return new Request(this)\n  }\n\n  function decode(body) {\n    var form = new FormData()\n    body.trim().split('&').forEach(function(bytes) {\n      if (bytes) {\n        var split = bytes.split('=')\n        var name = split.shift().replace(/\\+/g, ' ')\n        var value = split.join('=').replace(/\\+/g, ' ')\n        form.append(decodeURIComponent(name), decodeURIComponent(value))\n      }\n    })\n    return form\n  }\n\n  function headers(xhr) {\n    var head = new Headers()\n    var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\\n')\n    pairs.forEach(function(header) {\n      var split = header.trim().split(':')\n      var key = split.shift().trim()\n      var value = split.join(':').trim()\n      head.append(key, value)\n    })\n    return head\n  }\n\n  Body.call(Request.prototype)\n\n  function Response(bodyInit, options) {\n    if (!options) {\n      options = {}\n    }\n\n    this.type = 'default'\n    this.status = options.status\n    this.ok = this.status >= 200 && this.status < 300\n    this.statusText = options.statusText\n    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)\n    this.url = options.url || ''\n    this._initBody(bodyInit)\n  }\n\n  Body.call(Response.prototype)\n\n  Response.prototype.clone = function() {\n    return new Response(this._bodyInit, {\n      status: this.status,\n      statusText: this.statusText,\n      headers: new Headers(this.headers),\n      url: this.url\n    })\n  }\n\n  Response.error = function() {\n    var response = new Response(null, {status: 0, statusText: ''})\n    response.type = 'error'\n    return response\n  }\n\n  var redirectStatuses = [301, 302, 303, 307, 308]\n\n  Response.redirect = function(url, status) {\n    if (redirectStatuses.indexOf(status) === -1) {\n      throw new RangeError('Invalid status code')\n    }\n\n    return new Response(null, {status: status, headers: {location: url}})\n  }\n\n  self.Headers = Headers\n  self.Request = Request\n  self.Response = Response\n\n  self.fetch = function(input, init) {\n    return new Promise(function(resolve, reject) {\n      var request\n      if (Request.prototype.isPrototypeOf(input) && !init) {\n        request = input\n      } else {\n        request = new Request(input, init)\n      }\n\n      var xhr = new XMLHttpRequest()\n\n      function responseURL() {\n        if ('responseURL' in xhr) {\n          return xhr.responseURL\n        }\n\n        // Avoid security warnings on getResponseHeader when not allowed by CORS\n        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {\n          return xhr.getResponseHeader('X-Request-URL')\n        }\n\n        return\n      }\n\n      xhr.onload = function() {\n        var status = (xhr.status === 1223) ? 204 : xhr.status\n        if (status < 100 || status > 599) {\n          reject(new TypeError('Network request failed'))\n          return\n        }\n        var options = {\n          status: status,\n          statusText: xhr.statusText,\n          headers: headers(xhr),\n          url: responseURL()\n        }\n        var body = 'response' in xhr ? xhr.response : xhr.responseText\n        resolve(new Response(body, options))\n      }\n\n      xhr.onerror = function() {\n        reject(new TypeError('Network request failed'))\n      }\n\n      xhr.ontimeout = function() {\n        reject(new TypeError('Network request failed'))\n      }\n\n      xhr.open(request.method, request.url, true)\n\n      if (request.credentials === 'include') {\n        xhr.withCredentials = true\n      }\n\n      if ('responseType' in xhr && support.blob) {\n        xhr.responseType = 'blob'\n      }\n\n      request.headers.forEach(function(value, name) {\n        xhr.setRequestHeader(name, value)\n      })\n\n      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)\n    })\n  }\n  self.fetch.polyfill = true\n})(typeof self !== 'undefined' ? self : this);\n\n\n//# sourceURL=webpack://equicore/./node_modules/whatwg-fetch/fetch.js?"
        );

        /***/
      },

    /***/ './node_modules/window-location-origin/src/window-location-origin.js':
      /*!***************************************************************************!*\
  !*** ./node_modules/window-location-origin/src/window-location-origin.js ***!
  \***************************************************************************/
      /***/ () => {
        eval(
          '/* jshint browser:true\n *\n * window-location-origin - version 0.0.1\n * Add support for browsers that don\'t natively support window.location.origin\n *\n * Authror: Kyle Welsby <kyle@mekyle.com>\n * License: MIT\n */\n\n(function(location){\n  \'use strict\';\n  if (!location.origin) {\n    var origin = location.protocol + "//" + location.hostname + (location.port && ":" + location.port);\n    \n    try {\n      // Make it non editable\n      Object.defineProperty(location, "origin", {\n        enumerable: true,\n        value: origin\n      });\n    } catch (e){\n      // IE < 8\n      location.origin = origin;\n    }\n  }\n})(window.location);\n\n\n//# sourceURL=webpack://equicore/./node_modules/window-location-origin/src/window-location-origin.js?'
        );

        /***/
      },

    /***/ '?4f7e':
      /*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
      /***/ () => {
        eval(
          '/* (ignored) */\n\n//# sourceURL=webpack://equicore/./util.inspect_(ignored)?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/ArrayCreate.js':
      /*!******************************************************!*\
  !*** ./node_modules/es-abstract/2023/ArrayCreate.js ***!
  \******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $ArrayPrototype = GetIntrinsic('%Array.prototype%');\nvar $RangeError = __webpack_require__(/*! es-errors/range */ \"./node_modules/es-errors/range.js\");\nvar $SyntaxError = __webpack_require__(/*! es-errors/syntax */ \"./node_modules/es-errors/syntax.js\");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar isInteger = __webpack_require__(/*! ../helpers/isInteger */ \"./node_modules/es-abstract/helpers/isInteger.js\");\n\nvar MAX_ARRAY_LENGTH = Math.pow(2, 32) - 1;\n\nvar hasProto = __webpack_require__(/*! has-proto */ \"./node_modules/has-proto/index.js\")();\n\nvar $setProto = GetIntrinsic('%Object.setPrototypeOf%', true) || (\n\thasProto\n\t\t? function (O, proto) {\n\t\t\tO.__proto__ = proto; // eslint-disable-line no-proto, no-param-reassign\n\t\t\treturn O;\n\t\t}\n\t\t: null\n);\n\n// https://262.ecma-international.org/12.0/#sec-arraycreate\n\nmodule.exports = function ArrayCreate(length) {\n\tif (!isInteger(length) || length < 0) {\n\t\tthrow new $TypeError('Assertion failed: `length` must be an integer Number >= 0');\n\t}\n\tif (length > MAX_ARRAY_LENGTH) {\n\t\tthrow new $RangeError('length is greater than (2**32 - 1)');\n\t}\n\tvar proto = arguments.length > 1 ? arguments[1] : $ArrayPrototype;\n\tvar A = []; // steps 3, 5\n\tif (proto !== $ArrayPrototype) { // step 4\n\t\tif (!$setProto) {\n\t\t\tthrow new $SyntaxError('ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]');\n\t\t}\n\t\t$setProto(A, proto);\n\t}\n\tif (length !== 0) { // bypasses the need for step 6\n\t\tA.length = length;\n\t}\n\t/* step 6, the above as a shortcut for the below\n\tOrdinaryDefineOwnProperty(A, 'length', {\n\t\t'[[Configurable]]': false,\n\t\t'[[Enumerable]]': false,\n\t\t'[[Value]]': length,\n\t\t'[[Writable]]': true\n\t});\n\t*/\n\treturn A;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/ArrayCreate.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/ArraySpeciesCreate.js':
      /*!*************************************************************!*\
  !*** ./node_modules/es-abstract/2023/ArraySpeciesCreate.js ***!
  \*************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");\n\nvar $species = GetIntrinsic(\'%Symbol.species%\', true);\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar ArrayCreate = __webpack_require__(/*! ./ArrayCreate */ "./node_modules/es-abstract/2023/ArrayCreate.js");\nvar Get = __webpack_require__(/*! ./Get */ "./node_modules/es-abstract/2023/Get.js");\nvar IsArray = __webpack_require__(/*! ./IsArray */ "./node_modules/es-abstract/2023/IsArray.js");\nvar IsConstructor = __webpack_require__(/*! ./IsConstructor */ "./node_modules/es-abstract/2023/IsConstructor.js");\nvar Type = __webpack_require__(/*! ./Type */ "./node_modules/es-abstract/2023/Type.js");\n\nvar isInteger = __webpack_require__(/*! ../helpers/isInteger */ "./node_modules/es-abstract/helpers/isInteger.js");\n\n// https://262.ecma-international.org/12.0/#sec-arrayspeciescreate\n\nmodule.exports = function ArraySpeciesCreate(originalArray, length) {\n\tif (!isInteger(length) || length < 0) {\n\t\tthrow new $TypeError(\'Assertion failed: length must be an integer >= 0\');\n\t}\n\n\tvar isArray = IsArray(originalArray);\n\tif (!isArray) {\n\t\treturn ArrayCreate(length);\n\t}\n\n\tvar C = Get(originalArray, \'constructor\');\n\t// TODO: figure out how to make a cross-realm normal Array, a same-realm Array\n\t// if (IsConstructor(C)) {\n\t// \tif C is another realm\'s Array, C = undefined\n\t// \tObject.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?\n\t// }\n\tif ($species && Type(C) === \'Object\') {\n\t\tC = Get(C, $species);\n\t\tif (C === null) {\n\t\t\tC = void 0;\n\t\t}\n\t}\n\n\tif (typeof C === \'undefined\') {\n\t\treturn ArrayCreate(length);\n\t}\n\tif (!IsConstructor(C)) {\n\t\tthrow new $TypeError(\'C must be a constructor\');\n\t}\n\treturn new C(length); // Construct(C, length);\n};\n\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/ArraySpeciesCreate.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/Call.js':
      /*!***********************************************!*\
  !*** ./node_modules/es-abstract/2023/Call.js ***!
  \***********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar IsArray = __webpack_require__(/*! ./IsArray */ "./node_modules/es-abstract/2023/IsArray.js");\n\nvar $apply = GetIntrinsic(\'%Reflect.apply%\', true) || callBound(\'Function.prototype.apply\');\n\n// https://262.ecma-international.org/6.0/#sec-call\n\nmodule.exports = function Call(F, V) {\n\tvar argumentsList = arguments.length > 2 ? arguments[2] : [];\n\tif (!IsArray(argumentsList)) {\n\t\tthrow new $TypeError(\'Assertion failed: optional `argumentsList`, if provided, must be a List\');\n\t}\n\treturn $apply(F, V, argumentsList);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/Call.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/CreateDataProperty.js':
      /*!*************************************************************!*\
  !*** ./node_modules/es-abstract/2023/CreateDataProperty.js ***!
  \*************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ \"./node_modules/es-abstract/2023/IsPropertyKey.js\");\nvar OrdinaryDefineOwnProperty = __webpack_require__(/*! ./OrdinaryDefineOwnProperty */ \"./node_modules/es-abstract/2023/OrdinaryDefineOwnProperty.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2023/Type.js\");\n\n// https://262.ecma-international.org/6.0/#sec-createdataproperty\n\nmodule.exports = function CreateDataProperty(O, P, V) {\n\tif (Type(O) !== 'Object') {\n\t\tthrow new $TypeError('Assertion failed: Type(O) is not Object');\n\t}\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError('Assertion failed: IsPropertyKey(P) is not true');\n\t}\n\tvar newDesc = {\n\t\t'[[Configurable]]': true,\n\t\t'[[Enumerable]]': true,\n\t\t'[[Value]]': V,\n\t\t'[[Writable]]': true\n\t};\n\treturn OrdinaryDefineOwnProperty(O, P, newDesc);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/CreateDataProperty.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/CreateDataPropertyOrThrow.js':
      /*!********************************************************************!*\
  !*** ./node_modules/es-abstract/2023/CreateDataPropertyOrThrow.js ***!
  \********************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar CreateDataProperty = __webpack_require__(/*! ./CreateDataProperty */ "./node_modules/es-abstract/2023/CreateDataProperty.js");\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ "./node_modules/es-abstract/2023/IsPropertyKey.js");\nvar Type = __webpack_require__(/*! ./Type */ "./node_modules/es-abstract/2023/Type.js");\n\n// // https://262.ecma-international.org/14.0/#sec-createdatapropertyorthrow\n\nmodule.exports = function CreateDataPropertyOrThrow(O, P, V) {\n\tif (Type(O) !== \'Object\') {\n\t\tthrow new $TypeError(\'Assertion failed: Type(O) is not Object\');\n\t}\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError(\'Assertion failed: IsPropertyKey(P) is not true\');\n\t}\n\tvar success = CreateDataProperty(O, P, V);\n\tif (!success) {\n\t\tthrow new $TypeError(\'unable to create data property\');\n\t}\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/CreateDataPropertyOrThrow.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/DefinePropertyOrThrow.js':
      /*!****************************************************************!*\
  !*** ./node_modules/es-abstract/2023/DefinePropertyOrThrow.js ***!
  \****************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar isPropertyDescriptor = __webpack_require__(/*! ../helpers/records/property-descriptor */ "./node_modules/es-abstract/helpers/records/property-descriptor.js");\nvar DefineOwnProperty = __webpack_require__(/*! ../helpers/DefineOwnProperty */ "./node_modules/es-abstract/helpers/DefineOwnProperty.js");\n\nvar FromPropertyDescriptor = __webpack_require__(/*! ./FromPropertyDescriptor */ "./node_modules/es-abstract/2023/FromPropertyDescriptor.js");\nvar IsDataDescriptor = __webpack_require__(/*! ./IsDataDescriptor */ "./node_modules/es-abstract/2023/IsDataDescriptor.js");\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ "./node_modules/es-abstract/2023/IsPropertyKey.js");\nvar SameValue = __webpack_require__(/*! ./SameValue */ "./node_modules/es-abstract/2023/SameValue.js");\nvar ToPropertyDescriptor = __webpack_require__(/*! ./ToPropertyDescriptor */ "./node_modules/es-abstract/2023/ToPropertyDescriptor.js");\nvar Type = __webpack_require__(/*! ./Type */ "./node_modules/es-abstract/2023/Type.js");\n\n// https://262.ecma-international.org/6.0/#sec-definepropertyorthrow\n\nmodule.exports = function DefinePropertyOrThrow(O, P, desc) {\n\tif (Type(O) !== \'Object\') {\n\t\tthrow new $TypeError(\'Assertion failed: Type(O) is not Object\');\n\t}\n\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError(\'Assertion failed: IsPropertyKey(P) is not true\');\n\t}\n\n\tvar Desc = isPropertyDescriptor(desc) ? desc : ToPropertyDescriptor(desc);\n\tif (!isPropertyDescriptor(Desc)) {\n\t\tthrow new $TypeError(\'Assertion failed: Desc is not a valid Property Descriptor\');\n\t}\n\n\treturn DefineOwnProperty(\n\t\tIsDataDescriptor,\n\t\tSameValue,\n\t\tFromPropertyDescriptor,\n\t\tO,\n\t\tP,\n\t\tDesc\n\t);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/DefinePropertyOrThrow.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/FlattenIntoArray.js':
      /*!***********************************************************!*\
  !*** ./node_modules/es-abstract/2023/FlattenIntoArray.js ***!
  \***********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar MAX_SAFE_INTEGER = __webpack_require__(/*! ../helpers/maxSafeInteger */ "./node_modules/es-abstract/helpers/maxSafeInteger.js");\n\nvar Call = __webpack_require__(/*! ./Call */ "./node_modules/es-abstract/2023/Call.js");\nvar CreateDataPropertyOrThrow = __webpack_require__(/*! ./CreateDataPropertyOrThrow */ "./node_modules/es-abstract/2023/CreateDataPropertyOrThrow.js");\nvar Get = __webpack_require__(/*! ./Get */ "./node_modules/es-abstract/2023/Get.js");\nvar HasProperty = __webpack_require__(/*! ./HasProperty */ "./node_modules/es-abstract/2023/HasProperty.js");\nvar IsArray = __webpack_require__(/*! ./IsArray */ "./node_modules/es-abstract/2023/IsArray.js");\nvar LengthOfArrayLike = __webpack_require__(/*! ./LengthOfArrayLike */ "./node_modules/es-abstract/2023/LengthOfArrayLike.js");\nvar ToString = __webpack_require__(/*! ./ToString */ "./node_modules/es-abstract/2023/ToString.js");\n\n// https://262.ecma-international.org/11.0/#sec-flattenintoarray\n\nmodule.exports = function FlattenIntoArray(target, source, sourceLen, start, depth) {\n\tvar mapperFunction;\n\tif (arguments.length > 5) {\n\t\tmapperFunction = arguments[5];\n\t}\n\n\tvar targetIndex = start;\n\tvar sourceIndex = 0;\n\twhile (sourceIndex < sourceLen) {\n\t\tvar P = ToString(sourceIndex);\n\t\tvar exists = HasProperty(source, P);\n\t\tif (exists === true) {\n\t\t\tvar element = Get(source, P);\n\t\t\tif (typeof mapperFunction !== \'undefined\') {\n\t\t\t\tif (arguments.length <= 6) {\n\t\t\t\t\tthrow new $TypeError(\'Assertion failed: thisArg is required when mapperFunction is provided\');\n\t\t\t\t}\n\t\t\t\telement = Call(mapperFunction, arguments[6], [element, sourceIndex, source]);\n\t\t\t}\n\t\t\tvar shouldFlatten = false;\n\t\t\tif (depth > 0) {\n\t\t\t\tshouldFlatten = IsArray(element);\n\t\t\t}\n\t\t\tif (shouldFlatten) {\n\t\t\t\tvar elementLen = LengthOfArrayLike(element);\n\t\t\t\ttargetIndex = FlattenIntoArray(target, element, elementLen, targetIndex, depth - 1);\n\t\t\t} else {\n\t\t\t\tif (targetIndex >= MAX_SAFE_INTEGER) {\n\t\t\t\t\tthrow new $TypeError(\'index too large\');\n\t\t\t\t}\n\t\t\t\tCreateDataPropertyOrThrow(target, ToString(targetIndex), element);\n\t\t\t\ttargetIndex += 1;\n\t\t\t}\n\t\t}\n\t\tsourceIndex += 1;\n\t}\n\n\treturn targetIndex;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/FlattenIntoArray.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/FromPropertyDescriptor.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/es-abstract/2023/FromPropertyDescriptor.js ***!
  \*****************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar isPropertyDescriptor = __webpack_require__(/*! ../helpers/records/property-descriptor */ "./node_modules/es-abstract/helpers/records/property-descriptor.js");\nvar fromPropertyDescriptor = __webpack_require__(/*! ../helpers/fromPropertyDescriptor */ "./node_modules/es-abstract/helpers/fromPropertyDescriptor.js");\n\n// https://262.ecma-international.org/6.0/#sec-frompropertydescriptor\n\nmodule.exports = function FromPropertyDescriptor(Desc) {\n\tif (typeof Desc !== \'undefined\' && !isPropertyDescriptor(Desc)) {\n\t\tthrow new $TypeError(\'Assertion failed: `Desc` must be a Property Descriptor\');\n\t}\n\n\treturn fromPropertyDescriptor(Desc);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/FromPropertyDescriptor.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/Get.js':
      /*!**********************************************!*\
  !*** ./node_modules/es-abstract/2023/Get.js ***!
  \**********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar inspect = __webpack_require__(/*! object-inspect */ "./node_modules/object-inspect/index.js");\n\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ "./node_modules/es-abstract/2023/IsPropertyKey.js");\nvar Type = __webpack_require__(/*! ./Type */ "./node_modules/es-abstract/2023/Type.js");\n\n// https://262.ecma-international.org/6.0/#sec-get-o-p\n\nmodule.exports = function Get(O, P) {\n\t// 7.3.1.1\n\tif (Type(O) !== \'Object\') {\n\t\tthrow new $TypeError(\'Assertion failed: Type(O) is not Object\');\n\t}\n\t// 7.3.1.2\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError(\'Assertion failed: IsPropertyKey(P) is not true, got \' + inspect(P));\n\t}\n\t// 7.3.1.3\n\treturn O[P];\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/Get.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/HasOwnProperty.js':
      /*!*********************************************************!*\
  !*** ./node_modules/es-abstract/2023/HasOwnProperty.js ***!
  \*********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar hasOwn = __webpack_require__(/*! hasown */ "./node_modules/hasown/index.js");\n\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ "./node_modules/es-abstract/2023/IsPropertyKey.js");\nvar Type = __webpack_require__(/*! ./Type */ "./node_modules/es-abstract/2023/Type.js");\n\n// https://262.ecma-international.org/6.0/#sec-hasownproperty\n\nmodule.exports = function HasOwnProperty(O, P) {\n\tif (Type(O) !== \'Object\') {\n\t\tthrow new $TypeError(\'Assertion failed: `O` must be an Object\');\n\t}\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError(\'Assertion failed: `P` must be a Property Key\');\n\t}\n\treturn hasOwn(O, P);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/HasOwnProperty.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/HasProperty.js':
      /*!******************************************************!*\
  !*** ./node_modules/es-abstract/2023/HasProperty.js ***!
  \******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ "./node_modules/es-abstract/2023/IsPropertyKey.js");\nvar Type = __webpack_require__(/*! ./Type */ "./node_modules/es-abstract/2023/Type.js");\n\n// https://262.ecma-international.org/6.0/#sec-hasproperty\n\nmodule.exports = function HasProperty(O, P) {\n\tif (Type(O) !== \'Object\') {\n\t\tthrow new $TypeError(\'Assertion failed: `O` must be an Object\');\n\t}\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError(\'Assertion failed: `P` must be a Property Key\');\n\t}\n\treturn P in O;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/HasProperty.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/IsAccessorDescriptor.js':
      /*!***************************************************************!*\
  !*** ./node_modules/es-abstract/2023/IsAccessorDescriptor.js ***!
  \***************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar hasOwn = __webpack_require__(/*! hasown */ \"./node_modules/hasown/index.js\");\n\nvar isPropertyDescriptor = __webpack_require__(/*! ../helpers/records/property-descriptor */ \"./node_modules/es-abstract/helpers/records/property-descriptor.js\");\n\n// https://262.ecma-international.org/5.1/#sec-8.10.1\n\nmodule.exports = function IsAccessorDescriptor(Desc) {\n\tif (typeof Desc === 'undefined') {\n\t\treturn false;\n\t}\n\n\tif (!isPropertyDescriptor(Desc)) {\n\t\tthrow new $TypeError('Assertion failed: `Desc` must be a Property Descriptor');\n\t}\n\n\tif (!hasOwn(Desc, '[[Get]]') && !hasOwn(Desc, '[[Set]]')) {\n\t\treturn false;\n\t}\n\n\treturn true;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/IsAccessorDescriptor.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/IsArray.js':
      /*!**************************************************!*\
  !*** ./node_modules/es-abstract/2023/IsArray.js ***!
  \**************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\n// https://262.ecma-international.org/6.0/#sec-isarray\nmodule.exports = __webpack_require__(/*! ../helpers/IsArray */ "./node_modules/es-abstract/helpers/IsArray.js");\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/IsArray.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/IsCallable.js':
      /*!*****************************************************!*\
  !*** ./node_modules/es-abstract/2023/IsCallable.js ***!
  \*****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\n// http://262.ecma-international.org/5.1/#sec-9.11\n\nmodule.exports = __webpack_require__(/*! is-callable */ "./node_modules/is-callable/index.js");\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/IsCallable.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/IsConstructor.js':
      /*!********************************************************!*\
  !*** ./node_modules/es-abstract/2023/IsConstructor.js ***!
  \********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic.js */ \"./node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $construct = GetIntrinsic('%Reflect.construct%', true);\n\nvar DefinePropertyOrThrow = __webpack_require__(/*! ./DefinePropertyOrThrow */ \"./node_modules/es-abstract/2023/DefinePropertyOrThrow.js\");\ntry {\n\tDefinePropertyOrThrow({}, '', { '[[Get]]': function () {} });\n} catch (e) {\n\t// Accessor properties aren't supported\n\tDefinePropertyOrThrow = null;\n}\n\n// https://262.ecma-international.org/6.0/#sec-isconstructor\n\nif (DefinePropertyOrThrow && $construct) {\n\tvar isConstructorMarker = {};\n\tvar badArrayLike = {};\n\tDefinePropertyOrThrow(badArrayLike, 'length', {\n\t\t'[[Get]]': function () {\n\t\t\tthrow isConstructorMarker;\n\t\t},\n\t\t'[[Enumerable]]': true\n\t});\n\n\tmodule.exports = function IsConstructor(argument) {\n\t\ttry {\n\t\t\t// `Reflect.construct` invokes `IsConstructor(target)` before `Get(args, 'length')`:\n\t\t\t$construct(argument, badArrayLike);\n\t\t} catch (err) {\n\t\t\treturn err === isConstructorMarker;\n\t\t}\n\t};\n} else {\n\tmodule.exports = function IsConstructor(argument) {\n\t\t// unfortunately there's no way to truly check this without try/catch `new argument` in old environments\n\t\treturn typeof argument === 'function' && !!argument.prototype;\n\t};\n}\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/IsConstructor.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/IsDataDescriptor.js':
      /*!***********************************************************!*\
  !*** ./node_modules/es-abstract/2023/IsDataDescriptor.js ***!
  \***********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar hasOwn = __webpack_require__(/*! hasown */ \"./node_modules/hasown/index.js\");\n\nvar isPropertyDescriptor = __webpack_require__(/*! ../helpers/records/property-descriptor */ \"./node_modules/es-abstract/helpers/records/property-descriptor.js\");\n\n// https://262.ecma-international.org/5.1/#sec-8.10.2\n\nmodule.exports = function IsDataDescriptor(Desc) {\n\tif (typeof Desc === 'undefined') {\n\t\treturn false;\n\t}\n\n\tif (!isPropertyDescriptor(Desc)) {\n\t\tthrow new $TypeError('Assertion failed: `Desc` must be a Property Descriptor');\n\t}\n\n\tif (!hasOwn(Desc, '[[Value]]') && !hasOwn(Desc, '[[Writable]]')) {\n\t\treturn false;\n\t}\n\n\treturn true;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/IsDataDescriptor.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/IsExtensible.js':
      /*!*******************************************************!*\
  !*** ./node_modules/es-abstract/2023/IsExtensible.js ***!
  \*******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");\n\nvar $preventExtensions = GetIntrinsic(\'%Object.preventExtensions%\', true);\nvar $isExtensible = GetIntrinsic(\'%Object.isExtensible%\', true);\n\nvar isPrimitive = __webpack_require__(/*! ../helpers/isPrimitive */ "./node_modules/es-abstract/helpers/isPrimitive.js");\n\n// https://262.ecma-international.org/6.0/#sec-isextensible-o\n\nmodule.exports = $preventExtensions\n\t? function IsExtensible(obj) {\n\t\treturn !isPrimitive(obj) && $isExtensible(obj);\n\t}\n\t: function IsExtensible(obj) {\n\t\treturn !isPrimitive(obj);\n\t};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/IsExtensible.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/IsGenericDescriptor.js':
      /*!**************************************************************!*\
  !*** ./node_modules/es-abstract/2023/IsGenericDescriptor.js ***!
  \**************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar IsAccessorDescriptor = __webpack_require__(/*! ./IsAccessorDescriptor */ "./node_modules/es-abstract/2023/IsAccessorDescriptor.js");\nvar IsDataDescriptor = __webpack_require__(/*! ./IsDataDescriptor */ "./node_modules/es-abstract/2023/IsDataDescriptor.js");\n\nvar isPropertyDescriptor = __webpack_require__(/*! ../helpers/records/property-descriptor */ "./node_modules/es-abstract/helpers/records/property-descriptor.js");\n\n// https://262.ecma-international.org/6.0/#sec-isgenericdescriptor\n\nmodule.exports = function IsGenericDescriptor(Desc) {\n\tif (typeof Desc === \'undefined\') {\n\t\treturn false;\n\t}\n\n\tif (!isPropertyDescriptor(Desc)) {\n\t\tthrow new $TypeError(\'Assertion failed: `Desc` must be a Property Descriptor\');\n\t}\n\n\tif (!IsAccessorDescriptor(Desc) && !IsDataDescriptor(Desc)) {\n\t\treturn true;\n\t}\n\n\treturn false;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/IsGenericDescriptor.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/IsPropertyKey.js':
      /*!********************************************************!*\
  !*** ./node_modules/es-abstract/2023/IsPropertyKey.js ***!
  \********************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\n// https://262.ecma-international.org/6.0/#sec-ispropertykey\n\nmodule.exports = function IsPropertyKey(argument) {\n\treturn typeof argument === 'string' || typeof argument === 'symbol';\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/IsPropertyKey.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/LengthOfArrayLike.js':
      /*!************************************************************!*\
  !*** ./node_modules/es-abstract/2023/LengthOfArrayLike.js ***!
  \************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar Get = __webpack_require__(/*! ./Get */ "./node_modules/es-abstract/2023/Get.js");\nvar ToLength = __webpack_require__(/*! ./ToLength */ "./node_modules/es-abstract/2023/ToLength.js");\nvar Type = __webpack_require__(/*! ./Type */ "./node_modules/es-abstract/2023/Type.js");\n\n// https://262.ecma-international.org/11.0/#sec-lengthofarraylike\n\nmodule.exports = function LengthOfArrayLike(obj) {\n\tif (Type(obj) !== \'Object\') {\n\t\tthrow new $TypeError(\'Assertion failed: `obj` must be an Object\');\n\t}\n\treturn ToLength(Get(obj, \'length\'));\n};\n\n// TODO: use this all over\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/LengthOfArrayLike.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/OrdinaryDefineOwnProperty.js':
      /*!********************************************************************!*\
  !*** ./node_modules/es-abstract/2023/OrdinaryDefineOwnProperty.js ***!
  \********************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $gOPD = __webpack_require__(/*! gopd */ \"./node_modules/gopd/index.js\");\nvar $SyntaxError = __webpack_require__(/*! es-errors/syntax */ \"./node_modules/es-errors/syntax.js\");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar isPropertyDescriptor = __webpack_require__(/*! ../helpers/records/property-descriptor */ \"./node_modules/es-abstract/helpers/records/property-descriptor.js\");\n\nvar IsAccessorDescriptor = __webpack_require__(/*! ./IsAccessorDescriptor */ \"./node_modules/es-abstract/2023/IsAccessorDescriptor.js\");\nvar IsExtensible = __webpack_require__(/*! ./IsExtensible */ \"./node_modules/es-abstract/2023/IsExtensible.js\");\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ \"./node_modules/es-abstract/2023/IsPropertyKey.js\");\nvar ToPropertyDescriptor = __webpack_require__(/*! ./ToPropertyDescriptor */ \"./node_modules/es-abstract/2023/ToPropertyDescriptor.js\");\nvar SameValue = __webpack_require__(/*! ./SameValue */ \"./node_modules/es-abstract/2023/SameValue.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2023/Type.js\");\nvar ValidateAndApplyPropertyDescriptor = __webpack_require__(/*! ./ValidateAndApplyPropertyDescriptor */ \"./node_modules/es-abstract/2023/ValidateAndApplyPropertyDescriptor.js\");\n\n// https://262.ecma-international.org/6.0/#sec-ordinarydefineownproperty\n\nmodule.exports = function OrdinaryDefineOwnProperty(O, P, Desc) {\n\tif (Type(O) !== 'Object') {\n\t\tthrow new $TypeError('Assertion failed: O must be an Object');\n\t}\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError('Assertion failed: P must be a Property Key');\n\t}\n\tif (!isPropertyDescriptor(Desc)) {\n\t\tthrow new $TypeError('Assertion failed: Desc must be a Property Descriptor');\n\t}\n\tif (!$gOPD) {\n\t\t// ES3/IE 8 fallback\n\t\tif (IsAccessorDescriptor(Desc)) {\n\t\t\tthrow new $SyntaxError('This environment does not support accessor property descriptors.');\n\t\t}\n\t\tvar creatingNormalDataProperty = !(P in O)\n\t\t\t&& Desc['[[Writable]]']\n\t\t\t&& Desc['[[Enumerable]]']\n\t\t\t&& Desc['[[Configurable]]']\n\t\t\t&& '[[Value]]' in Desc;\n\t\tvar settingExistingDataProperty = (P in O)\n\t\t\t&& (!('[[Configurable]]' in Desc) || Desc['[[Configurable]]'])\n\t\t\t&& (!('[[Enumerable]]' in Desc) || Desc['[[Enumerable]]'])\n\t\t\t&& (!('[[Writable]]' in Desc) || Desc['[[Writable]]'])\n\t\t\t&& '[[Value]]' in Desc;\n\t\tif (creatingNormalDataProperty || settingExistingDataProperty) {\n\t\t\tO[P] = Desc['[[Value]]']; // eslint-disable-line no-param-reassign\n\t\t\treturn SameValue(O[P], Desc['[[Value]]']);\n\t\t}\n\t\tthrow new $SyntaxError('This environment does not support defining non-writable, non-enumerable, or non-configurable properties');\n\t}\n\tvar desc = $gOPD(O, P);\n\tvar current = desc && ToPropertyDescriptor(desc);\n\tvar extensible = IsExtensible(O);\n\treturn ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/OrdinaryDefineOwnProperty.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/PromiseResolve.js':
      /*!*********************************************************!*\
  !*** ./node_modules/es-abstract/2023/PromiseResolve.js ***!
  \*********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");\nvar callBind = __webpack_require__(/*! call-bind */ "./node_modules/call-bind/index.js");\nvar $SyntaxError = __webpack_require__(/*! es-errors/syntax */ "./node_modules/es-errors/syntax.js");\n\nvar $resolve = GetIntrinsic(\'%Promise.resolve%\', true);\nvar $PromiseResolve = $resolve && callBind($resolve);\n\n// https://262.ecma-international.org/9.0/#sec-promise-resolve\n\nmodule.exports = function PromiseResolve(C, x) {\n\tif (!$PromiseResolve) {\n\t\tthrow new $SyntaxError(\'This environment does not support Promises.\');\n\t}\n\treturn $PromiseResolve(C, x);\n};\n\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/PromiseResolve.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/SameValue.js':
      /*!****************************************************!*\
  !*** ./node_modules/es-abstract/2023/SameValue.js ***!
  \****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $isNaN = __webpack_require__(/*! ../helpers/isNaN */ "./node_modules/es-abstract/helpers/isNaN.js");\n\n// http://262.ecma-international.org/5.1/#sec-9.12\n\nmodule.exports = function SameValue(x, y) {\n\tif (x === y) { // 0 === -0, but they are not identical.\n\t\tif (x === 0) { return 1 / x === 1 / y; }\n\t\treturn true;\n\t}\n\treturn $isNaN(x) && $isNaN(y);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/SameValue.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/SpeciesConstructor.js':
      /*!*************************************************************!*\
  !*** ./node_modules/es-abstract/2023/SpeciesConstructor.js ***!
  \*************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $species = GetIntrinsic('%Symbol.species%', true);\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar IsConstructor = __webpack_require__(/*! ./IsConstructor */ \"./node_modules/es-abstract/2023/IsConstructor.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2023/Type.js\");\n\n// https://262.ecma-international.org/6.0/#sec-speciesconstructor\n\nmodule.exports = function SpeciesConstructor(O, defaultConstructor) {\n\tif (Type(O) !== 'Object') {\n\t\tthrow new $TypeError('Assertion failed: Type(O) is not Object');\n\t}\n\tvar C = O.constructor;\n\tif (typeof C === 'undefined') {\n\t\treturn defaultConstructor;\n\t}\n\tif (Type(C) !== 'Object') {\n\t\tthrow new $TypeError('O.constructor is not an Object');\n\t}\n\tvar S = $species ? C[$species] : void 0;\n\tif (S == null) {\n\t\treturn defaultConstructor;\n\t}\n\tif (IsConstructor(S)) {\n\t\treturn S;\n\t}\n\tthrow new $TypeError('no constructor found');\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/SpeciesConstructor.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/StringToNumber.js':
      /*!*********************************************************!*\
  !*** ./node_modules/es-abstract/2023/StringToNumber.js ***!
  \*********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $Number = GetIntrinsic('%Number%');\nvar $RegExp = GetIntrinsic('%RegExp%');\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\nvar $parseInteger = GetIntrinsic('%parseInt%');\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar regexTester = __webpack_require__(/*! safe-regex-test */ \"./node_modules/safe-regex-test/index.js\");\n\nvar $strSlice = callBound('String.prototype.slice');\nvar isBinary = regexTester(/^0b[01]+$/i);\nvar isOctal = regexTester(/^0o[0-7]+$/i);\nvar isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);\nvar nonWS = ['\\u0085', '\\u200b', '\\ufffe'].join('');\nvar nonWSregex = new $RegExp('[' + nonWS + ']', 'g');\nvar hasNonWS = regexTester(nonWSregex);\n\nvar $trim = __webpack_require__(/*! string.prototype.trim */ \"./node_modules/string.prototype.trim/index.js\");\n\n// https://262.ecma-international.org/13.0/#sec-stringtonumber\n\nmodule.exports = function StringToNumber(argument) {\n\tif (typeof argument !== 'string') {\n\t\tthrow new $TypeError('Assertion failed: `argument` is not a String');\n\t}\n\tif (isBinary(argument)) {\n\t\treturn $Number($parseInteger($strSlice(argument, 2), 2));\n\t}\n\tif (isOctal(argument)) {\n\t\treturn $Number($parseInteger($strSlice(argument, 2), 8));\n\t}\n\tif (hasNonWS(argument) || isInvalidHexLiteral(argument)) {\n\t\treturn NaN;\n\t}\n\tvar trimmed = $trim(argument);\n\tif (trimmed !== argument) {\n\t\treturn StringToNumber(trimmed);\n\t}\n\treturn $Number(argument);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/StringToNumber.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/ToBoolean.js':
      /*!****************************************************!*\
  !*** ./node_modules/es-abstract/2023/ToBoolean.js ***!
  \****************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          '\n\n// http://262.ecma-international.org/5.1/#sec-9.2\n\nmodule.exports = function ToBoolean(value) { return !!value; };\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/ToBoolean.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/ToIntegerOrInfinity.js':
      /*!**************************************************************!*\
  !*** ./node_modules/es-abstract/2023/ToIntegerOrInfinity.js ***!
  \**************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar ToNumber = __webpack_require__(/*! ./ToNumber */ "./node_modules/es-abstract/2023/ToNumber.js");\nvar truncate = __webpack_require__(/*! ./truncate */ "./node_modules/es-abstract/2023/truncate.js");\n\nvar $isNaN = __webpack_require__(/*! ../helpers/isNaN */ "./node_modules/es-abstract/helpers/isNaN.js");\nvar $isFinite = __webpack_require__(/*! ../helpers/isFinite */ "./node_modules/es-abstract/helpers/isFinite.js");\n\n// https://262.ecma-international.org/14.0/#sec-tointegerorinfinity\n\nmodule.exports = function ToIntegerOrInfinity(value) {\n\tvar number = ToNumber(value);\n\tif ($isNaN(number) || number === 0) { return 0; }\n\tif (!$isFinite(number)) { return number; }\n\treturn truncate(number);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/ToIntegerOrInfinity.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/ToLength.js':
      /*!***************************************************!*\
  !*** ./node_modules/es-abstract/2023/ToLength.js ***!
  \***************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar MAX_SAFE_INTEGER = __webpack_require__(/*! ../helpers/maxSafeInteger */ "./node_modules/es-abstract/helpers/maxSafeInteger.js");\n\nvar ToIntegerOrInfinity = __webpack_require__(/*! ./ToIntegerOrInfinity */ "./node_modules/es-abstract/2023/ToIntegerOrInfinity.js");\n\nmodule.exports = function ToLength(argument) {\n\tvar len = ToIntegerOrInfinity(argument);\n\tif (len <= 0) { return 0; } // includes converting -0 to +0\n\tif (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }\n\treturn len;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/ToLength.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/ToNumber.js':
      /*!***************************************************!*\
  !*** ./node_modules/es-abstract/2023/ToNumber.js ***!
  \***************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\nvar $Number = GetIntrinsic('%Number%');\nvar isPrimitive = __webpack_require__(/*! ../helpers/isPrimitive */ \"./node_modules/es-abstract/helpers/isPrimitive.js\");\n\nvar ToPrimitive = __webpack_require__(/*! ./ToPrimitive */ \"./node_modules/es-abstract/2023/ToPrimitive.js\");\nvar StringToNumber = __webpack_require__(/*! ./StringToNumber */ \"./node_modules/es-abstract/2023/StringToNumber.js\");\n\n// https://262.ecma-international.org/13.0/#sec-tonumber\n\nmodule.exports = function ToNumber(argument) {\n\tvar value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);\n\tif (typeof value === 'symbol') {\n\t\tthrow new $TypeError('Cannot convert a Symbol value to a number');\n\t}\n\tif (typeof value === 'bigint') {\n\t\tthrow new $TypeError('Conversion from \\'BigInt\\' to \\'number\\' is not allowed.');\n\t}\n\tif (typeof value === 'string') {\n\t\treturn StringToNumber(value);\n\t}\n\treturn $Number(value);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/ToNumber.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/ToObject.js':
      /*!***************************************************!*\
  !*** ./node_modules/es-abstract/2023/ToObject.js ***!
  \***************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\n// https://262.ecma-international.org/6.0/#sec-toobject\n\nmodule.exports = __webpack_require__(/*! es-object-atoms/ToObject */ "./node_modules/es-object-atoms/ToObject.js");\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/ToObject.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/ToPrimitive.js':
      /*!******************************************************!*\
  !*** ./node_modules/es-abstract/2023/ToPrimitive.js ***!
  \******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar toPrimitive = __webpack_require__(/*! es-to-primitive/es2015 */ "./node_modules/es-to-primitive/es2015.js");\n\n// https://262.ecma-international.org/6.0/#sec-toprimitive\n\nmodule.exports = function ToPrimitive(input) {\n\tif (arguments.length > 1) {\n\t\treturn toPrimitive(input, arguments[1]);\n\t}\n\treturn toPrimitive(input);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/ToPrimitive.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/ToPropertyDescriptor.js':
      /*!***************************************************************!*\
  !*** ./node_modules/es-abstract/2023/ToPropertyDescriptor.js ***!
  \***************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar hasOwn = __webpack_require__(/*! hasown */ \"./node_modules/hasown/index.js\");\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2023/Type.js\");\nvar ToBoolean = __webpack_require__(/*! ./ToBoolean */ \"./node_modules/es-abstract/2023/ToBoolean.js\");\nvar IsCallable = __webpack_require__(/*! ./IsCallable */ \"./node_modules/es-abstract/2023/IsCallable.js\");\n\n// https://262.ecma-international.org/5.1/#sec-8.10.5\n\nmodule.exports = function ToPropertyDescriptor(Obj) {\n\tif (Type(Obj) !== 'Object') {\n\t\tthrow new $TypeError('ToPropertyDescriptor requires an object');\n\t}\n\n\tvar desc = {};\n\tif (hasOwn(Obj, 'enumerable')) {\n\t\tdesc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);\n\t}\n\tif (hasOwn(Obj, 'configurable')) {\n\t\tdesc['[[Configurable]]'] = ToBoolean(Obj.configurable);\n\t}\n\tif (hasOwn(Obj, 'value')) {\n\t\tdesc['[[Value]]'] = Obj.value;\n\t}\n\tif (hasOwn(Obj, 'writable')) {\n\t\tdesc['[[Writable]]'] = ToBoolean(Obj.writable);\n\t}\n\tif (hasOwn(Obj, 'get')) {\n\t\tvar getter = Obj.get;\n\t\tif (typeof getter !== 'undefined' && !IsCallable(getter)) {\n\t\t\tthrow new $TypeError('getter must be a function');\n\t\t}\n\t\tdesc['[[Get]]'] = getter;\n\t}\n\tif (hasOwn(Obj, 'set')) {\n\t\tvar setter = Obj.set;\n\t\tif (typeof setter !== 'undefined' && !IsCallable(setter)) {\n\t\t\tthrow new $TypeError('setter must be a function');\n\t\t}\n\t\tdesc['[[Set]]'] = setter;\n\t}\n\n\tif ((hasOwn(desc, '[[Get]]') || hasOwn(desc, '[[Set]]')) && (hasOwn(desc, '[[Value]]') || hasOwn(desc, '[[Writable]]'))) {\n\t\tthrow new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');\n\t}\n\treturn desc;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/ToPropertyDescriptor.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/ToString.js':
      /*!***************************************************!*\
  !*** ./node_modules/es-abstract/2023/ToString.js ***!
  \***************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $String = GetIntrinsic('%String%');\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\n// https://262.ecma-international.org/6.0/#sec-tostring\n\nmodule.exports = function ToString(argument) {\n\tif (typeof argument === 'symbol') {\n\t\tthrow new $TypeError('Cannot convert a Symbol value to a string');\n\t}\n\treturn $String(argument);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/ToString.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/Type.js':
      /*!***********************************************!*\
  !*** ./node_modules/es-abstract/2023/Type.js ***!
  \***********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar ES5Type = __webpack_require__(/*! ../5/Type */ \"./node_modules/es-abstract/5/Type.js\");\n\n// https://262.ecma-international.org/11.0/#sec-ecmascript-data-types-and-values\n\nmodule.exports = function Type(x) {\n\tif (typeof x === 'symbol') {\n\t\treturn 'Symbol';\n\t}\n\tif (typeof x === 'bigint') {\n\t\treturn 'BigInt';\n\t}\n\treturn ES5Type(x);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/Type.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/ValidateAndApplyPropertyDescriptor.js':
      /*!*****************************************************************************!*\
  !*** ./node_modules/es-abstract/2023/ValidateAndApplyPropertyDescriptor.js ***!
  \*****************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar DefineOwnProperty = __webpack_require__(/*! ../helpers/DefineOwnProperty */ \"./node_modules/es-abstract/helpers/DefineOwnProperty.js\");\nvar isFullyPopulatedPropertyDescriptor = __webpack_require__(/*! ../helpers/isFullyPopulatedPropertyDescriptor */ \"./node_modules/es-abstract/helpers/isFullyPopulatedPropertyDescriptor.js\");\nvar isPropertyDescriptor = __webpack_require__(/*! ../helpers/records/property-descriptor */ \"./node_modules/es-abstract/helpers/records/property-descriptor.js\");\n\nvar FromPropertyDescriptor = __webpack_require__(/*! ./FromPropertyDescriptor */ \"./node_modules/es-abstract/2023/FromPropertyDescriptor.js\");\nvar IsAccessorDescriptor = __webpack_require__(/*! ./IsAccessorDescriptor */ \"./node_modules/es-abstract/2023/IsAccessorDescriptor.js\");\nvar IsDataDescriptor = __webpack_require__(/*! ./IsDataDescriptor */ \"./node_modules/es-abstract/2023/IsDataDescriptor.js\");\nvar IsGenericDescriptor = __webpack_require__(/*! ./IsGenericDescriptor */ \"./node_modules/es-abstract/2023/IsGenericDescriptor.js\");\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ \"./node_modules/es-abstract/2023/IsPropertyKey.js\");\nvar SameValue = __webpack_require__(/*! ./SameValue */ \"./node_modules/es-abstract/2023/SameValue.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2023/Type.js\");\n\n// https://262.ecma-international.org/13.0/#sec-validateandapplypropertydescriptor\n\n// see https://github.com/tc39/ecma262/pull/2468 for ES2022 changes\n\n// eslint-disable-next-line max-lines-per-function, max-statements\nmodule.exports = function ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current) {\n\tvar oType = Type(O);\n\tif (oType !== 'Undefined' && oType !== 'Object') {\n\t\tthrow new $TypeError('Assertion failed: O must be undefined or an Object');\n\t}\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError('Assertion failed: P must be a Property Key');\n\t}\n\tif (typeof extensible !== 'boolean') {\n\t\tthrow new $TypeError('Assertion failed: extensible must be a Boolean');\n\t}\n\tif (!isPropertyDescriptor(Desc)) {\n\t\tthrow new $TypeError('Assertion failed: Desc must be a Property Descriptor');\n\t}\n\tif (typeof current !== 'undefined' && !isPropertyDescriptor(current)) {\n\t\tthrow new $TypeError('Assertion failed: current must be a Property Descriptor, or undefined');\n\t}\n\n\tif (typeof current === 'undefined') { // step 2\n\t\tif (!extensible) {\n\t\t\treturn false; // step 2.a\n\t\t}\n\t\tif (oType === 'Undefined') {\n\t\t\treturn true; // step 2.b\n\t\t}\n\t\tif (IsAccessorDescriptor(Desc)) { // step 2.c\n\t\t\treturn DefineOwnProperty(\n\t\t\t\tIsDataDescriptor,\n\t\t\t\tSameValue,\n\t\t\t\tFromPropertyDescriptor,\n\t\t\t\tO,\n\t\t\t\tP,\n\t\t\t\tDesc\n\t\t\t);\n\t\t}\n\t\t// step 2.d\n\t\treturn DefineOwnProperty(\n\t\t\tIsDataDescriptor,\n\t\t\tSameValue,\n\t\t\tFromPropertyDescriptor,\n\t\t\tO,\n\t\t\tP,\n\t\t\t{\n\t\t\t\t'[[Configurable]]': !!Desc['[[Configurable]]'],\n\t\t\t\t'[[Enumerable]]': !!Desc['[[Enumerable]]'],\n\t\t\t\t'[[Value]]': Desc['[[Value]]'],\n\t\t\t\t'[[Writable]]': !!Desc['[[Writable]]']\n\t\t\t}\n\t\t);\n\t}\n\n\t// 3. Assert: current is a fully populated Property Descriptor.\n\tif (\n\t\t!isFullyPopulatedPropertyDescriptor(\n\t\t\t{\n\t\t\t\tIsAccessorDescriptor: IsAccessorDescriptor,\n\t\t\t\tIsDataDescriptor: IsDataDescriptor\n\t\t\t},\n\t\t\tcurrent\n\t\t)\n\t) {\n\t\tthrow new $TypeError('`current`, when present, must be a fully populated and valid Property Descriptor');\n\t}\n\n\t// 4. If every field in Desc is absent, return true.\n\t// this can't really match the assertion that it's a Property Descriptor in our JS implementation\n\n\t// 5. If current.[[Configurable]] is false, then\n\tif (!current['[[Configurable]]']) {\n\t\tif ('[[Configurable]]' in Desc && Desc['[[Configurable]]']) {\n\t\t\t// step 5.a\n\t\t\treturn false;\n\t\t}\n\t\tif ('[[Enumerable]]' in Desc && !SameValue(Desc['[[Enumerable]]'], current['[[Enumerable]]'])) {\n\t\t\t// step 5.b\n\t\t\treturn false;\n\t\t}\n\t\tif (!IsGenericDescriptor(Desc) && !SameValue(IsAccessorDescriptor(Desc), IsAccessorDescriptor(current))) {\n\t\t\t// step 5.c\n\t\t\treturn false;\n\t\t}\n\t\tif (IsAccessorDescriptor(current)) { // step 5.d\n\t\t\tif ('[[Get]]' in Desc && !SameValue(Desc['[[Get]]'], current['[[Get]]'])) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tif ('[[Set]]' in Desc && !SameValue(Desc['[[Set]]'], current['[[Set]]'])) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t} else if (!current['[[Writable]]']) { // step 5.e\n\t\t\tif ('[[Writable]]' in Desc && Desc['[[Writable]]']) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tif ('[[Value]]' in Desc && !SameValue(Desc['[[Value]]'], current['[[Value]]'])) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\t}\n\n\t// 6. If O is not undefined, then\n\tif (oType !== 'Undefined') {\n\t\tvar configurable;\n\t\tvar enumerable;\n\t\tif (IsDataDescriptor(current) && IsAccessorDescriptor(Desc)) { // step 6.a\n\t\t\tconfigurable = ('[[Configurable]]' in Desc ? Desc : current)['[[Configurable]]'];\n\t\t\tenumerable = ('[[Enumerable]]' in Desc ? Desc : current)['[[Enumerable]]'];\n\t\t\t// Replace the property named P of object O with an accessor property having [[Configurable]] and [[Enumerable]] attributes as described by current and each other attribute set to its default value.\n\t\t\treturn DefineOwnProperty(\n\t\t\t\tIsDataDescriptor,\n\t\t\t\tSameValue,\n\t\t\t\tFromPropertyDescriptor,\n\t\t\t\tO,\n\t\t\t\tP,\n\t\t\t\t{\n\t\t\t\t\t'[[Configurable]]': !!configurable,\n\t\t\t\t\t'[[Enumerable]]': !!enumerable,\n\t\t\t\t\t'[[Get]]': ('[[Get]]' in Desc ? Desc : current)['[[Get]]'],\n\t\t\t\t\t'[[Set]]': ('[[Set]]' in Desc ? Desc : current)['[[Set]]']\n\t\t\t\t}\n\t\t\t);\n\t\t} else if (IsAccessorDescriptor(current) && IsDataDescriptor(Desc)) {\n\t\t\tconfigurable = ('[[Configurable]]' in Desc ? Desc : current)['[[Configurable]]'];\n\t\t\tenumerable = ('[[Enumerable]]' in Desc ? Desc : current)['[[Enumerable]]'];\n\t\t\t// i. Replace the property named P of object O with a data property having [[Configurable]] and [[Enumerable]] attributes as described by current and each other attribute set to its default value.\n\t\t\treturn DefineOwnProperty(\n\t\t\t\tIsDataDescriptor,\n\t\t\t\tSameValue,\n\t\t\t\tFromPropertyDescriptor,\n\t\t\t\tO,\n\t\t\t\tP,\n\t\t\t\t{\n\t\t\t\t\t'[[Configurable]]': !!configurable,\n\t\t\t\t\t'[[Enumerable]]': !!enumerable,\n\t\t\t\t\t'[[Value]]': ('[[Value]]' in Desc ? Desc : current)['[[Value]]'],\n\t\t\t\t\t'[[Writable]]': !!('[[Writable]]' in Desc ? Desc : current)['[[Writable]]']\n\t\t\t\t}\n\t\t\t);\n\t\t}\n\n\t\t// For each field of Desc that is present, set the corresponding attribute of the property named P of object O to the value of the field.\n\t\treturn DefineOwnProperty(\n\t\t\tIsDataDescriptor,\n\t\t\tSameValue,\n\t\t\tFromPropertyDescriptor,\n\t\t\tO,\n\t\t\tP,\n\t\t\tDesc\n\t\t);\n\t}\n\n\treturn true; // step 7\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/ValidateAndApplyPropertyDescriptor.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/floor.js':
      /*!************************************************!*\
  !*** ./node_modules/es-abstract/2023/floor.js ***!
  \************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\n// var modulo = require('./modulo');\nvar $floor = Math.floor;\n\n// http://262.ecma-international.org/11.0/#eqn-floor\n\nmodule.exports = function floor(x) {\n\t// return x - modulo(x, 1);\n\tif (typeof x === 'bigint') {\n\t\treturn x;\n\t}\n\treturn $floor(x);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/floor.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2023/truncate.js':
      /*!***************************************************!*\
  !*** ./node_modules/es-abstract/2023/truncate.js ***!
  \***************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar floor = __webpack_require__(/*! ./floor */ \"./node_modules/es-abstract/2023/floor.js\");\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\n// https://262.ecma-international.org/14.0/#eqn-truncate\n\nmodule.exports = function truncate(x) {\n\tif (typeof x !== 'number' && typeof x !== 'bigint') {\n\t\tthrow new $TypeError('argument must be a Number or a BigInt');\n\t}\n\tvar result = x < 0 ? -floor(-x) : floor(x);\n\treturn result === 0 ? 0 : result; // in the spec, these are math values, so we filter out -0 here\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2023/truncate.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/AddEntriesFromIterable.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/es-abstract/2024/AddEntriesFromIterable.js ***!
  \*****************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar inspect = __webpack_require__(/*! object-inspect */ "./node_modules/object-inspect/index.js");\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar Call = __webpack_require__(/*! ./Call */ "./node_modules/es-abstract/2024/Call.js");\nvar Get = __webpack_require__(/*! ./Get */ "./node_modules/es-abstract/2024/Get.js");\nvar GetIterator = __webpack_require__(/*! ./GetIterator */ "./node_modules/es-abstract/2024/GetIterator.js");\nvar IsCallable = __webpack_require__(/*! ./IsCallable */ "./node_modules/es-abstract/2024/IsCallable.js");\nvar IteratorClose = __webpack_require__(/*! ./IteratorClose */ "./node_modules/es-abstract/2024/IteratorClose.js");\nvar IteratorStep = __webpack_require__(/*! ./IteratorStep */ "./node_modules/es-abstract/2024/IteratorStep.js");\nvar IteratorValue = __webpack_require__(/*! ./IteratorValue */ "./node_modules/es-abstract/2024/IteratorValue.js");\nvar ThrowCompletion = __webpack_require__(/*! ./ThrowCompletion */ "./node_modules/es-abstract/2024/ThrowCompletion.js");\nvar Type = __webpack_require__(/*! ./Type */ "./node_modules/es-abstract/2024/Type.js");\n\n// https://262.ecma-international.org/15.0/#sec-add-entries-from-iterable\n\nmodule.exports = function AddEntriesFromIterable(target, iterable, adder) {\n\tif (!IsCallable(adder)) {\n\t\tthrow new $TypeError(\'Assertion failed: `adder` is not callable\');\n\t}\n\tif (iterable == null) {\n\t\tthrow new $TypeError(\'Assertion failed: `iterable` is present, and not nullish\');\n\t}\n\tvar iteratorRecord = GetIterator(iterable, \'SYNC\');\n\twhile (true) { // eslint-disable-line no-constant-condition\n\t\tvar next = IteratorStep(iteratorRecord);\n\t\tif (!next) {\n\t\t\treturn target;\n\t\t}\n\t\tvar nextItem = IteratorValue(next);\n\t\tif (Type(nextItem) !== \'Object\') {\n\t\t\tvar error = ThrowCompletion(new $TypeError(\'iterator next must return an Object, got \' + inspect(nextItem)));\n\t\t\treturn IteratorClose(iteratorRecord, error);\n\t\t}\n\t\ttry {\n\t\t\tvar k = Get(nextItem, \'0\');\n\t\t\tvar v = Get(nextItem, \'1\');\n\t\t\tCall(adder, target, [k, v]);\n\t\t} catch (e) {\n\t\t\treturn IteratorClose(iteratorRecord, ThrowCompletion(e));\n\t\t}\n\t}\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/AddEntriesFromIterable.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/AdvanceStringIndex.js':
      /*!*************************************************************!*\
  !*** ./node_modules/es-abstract/2024/AdvanceStringIndex.js ***!
  \*************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar CodePointAt = __webpack_require__(/*! ./CodePointAt */ \"./node_modules/es-abstract/2024/CodePointAt.js\");\n\nvar isInteger = __webpack_require__(/*! ../helpers/isInteger */ \"./node_modules/es-abstract/helpers/isInteger.js\");\nvar MAX_SAFE_INTEGER = __webpack_require__(/*! ../helpers/maxSafeInteger */ \"./node_modules/es-abstract/helpers/maxSafeInteger.js\");\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\n// https://262.ecma-international.org/12.0/#sec-advancestringindex\n\nmodule.exports = function AdvanceStringIndex(S, index, unicode) {\n\tif (typeof S !== 'string') {\n\t\tthrow new $TypeError('Assertion failed: `S` must be a String');\n\t}\n\tif (!isInteger(index) || index < 0 || index > MAX_SAFE_INTEGER) {\n\t\tthrow new $TypeError('Assertion failed: `length` must be an integer >= 0 and <= 2**53');\n\t}\n\tif (typeof unicode !== 'boolean') {\n\t\tthrow new $TypeError('Assertion failed: `unicode` must be a Boolean');\n\t}\n\tif (!unicode) {\n\t\treturn index + 1;\n\t}\n\tvar length = S.length;\n\tif ((index + 1) >= length) {\n\t\treturn index + 1;\n\t}\n\tvar cp = CodePointAt(S, index);\n\treturn index + cp['[[CodeUnitCount]]'];\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/AdvanceStringIndex.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/ArrayCreate.js':
      /*!******************************************************!*\
  !*** ./node_modules/es-abstract/2024/ArrayCreate.js ***!
  \******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $ArrayPrototype = GetIntrinsic('%Array.prototype%');\nvar $RangeError = __webpack_require__(/*! es-errors/range */ \"./node_modules/es-errors/range.js\");\nvar $SyntaxError = __webpack_require__(/*! es-errors/syntax */ \"./node_modules/es-errors/syntax.js\");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar isInteger = __webpack_require__(/*! ../helpers/isInteger */ \"./node_modules/es-abstract/helpers/isInteger.js\");\n\nvar MAX_ARRAY_LENGTH = Math.pow(2, 32) - 1;\n\nvar hasProto = __webpack_require__(/*! has-proto */ \"./node_modules/has-proto/index.js\")();\n\nvar $setProto = GetIntrinsic('%Object.setPrototypeOf%', true) || (\n\thasProto\n\t\t? function (O, proto) {\n\t\t\tO.__proto__ = proto; // eslint-disable-line no-proto, no-param-reassign\n\t\t\treturn O;\n\t\t}\n\t\t: null\n);\n\n// https://262.ecma-international.org/12.0/#sec-arraycreate\n\nmodule.exports = function ArrayCreate(length) {\n\tif (!isInteger(length) || length < 0) {\n\t\tthrow new $TypeError('Assertion failed: `length` must be an integer Number >= 0');\n\t}\n\tif (length > MAX_ARRAY_LENGTH) {\n\t\tthrow new $RangeError('length is greater than (2**32 - 1)');\n\t}\n\tvar proto = arguments.length > 1 ? arguments[1] : $ArrayPrototype;\n\tvar A = []; // steps 3, 5\n\tif (proto !== $ArrayPrototype) { // step 4\n\t\tif (!$setProto) {\n\t\t\tthrow new $SyntaxError('ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]');\n\t\t}\n\t\t$setProto(A, proto);\n\t}\n\tif (length !== 0) { // bypasses the need for step 6\n\t\tA.length = length;\n\t}\n\t/* step 6, the above as a shortcut for the below\n\tOrdinaryDefineOwnProperty(A, 'length', {\n\t\t'[[Configurable]]': false,\n\t\t'[[Enumerable]]': false,\n\t\t'[[Value]]': length,\n\t\t'[[Writable]]': true\n\t});\n\t*/\n\treturn A;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/ArrayCreate.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/ArraySpeciesCreate.js':
      /*!*************************************************************!*\
  !*** ./node_modules/es-abstract/2024/ArraySpeciesCreate.js ***!
  \*************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");\n\nvar $species = GetIntrinsic(\'%Symbol.species%\', true);\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar ArrayCreate = __webpack_require__(/*! ./ArrayCreate */ "./node_modules/es-abstract/2024/ArrayCreate.js");\nvar Get = __webpack_require__(/*! ./Get */ "./node_modules/es-abstract/2024/Get.js");\nvar IsArray = __webpack_require__(/*! ./IsArray */ "./node_modules/es-abstract/2024/IsArray.js");\nvar IsConstructor = __webpack_require__(/*! ./IsConstructor */ "./node_modules/es-abstract/2024/IsConstructor.js");\nvar Type = __webpack_require__(/*! ./Type */ "./node_modules/es-abstract/2024/Type.js");\n\nvar isInteger = __webpack_require__(/*! ../helpers/isInteger */ "./node_modules/es-abstract/helpers/isInteger.js");\n\n// https://262.ecma-international.org/12.0/#sec-arrayspeciescreate\n\nmodule.exports = function ArraySpeciesCreate(originalArray, length) {\n\tif (!isInteger(length) || length < 0) {\n\t\tthrow new $TypeError(\'Assertion failed: length must be an integer >= 0\');\n\t}\n\n\tvar isArray = IsArray(originalArray);\n\tif (!isArray) {\n\t\treturn ArrayCreate(length);\n\t}\n\n\tvar C = Get(originalArray, \'constructor\');\n\t// TODO: figure out how to make a cross-realm normal Array, a same-realm Array\n\t// if (IsConstructor(C)) {\n\t// \tif C is another realm\'s Array, C = undefined\n\t// \tObject.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?\n\t// }\n\tif ($species && Type(C) === \'Object\') {\n\t\tC = Get(C, $species);\n\t\tif (C === null) {\n\t\t\tC = void 0;\n\t\t}\n\t}\n\n\tif (typeof C === \'undefined\') {\n\t\treturn ArrayCreate(length);\n\t}\n\tif (!IsConstructor(C)) {\n\t\tthrow new $TypeError(\'C must be a constructor\');\n\t}\n\treturn new C(length); // Construct(C, length);\n};\n\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/ArraySpeciesCreate.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/AsyncFromSyncIteratorContinuation.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/es-abstract/2024/AsyncFromSyncIteratorContinuation.js ***!
  \****************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");\n\nvar $SyntaxError = __webpack_require__(/*! es-errors/syntax */ "./node_modules/es-errors/syntax.js");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\nvar $Promise = GetIntrinsic(\'%Promise%\', true);\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");\n\nvar CreateIterResultObject = __webpack_require__(/*! ./CreateIterResultObject */ "./node_modules/es-abstract/2024/CreateIterResultObject.js");\nvar IteratorComplete = __webpack_require__(/*! ./IteratorComplete */ "./node_modules/es-abstract/2024/IteratorComplete.js");\nvar IteratorValue = __webpack_require__(/*! ./IteratorValue */ "./node_modules/es-abstract/2024/IteratorValue.js");\nvar PromiseResolve = __webpack_require__(/*! ./PromiseResolve */ "./node_modules/es-abstract/2024/PromiseResolve.js");\nvar Type = __webpack_require__(/*! ./Type */ "./node_modules/es-abstract/2024/Type.js");\n\nvar $then = callBound(\'Promise.prototype.then\', true);\n\n// https://262.ecma-international.org/10.0/#sec-asyncfromsynciteratorcontinuation\n\nmodule.exports = function AsyncFromSyncIteratorContinuation(result) {\n\tif (Type(result) !== \'Object\') {\n\t\tthrow new $TypeError(\'Assertion failed: Type(O) is not Object\');\n\t}\n\n\tif (arguments.length > 1) {\n\t\tthrow new $SyntaxError(\'although AsyncFromSyncIteratorContinuation should take a second argument, it is not used in this implementation\');\n\t}\n\n\tif (!$Promise) {\n\t\tthrow new $SyntaxError(\'This environment does not support Promises.\');\n\t}\n\n\treturn new $Promise(function (resolve) {\n\t\tvar done = IteratorComplete(result); // step 2\n\t\tvar value = IteratorValue(result); // step 4\n\t\tvar valueWrapper = PromiseResolve($Promise, value); // step 6\n\n\t\t// eslint-disable-next-line no-shadow\n\t\tvar onFulfilled = function (value) { // steps 8-9\n\t\t\treturn CreateIterResultObject(value, done); // step 8.a\n\t\t};\n\t\tresolve($then(valueWrapper, onFulfilled)); // step 11\n\t}); // step 12\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/AsyncFromSyncIteratorContinuation.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/Call.js':
      /*!***********************************************!*\
  !*** ./node_modules/es-abstract/2024/Call.js ***!
  \***********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar IsArray = __webpack_require__(/*! ./IsArray */ "./node_modules/es-abstract/2024/IsArray.js");\n\nvar $apply = GetIntrinsic(\'%Reflect.apply%\', true) || callBound(\'Function.prototype.apply\');\n\n// https://262.ecma-international.org/6.0/#sec-call\n\nmodule.exports = function Call(F, V) {\n\tvar argumentsList = arguments.length > 2 ? arguments[2] : [];\n\tif (!IsArray(argumentsList)) {\n\t\tthrow new $TypeError(\'Assertion failed: optional `argumentsList`, if provided, must be a List\');\n\t}\n\treturn $apply(F, V, argumentsList);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/Call.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/CodePointAt.js':
      /*!******************************************************!*\
  !*** ./node_modules/es-abstract/2024/CodePointAt.js ***!
  \******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar isLeadingSurrogate = __webpack_require__(/*! ../helpers/isLeadingSurrogate */ \"./node_modules/es-abstract/helpers/isLeadingSurrogate.js\");\nvar isTrailingSurrogate = __webpack_require__(/*! ../helpers/isTrailingSurrogate */ \"./node_modules/es-abstract/helpers/isTrailingSurrogate.js\");\n\nvar UTF16SurrogatePairToCodePoint = __webpack_require__(/*! ./UTF16SurrogatePairToCodePoint */ \"./node_modules/es-abstract/2024/UTF16SurrogatePairToCodePoint.js\");\n\nvar $charAt = callBound('String.prototype.charAt');\nvar $charCodeAt = callBound('String.prototype.charCodeAt');\n\n// https://262.ecma-international.org/12.0/#sec-codepointat\n\nmodule.exports = function CodePointAt(string, position) {\n\tif (typeof string !== 'string') {\n\t\tthrow new $TypeError('Assertion failed: `string` must be a String');\n\t}\n\tvar size = string.length;\n\tif (position < 0 || position >= size) {\n\t\tthrow new $TypeError('Assertion failed: `position` must be >= 0, and < the length of `string`');\n\t}\n\tvar first = $charCodeAt(string, position);\n\tvar cp = $charAt(string, position);\n\tvar firstIsLeading = isLeadingSurrogate(first);\n\tvar firstIsTrailing = isTrailingSurrogate(first);\n\tif (!firstIsLeading && !firstIsTrailing) {\n\t\treturn {\n\t\t\t'[[CodePoint]]': cp,\n\t\t\t'[[CodeUnitCount]]': 1,\n\t\t\t'[[IsUnpairedSurrogate]]': false\n\t\t};\n\t}\n\tif (firstIsTrailing || (position + 1 === size)) {\n\t\treturn {\n\t\t\t'[[CodePoint]]': cp,\n\t\t\t'[[CodeUnitCount]]': 1,\n\t\t\t'[[IsUnpairedSurrogate]]': true\n\t\t};\n\t}\n\tvar second = $charCodeAt(string, position + 1);\n\tif (!isTrailingSurrogate(second)) {\n\t\treturn {\n\t\t\t'[[CodePoint]]': cp,\n\t\t\t'[[CodeUnitCount]]': 1,\n\t\t\t'[[IsUnpairedSurrogate]]': true\n\t\t};\n\t}\n\n\treturn {\n\t\t'[[CodePoint]]': UTF16SurrogatePairToCodePoint(first, second),\n\t\t'[[CodeUnitCount]]': 2,\n\t\t'[[IsUnpairedSurrogate]]': false\n\t};\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/CodePointAt.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/CompletionRecord.js':
      /*!***********************************************************!*\
  !*** ./node_modules/es-abstract/2024/CompletionRecord.js ***!
  \***********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $SyntaxError = __webpack_require__(/*! es-errors/syntax */ \"./node_modules/es-errors/syntax.js\");\n\nvar SLOT = __webpack_require__(/*! internal-slot */ \"./node_modules/internal-slot/index.js\");\n\n// https://262.ecma-international.org/7.0/#sec-completion-record-specification-type\n\nvar CompletionRecord = function CompletionRecord(type, value) {\n\tif (!(this instanceof CompletionRecord)) {\n\t\treturn new CompletionRecord(type, value);\n\t}\n\tif (type !== 'normal' && type !== 'break' && type !== 'continue' && type !== 'return' && type !== 'throw') {\n\t\tthrow new $SyntaxError('Assertion failed: `type` must be one of \"normal\", \"break\", \"continue\", \"return\", or \"throw\"');\n\t}\n\tSLOT.set(this, '[[Type]]', type);\n\tSLOT.set(this, '[[Value]]', value);\n\t// [[Target]] slot?\n};\n\nCompletionRecord.prototype.type = function Type() {\n\treturn SLOT.get(this, '[[Type]]');\n};\n\nCompletionRecord.prototype.value = function Value() {\n\treturn SLOT.get(this, '[[Value]]');\n};\n\nCompletionRecord.prototype['?'] = function ReturnIfAbrupt() {\n\tvar type = SLOT.get(this, '[[Type]]');\n\tvar value = SLOT.get(this, '[[Value]]');\n\n\tif (type === 'normal') {\n\t\treturn value;\n\t}\n\tif (type === 'throw') {\n\t\tthrow value;\n\t}\n\tthrow new $SyntaxError('Completion Record is not of type \"normal\" or \"throw\": other types not supported');\n};\n\nCompletionRecord.prototype['!'] = function assert() {\n\tvar type = SLOT.get(this, '[[Type]]');\n\n\tif (type !== 'normal') {\n\t\tthrow new $SyntaxError('Assertion failed: Completion Record is not of type \"normal\"');\n\t}\n\treturn SLOT.get(this, '[[Value]]');\n};\n\nmodule.exports = CompletionRecord;\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/CompletionRecord.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/CreateAsyncFromSyncIterator.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/es-abstract/2024/CreateAsyncFromSyncIterator.js ***!
  \**********************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $SyntaxError = __webpack_require__(/*! es-errors/syntax */ \"./node_modules/es-errors/syntax.js\");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\nvar $Promise = GetIntrinsic('%Promise%', true);\n\nvar AsyncFromSyncIteratorContinuation = __webpack_require__(/*! ./AsyncFromSyncIteratorContinuation */ \"./node_modules/es-abstract/2024/AsyncFromSyncIteratorContinuation.js\");\nvar Call = __webpack_require__(/*! ./Call */ \"./node_modules/es-abstract/2024/Call.js\");\nvar CreateIterResultObject = __webpack_require__(/*! ./CreateIterResultObject */ \"./node_modules/es-abstract/2024/CreateIterResultObject.js\");\nvar Get = __webpack_require__(/*! ./Get */ \"./node_modules/es-abstract/2024/Get.js\");\nvar GetMethod = __webpack_require__(/*! ./GetMethod */ \"./node_modules/es-abstract/2024/GetMethod.js\");\nvar IteratorNext = __webpack_require__(/*! ./IteratorNext */ \"./node_modules/es-abstract/2024/IteratorNext.js\");\nvar OrdinaryObjectCreate = __webpack_require__(/*! ./OrdinaryObjectCreate */ \"./node_modules/es-abstract/2024/OrdinaryObjectCreate.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2024/Type.js\");\n\nvar SLOT = __webpack_require__(/*! internal-slot */ \"./node_modules/internal-slot/index.js\");\n\nvar isIteratorRecord = __webpack_require__(/*! ../helpers/records/iterator-record */ \"./node_modules/es-abstract/helpers/records/iterator-record.js\");\n\nvar $AsyncFromSyncIteratorPrototype = GetIntrinsic('%AsyncFromSyncIteratorPrototype%', true) || {\n\tnext: function next(value) {\n\t\tif (!$Promise) {\n\t\t\tthrow new $SyntaxError('This environment does not support Promises.');\n\t\t}\n\n\t\tvar O = this; // step 1\n\n\t\tSLOT.assert(O, '[[SyncIteratorRecord]]'); // step 2\n\n\t\tvar argsLength = arguments.length;\n\n\t\treturn new $Promise(function (resolve) { // step 3\n\t\t\tvar syncIteratorRecord = SLOT.get(O, '[[SyncIteratorRecord]]'); // step 4\n\t\t\tvar result;\n\t\t\tif (argsLength > 0) {\n\t\t\t\tresult = IteratorNext(syncIteratorRecord, value); // step 5.a\n\t\t\t} else { // step 6\n\t\t\t\tresult = IteratorNext(syncIteratorRecord);// step 6.a\n\t\t\t}\n\t\t\tresolve(AsyncFromSyncIteratorContinuation(result)); // step 8\n\t\t});\n\t},\n\t'return': function () {\n\t\tif (!$Promise) {\n\t\t\tthrow new $SyntaxError('This environment does not support Promises.');\n\t\t}\n\n\t\tvar O = this; // step 1\n\n\t\tSLOT.assert(O, '[[SyncIteratorRecord]]'); // step 2\n\n\t\tvar valueIsPresent = arguments.length > 0;\n\t\tvar value = valueIsPresent ? arguments[0] : void undefined;\n\n\t\treturn new $Promise(function (resolve, reject) { // step 3\n\t\t\tvar syncIterator = SLOT.get(O, '[[SyncIteratorRecord]]')['[[Iterator]]']; // step 4\n\t\t\tvar iteratorReturn = GetMethod(syncIterator, 'return'); // step 5\n\n\t\t\tif (typeof iteratorReturn === 'undefined') { // step 7\n\t\t\t\tvar iterResult = CreateIterResultObject(value, true); // step 7.a\n\t\t\t\tCall(resolve, undefined, [iterResult]); // step 7.b\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tvar result;\n\t\t\tif (valueIsPresent) { // step 8\n\t\t\t\tresult = Call(iteratorReturn, syncIterator, [value]); // step 8.a\n\t\t\t} else { // step 9\n\t\t\t\tresult = Call(iteratorReturn, syncIterator); // step 9.a\n\t\t\t}\n\t\t\tif (Type(result) !== 'Object') { // step 11\n\t\t\t\tCall(reject, undefined, [new $TypeError('Iterator `return` method returned a non-object value.')]); // step 11.a\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tresolve(AsyncFromSyncIteratorContinuation(result)); // step 12\n\t\t});\n\t},\n\t'throw': function () {\n\t\tif (!$Promise) {\n\t\t\tthrow new $SyntaxError('This environment does not support Promises.');\n\t\t}\n\n\t\tvar O = this; // step 1\n\n\t\tSLOT.assert(O, '[[SyncIteratorRecord]]'); // step 2\n\n\t\tvar valueIsPresent = arguments.length > 0;\n\t\tvar value = valueIsPresent ? arguments[0] : void undefined;\n\n\t\treturn new $Promise(function (resolve, reject) { // step 3\n\t\t\tvar syncIterator = SLOT.get(O, '[[SyncIteratorRecord]]')['[[Iterator]]']; // step 4\n\n\t\t\tvar throwMethod = GetMethod(syncIterator, 'throw'); // step 5\n\n\t\t\tif (typeof throwMethod === 'undefined') { // step 7\n\t\t\t\tCall(reject, undefined, [value]); // step 7.a\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tvar result;\n\t\t\tif (valueIsPresent) { // step 8\n\t\t\t\tresult = Call(throwMethod, syncIterator, [value]); // step 8.a\n\t\t\t} else { // step 9\n\t\t\t\tresult = Call(throwMethod, syncIterator); // step 9.a\n\t\t\t}\n\t\t\tif (Type(result) !== 'Object') { // step 11\n\t\t\t\tCall(reject, undefined, [new $TypeError('Iterator `throw` method returned a non-object value.')]); // step 11.a\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tresolve(AsyncFromSyncIteratorContinuation(result/* , promiseCapability */)); // step 12\n\t\t});\n\t}\n};\n\n// https://262.ecma-international.org/14.0/#sec-createasyncfromsynciterator\n\nmodule.exports = function CreateAsyncFromSyncIterator(syncIteratorRecord) {\n\tif (!isIteratorRecord(syncIteratorRecord)) {\n\t\tthrow new $TypeError('Assertion failed: `syncIteratorRecord` must be an Iterator Record');\n\t}\n\n\t// var asyncIterator = OrdinaryObjectCreate(%AsyncFromSyncIteratorPrototype%, « [[SyncIteratorRecord]] »); // step 1\n\tvar asyncIterator = OrdinaryObjectCreate($AsyncFromSyncIteratorPrototype);\n\n\tSLOT.set(asyncIterator, '[[SyncIteratorRecord]]', syncIteratorRecord); // step 2\n\n\tvar nextMethod = Get(asyncIterator, 'next'); // step 3\n\n\treturn { // steps 3-4\n\t\t'[[Iterator]]': asyncIterator,\n\t\t'[[NextMethod]]': nextMethod,\n\t\t'[[Done]]': false\n\t};\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/CreateAsyncFromSyncIterator.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/CreateDataProperty.js':
      /*!*************************************************************!*\
  !*** ./node_modules/es-abstract/2024/CreateDataProperty.js ***!
  \*************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ \"./node_modules/es-abstract/2024/IsPropertyKey.js\");\nvar OrdinaryDefineOwnProperty = __webpack_require__(/*! ./OrdinaryDefineOwnProperty */ \"./node_modules/es-abstract/2024/OrdinaryDefineOwnProperty.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2024/Type.js\");\n\n// https://262.ecma-international.org/6.0/#sec-createdataproperty\n\nmodule.exports = function CreateDataProperty(O, P, V) {\n\tif (Type(O) !== 'Object') {\n\t\tthrow new $TypeError('Assertion failed: Type(O) is not Object');\n\t}\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError('Assertion failed: IsPropertyKey(P) is not true');\n\t}\n\tvar newDesc = {\n\t\t'[[Configurable]]': true,\n\t\t'[[Enumerable]]': true,\n\t\t'[[Value]]': V,\n\t\t'[[Writable]]': true\n\t};\n\treturn OrdinaryDefineOwnProperty(O, P, newDesc);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/CreateDataProperty.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/CreateDataPropertyOrThrow.js':
      /*!********************************************************************!*\
  !*** ./node_modules/es-abstract/2024/CreateDataPropertyOrThrow.js ***!
  \********************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar CreateDataProperty = __webpack_require__(/*! ./CreateDataProperty */ "./node_modules/es-abstract/2024/CreateDataProperty.js");\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ "./node_modules/es-abstract/2024/IsPropertyKey.js");\nvar Type = __webpack_require__(/*! ./Type */ "./node_modules/es-abstract/2024/Type.js");\n\n// // https://262.ecma-international.org/14.0/#sec-createdatapropertyorthrow\n\nmodule.exports = function CreateDataPropertyOrThrow(O, P, V) {\n\tif (Type(O) !== \'Object\') {\n\t\tthrow new $TypeError(\'Assertion failed: Type(O) is not Object\');\n\t}\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError(\'Assertion failed: IsPropertyKey(P) is not true\');\n\t}\n\tvar success = CreateDataProperty(O, P, V);\n\tif (!success) {\n\t\tthrow new $TypeError(\'unable to create data property\');\n\t}\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/CreateDataPropertyOrThrow.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/CreateIterResultObject.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/es-abstract/2024/CreateIterResultObject.js ***!
  \*****************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\n// https://262.ecma-international.org/6.0/#sec-createiterresultobject\n\nmodule.exports = function CreateIterResultObject(value, done) {\n\tif (typeof done !== 'boolean') {\n\t\tthrow new $TypeError('Assertion failed: Type(done) is not Boolean');\n\t}\n\treturn {\n\t\tvalue: value,\n\t\tdone: done\n\t};\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/CreateIterResultObject.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/CreateRegExpStringIterator.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/es-abstract/2024/CreateRegExpStringIterator.js ***!
  \*********************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\nvar IteratorPrototype = GetIntrinsic('%IteratorPrototype%', true);\n\nvar AdvanceStringIndex = __webpack_require__(/*! ./AdvanceStringIndex */ \"./node_modules/es-abstract/2024/AdvanceStringIndex.js\");\nvar CreateIterResultObject = __webpack_require__(/*! ./CreateIterResultObject */ \"./node_modules/es-abstract/2024/CreateIterResultObject.js\");\nvar DefineMethodProperty = __webpack_require__(/*! ./DefineMethodProperty */ \"./node_modules/es-abstract/2024/DefineMethodProperty.js\");\nvar Get = __webpack_require__(/*! ./Get */ \"./node_modules/es-abstract/2024/Get.js\");\nvar OrdinaryObjectCreate = __webpack_require__(/*! ./OrdinaryObjectCreate */ \"./node_modules/es-abstract/2024/OrdinaryObjectCreate.js\");\nvar RegExpExec = __webpack_require__(/*! ./RegExpExec */ \"./node_modules/es-abstract/2024/RegExpExec.js\");\nvar Set = __webpack_require__(/*! ./Set */ \"./node_modules/es-abstract/2024/Set.js\");\nvar ToLength = __webpack_require__(/*! ./ToLength */ \"./node_modules/es-abstract/2024/ToLength.js\");\nvar ToString = __webpack_require__(/*! ./ToString */ \"./node_modules/es-abstract/2024/ToString.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2024/Type.js\");\n\nvar SLOT = __webpack_require__(/*! internal-slot */ \"./node_modules/internal-slot/index.js\");\nvar setToStringTag = __webpack_require__(/*! es-set-tostringtag */ \"./node_modules/es-set-tostringtag/index.js\");\n\nvar RegExpStringIterator = function RegExpStringIterator(R, S, global, fullUnicode) {\n\tif (typeof S !== 'string') {\n\t\tthrow new $TypeError('`S` must be a string');\n\t}\n\tif (typeof global !== 'boolean') {\n\t\tthrow new $TypeError('`global` must be a boolean');\n\t}\n\tif (typeof fullUnicode !== 'boolean') {\n\t\tthrow new $TypeError('`fullUnicode` must be a boolean');\n\t}\n\tSLOT.set(this, '[[IteratingRegExp]]', R);\n\tSLOT.set(this, '[[IteratedString]]', S);\n\tSLOT.set(this, '[[Global]]', global);\n\tSLOT.set(this, '[[Unicode]]', fullUnicode);\n\tSLOT.set(this, '[[Done]]', false);\n};\n\nif (IteratorPrototype) {\n\tRegExpStringIterator.prototype = OrdinaryObjectCreate(IteratorPrototype);\n}\n\nvar RegExpStringIteratorNext = function next() {\n\tvar O = this; // eslint-disable-line no-invalid-this\n\tif (Type(O) !== 'Object') {\n\t\tthrow new $TypeError('receiver must be an object');\n\t}\n\tif (\n\t\t!(O instanceof RegExpStringIterator)\n\t\t|| !SLOT.has(O, '[[IteratingRegExp]]')\n\t\t|| !SLOT.has(O, '[[IteratedString]]')\n\t\t|| !SLOT.has(O, '[[Global]]')\n\t\t|| !SLOT.has(O, '[[Unicode]]')\n\t\t|| !SLOT.has(O, '[[Done]]')\n\t) {\n\t\tthrow new $TypeError('\"this\" value must be a RegExpStringIterator instance');\n\t}\n\tif (SLOT.get(O, '[[Done]]')) {\n\t\treturn CreateIterResultObject(undefined, true);\n\t}\n\tvar R = SLOT.get(O, '[[IteratingRegExp]]');\n\tvar S = SLOT.get(O, '[[IteratedString]]');\n\tvar global = SLOT.get(O, '[[Global]]');\n\tvar fullUnicode = SLOT.get(O, '[[Unicode]]');\n\tvar match = RegExpExec(R, S);\n\tif (match === null) {\n\t\tSLOT.set(O, '[[Done]]', true);\n\t\treturn CreateIterResultObject(undefined, true);\n\t}\n\tif (global) {\n\t\tvar matchStr = ToString(Get(match, '0'));\n\t\tif (matchStr === '') {\n\t\t\tvar thisIndex = ToLength(Get(R, 'lastIndex'));\n\t\t\tvar nextIndex = AdvanceStringIndex(S, thisIndex, fullUnicode);\n\t\t\tSet(R, 'lastIndex', nextIndex, true);\n\t\t}\n\t\treturn CreateIterResultObject(match, false);\n\t}\n\tSLOT.set(O, '[[Done]]', true);\n\treturn CreateIterResultObject(match, false);\n};\nDefineMethodProperty(RegExpStringIterator.prototype, 'next', RegExpStringIteratorNext, false);\n\nif (hasSymbols) {\n\tsetToStringTag(RegExpStringIterator.prototype, 'RegExp String Iterator');\n\n\tif (Symbol.iterator && typeof RegExpStringIterator.prototype[Symbol.iterator] !== 'function') {\n\t\tvar iteratorFn = function SymbolIterator() {\n\t\t\treturn this;\n\t\t};\n\t\tDefineMethodProperty(RegExpStringIterator.prototype, Symbol.iterator, iteratorFn, false);\n\t}\n}\n\n// https://262.ecma-international.org/16.0/#sec-createregexpstringiterator\n\nmodule.exports = function CreateRegExpStringIterator(R, S, global, fullUnicode) {\n\t// assert R.global === global && R.unicode === fullUnicode?\n\treturn new RegExpStringIterator(R, S, global, fullUnicode);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/CreateRegExpStringIterator.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/DefineMethodProperty.js':
      /*!***************************************************************!*\
  !*** ./node_modules/es-abstract/2024/DefineMethodProperty.js ***!
  \***************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar DefinePropertyOrThrow = __webpack_require__(/*! ./DefinePropertyOrThrow */ \"./node_modules/es-abstract/2024/DefinePropertyOrThrow.js\");\nvar IsExtensible = __webpack_require__(/*! ./IsExtensible */ \"./node_modules/es-abstract/2024/IsExtensible.js\");\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ \"./node_modules/es-abstract/2024/IsPropertyKey.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2024/Type.js\");\n\n// https://262.ecma-international.org/13.0/#sec-definemethodproperty\n\nmodule.exports = function DefineMethodProperty(homeObject, key, closure, enumerable) {\n\tif (Type(homeObject) !== 'Object') {\n\t\tthrow new $TypeError('Assertion failed: `homeObject` is not an Object');\n\t}\n\tif (!IsPropertyKey(key)) {\n\t\tthrow new $TypeError('Assertion failed: `key` is not a Property Key or a Private Name');\n\t}\n\tif (typeof closure !== 'function') {\n\t\tthrow new $TypeError('Assertion failed: `closure` is not a function');\n\t}\n\tif (typeof enumerable !== 'boolean') {\n\t\tthrow new $TypeError('Assertion failed: `enumerable` is not a Boolean');\n\t}\n\n\t// 1. Assert: homeObject is an ordinary, extensible object with no non-configurable properties.\n\tif (!IsExtensible(homeObject)) {\n\t\tthrow new $TypeError('Assertion failed: `homeObject` is not an ordinary, extensible object, with no non-configurable properties');\n\t}\n\n\t// 2. If key is a Private Name, then\n\t//  a. Return PrivateElement { [[Key]]: key, [[Kind]]: method, [[Value]]: closure }.\n\t// 3. Else,\n\tvar desc = { // step 3.a\n\t\t'[[Value]]': closure,\n\t\t'[[Writable]]': true,\n\t\t'[[Enumerable]]': enumerable,\n\t\t'[[Configurable]]': true\n\t};\n\tDefinePropertyOrThrow(homeObject, key, desc); // step 3.b\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/DefineMethodProperty.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/DefinePropertyOrThrow.js':
      /*!****************************************************************!*\
  !*** ./node_modules/es-abstract/2024/DefinePropertyOrThrow.js ***!
  \****************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar isPropertyDescriptor = __webpack_require__(/*! ../helpers/records/property-descriptor */ "./node_modules/es-abstract/helpers/records/property-descriptor.js");\nvar DefineOwnProperty = __webpack_require__(/*! ../helpers/DefineOwnProperty */ "./node_modules/es-abstract/helpers/DefineOwnProperty.js");\n\nvar FromPropertyDescriptor = __webpack_require__(/*! ./FromPropertyDescriptor */ "./node_modules/es-abstract/2024/FromPropertyDescriptor.js");\nvar IsDataDescriptor = __webpack_require__(/*! ./IsDataDescriptor */ "./node_modules/es-abstract/2024/IsDataDescriptor.js");\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ "./node_modules/es-abstract/2024/IsPropertyKey.js");\nvar SameValue = __webpack_require__(/*! ./SameValue */ "./node_modules/es-abstract/2024/SameValue.js");\nvar ToPropertyDescriptor = __webpack_require__(/*! ./ToPropertyDescriptor */ "./node_modules/es-abstract/2024/ToPropertyDescriptor.js");\nvar Type = __webpack_require__(/*! ./Type */ "./node_modules/es-abstract/2024/Type.js");\n\n// https://262.ecma-international.org/6.0/#sec-definepropertyorthrow\n\nmodule.exports = function DefinePropertyOrThrow(O, P, desc) {\n\tif (Type(O) !== \'Object\') {\n\t\tthrow new $TypeError(\'Assertion failed: Type(O) is not Object\');\n\t}\n\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError(\'Assertion failed: IsPropertyKey(P) is not true\');\n\t}\n\n\tvar Desc = isPropertyDescriptor(desc) ? desc : ToPropertyDescriptor(desc);\n\tif (!isPropertyDescriptor(Desc)) {\n\t\tthrow new $TypeError(\'Assertion failed: Desc is not a valid Property Descriptor\');\n\t}\n\n\treturn DefineOwnProperty(\n\t\tIsDataDescriptor,\n\t\tSameValue,\n\t\tFromPropertyDescriptor,\n\t\tO,\n\t\tP,\n\t\tDesc\n\t);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/DefinePropertyOrThrow.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/FromPropertyDescriptor.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/es-abstract/2024/FromPropertyDescriptor.js ***!
  \*****************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar isPropertyDescriptor = __webpack_require__(/*! ../helpers/records/property-descriptor */ "./node_modules/es-abstract/helpers/records/property-descriptor.js");\nvar fromPropertyDescriptor = __webpack_require__(/*! ../helpers/fromPropertyDescriptor */ "./node_modules/es-abstract/helpers/fromPropertyDescriptor.js");\n\n// https://262.ecma-international.org/6.0/#sec-frompropertydescriptor\n\nmodule.exports = function FromPropertyDescriptor(Desc) {\n\tif (typeof Desc !== \'undefined\' && !isPropertyDescriptor(Desc)) {\n\t\tthrow new $TypeError(\'Assertion failed: `Desc` must be a Property Descriptor\');\n\t}\n\n\treturn fromPropertyDescriptor(Desc);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/FromPropertyDescriptor.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/Get.js':
      /*!**********************************************!*\
  !*** ./node_modules/es-abstract/2024/Get.js ***!
  \**********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar inspect = __webpack_require__(/*! object-inspect */ "./node_modules/object-inspect/index.js");\n\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ "./node_modules/es-abstract/2024/IsPropertyKey.js");\nvar Type = __webpack_require__(/*! ./Type */ "./node_modules/es-abstract/2024/Type.js");\n\n// https://262.ecma-international.org/6.0/#sec-get-o-p\n\nmodule.exports = function Get(O, P) {\n\t// 7.3.1.1\n\tif (Type(O) !== \'Object\') {\n\t\tthrow new $TypeError(\'Assertion failed: Type(O) is not Object\');\n\t}\n\t// 7.3.1.2\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError(\'Assertion failed: IsPropertyKey(P) is not true, got \' + inspect(P));\n\t}\n\t// 7.3.1.3\n\treturn O[P];\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/Get.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/GetIterator.js':
      /*!******************************************************!*\
  !*** ./node_modules/es-abstract/2024/GetIterator.js ***!
  \******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\nvar $asyncIterator = GetIntrinsic('%Symbol.asyncIterator%', true);\n\nvar inspect = __webpack_require__(/*! object-inspect */ \"./node_modules/object-inspect/index.js\");\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nvar AdvanceStringIndex = __webpack_require__(/*! ./AdvanceStringIndex */ \"./node_modules/es-abstract/2024/AdvanceStringIndex.js\");\nvar CreateAsyncFromSyncIterator = __webpack_require__(/*! ./CreateAsyncFromSyncIterator */ \"./node_modules/es-abstract/2024/CreateAsyncFromSyncIterator.js\");\nvar GetIteratorFromMethod = __webpack_require__(/*! ./GetIteratorFromMethod */ \"./node_modules/es-abstract/2024/GetIteratorFromMethod.js\");\nvar GetMethod = __webpack_require__(/*! ./GetMethod */ \"./node_modules/es-abstract/2024/GetMethod.js\");\nvar IsArray = __webpack_require__(/*! ./IsArray */ \"./node_modules/es-abstract/2024/IsArray.js\");\n\nvar getIteratorMethod = __webpack_require__(/*! ../helpers/getIteratorMethod */ \"./node_modules/es-abstract/helpers/getIteratorMethod.js\");\n\n// https://262.ecma-international.org/14.0/#sec-getiterator\n\nmodule.exports = function GetIterator(obj, kind) {\n\tif (kind !== 'SYNC' && kind !== 'ASYNC') {\n\t\tthrow new $TypeError(\"Assertion failed: `kind` must be one of 'sync' or 'async', got \" + inspect(kind));\n\t}\n\n\tvar method;\n\tif (kind === 'ASYNC') { // step 1\n\t\tif (hasSymbols && $asyncIterator) {\n\t\t\tmethod = GetMethod(obj, $asyncIterator); // step 1.a\n\t\t}\n\t}\n\tif (typeof method === 'undefined') { // step 1.b\n\t\t// var syncMethod = GetMethod(obj, $iterator); // step 1.b.i\n\t\tvar syncMethod = getIteratorMethod(\n\t\t\t{\n\t\t\t\tAdvanceStringIndex: AdvanceStringIndex,\n\t\t\t\tGetMethod: GetMethod,\n\t\t\t\tIsArray: IsArray\n\t\t\t},\n\t\t\tobj\n\t\t);\n\t\tif (kind === 'ASYNC') {\n\t\t\tif (typeof syncMethod === 'undefined') {\n\t\t\t\tthrow new $TypeError('iterator method is `undefined`'); // step 1.b.ii\n\t\t\t}\n\t\t\tvar syncIteratorRecord = GetIteratorFromMethod(obj, syncMethod); // step 1.b.iii\n\t\t\treturn CreateAsyncFromSyncIterator(syncIteratorRecord); // step 1.b.iv\n\t\t}\n\t\tmethod = syncMethod; // step 2, kind of\n\t}\n\n\tif (typeof method === 'undefined') {\n\t\tthrow new $TypeError('iterator method is `undefined`'); // step 3\n\t}\n\treturn GetIteratorFromMethod(obj, method); // step 4\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/GetIterator.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/GetIteratorFromMethod.js':
      /*!****************************************************************!*\
  !*** ./node_modules/es-abstract/2024/GetIteratorFromMethod.js ***!
  \****************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar Call = __webpack_require__(/*! ./Call */ \"./node_modules/es-abstract/2024/Call.js\");\nvar Get = __webpack_require__(/*! ./Get */ \"./node_modules/es-abstract/2024/Get.js\");\nvar IsCallable = __webpack_require__(/*! ./IsCallable */ \"./node_modules/es-abstract/2024/IsCallable.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2024/Type.js\");\n\n// https://262.ecma-international.org/15.0/#sec-getiteratorfrommethod\n\nmodule.exports = function GetIteratorFromMethod(obj, method) {\n\tif (!IsCallable(method)) {\n\t\tthrow new $TypeError('method must be a function');\n\t}\n\n\tvar iterator = Call(method, obj); // step 1\n\tif (Type(iterator) !== 'Object') {\n\t\tthrow new $TypeError('iterator must return an object'); // step 2\n\t}\n\n\tvar nextMethod = Get(iterator, 'next'); // step 3\n\treturn { // steps 4-5\n\t\t'[[Iterator]]': iterator,\n\t\t'[[NextMethod]]': nextMethod,\n\t\t'[[Done]]': false\n\t};\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/GetIteratorFromMethod.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/GetMethod.js':
      /*!****************************************************!*\
  !*** ./node_modules/es-abstract/2024/GetMethod.js ***!
  \****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar GetV = __webpack_require__(/*! ./GetV */ "./node_modules/es-abstract/2024/GetV.js");\nvar IsCallable = __webpack_require__(/*! ./IsCallable */ "./node_modules/es-abstract/2024/IsCallable.js");\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ "./node_modules/es-abstract/2024/IsPropertyKey.js");\n\nvar inspect = __webpack_require__(/*! object-inspect */ "./node_modules/object-inspect/index.js");\n\n// https://262.ecma-international.org/6.0/#sec-getmethod\n\nmodule.exports = function GetMethod(O, P) {\n\t// 7.3.9.1\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError(\'Assertion failed: IsPropertyKey(P) is not true\');\n\t}\n\n\t// 7.3.9.2\n\tvar func = GetV(O, P);\n\n\t// 7.3.9.4\n\tif (func == null) {\n\t\treturn void 0;\n\t}\n\n\t// 7.3.9.5\n\tif (!IsCallable(func)) {\n\t\tthrow new $TypeError(inspect(P) + \' is not a function: \' + inspect(func));\n\t}\n\n\t// 7.3.9.6\n\treturn func;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/GetMethod.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/GetV.js':
      /*!***********************************************!*\
  !*** ./node_modules/es-abstract/2024/GetV.js ***!
  \***********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar inspect = __webpack_require__(/*! object-inspect */ "./node_modules/object-inspect/index.js");\n\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ "./node_modules/es-abstract/2024/IsPropertyKey.js");\n// var ToObject = require(\'./ToObject\');\n\n// https://262.ecma-international.org/6.0/#sec-getv\n\nmodule.exports = function GetV(V, P) {\n\t// 7.3.2.1\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError(\'Assertion failed: IsPropertyKey(P) is not true, got \' + inspect(P));\n\t}\n\n\t// 7.3.2.2-3\n\t// var O = ToObject(V);\n\n\t// 7.3.2.4\n\treturn V[P];\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/GetV.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/HasProperty.js':
      /*!******************************************************!*\
  !*** ./node_modules/es-abstract/2024/HasProperty.js ***!
  \******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ "./node_modules/es-abstract/2024/IsPropertyKey.js");\nvar Type = __webpack_require__(/*! ./Type */ "./node_modules/es-abstract/2024/Type.js");\n\n// https://262.ecma-international.org/6.0/#sec-hasproperty\n\nmodule.exports = function HasProperty(O, P) {\n\tif (Type(O) !== \'Object\') {\n\t\tthrow new $TypeError(\'Assertion failed: `O` must be an Object\');\n\t}\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError(\'Assertion failed: `P` must be a Property Key\');\n\t}\n\treturn P in O;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/HasProperty.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/IsAccessorDescriptor.js':
      /*!***************************************************************!*\
  !*** ./node_modules/es-abstract/2024/IsAccessorDescriptor.js ***!
  \***************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar hasOwn = __webpack_require__(/*! hasown */ \"./node_modules/hasown/index.js\");\n\nvar isPropertyDescriptor = __webpack_require__(/*! ../helpers/records/property-descriptor */ \"./node_modules/es-abstract/helpers/records/property-descriptor.js\");\n\n// https://262.ecma-international.org/5.1/#sec-8.10.1\n\nmodule.exports = function IsAccessorDescriptor(Desc) {\n\tif (typeof Desc === 'undefined') {\n\t\treturn false;\n\t}\n\n\tif (!isPropertyDescriptor(Desc)) {\n\t\tthrow new $TypeError('Assertion failed: `Desc` must be a Property Descriptor');\n\t}\n\n\tif (!hasOwn(Desc, '[[Get]]') && !hasOwn(Desc, '[[Set]]')) {\n\t\treturn false;\n\t}\n\n\treturn true;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/IsAccessorDescriptor.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/IsArray.js':
      /*!**************************************************!*\
  !*** ./node_modules/es-abstract/2024/IsArray.js ***!
  \**************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\n// https://262.ecma-international.org/6.0/#sec-isarray\nmodule.exports = __webpack_require__(/*! ../helpers/IsArray */ "./node_modules/es-abstract/helpers/IsArray.js");\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/IsArray.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/IsCallable.js':
      /*!*****************************************************!*\
  !*** ./node_modules/es-abstract/2024/IsCallable.js ***!
  \*****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\n// http://262.ecma-international.org/5.1/#sec-9.11\n\nmodule.exports = __webpack_require__(/*! is-callable */ "./node_modules/is-callable/index.js");\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/IsCallable.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/IsConstructor.js':
      /*!********************************************************!*\
  !*** ./node_modules/es-abstract/2024/IsConstructor.js ***!
  \********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic.js */ \"./node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $construct = GetIntrinsic('%Reflect.construct%', true);\n\nvar DefinePropertyOrThrow = __webpack_require__(/*! ./DefinePropertyOrThrow */ \"./node_modules/es-abstract/2024/DefinePropertyOrThrow.js\");\ntry {\n\tDefinePropertyOrThrow({}, '', { '[[Get]]': function () {} });\n} catch (e) {\n\t// Accessor properties aren't supported\n\tDefinePropertyOrThrow = null;\n}\n\n// https://262.ecma-international.org/6.0/#sec-isconstructor\n\nif (DefinePropertyOrThrow && $construct) {\n\tvar isConstructorMarker = {};\n\tvar badArrayLike = {};\n\tDefinePropertyOrThrow(badArrayLike, 'length', {\n\t\t'[[Get]]': function () {\n\t\t\tthrow isConstructorMarker;\n\t\t},\n\t\t'[[Enumerable]]': true\n\t});\n\n\tmodule.exports = function IsConstructor(argument) {\n\t\ttry {\n\t\t\t// `Reflect.construct` invokes `IsConstructor(target)` before `Get(args, 'length')`:\n\t\t\t$construct(argument, badArrayLike);\n\t\t} catch (err) {\n\t\t\treturn err === isConstructorMarker;\n\t\t}\n\t};\n} else {\n\tmodule.exports = function IsConstructor(argument) {\n\t\t// unfortunately there's no way to truly check this without try/catch `new argument` in old environments\n\t\treturn typeof argument === 'function' && !!argument.prototype;\n\t};\n}\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/IsConstructor.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/IsDataDescriptor.js':
      /*!***********************************************************!*\
  !*** ./node_modules/es-abstract/2024/IsDataDescriptor.js ***!
  \***********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar hasOwn = __webpack_require__(/*! hasown */ \"./node_modules/hasown/index.js\");\n\nvar isPropertyDescriptor = __webpack_require__(/*! ../helpers/records/property-descriptor */ \"./node_modules/es-abstract/helpers/records/property-descriptor.js\");\n\n// https://262.ecma-international.org/5.1/#sec-8.10.2\n\nmodule.exports = function IsDataDescriptor(Desc) {\n\tif (typeof Desc === 'undefined') {\n\t\treturn false;\n\t}\n\n\tif (!isPropertyDescriptor(Desc)) {\n\t\tthrow new $TypeError('Assertion failed: `Desc` must be a Property Descriptor');\n\t}\n\n\tif (!hasOwn(Desc, '[[Value]]') && !hasOwn(Desc, '[[Writable]]')) {\n\t\treturn false;\n\t}\n\n\treturn true;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/IsDataDescriptor.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/IsExtensible.js':
      /*!*******************************************************!*\
  !*** ./node_modules/es-abstract/2024/IsExtensible.js ***!
  \*******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");\n\nvar $preventExtensions = GetIntrinsic(\'%Object.preventExtensions%\', true);\nvar $isExtensible = GetIntrinsic(\'%Object.isExtensible%\', true);\n\nvar isPrimitive = __webpack_require__(/*! ../helpers/isPrimitive */ "./node_modules/es-abstract/helpers/isPrimitive.js");\n\n// https://262.ecma-international.org/6.0/#sec-isextensible-o\n\nmodule.exports = $preventExtensions\n\t? function IsExtensible(obj) {\n\t\treturn !isPrimitive(obj) && $isExtensible(obj);\n\t}\n\t: function IsExtensible(obj) {\n\t\treturn !isPrimitive(obj);\n\t};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/IsExtensible.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/IsGenericDescriptor.js':
      /*!**************************************************************!*\
  !*** ./node_modules/es-abstract/2024/IsGenericDescriptor.js ***!
  \**************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar IsAccessorDescriptor = __webpack_require__(/*! ./IsAccessorDescriptor */ "./node_modules/es-abstract/2024/IsAccessorDescriptor.js");\nvar IsDataDescriptor = __webpack_require__(/*! ./IsDataDescriptor */ "./node_modules/es-abstract/2024/IsDataDescriptor.js");\n\nvar isPropertyDescriptor = __webpack_require__(/*! ../helpers/records/property-descriptor */ "./node_modules/es-abstract/helpers/records/property-descriptor.js");\n\n// https://262.ecma-international.org/6.0/#sec-isgenericdescriptor\n\nmodule.exports = function IsGenericDescriptor(Desc) {\n\tif (typeof Desc === \'undefined\') {\n\t\treturn false;\n\t}\n\n\tif (!isPropertyDescriptor(Desc)) {\n\t\tthrow new $TypeError(\'Assertion failed: `Desc` must be a Property Descriptor\');\n\t}\n\n\tif (!IsAccessorDescriptor(Desc) && !IsDataDescriptor(Desc)) {\n\t\treturn true;\n\t}\n\n\treturn false;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/IsGenericDescriptor.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/IsPropertyKey.js':
      /*!********************************************************!*\
  !*** ./node_modules/es-abstract/2024/IsPropertyKey.js ***!
  \********************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\n// https://262.ecma-international.org/6.0/#sec-ispropertykey\n\nmodule.exports = function IsPropertyKey(argument) {\n\treturn typeof argument === 'string' || typeof argument === 'symbol';\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/IsPropertyKey.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/IsRegExp.js':
      /*!***************************************************!*\
  !*** ./node_modules/es-abstract/2024/IsRegExp.js ***!
  \***************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");\n\nvar $match = GetIntrinsic(\'%Symbol.match%\', true);\n\nvar hasRegExpMatcher = __webpack_require__(/*! is-regex */ "./node_modules/is-regex/index.js");\n\nvar ToBoolean = __webpack_require__(/*! ./ToBoolean */ "./node_modules/es-abstract/2024/ToBoolean.js");\n\n// https://262.ecma-international.org/6.0/#sec-isregexp\n\nmodule.exports = function IsRegExp(argument) {\n\tif (!argument || typeof argument !== \'object\') {\n\t\treturn false;\n\t}\n\tif ($match) {\n\t\tvar isRegExp = argument[$match];\n\t\tif (typeof isRegExp !== \'undefined\') {\n\t\t\treturn ToBoolean(isRegExp);\n\t\t}\n\t}\n\treturn hasRegExpMatcher(argument);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/IsRegExp.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/IteratorClose.js':
      /*!********************************************************!*\
  !*** ./node_modules/es-abstract/2024/IteratorClose.js ***!
  \********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar Call = __webpack_require__(/*! ./Call */ \"./node_modules/es-abstract/2024/Call.js\");\nvar CompletionRecord = __webpack_require__(/*! ./CompletionRecord */ \"./node_modules/es-abstract/2024/CompletionRecord.js\");\nvar GetMethod = __webpack_require__(/*! ./GetMethod */ \"./node_modules/es-abstract/2024/GetMethod.js\");\nvar IsCallable = __webpack_require__(/*! ./IsCallable */ \"./node_modules/es-abstract/2024/IsCallable.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2024/Type.js\");\n\nvar isIteratorRecord = __webpack_require__(/*! ../helpers/records/iterator-record */ \"./node_modules/es-abstract/helpers/records/iterator-record.js\");\n\n// https://262.ecma-international.org/14.0/#sec-iteratorclose\n\nmodule.exports = function IteratorClose(iteratorRecord, completion) {\n\tif (!isIteratorRecord(iteratorRecord)) {\n\t\tthrow new $TypeError('Assertion failed: `iteratorRecord` must be an Iterator Record'); // step 1\n\t}\n\tif (Type(iteratorRecord['[[Iterator]]']) !== 'Object') {\n\t\tthrow new $TypeError('Assertion failed: iteratorRecord.[[Iterator]] must be an Object'); // step 1\n\t}\n\n\tif (!IsCallable(completion) && !(completion instanceof CompletionRecord)) { // step 2\n\t\tthrow new $TypeError('Assertion failed: completion is not a thunk representing a Completion Record, nor a Completion Record instance');\n\t}\n\tvar completionThunk = completion instanceof CompletionRecord ? function () { return completion['?'](); } : completion;\n\n\tvar iterator = iteratorRecord['[[Iterator]]']; // step 3\n\n\tvar iteratorReturn;\n\ttry {\n\t\titeratorReturn = GetMethod(iterator, 'return'); // step 4\n\t} catch (e) {\n\t\tcompletionThunk(); // throws if `completion` is a throw completion // step 6\n\t\tcompletionThunk = null; // ensure it's not called twice.\n\t\tthrow e; // step 7\n\t}\n\tif (typeof iteratorReturn === 'undefined') {\n\t\treturn completionThunk(); // step 5.a - 5.b\n\t}\n\n\tvar innerResult;\n\ttry {\n\t\tinnerResult = Call(iteratorReturn, iterator, []);\n\t} catch (e) {\n\t\t// if we hit here, then \"e\" is the innerResult completion that needs re-throwing\n\n\t\tcompletionThunk(); // throws if `completion` is a throw completion // step 6\n\t\tcompletionThunk = null; // ensure it's not called twice.\n\n\t\t// if not, then return the innerResult completion\n\t\tthrow e; // step 7\n\t}\n\tvar completionRecord = completionThunk(); // if innerResult worked, then throw if the completion does\n\tcompletionThunk = null; // ensure it's not called twice.\n\n\tif (Type(innerResult) !== 'Object') {\n\t\tthrow new $TypeError('iterator .return must return an object');\n\t}\n\n\treturn completionRecord;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/IteratorClose.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/IteratorComplete.js':
      /*!***********************************************************!*\
  !*** ./node_modules/es-abstract/2024/IteratorComplete.js ***!
  \***********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar Get = __webpack_require__(/*! ./Get */ "./node_modules/es-abstract/2024/Get.js");\nvar ToBoolean = __webpack_require__(/*! ./ToBoolean */ "./node_modules/es-abstract/2024/ToBoolean.js");\nvar Type = __webpack_require__(/*! ./Type */ "./node_modules/es-abstract/2024/Type.js");\n\n// https://262.ecma-international.org/6.0/#sec-iteratorcomplete\n\nmodule.exports = function IteratorComplete(iterResult) {\n\tif (Type(iterResult) !== \'Object\') {\n\t\tthrow new $TypeError(\'Assertion failed: Type(iterResult) is not Object\');\n\t}\n\treturn ToBoolean(Get(iterResult, \'done\'));\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/IteratorComplete.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/IteratorNext.js':
      /*!*******************************************************!*\
  !*** ./node_modules/es-abstract/2024/IteratorNext.js ***!
  \*******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar Call = __webpack_require__(/*! ./Call */ \"./node_modules/es-abstract/2024/Call.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2024/Type.js\");\n\nvar isIteratorRecord = __webpack_require__(/*! ../helpers/records/iterator-record */ \"./node_modules/es-abstract/helpers/records/iterator-record.js\");\n\n// https://262.ecma-international.org/14.0/#sec-iteratornext\n\nmodule.exports = function IteratorNext(iteratorRecord) {\n\tif (!isIteratorRecord(iteratorRecord)) {\n\t\tthrow new $TypeError('Assertion failed: `iteratorRecord` must be an Iterator Record'); // step 1\n\t}\n\n\tvar result;\n\tif (arguments.length < 2) { // step 1\n\t\tresult = Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]']); // step 1.a\n\t} else { // step 2\n\t\tresult = Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]'], [arguments[1]]); // step 2.a\n\t}\n\n\tif (Type(result) !== 'Object') {\n\t\tthrow new $TypeError('iterator next must return an object'); // step 3\n\t}\n\treturn result; // step 4\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/IteratorNext.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/IteratorStep.js':
      /*!*******************************************************!*\
  !*** ./node_modules/es-abstract/2024/IteratorStep.js ***!
  \*******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar IteratorComplete = __webpack_require__(/*! ./IteratorComplete */ "./node_modules/es-abstract/2024/IteratorComplete.js");\nvar IteratorNext = __webpack_require__(/*! ./IteratorNext */ "./node_modules/es-abstract/2024/IteratorNext.js");\n\nvar isIteratorRecord = __webpack_require__(/*! ../helpers/records/iterator-record */ "./node_modules/es-abstract/helpers/records/iterator-record.js");\n\n// https://262.ecma-international.org/14.0/#sec-iteratorstep\n\nmodule.exports = function IteratorStep(iteratorRecord) {\n\tif (!isIteratorRecord(iteratorRecord)) {\n\t\tthrow new $TypeError(\'Assertion failed: `iteratorRecord` must be an Iterator Record\'); // step 1\n\t}\n\n\tvar result = IteratorNext(iteratorRecord); // step 1\n\tvar done = IteratorComplete(result); // step 2\n\treturn done === true ? false : result; // steps 3-4\n};\n\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/IteratorStep.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/IteratorValue.js':
      /*!********************************************************!*\
  !*** ./node_modules/es-abstract/2024/IteratorValue.js ***!
  \********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar Get = __webpack_require__(/*! ./Get */ "./node_modules/es-abstract/2024/Get.js");\nvar Type = __webpack_require__(/*! ./Type */ "./node_modules/es-abstract/2024/Type.js");\n\n// https://262.ecma-international.org/6.0/#sec-iteratorvalue\n\nmodule.exports = function IteratorValue(iterResult) {\n\tif (Type(iterResult) !== \'Object\') {\n\t\tthrow new $TypeError(\'Assertion failed: Type(iterResult) is not Object\');\n\t}\n\treturn Get(iterResult, \'value\');\n};\n\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/IteratorValue.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/LengthOfArrayLike.js':
      /*!************************************************************!*\
  !*** ./node_modules/es-abstract/2024/LengthOfArrayLike.js ***!
  \************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\n\nvar Get = __webpack_require__(/*! ./Get */ "./node_modules/es-abstract/2024/Get.js");\nvar ToLength = __webpack_require__(/*! ./ToLength */ "./node_modules/es-abstract/2024/ToLength.js");\nvar Type = __webpack_require__(/*! ./Type */ "./node_modules/es-abstract/2024/Type.js");\n\n// https://262.ecma-international.org/11.0/#sec-lengthofarraylike\n\nmodule.exports = function LengthOfArrayLike(obj) {\n\tif (Type(obj) !== \'Object\') {\n\t\tthrow new $TypeError(\'Assertion failed: `obj` must be an Object\');\n\t}\n\treturn ToLength(Get(obj, \'length\'));\n};\n\n// TODO: use this all over\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/LengthOfArrayLike.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/OrdinaryDefineOwnProperty.js':
      /*!********************************************************************!*\
  !*** ./node_modules/es-abstract/2024/OrdinaryDefineOwnProperty.js ***!
  \********************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $gOPD = __webpack_require__(/*! gopd */ \"./node_modules/gopd/index.js\");\nvar $SyntaxError = __webpack_require__(/*! es-errors/syntax */ \"./node_modules/es-errors/syntax.js\");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar isPropertyDescriptor = __webpack_require__(/*! ../helpers/records/property-descriptor */ \"./node_modules/es-abstract/helpers/records/property-descriptor.js\");\n\nvar IsAccessorDescriptor = __webpack_require__(/*! ./IsAccessorDescriptor */ \"./node_modules/es-abstract/2024/IsAccessorDescriptor.js\");\nvar IsExtensible = __webpack_require__(/*! ./IsExtensible */ \"./node_modules/es-abstract/2024/IsExtensible.js\");\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ \"./node_modules/es-abstract/2024/IsPropertyKey.js\");\nvar ToPropertyDescriptor = __webpack_require__(/*! ./ToPropertyDescriptor */ \"./node_modules/es-abstract/2024/ToPropertyDescriptor.js\");\nvar SameValue = __webpack_require__(/*! ./SameValue */ \"./node_modules/es-abstract/2024/SameValue.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2024/Type.js\");\nvar ValidateAndApplyPropertyDescriptor = __webpack_require__(/*! ./ValidateAndApplyPropertyDescriptor */ \"./node_modules/es-abstract/2024/ValidateAndApplyPropertyDescriptor.js\");\n\n// https://262.ecma-international.org/6.0/#sec-ordinarydefineownproperty\n\nmodule.exports = function OrdinaryDefineOwnProperty(O, P, Desc) {\n\tif (Type(O) !== 'Object') {\n\t\tthrow new $TypeError('Assertion failed: O must be an Object');\n\t}\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError('Assertion failed: P must be a Property Key');\n\t}\n\tif (!isPropertyDescriptor(Desc)) {\n\t\tthrow new $TypeError('Assertion failed: Desc must be a Property Descriptor');\n\t}\n\tif (!$gOPD) {\n\t\t// ES3/IE 8 fallback\n\t\tif (IsAccessorDescriptor(Desc)) {\n\t\t\tthrow new $SyntaxError('This environment does not support accessor property descriptors.');\n\t\t}\n\t\tvar creatingNormalDataProperty = !(P in O)\n\t\t\t&& Desc['[[Writable]]']\n\t\t\t&& Desc['[[Enumerable]]']\n\t\t\t&& Desc['[[Configurable]]']\n\t\t\t&& '[[Value]]' in Desc;\n\t\tvar settingExistingDataProperty = (P in O)\n\t\t\t&& (!('[[Configurable]]' in Desc) || Desc['[[Configurable]]'])\n\t\t\t&& (!('[[Enumerable]]' in Desc) || Desc['[[Enumerable]]'])\n\t\t\t&& (!('[[Writable]]' in Desc) || Desc['[[Writable]]'])\n\t\t\t&& '[[Value]]' in Desc;\n\t\tif (creatingNormalDataProperty || settingExistingDataProperty) {\n\t\t\tO[P] = Desc['[[Value]]']; // eslint-disable-line no-param-reassign\n\t\t\treturn SameValue(O[P], Desc['[[Value]]']);\n\t\t}\n\t\tthrow new $SyntaxError('This environment does not support defining non-writable, non-enumerable, or non-configurable properties');\n\t}\n\tvar desc = $gOPD(O, P);\n\tvar current = desc && ToPropertyDescriptor(desc);\n\tvar extensible = IsExtensible(O);\n\treturn ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/OrdinaryDefineOwnProperty.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/OrdinaryObjectCreate.js':
      /*!***************************************************************!*\
  !*** ./node_modules/es-abstract/2024/OrdinaryObjectCreate.js ***!
  \***************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");\n\nvar $ObjectCreate = GetIntrinsic(\'%Object.create%\', true);\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\nvar $SyntaxError = __webpack_require__(/*! es-errors/syntax */ "./node_modules/es-errors/syntax.js");\n\nvar IsArray = __webpack_require__(/*! ./IsArray */ "./node_modules/es-abstract/2024/IsArray.js");\nvar Type = __webpack_require__(/*! ./Type */ "./node_modules/es-abstract/2024/Type.js");\n\nvar forEach = __webpack_require__(/*! ../helpers/forEach */ "./node_modules/es-abstract/helpers/forEach.js");\n\nvar SLOT = __webpack_require__(/*! internal-slot */ "./node_modules/internal-slot/index.js");\n\nvar hasProto = __webpack_require__(/*! has-proto */ "./node_modules/has-proto/index.js")();\n\n// https://262.ecma-international.org/11.0/#sec-objectcreate\n\nmodule.exports = function OrdinaryObjectCreate(proto) {\n\tif (proto !== null && Type(proto) !== \'Object\') {\n\t\tthrow new $TypeError(\'Assertion failed: `proto` must be null or an object\');\n\t}\n\tvar additionalInternalSlotsList = arguments.length < 2 ? [] : arguments[1];\n\tif (!IsArray(additionalInternalSlotsList)) {\n\t\tthrow new $TypeError(\'Assertion failed: `additionalInternalSlotsList` must be an Array\');\n\t}\n\n\t// var internalSlotsList = [\'[[Prototype]]\', \'[[Extensible]]\']; // step 1\n\t// internalSlotsList.push(...additionalInternalSlotsList); // step 2\n\t// var O = MakeBasicObject(internalSlotsList); // step 3\n\t// setProto(O, proto); // step 4\n\t// return O; // step 5\n\n\tvar O;\n\tif ($ObjectCreate) {\n\t\tO = $ObjectCreate(proto);\n\t} else if (hasProto) {\n\t\tO = { __proto__: proto };\n\t} else {\n\t\tif (proto === null) {\n\t\t\tthrow new $SyntaxError(\'native Object.create support is required to create null objects\');\n\t\t}\n\t\tvar T = function T() {};\n\t\tT.prototype = proto;\n\t\tO = new T();\n\t}\n\n\tif (additionalInternalSlotsList.length > 0) {\n\t\tforEach(additionalInternalSlotsList, function (slot) {\n\t\t\tSLOT.set(O, slot, void undefined);\n\t\t});\n\t}\n\n\treturn O;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/OrdinaryObjectCreate.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/PromiseResolve.js':
      /*!*********************************************************!*\
  !*** ./node_modules/es-abstract/2024/PromiseResolve.js ***!
  \*********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");\nvar callBind = __webpack_require__(/*! call-bind */ "./node_modules/call-bind/index.js");\nvar $SyntaxError = __webpack_require__(/*! es-errors/syntax */ "./node_modules/es-errors/syntax.js");\n\nvar $resolve = GetIntrinsic(\'%Promise.resolve%\', true);\nvar $PromiseResolve = $resolve && callBind($resolve);\n\n// https://262.ecma-international.org/9.0/#sec-promise-resolve\n\nmodule.exports = function PromiseResolve(C, x) {\n\tif (!$PromiseResolve) {\n\t\tthrow new $SyntaxError(\'This environment does not support Promises.\');\n\t}\n\treturn $PromiseResolve(C, x);\n};\n\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/PromiseResolve.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/RegExpExec.js':
      /*!*****************************************************!*\
  !*** ./node_modules/es-abstract/2024/RegExpExec.js ***!
  \*****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar regexExec = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\")('RegExp.prototype.exec');\n\nvar Call = __webpack_require__(/*! ./Call */ \"./node_modules/es-abstract/2024/Call.js\");\nvar Get = __webpack_require__(/*! ./Get */ \"./node_modules/es-abstract/2024/Get.js\");\nvar IsCallable = __webpack_require__(/*! ./IsCallable */ \"./node_modules/es-abstract/2024/IsCallable.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2024/Type.js\");\n\n// https://262.ecma-international.org/6.0/#sec-regexpexec\n\nmodule.exports = function RegExpExec(R, S) {\n\tif (Type(R) !== 'Object') {\n\t\tthrow new $TypeError('Assertion failed: `R` must be an Object');\n\t}\n\tif (typeof S !== 'string') {\n\t\tthrow new $TypeError('Assertion failed: `S` must be a String');\n\t}\n\tvar exec = Get(R, 'exec');\n\tif (IsCallable(exec)) {\n\t\tvar result = Call(exec, R, [S]);\n\t\tif (typeof result === 'object') {\n\t\t\treturn result;\n\t\t}\n\t\tthrow new $TypeError('\"exec\" method must return `null` or an Object');\n\t}\n\treturn regexExec(R, S);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/RegExpExec.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/RequireObjectCoercible.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/es-abstract/2024/RequireObjectCoercible.js ***!
  \*****************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nmodule.exports = __webpack_require__(/*! es-object-atoms/RequireObjectCoercible */ "./node_modules/es-object-atoms/RequireObjectCoercible.js");\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/RequireObjectCoercible.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/SameValue.js':
      /*!****************************************************!*\
  !*** ./node_modules/es-abstract/2024/SameValue.js ***!
  \****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $isNaN = __webpack_require__(/*! ../helpers/isNaN */ "./node_modules/es-abstract/helpers/isNaN.js");\n\n// http://262.ecma-international.org/5.1/#sec-9.12\n\nmodule.exports = function SameValue(x, y) {\n\tif (x === y) { // 0 === -0, but they are not identical.\n\t\tif (x === 0) { return 1 / x === 1 / y; }\n\t\treturn true;\n\t}\n\treturn $isNaN(x) && $isNaN(y);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/SameValue.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/SameValueZero.js':
      /*!********************************************************!*\
  !*** ./node_modules/es-abstract/2024/SameValueZero.js ***!
  \********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar $isNaN = __webpack_require__(/*! ../helpers/isNaN */ "./node_modules/es-abstract/helpers/isNaN.js");\n\n// https://262.ecma-international.org/6.0/#sec-samevaluezero\n\nmodule.exports = function SameValueZero(x, y) {\n\treturn (x === y) || ($isNaN(x) && $isNaN(y));\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/SameValueZero.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/Set.js':
      /*!**********************************************!*\
  !*** ./node_modules/es-abstract/2024/Set.js ***!
  \**********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ \"./node_modules/es-abstract/2024/IsPropertyKey.js\");\nvar SameValue = __webpack_require__(/*! ./SameValue */ \"./node_modules/es-abstract/2024/SameValue.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2024/Type.js\");\n\n// IE 9 does not throw in strict mode when writability/configurability/extensibility is violated\nvar noThrowOnStrictViolation = (function () {\n\ttry {\n\t\tdelete [].length;\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n}());\n\n// https://262.ecma-international.org/6.0/#sec-set-o-p-v-throw\n\nmodule.exports = function Set(O, P, V, Throw) {\n\tif (Type(O) !== 'Object') {\n\t\tthrow new $TypeError('Assertion failed: `O` must be an Object');\n\t}\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError('Assertion failed: `P` must be a Property Key');\n\t}\n\tif (typeof Throw !== 'boolean') {\n\t\tthrow new $TypeError('Assertion failed: `Throw` must be a Boolean');\n\t}\n\tif (Throw) {\n\t\tO[P] = V; // eslint-disable-line no-param-reassign\n\t\tif (noThrowOnStrictViolation && !SameValue(O[P], V)) {\n\t\t\tthrow new $TypeError('Attempted to assign to readonly property.');\n\t\t}\n\t\treturn true;\n\t}\n\ttry {\n\t\tO[P] = V; // eslint-disable-line no-param-reassign\n\t\treturn noThrowOnStrictViolation ? SameValue(O[P], V) : true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/Set.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/SpeciesConstructor.js':
      /*!*************************************************************!*\
  !*** ./node_modules/es-abstract/2024/SpeciesConstructor.js ***!
  \*************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $species = GetIntrinsic('%Symbol.species%', true);\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar IsConstructor = __webpack_require__(/*! ./IsConstructor */ \"./node_modules/es-abstract/2024/IsConstructor.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2024/Type.js\");\n\n// https://262.ecma-international.org/6.0/#sec-speciesconstructor\n\nmodule.exports = function SpeciesConstructor(O, defaultConstructor) {\n\tif (Type(O) !== 'Object') {\n\t\tthrow new $TypeError('Assertion failed: Type(O) is not Object');\n\t}\n\tvar C = O.constructor;\n\tif (typeof C === 'undefined') {\n\t\treturn defaultConstructor;\n\t}\n\tif (Type(C) !== 'Object') {\n\t\tthrow new $TypeError('O.constructor is not an Object');\n\t}\n\tvar S = $species ? C[$species] : void 0;\n\tif (S == null) {\n\t\treturn defaultConstructor;\n\t}\n\tif (IsConstructor(S)) {\n\t\treturn S;\n\t}\n\tthrow new $TypeError('no constructor found');\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/SpeciesConstructor.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/StringToNumber.js':
      /*!*********************************************************!*\
  !*** ./node_modules/es-abstract/2024/StringToNumber.js ***!
  \*********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $Number = GetIntrinsic('%Number%');\nvar $RegExp = GetIntrinsic('%RegExp%');\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\nvar $parseInteger = GetIntrinsic('%parseInt%');\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar regexTester = __webpack_require__(/*! safe-regex-test */ \"./node_modules/safe-regex-test/index.js\");\n\nvar $strSlice = callBound('String.prototype.slice');\nvar isBinary = regexTester(/^0b[01]+$/i);\nvar isOctal = regexTester(/^0o[0-7]+$/i);\nvar isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);\nvar nonWS = ['\\u0085', '\\u200b', '\\ufffe'].join('');\nvar nonWSregex = new $RegExp('[' + nonWS + ']', 'g');\nvar hasNonWS = regexTester(nonWSregex);\n\nvar $trim = __webpack_require__(/*! string.prototype.trim */ \"./node_modules/string.prototype.trim/index.js\");\n\n// https://262.ecma-international.org/13.0/#sec-stringtonumber\n\nmodule.exports = function StringToNumber(argument) {\n\tif (typeof argument !== 'string') {\n\t\tthrow new $TypeError('Assertion failed: `argument` is not a String');\n\t}\n\tif (isBinary(argument)) {\n\t\treturn $Number($parseInteger($strSlice(argument, 2), 2));\n\t}\n\tif (isOctal(argument)) {\n\t\treturn $Number($parseInteger($strSlice(argument, 2), 8));\n\t}\n\tif (hasNonWS(argument) || isInvalidHexLiteral(argument)) {\n\t\treturn NaN;\n\t}\n\tvar trimmed = $trim(argument);\n\tif (trimmed !== argument) {\n\t\treturn StringToNumber(trimmed);\n\t}\n\treturn $Number(argument);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/StringToNumber.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/ThrowCompletion.js':
      /*!**********************************************************!*\
  !*** ./node_modules/es-abstract/2024/ThrowCompletion.js ***!
  \**********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar CompletionRecord = __webpack_require__(/*! ./CompletionRecord */ "./node_modules/es-abstract/2024/CompletionRecord.js");\n\n// https://262.ecma-international.org/9.0/#sec-throwcompletion\n\nmodule.exports = function ThrowCompletion(argument) {\n\treturn new CompletionRecord(\'throw\', argument);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/ThrowCompletion.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/ToBoolean.js':
      /*!****************************************************!*\
  !*** ./node_modules/es-abstract/2024/ToBoolean.js ***!
  \****************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          '\n\n// http://262.ecma-international.org/5.1/#sec-9.2\n\nmodule.exports = function ToBoolean(value) { return !!value; };\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/ToBoolean.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/ToIntegerOrInfinity.js':
      /*!**************************************************************!*\
  !*** ./node_modules/es-abstract/2024/ToIntegerOrInfinity.js ***!
  \**************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar ToNumber = __webpack_require__(/*! ./ToNumber */ "./node_modules/es-abstract/2024/ToNumber.js");\nvar truncate = __webpack_require__(/*! ./truncate */ "./node_modules/es-abstract/2024/truncate.js");\n\nvar $isNaN = __webpack_require__(/*! ../helpers/isNaN */ "./node_modules/es-abstract/helpers/isNaN.js");\nvar $isFinite = __webpack_require__(/*! ../helpers/isFinite */ "./node_modules/es-abstract/helpers/isFinite.js");\n\n// https://262.ecma-international.org/14.0/#sec-tointegerorinfinity\n\nmodule.exports = function ToIntegerOrInfinity(value) {\n\tvar number = ToNumber(value);\n\tif ($isNaN(number) || number === 0) { return 0; }\n\tif (!$isFinite(number)) { return number; }\n\treturn truncate(number);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/ToIntegerOrInfinity.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/ToLength.js':
      /*!***************************************************!*\
  !*** ./node_modules/es-abstract/2024/ToLength.js ***!
  \***************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar MAX_SAFE_INTEGER = __webpack_require__(/*! ../helpers/maxSafeInteger */ "./node_modules/es-abstract/helpers/maxSafeInteger.js");\n\nvar ToIntegerOrInfinity = __webpack_require__(/*! ./ToIntegerOrInfinity */ "./node_modules/es-abstract/2024/ToIntegerOrInfinity.js");\n\nmodule.exports = function ToLength(argument) {\n\tvar len = ToIntegerOrInfinity(argument);\n\tif (len <= 0) { return 0; } // includes converting -0 to +0\n\tif (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }\n\treturn len;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/ToLength.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/ToNumber.js':
      /*!***************************************************!*\
  !*** ./node_modules/es-abstract/2024/ToNumber.js ***!
  \***************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\nvar $Number = GetIntrinsic('%Number%');\nvar isPrimitive = __webpack_require__(/*! ../helpers/isPrimitive */ \"./node_modules/es-abstract/helpers/isPrimitive.js\");\n\nvar ToPrimitive = __webpack_require__(/*! ./ToPrimitive */ \"./node_modules/es-abstract/2024/ToPrimitive.js\");\nvar StringToNumber = __webpack_require__(/*! ./StringToNumber */ \"./node_modules/es-abstract/2024/StringToNumber.js\");\n\n// https://262.ecma-international.org/13.0/#sec-tonumber\n\nmodule.exports = function ToNumber(argument) {\n\tvar value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);\n\tif (typeof value === 'symbol') {\n\t\tthrow new $TypeError('Cannot convert a Symbol value to a number');\n\t}\n\tif (typeof value === 'bigint') {\n\t\tthrow new $TypeError('Conversion from \\'BigInt\\' to \\'number\\' is not allowed.');\n\t}\n\tif (typeof value === 'string') {\n\t\treturn StringToNumber(value);\n\t}\n\treturn $Number(value);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/ToNumber.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/ToPrimitive.js':
      /*!******************************************************!*\
  !*** ./node_modules/es-abstract/2024/ToPrimitive.js ***!
  \******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar toPrimitive = __webpack_require__(/*! es-to-primitive/es2015 */ "./node_modules/es-to-primitive/es2015.js");\n\n// https://262.ecma-international.org/6.0/#sec-toprimitive\n\nmodule.exports = function ToPrimitive(input) {\n\tif (arguments.length > 1) {\n\t\treturn toPrimitive(input, arguments[1]);\n\t}\n\treturn toPrimitive(input);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/ToPrimitive.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/ToPropertyDescriptor.js':
      /*!***************************************************************!*\
  !*** ./node_modules/es-abstract/2024/ToPropertyDescriptor.js ***!
  \***************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar hasOwn = __webpack_require__(/*! hasown */ \"./node_modules/hasown/index.js\");\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2024/Type.js\");\nvar ToBoolean = __webpack_require__(/*! ./ToBoolean */ \"./node_modules/es-abstract/2024/ToBoolean.js\");\nvar IsCallable = __webpack_require__(/*! ./IsCallable */ \"./node_modules/es-abstract/2024/IsCallable.js\");\n\n// https://262.ecma-international.org/5.1/#sec-8.10.5\n\nmodule.exports = function ToPropertyDescriptor(Obj) {\n\tif (Type(Obj) !== 'Object') {\n\t\tthrow new $TypeError('ToPropertyDescriptor requires an object');\n\t}\n\n\tvar desc = {};\n\tif (hasOwn(Obj, 'enumerable')) {\n\t\tdesc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);\n\t}\n\tif (hasOwn(Obj, 'configurable')) {\n\t\tdesc['[[Configurable]]'] = ToBoolean(Obj.configurable);\n\t}\n\tif (hasOwn(Obj, 'value')) {\n\t\tdesc['[[Value]]'] = Obj.value;\n\t}\n\tif (hasOwn(Obj, 'writable')) {\n\t\tdesc['[[Writable]]'] = ToBoolean(Obj.writable);\n\t}\n\tif (hasOwn(Obj, 'get')) {\n\t\tvar getter = Obj.get;\n\t\tif (typeof getter !== 'undefined' && !IsCallable(getter)) {\n\t\t\tthrow new $TypeError('getter must be a function');\n\t\t}\n\t\tdesc['[[Get]]'] = getter;\n\t}\n\tif (hasOwn(Obj, 'set')) {\n\t\tvar setter = Obj.set;\n\t\tif (typeof setter !== 'undefined' && !IsCallable(setter)) {\n\t\t\tthrow new $TypeError('setter must be a function');\n\t\t}\n\t\tdesc['[[Set]]'] = setter;\n\t}\n\n\tif ((hasOwn(desc, '[[Get]]') || hasOwn(desc, '[[Set]]')) && (hasOwn(desc, '[[Value]]') || hasOwn(desc, '[[Writable]]'))) {\n\t\tthrow new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');\n\t}\n\treturn desc;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/ToPropertyDescriptor.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/ToPropertyKey.js':
      /*!********************************************************!*\
  !*** ./node_modules/es-abstract/2024/ToPropertyKey.js ***!
  \********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");\n\nvar $String = GetIntrinsic(\'%String%\');\n\nvar ToPrimitive = __webpack_require__(/*! ./ToPrimitive */ "./node_modules/es-abstract/2024/ToPrimitive.js");\nvar ToString = __webpack_require__(/*! ./ToString */ "./node_modules/es-abstract/2024/ToString.js");\n\n// https://262.ecma-international.org/6.0/#sec-topropertykey\n\nmodule.exports = function ToPropertyKey(argument) {\n\tvar key = ToPrimitive(argument, $String);\n\treturn typeof key === \'symbol\' ? key : ToString(key);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/ToPropertyKey.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/ToString.js':
      /*!***************************************************!*\
  !*** ./node_modules/es-abstract/2024/ToString.js ***!
  \***************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $String = GetIntrinsic('%String%');\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\n// https://262.ecma-international.org/6.0/#sec-tostring\n\nmodule.exports = function ToString(argument) {\n\tif (typeof argument === 'symbol') {\n\t\tthrow new $TypeError('Cannot convert a Symbol value to a string');\n\t}\n\treturn $String(argument);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/ToString.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/ToUint32.js':
      /*!***************************************************!*\
  !*** ./node_modules/es-abstract/2024/ToUint32.js ***!
  \***************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar modulo = __webpack_require__(/*! ./modulo */ "./node_modules/es-abstract/2024/modulo.js");\nvar ToNumber = __webpack_require__(/*! ./ToNumber */ "./node_modules/es-abstract/2024/ToNumber.js");\nvar truncate = __webpack_require__(/*! ./truncate */ "./node_modules/es-abstract/2024/truncate.js");\n\nvar isFinite = __webpack_require__(/*! ../helpers/isFinite */ "./node_modules/es-abstract/helpers/isFinite.js");\n\n// https://262.ecma-international.org/14.0/#sec-touint32\n\nvar two32 = 0x100000000; // Math.pow(2, 32);\n\nmodule.exports = function ToUint32(argument) {\n\tvar number = ToNumber(argument);\n\tif (!isFinite(number) || number === 0) {\n\t\treturn 0;\n\t}\n\tvar int = truncate(number);\n\tvar int32bit = modulo(int, two32);\n\treturn int32bit === 0 ? 0 : int32bit; // in the spec, these are math values, so we filter out -0 here\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/ToUint32.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/Type.js':
      /*!***********************************************!*\
  !*** ./node_modules/es-abstract/2024/Type.js ***!
  \***********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar ES5Type = __webpack_require__(/*! ../5/Type */ \"./node_modules/es-abstract/5/Type.js\");\n\n// https://262.ecma-international.org/11.0/#sec-ecmascript-data-types-and-values\n\nmodule.exports = function Type(x) {\n\tif (typeof x === 'symbol') {\n\t\treturn 'Symbol';\n\t}\n\tif (typeof x === 'bigint') {\n\t\treturn 'BigInt';\n\t}\n\treturn ES5Type(x);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/Type.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/UTF16SurrogatePairToCodePoint.js':
      /*!************************************************************************!*\
  !*** ./node_modules/es-abstract/2024/UTF16SurrogatePairToCodePoint.js ***!
  \************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");\nvar $fromCharCode = GetIntrinsic(\'%String.fromCharCode%\');\n\nvar isLeadingSurrogate = __webpack_require__(/*! ../helpers/isLeadingSurrogate */ "./node_modules/es-abstract/helpers/isLeadingSurrogate.js");\nvar isTrailingSurrogate = __webpack_require__(/*! ../helpers/isTrailingSurrogate */ "./node_modules/es-abstract/helpers/isTrailingSurrogate.js");\n\n// https://tc39.es/ecma262/2020/#sec-utf16decodesurrogatepair\n\nmodule.exports = function UTF16SurrogatePairToCodePoint(lead, trail) {\n\tif (!isLeadingSurrogate(lead) || !isTrailingSurrogate(trail)) {\n\t\tthrow new $TypeError(\'Assertion failed: `lead` must be a leading surrogate char code, and `trail` must be a trailing surrogate char code\');\n\t}\n\t// var cp = (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;\n\treturn $fromCharCode(lead) + $fromCharCode(trail);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/UTF16SurrogatePairToCodePoint.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/ValidateAndApplyPropertyDescriptor.js':
      /*!*****************************************************************************!*\
  !*** ./node_modules/es-abstract/2024/ValidateAndApplyPropertyDescriptor.js ***!
  \*****************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar DefineOwnProperty = __webpack_require__(/*! ../helpers/DefineOwnProperty */ \"./node_modules/es-abstract/helpers/DefineOwnProperty.js\");\nvar isFullyPopulatedPropertyDescriptor = __webpack_require__(/*! ../helpers/isFullyPopulatedPropertyDescriptor */ \"./node_modules/es-abstract/helpers/isFullyPopulatedPropertyDescriptor.js\");\nvar isPropertyDescriptor = __webpack_require__(/*! ../helpers/records/property-descriptor */ \"./node_modules/es-abstract/helpers/records/property-descriptor.js\");\n\nvar FromPropertyDescriptor = __webpack_require__(/*! ./FromPropertyDescriptor */ \"./node_modules/es-abstract/2024/FromPropertyDescriptor.js\");\nvar IsAccessorDescriptor = __webpack_require__(/*! ./IsAccessorDescriptor */ \"./node_modules/es-abstract/2024/IsAccessorDescriptor.js\");\nvar IsDataDescriptor = __webpack_require__(/*! ./IsDataDescriptor */ \"./node_modules/es-abstract/2024/IsDataDescriptor.js\");\nvar IsGenericDescriptor = __webpack_require__(/*! ./IsGenericDescriptor */ \"./node_modules/es-abstract/2024/IsGenericDescriptor.js\");\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ \"./node_modules/es-abstract/2024/IsPropertyKey.js\");\nvar SameValue = __webpack_require__(/*! ./SameValue */ \"./node_modules/es-abstract/2024/SameValue.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2024/Type.js\");\n\n// https://262.ecma-international.org/13.0/#sec-validateandapplypropertydescriptor\n\n// see https://github.com/tc39/ecma262/pull/2468 for ES2022 changes\n\n// eslint-disable-next-line max-lines-per-function, max-statements\nmodule.exports = function ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current) {\n\tvar oType = Type(O);\n\tif (oType !== 'Undefined' && oType !== 'Object') {\n\t\tthrow new $TypeError('Assertion failed: O must be undefined or an Object');\n\t}\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError('Assertion failed: P must be a Property Key');\n\t}\n\tif (typeof extensible !== 'boolean') {\n\t\tthrow new $TypeError('Assertion failed: extensible must be a Boolean');\n\t}\n\tif (!isPropertyDescriptor(Desc)) {\n\t\tthrow new $TypeError('Assertion failed: Desc must be a Property Descriptor');\n\t}\n\tif (typeof current !== 'undefined' && !isPropertyDescriptor(current)) {\n\t\tthrow new $TypeError('Assertion failed: current must be a Property Descriptor, or undefined');\n\t}\n\n\tif (typeof current === 'undefined') { // step 2\n\t\tif (!extensible) {\n\t\t\treturn false; // step 2.a\n\t\t}\n\t\tif (oType === 'Undefined') {\n\t\t\treturn true; // step 2.b\n\t\t}\n\t\tif (IsAccessorDescriptor(Desc)) { // step 2.c\n\t\t\treturn DefineOwnProperty(\n\t\t\t\tIsDataDescriptor,\n\t\t\t\tSameValue,\n\t\t\t\tFromPropertyDescriptor,\n\t\t\t\tO,\n\t\t\t\tP,\n\t\t\t\tDesc\n\t\t\t);\n\t\t}\n\t\t// step 2.d\n\t\treturn DefineOwnProperty(\n\t\t\tIsDataDescriptor,\n\t\t\tSameValue,\n\t\t\tFromPropertyDescriptor,\n\t\t\tO,\n\t\t\tP,\n\t\t\t{\n\t\t\t\t'[[Configurable]]': !!Desc['[[Configurable]]'],\n\t\t\t\t'[[Enumerable]]': !!Desc['[[Enumerable]]'],\n\t\t\t\t'[[Value]]': Desc['[[Value]]'],\n\t\t\t\t'[[Writable]]': !!Desc['[[Writable]]']\n\t\t\t}\n\t\t);\n\t}\n\n\t// 3. Assert: current is a fully populated Property Descriptor.\n\tif (\n\t\t!isFullyPopulatedPropertyDescriptor(\n\t\t\t{\n\t\t\t\tIsAccessorDescriptor: IsAccessorDescriptor,\n\t\t\t\tIsDataDescriptor: IsDataDescriptor\n\t\t\t},\n\t\t\tcurrent\n\t\t)\n\t) {\n\t\tthrow new $TypeError('`current`, when present, must be a fully populated and valid Property Descriptor');\n\t}\n\n\t// 4. If every field in Desc is absent, return true.\n\t// this can't really match the assertion that it's a Property Descriptor in our JS implementation\n\n\t// 5. If current.[[Configurable]] is false, then\n\tif (!current['[[Configurable]]']) {\n\t\tif ('[[Configurable]]' in Desc && Desc['[[Configurable]]']) {\n\t\t\t// step 5.a\n\t\t\treturn false;\n\t\t}\n\t\tif ('[[Enumerable]]' in Desc && !SameValue(Desc['[[Enumerable]]'], current['[[Enumerable]]'])) {\n\t\t\t// step 5.b\n\t\t\treturn false;\n\t\t}\n\t\tif (!IsGenericDescriptor(Desc) && !SameValue(IsAccessorDescriptor(Desc), IsAccessorDescriptor(current))) {\n\t\t\t// step 5.c\n\t\t\treturn false;\n\t\t}\n\t\tif (IsAccessorDescriptor(current)) { // step 5.d\n\t\t\tif ('[[Get]]' in Desc && !SameValue(Desc['[[Get]]'], current['[[Get]]'])) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tif ('[[Set]]' in Desc && !SameValue(Desc['[[Set]]'], current['[[Set]]'])) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t} else if (!current['[[Writable]]']) { // step 5.e\n\t\t\tif ('[[Writable]]' in Desc && Desc['[[Writable]]']) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tif ('[[Value]]' in Desc && !SameValue(Desc['[[Value]]'], current['[[Value]]'])) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\t}\n\n\t// 6. If O is not undefined, then\n\tif (oType !== 'Undefined') {\n\t\tvar configurable;\n\t\tvar enumerable;\n\t\tif (IsDataDescriptor(current) && IsAccessorDescriptor(Desc)) { // step 6.a\n\t\t\tconfigurable = ('[[Configurable]]' in Desc ? Desc : current)['[[Configurable]]'];\n\t\t\tenumerable = ('[[Enumerable]]' in Desc ? Desc : current)['[[Enumerable]]'];\n\t\t\t// Replace the property named P of object O with an accessor property having [[Configurable]] and [[Enumerable]] attributes as described by current and each other attribute set to its default value.\n\t\t\treturn DefineOwnProperty(\n\t\t\t\tIsDataDescriptor,\n\t\t\t\tSameValue,\n\t\t\t\tFromPropertyDescriptor,\n\t\t\t\tO,\n\t\t\t\tP,\n\t\t\t\t{\n\t\t\t\t\t'[[Configurable]]': !!configurable,\n\t\t\t\t\t'[[Enumerable]]': !!enumerable,\n\t\t\t\t\t'[[Get]]': ('[[Get]]' in Desc ? Desc : current)['[[Get]]'],\n\t\t\t\t\t'[[Set]]': ('[[Set]]' in Desc ? Desc : current)['[[Set]]']\n\t\t\t\t}\n\t\t\t);\n\t\t} else if (IsAccessorDescriptor(current) && IsDataDescriptor(Desc)) {\n\t\t\tconfigurable = ('[[Configurable]]' in Desc ? Desc : current)['[[Configurable]]'];\n\t\t\tenumerable = ('[[Enumerable]]' in Desc ? Desc : current)['[[Enumerable]]'];\n\t\t\t// i. Replace the property named P of object O with a data property having [[Configurable]] and [[Enumerable]] attributes as described by current and each other attribute set to its default value.\n\t\t\treturn DefineOwnProperty(\n\t\t\t\tIsDataDescriptor,\n\t\t\t\tSameValue,\n\t\t\t\tFromPropertyDescriptor,\n\t\t\t\tO,\n\t\t\t\tP,\n\t\t\t\t{\n\t\t\t\t\t'[[Configurable]]': !!configurable,\n\t\t\t\t\t'[[Enumerable]]': !!enumerable,\n\t\t\t\t\t'[[Value]]': ('[[Value]]' in Desc ? Desc : current)['[[Value]]'],\n\t\t\t\t\t'[[Writable]]': !!('[[Writable]]' in Desc ? Desc : current)['[[Writable]]']\n\t\t\t\t}\n\t\t\t);\n\t\t}\n\n\t\t// For each field of Desc that is present, set the corresponding attribute of the property named P of object O to the value of the field.\n\t\treturn DefineOwnProperty(\n\t\t\tIsDataDescriptor,\n\t\t\tSameValue,\n\t\t\tFromPropertyDescriptor,\n\t\t\tO,\n\t\t\tP,\n\t\t\tDesc\n\t\t);\n\t}\n\n\treturn true; // step 7\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/ValidateAndApplyPropertyDescriptor.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/floor.js':
      /*!************************************************!*\
  !*** ./node_modules/es-abstract/2024/floor.js ***!
  \************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\n// var modulo = require('./modulo');\nvar $floor = Math.floor;\n\n// http://262.ecma-international.org/11.0/#eqn-floor\n\nmodule.exports = function floor(x) {\n\t// return x - modulo(x, 1);\n\tif (typeof x === 'bigint') {\n\t\treturn x;\n\t}\n\treturn $floor(x);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/floor.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/modulo.js':
      /*!*************************************************!*\
  !*** ./node_modules/es-abstract/2024/modulo.js ***!
  \*************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar mod = __webpack_require__(/*! ../helpers/mod */ "./node_modules/es-abstract/helpers/mod.js");\n\n// https://262.ecma-international.org/5.1/#sec-5.2\n\nmodule.exports = function modulo(x, y) {\n\treturn mod(x, y);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/modulo.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/2024/truncate.js':
      /*!***************************************************!*\
  !*** ./node_modules/es-abstract/2024/truncate.js ***!
  \***************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar floor = __webpack_require__(/*! ./floor */ \"./node_modules/es-abstract/2024/floor.js\");\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\n// https://262.ecma-international.org/14.0/#eqn-truncate\n\nmodule.exports = function truncate(x) {\n\tif (typeof x !== 'number' && typeof x !== 'bigint') {\n\t\tthrow new $TypeError('argument must be a Number or a BigInt');\n\t}\n\tvar result = x < 0 ? -floor(-x) : floor(x);\n\treturn result === 0 ? 0 : result; // in the spec, these are math values, so we filter out -0 here\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/2024/truncate.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/5/Type.js':
      /*!********************************************!*\
  !*** ./node_modules/es-abstract/5/Type.js ***!
  \********************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\n// https://262.ecma-international.org/5.1/#sec-8\n\nmodule.exports = function Type(x) {\n\tif (x === null) {\n\t\treturn 'Null';\n\t}\n\tif (typeof x === 'undefined') {\n\t\treturn 'Undefined';\n\t}\n\tif (typeof x === 'function' || typeof x === 'object') {\n\t\treturn 'Object';\n\t}\n\tif (typeof x === 'number') {\n\t\treturn 'Number';\n\t}\n\tif (typeof x === 'boolean') {\n\t\treturn 'Boolean';\n\t}\n\tif (typeof x === 'string') {\n\t\treturn 'String';\n\t}\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/5/Type.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/GetIntrinsic.js':
      /*!**************************************************!*\
  !*** ./node_modules/es-abstract/GetIntrinsic.js ***!
  \**************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\n// TODO: remove, semver-major\n\nmodule.exports = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/GetIntrinsic.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/helpers/DefineOwnProperty.js':
      /*!***************************************************************!*\
  !*** ./node_modules/es-abstract/helpers/DefineOwnProperty.js ***!
  \***************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar hasPropertyDescriptors = __webpack_require__(/*! has-property-descriptors */ \"./node_modules/has-property-descriptors/index.js\");\n\nvar $defineProperty = __webpack_require__(/*! es-define-property */ \"./node_modules/es-define-property/index.js\");\n\nvar hasArrayLengthDefineBug = hasPropertyDescriptors.hasArrayLengthDefineBug();\n\n// eslint-disable-next-line global-require\nvar isArray = hasArrayLengthDefineBug && __webpack_require__(/*! ../helpers/IsArray */ \"./node_modules/es-abstract/helpers/IsArray.js\");\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\n\nvar $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');\n\n// eslint-disable-next-line max-params\nmodule.exports = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {\n\tif (!$defineProperty) {\n\t\tif (!IsDataDescriptor(desc)) {\n\t\t\t// ES3 does not support getters/setters\n\t\t\treturn false;\n\t\t}\n\t\tif (!desc['[[Configurable]]'] || !desc['[[Writable]]']) {\n\t\t\treturn false;\n\t\t}\n\n\t\t// fallback for ES3\n\t\tif (P in O && $isEnumerable(O, P) !== !!desc['[[Enumerable]]']) {\n\t\t\t// a non-enumerable existing property\n\t\t\treturn false;\n\t\t}\n\n\t\t// property does not exist at all, or exists but is enumerable\n\t\tvar V = desc['[[Value]]'];\n\t\t// eslint-disable-next-line no-param-reassign\n\t\tO[P] = V; // will use [[Define]]\n\t\treturn SameValue(O[P], V);\n\t}\n\tif (\n\t\thasArrayLengthDefineBug\n\t\t&& P === 'length'\n\t\t&& '[[Value]]' in desc\n\t\t&& isArray(O)\n\t\t&& O.length !== desc['[[Value]]']\n\t) {\n\t\t// eslint-disable-next-line no-param-reassign\n\t\tO.length = desc['[[Value]]'];\n\t\treturn O.length === desc['[[Value]]'];\n\t}\n\n\t$defineProperty(O, P, FromPropertyDescriptor(desc));\n\treturn true;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/helpers/DefineOwnProperty.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/helpers/IsArray.js':
      /*!*****************************************************!*\
  !*** ./node_modules/es-abstract/helpers/IsArray.js ***!
  \*****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $Array = GetIntrinsic('%Array%');\n\n// eslint-disable-next-line global-require\nvar toStr = !$Array.isArray && __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\")('Object.prototype.toString');\n\nmodule.exports = $Array.isArray || function IsArray(argument) {\n\treturn toStr(argument) === '[object Array]';\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/helpers/IsArray.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/helpers/forEach.js':
      /*!*****************************************************!*\
  !*** ./node_modules/es-abstract/helpers/forEach.js ***!
  \*****************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          '\n\nmodule.exports = function forEach(array, callback) {\n\tfor (var i = 0; i < array.length; i += 1) {\n\t\tcallback(array[i], i, array); // eslint-disable-line callback-return\n\t}\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/helpers/forEach.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/helpers/fromPropertyDescriptor.js':
      /*!********************************************************************!*\
  !*** ./node_modules/es-abstract/helpers/fromPropertyDescriptor.js ***!
  \********************************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\nmodule.exports = function fromPropertyDescriptor(Desc) {\n\tif (typeof Desc === 'undefined') {\n\t\treturn Desc;\n\t}\n\tvar obj = {};\n\tif ('[[Value]]' in Desc) {\n\t\tobj.value = Desc['[[Value]]'];\n\t}\n\tif ('[[Writable]]' in Desc) {\n\t\tobj.writable = !!Desc['[[Writable]]'];\n\t}\n\tif ('[[Get]]' in Desc) {\n\t\tobj.get = Desc['[[Get]]'];\n\t}\n\tif ('[[Set]]' in Desc) {\n\t\tobj.set = Desc['[[Set]]'];\n\t}\n\tif ('[[Enumerable]]' in Desc) {\n\t\tobj.enumerable = !!Desc['[[Enumerable]]'];\n\t}\n\tif ('[[Configurable]]' in Desc) {\n\t\tobj.configurable = !!Desc['[[Configurable]]'];\n\t}\n\treturn obj;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/helpers/fromPropertyDescriptor.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/helpers/getIteratorMethod.js':
      /*!***************************************************************!*\
  !*** ./node_modules/es-abstract/helpers/getIteratorMethod.js ***!
  \***************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");\nvar isString = __webpack_require__(/*! is-string */ "./node_modules/is-string/index.js");\n\nvar $iterator = GetIntrinsic(\'%Symbol.iterator%\', true);\nvar $stringSlice = callBound(\'String.prototype.slice\');\nvar $String = GetIntrinsic(\'%String%\');\n\nmodule.exports = function getIteratorMethod(ES, iterable) {\n\tvar usingIterator;\n\tif (hasSymbols) {\n\t\tusingIterator = ES.GetMethod(iterable, $iterator);\n\t} else if (ES.IsArray(iterable)) {\n\t\tusingIterator = function () {\n\t\t\tvar i = -1;\n\t\t\tvar arr = this; // eslint-disable-line no-invalid-this\n\t\t\treturn {\n\t\t\t\tnext: function () {\n\t\t\t\t\ti += 1;\n\t\t\t\t\treturn {\n\t\t\t\t\t\tdone: i >= arr.length,\n\t\t\t\t\t\tvalue: arr[i]\n\t\t\t\t\t};\n\t\t\t\t}\n\t\t\t};\n\t\t};\n\t} else if (isString(iterable)) {\n\t\tusingIterator = function () {\n\t\t\tvar i = 0;\n\t\t\treturn {\n\t\t\t\tnext: function () {\n\t\t\t\t\tvar nextIndex = ES.AdvanceStringIndex($String(iterable), i, true);\n\t\t\t\t\tvar value = $stringSlice(iterable, i, nextIndex);\n\t\t\t\t\ti = nextIndex;\n\t\t\t\t\treturn {\n\t\t\t\t\t\tdone: nextIndex > iterable.length,\n\t\t\t\t\t\tvalue: value\n\t\t\t\t\t};\n\t\t\t\t}\n\t\t\t};\n\t\t};\n\t}\n\treturn usingIterator;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/helpers/getIteratorMethod.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/helpers/isFinite.js':
      /*!******************************************************!*\
  !*** ./node_modules/es-abstract/helpers/isFinite.js ***!
  \******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $isNaN = __webpack_require__(/*! ./isNaN */ \"./node_modules/es-abstract/helpers/isNaN.js\");\n\nmodule.exports = function (x) { return (typeof x === 'number' || typeof x === 'bigint') && !$isNaN(x) && x !== Infinity && x !== -Infinity; };\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/helpers/isFinite.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/helpers/isFullyPopulatedPropertyDescriptor.js':
      /*!********************************************************************************!*\
  !*** ./node_modules/es-abstract/helpers/isFullyPopulatedPropertyDescriptor.js ***!
  \********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar isPropertyDescriptor = __webpack_require__(/*! ./records/property-descriptor */ \"./node_modules/es-abstract/helpers/records/property-descriptor.js\");\n\nmodule.exports = function isFullyPopulatedPropertyDescriptor(ES, Desc) {\n\treturn isPropertyDescriptor(Desc)\n\t\t&& typeof Desc === 'object'\n\t\t&& '[[Enumerable]]' in Desc\n\t\t&& '[[Configurable]]' in Desc\n\t\t&& (ES.IsAccessorDescriptor(Desc) || ES.IsDataDescriptor(Desc));\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/helpers/isFullyPopulatedPropertyDescriptor.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/helpers/isInteger.js':
      /*!*******************************************************!*\
  !*** ./node_modules/es-abstract/helpers/isInteger.js ***!
  \*******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");\n\nvar $abs = GetIntrinsic(\'%Math.abs%\');\nvar $floor = GetIntrinsic(\'%Math.floor%\');\n\nvar $isNaN = __webpack_require__(/*! ./isNaN */ "./node_modules/es-abstract/helpers/isNaN.js");\nvar $isFinite = __webpack_require__(/*! ./isFinite */ "./node_modules/es-abstract/helpers/isFinite.js");\n\nmodule.exports = function isInteger(argument) {\n\tif (typeof argument !== \'number\' || $isNaN(argument) || !$isFinite(argument)) {\n\t\treturn false;\n\t}\n\tvar absValue = $abs(argument);\n\treturn $floor(absValue) === absValue;\n};\n\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/helpers/isInteger.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/helpers/isLeadingSurrogate.js':
      /*!****************************************************************!*\
  !*** ./node_modules/es-abstract/helpers/isLeadingSurrogate.js ***!
  \****************************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\nmodule.exports = function isLeadingSurrogate(charCode) {\n\treturn typeof charCode === 'number' && charCode >= 0xD800 && charCode <= 0xDBFF;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/helpers/isLeadingSurrogate.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/helpers/isNaN.js':
      /*!***************************************************!*\
  !*** ./node_modules/es-abstract/helpers/isNaN.js ***!
  \***************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          '\n\nmodule.exports = Number.isNaN || function isNaN(a) {\n\treturn a !== a;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/helpers/isNaN.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/helpers/isPrimitive.js':
      /*!*********************************************************!*\
  !*** ./node_modules/es-abstract/helpers/isPrimitive.js ***!
  \*********************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\nmodule.exports = function isPrimitive(value) {\n\treturn value === null || (typeof value !== 'function' && typeof value !== 'object');\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/helpers/isPrimitive.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/helpers/isTrailingSurrogate.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/es-abstract/helpers/isTrailingSurrogate.js ***!
  \*****************************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          "\n\nmodule.exports = function isTrailingSurrogate(charCode) {\n\treturn typeof charCode === 'number' && charCode >= 0xDC00 && charCode <= 0xDFFF;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/helpers/isTrailingSurrogate.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/helpers/maxSafeInteger.js':
      /*!************************************************************!*\
  !*** ./node_modules/es-abstract/helpers/maxSafeInteger.js ***!
  \************************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          '\n\nmodule.exports = Number.MAX_SAFE_INTEGER || 9007199254740991; // Math.pow(2, 53) - 1;\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/helpers/maxSafeInteger.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/helpers/mod.js':
      /*!*************************************************!*\
  !*** ./node_modules/es-abstract/helpers/mod.js ***!
  \*************************************************/
      /***/ (module) => {
        'use strict';
        eval(
          '\n\nvar $floor = Math.floor;\n\nmodule.exports = function mod(number, modulo) {\n\tvar remain = number % modulo;\n\treturn $floor(remain >= 0 ? remain : remain + modulo);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/helpers/mod.js?'
        );

        /***/
      },

    /***/ './node_modules/es-abstract/helpers/records/iterator-record.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/es-abstract/helpers/records/iterator-record.js ***!
  \*********************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar hasOwn = __webpack_require__(/*! hasown */ \"./node_modules/hasown/index.js\");\n\nmodule.exports = function isIteratorRecord(value) {\n\treturn !!value\n\t\t&& typeof value === 'object'\n\t\t&& hasOwn(value, '[[Iterator]]')\n\t\t&& hasOwn(value, '[[NextMethod]]')\n\t\t&& typeof value['[[NextMethod]]'] === 'function'\n\t\t&& hasOwn(value, '[[Done]]')\n\t\t&& typeof value['[[Done]]'] === 'boolean';\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/helpers/records/iterator-record.js?"
        );

        /***/
      },

    /***/ './node_modules/es-abstract/helpers/records/property-descriptor.js':
      /*!*************************************************************************!*\
  !*** ./node_modules/es-abstract/helpers/records/property-descriptor.js ***!
  \*************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"./node_modules/es-errors/type.js\");\n\nvar hasOwn = __webpack_require__(/*! hasown */ \"./node_modules/hasown/index.js\");\n\nvar allowed = {\n\t__proto__: null,\n\t'[[Configurable]]': true,\n\t'[[Enumerable]]': true,\n\t'[[Get]]': true,\n\t'[[Set]]': true,\n\t'[[Value]]': true,\n\t'[[Writable]]': true\n};\n\n// https://262.ecma-international.org/6.0/#sec-property-descriptor-specification-type\n\nmodule.exports = function isPropertyDescriptor(Desc) {\n\tif (!Desc || typeof Desc !== 'object') {\n\t\treturn false;\n\t}\n\n\tfor (var key in Desc) { // eslint-disable-line\n\t\tif (hasOwn(Desc, key) && !allowed[key]) {\n\t\t\treturn false;\n\t\t}\n\t}\n\n\tvar isData = hasOwn(Desc, '[[Value]]') || hasOwn(Desc, '[[Writable]]');\n\tvar IsAccessor = hasOwn(Desc, '[[Get]]') || hasOwn(Desc, '[[Set]]');\n\tif (isData && IsAccessor) {\n\t\tthrow new $TypeError('Property Descriptors may not be both accessor and data descriptors');\n\t}\n\treturn true;\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-abstract/helpers/records/property-descriptor.js?"
        );

        /***/
      },

    /***/ './node_modules/es-get-iterator/index.js':
      /*!***********************************************!*\
  !*** ./node_modules/es-get-iterator/index.js ***!
  \***********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          "\n\n/* eslint global-require: 0 */\n// the code is structured this way so that bundlers can\n// alias out `has-symbols` to `() => true` or `() => false` if your target\n// environments' Symbol capabilities are known, and then use\n// dead code elimination on the rest of this module.\n//\n// Similarly, `isarray` can be aliased to `Array.isArray` if\n// available in all target environments.\n\nvar isArguments = __webpack_require__(/*! is-arguments */ \"./node_modules/is-arguments/index.js\");\nvar getStopIterationIterator = __webpack_require__(/*! stop-iteration-iterator */ \"./node_modules/stop-iteration-iterator/index.js\");\n\nif (__webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")() || __webpack_require__(/*! has-symbols/shams */ \"./node_modules/has-symbols/shams.js\")()) {\n\tvar $iterator = Symbol.iterator;\n\t// Symbol is available natively or shammed\n\t// natively:\n\t//  - Chrome >= 38\n\t//  - Edge 12-14?, Edge >= 15 for sure\n\t//  - FF >= 36\n\t//  - Safari >= 9\n\t//  - node >= 0.12\n\tmodule.exports = function getIterator(iterable) {\n\t\t// alternatively, `iterable[$iterator]?.()`\n\t\tif (iterable != null && typeof iterable[$iterator] !== 'undefined') {\n\t\t\treturn iterable[$iterator]();\n\t\t}\n\t\tif (isArguments(iterable)) {\n\t\t\t// arguments objects lack Symbol.iterator\n\t\t\t// - node 0.12\n\t\t\treturn Array.prototype[$iterator].call(iterable);\n\t\t}\n\t};\n} else {\n\t// Symbol is not available, native or shammed\n\tvar isArray = __webpack_require__(/*! isarray */ \"./node_modules/isarray/index.js\");\n\tvar isString = __webpack_require__(/*! is-string */ \"./node_modules/is-string/index.js\");\n\tvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\tvar $Map = GetIntrinsic('%Map%', true);\n\tvar $Set = GetIntrinsic('%Set%', true);\n\tvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\n\tvar $arrayPush = callBound('Array.prototype.push');\n\tvar $charCodeAt = callBound('String.prototype.charCodeAt');\n\tvar $stringSlice = callBound('String.prototype.slice');\n\n\tvar advanceStringIndex = function advanceStringIndex(S, index) {\n\t\tvar length = S.length;\n\t\tif ((index + 1) >= length) {\n\t\t\treturn index + 1;\n\t\t}\n\n\t\tvar first = $charCodeAt(S, index);\n\t\tif (first < 0xD800 || first > 0xDBFF) {\n\t\t\treturn index + 1;\n\t\t}\n\n\t\tvar second = $charCodeAt(S, index + 1);\n\t\tif (second < 0xDC00 || second > 0xDFFF) {\n\t\t\treturn index + 1;\n\t\t}\n\n\t\treturn index + 2;\n\t};\n\n\tvar getArrayIterator = function getArrayIterator(arraylike) {\n\t\tvar i = 0;\n\t\treturn {\n\t\t\tnext: function next() {\n\t\t\t\tvar done = i >= arraylike.length;\n\t\t\t\tvar value;\n\t\t\t\tif (!done) {\n\t\t\t\t\tvalue = arraylike[i];\n\t\t\t\t\ti += 1;\n\t\t\t\t}\n\t\t\t\treturn {\n\t\t\t\t\tdone: done,\n\t\t\t\t\tvalue: value\n\t\t\t\t};\n\t\t\t}\n\t\t};\n\t};\n\n\tvar getNonCollectionIterator = function getNonCollectionIterator(iterable, noPrimordialCollections) {\n\t\tif (isArray(iterable) || isArguments(iterable)) {\n\t\t\treturn getArrayIterator(iterable);\n\t\t}\n\t\tif (isString(iterable)) {\n\t\t\tvar i = 0;\n\t\t\treturn {\n\t\t\t\tnext: function next() {\n\t\t\t\t\tvar nextIndex = advanceStringIndex(iterable, i);\n\t\t\t\t\tvar value = $stringSlice(iterable, i, nextIndex);\n\t\t\t\t\ti = nextIndex;\n\t\t\t\t\treturn {\n\t\t\t\t\t\tdone: nextIndex > iterable.length,\n\t\t\t\t\t\tvalue: value\n\t\t\t\t\t};\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\n\t\t// es6-shim and es-shims' es-map use a string \"_es6-shim iterator_\" property on different iterables, such as MapIterator.\n\t\tif (noPrimordialCollections && typeof iterable['_es6-shim iterator_'] !== 'undefined') {\n\t\t\treturn iterable['_es6-shim iterator_']();\n\t\t}\n\t};\n\n\tif (!$Map && !$Set) {\n\t\t// the only language iterables are Array, String, arguments\n\t\t// - Safari <= 6.0\n\t\t// - Chrome < 38\n\t\t// - node < 0.12\n\t\t// - FF < 13\n\t\t// - IE < 11\n\t\t// - Edge < 11\n\n\t\tmodule.exports = function getIterator(iterable) {\n\t\t\tif (iterable != null) {\n\t\t\t\treturn getNonCollectionIterator(iterable, true);\n\t\t\t}\n\t\t};\n\t} else {\n\t\t// either Map or Set are available, but Symbol is not\n\t\t// - es6-shim on an ES5 browser\n\t\t// - Safari 6.2 (maybe 6.1?)\n\t\t// - FF v[13, 36)\n\t\t// - IE 11\n\t\t// - Edge 11\n\t\t// - Safari v[6, 9)\n\n\t\tvar isMap = __webpack_require__(/*! is-map */ \"./node_modules/is-map/index.js\");\n\t\tvar isSet = __webpack_require__(/*! is-set */ \"./node_modules/is-set/index.js\");\n\n\t\t// Firefox >= 27, IE 11, Safari 6.2 - 9, Edge 11, es6-shim in older envs, all have forEach\n\t\tvar $mapForEach = callBound('Map.prototype.forEach', true);\n\t\tvar $setForEach = callBound('Set.prototype.forEach', true);\n\t\tif (typeof process === 'undefined' || !process.versions || !process.versions.node) { // \"if is not node\"\n\n\t\t\t// Firefox 17 - 26 has `.iterator()`, whose iterator `.next()` either\n\t\t\t// returns a value, or throws a StopIteration object. These browsers\n\t\t\t// do not have any other mechanism for iteration.\n\t\t\tvar $mapIterator = callBound('Map.prototype.iterator', true);\n\t\t\tvar $setIterator = callBound('Set.prototype.iterator', true);\n\t\t}\n\t\t// Firefox 27-35, and some older es6-shim versions, use a string \"@@iterator\" property\n\t\t// this returns a proper iterator object, so we should use it instead of forEach.\n\t\t// newer es6-shim versions use a string \"_es6-shim iterator_\" property.\n\t\tvar $mapAtAtIterator = callBound('Map.prototype.@@iterator', true) || callBound('Map.prototype._es6-shim iterator_', true);\n\t\tvar $setAtAtIterator = callBound('Set.prototype.@@iterator', true) || callBound('Set.prototype._es6-shim iterator_', true);\n\n\t\tvar getCollectionIterator = function getCollectionIterator(iterable) {\n\t\t\tif (isMap(iterable)) {\n\t\t\t\tif ($mapIterator) {\n\t\t\t\t\treturn getStopIterationIterator($mapIterator(iterable));\n\t\t\t\t}\n\t\t\t\tif ($mapAtAtIterator) {\n\t\t\t\t\treturn $mapAtAtIterator(iterable);\n\t\t\t\t}\n\t\t\t\tif ($mapForEach) {\n\t\t\t\t\tvar entries = [];\n\t\t\t\t\t$mapForEach(iterable, function (v, k) {\n\t\t\t\t\t\t$arrayPush(entries, [k, v]);\n\t\t\t\t\t});\n\t\t\t\t\treturn getArrayIterator(entries);\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (isSet(iterable)) {\n\t\t\t\tif ($setIterator) {\n\t\t\t\t\treturn getStopIterationIterator($setIterator(iterable));\n\t\t\t\t}\n\t\t\t\tif ($setAtAtIterator) {\n\t\t\t\t\treturn $setAtAtIterator(iterable);\n\t\t\t\t}\n\t\t\t\tif ($setForEach) {\n\t\t\t\t\tvar values = [];\n\t\t\t\t\t$setForEach(iterable, function (v) {\n\t\t\t\t\t\t$arrayPush(values, v);\n\t\t\t\t\t});\n\t\t\t\t\treturn getArrayIterator(values);\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\n\t\tmodule.exports = function getIterator(iterable) {\n\t\t\treturn getCollectionIterator(iterable) || getNonCollectionIterator(iterable);\n\t\t};\n\t}\n}\n\n\n//# sourceURL=webpack://equicore/./node_modules/es-get-iterator/index.js?"
        );

        /***/
      },

    /***/ './node_modules/iterate-value/index.js':
      /*!*********************************************!*\
  !*** ./node_modules/iterate-value/index.js ***!
  \*********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        eval(
          '\n\nvar getIterator = __webpack_require__(/*! es-get-iterator */ "./node_modules/es-get-iterator/index.js");\nvar $TypeError = TypeError;\nvar iterate = __webpack_require__(/*! iterate-iterator */ "./node_modules/iterate-iterator/index.js");\n\nmodule.exports = function iterateValue(iterable) {\n\tvar iterator = getIterator(iterable);\n\tif (!iterator) {\n\t\tthrow new $TypeError(\'non-iterable value provided\');\n\t}\n\tif (arguments.length > 1) {\n\t\treturn iterate(iterator, arguments[1]);\n\t}\n\treturn iterate(iterator);\n};\n\n\n//# sourceURL=webpack://equicore/./node_modules/iterate-value/index.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module['default']
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === 'object') return globalThis;
      /******/ try {
        /******/ return this || new Function('return this')();
        /******/
      } catch (e) {
        /******/ if (typeof window === 'object') return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__('./js/src/legacy.js');
  /******/
  /******/
})();
