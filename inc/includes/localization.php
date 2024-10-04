<?php

/**
 * Localization strings.
 *
 * @package equicore
 */

namespace EquiCore;

add_filter('air_helper_pll_register_strings', function () {
  $strings = [
    // 'Key: String' => 'String',
  ];

  /**
   * Uncomment if you need to have default equicore accessibility strings
   * translatable via Polylang string translations.
   */
  // foreach ( get_default_localization_strings( get_bloginfo( 'language' ) ) as $key => $value ) {
  // $strings[ "Accessibility: {$key}" ] = $value;
  // }

  return apply_filters('EquiCore_translations', $strings);
});

function get_default_localization_strings($language = 'en')
{
  $strings = [
    'en'  => [
      'Add a menu'                                   => __('Add a menu', 'equicore'),
      'Open main menu'                               => __('Open main menu', 'equicore'),
      'Close main menu'                              => __('Close main menu', 'equicore'),
      'Main navigation'                              => __('Main navigation', 'equicore'),
      'Back to top'                                  => __('Back to top', 'equicore'),
      'Open child menu for'                          => __('Open child menu for', 'equicore'),
      'Close child menu for'                         => __('Close child menu for', 'equicore'),
      'Skip to content'                              => __('Skip to content', 'equicore'),
      'Skip over the carousel element'               => __('Skip over the carousel element', 'equicore'),
      'External site'                                => __('External site', 'equicore'),
      'opens in a new window'                        => __('opens in a new window', 'equicore'),
      'Page not found.'                              => __('Page not found.', 'equicore'),
      'The reason might be mistyped or expired URL.' => __('The reason might be mistyped or expired URL.', 'equicore'),
      'Search'                                       => __('Search', 'equicore'),
      'Block missing required data'                  => __('Block missing required data', 'equicore'),
      'This error is shown only for logged in users' => __('This error is shown only for logged in users', 'equicore'),
      'No results found for your search'             => __('No results found for your search', 'equicore'),
      'Edit'                                         => __('Edit', 'equicore'),
      'Previous slide'                               => __('Previous slide', 'equicore'),
      'Next slide'                                   => __('Next slide', 'equicore'),
      'Last slide'                                   => __('Last slide', 'equicore'),
    ],
    'fi'  => [
      'Add a menu'                                   => 'Luo uusi valikko',
      'Open main menu'                               => 'Avaa päävalikko',
      'Close main menu'                              => 'Sulje päävalikko',
      'Main navigation'                              => 'Päävalikko',
      'Back to top'                                  => 'Siirry takaisin sivun alkuun',
      'Open child menu for'                          => 'Avaa alavalikko kohteelle',
      'Close child menu for'                         => 'Sulje alavalikko kohteelle',
      'Skip to content'                              => 'Siirry suoraan sisältöön',
      'Skip over the carousel element'               => 'Hyppää karusellisisällön yli seuraavaan sisältöön',
      'External site'                                => 'Ulkoinen sivusto',
      'opens in a new window'                        => 'avautuu uuteen ikkunaan',
      'Page not found.'                              => 'Hups. Näyttää, ettei sivua löydy.',
      'The reason might be mistyped or expired URL.' => 'Syynä voi olla virheellisesti kirjoitettu tai vanhentunut linkki.',
      'Search'                                       => 'Haku',
      'Block missing required data'                  => 'Lohkon pakollisia tietoja puuttuu',
      'This error is shown only for logged in users' => 'Tämä virhe näytetään vain kirjautuneille käyttäjille',
      'No results for your search'                   => 'Haullasi ei löytynyt tuloksia',
      'Edit'                                         => 'Muokkaa',
      'Previous slide'                               => 'Edellinen dia',
      'Next slide'                                   => 'Seuraava dia',
      'Last slide'                                   => 'Viimeinen dia',
    ],
  ];

  return (array_key_exists($language, $strings)) ? $strings[$language] : $strings['en'];
} // end get_default_localization_strings

function get_default_localization($string)
{ // phpcs:ignore Universal.NamingConventions.NoReservedKeywordParameterNames.stringFound
  if (function_exists('ask__') && array_key_exists("Accessibility: {$string}", apply_filters('air_helper_pll_register_strings', []))) {
    return ask__("Accessibility: {$string}");
  }

  return esc_html(get_default_localization_translation($string));
} // end get_default_localization

function get_default_localization_translation($string)
{ // phpcs:ignore Universal.NamingConventions.NoReservedKeywordParameterNames.stringFound
  $language = get_bloginfo('language');
  if (function_exists('pll_the_languages')) {
    $language = pll_current_language();
  }

  $translations = get_default_localization_strings($language);

  return (array_key_exists($string, $translations)) ? $translations[$string] : '';
} // end get_default_localization_translation
