<?php

/**
 * The template for displaying front page
 *
 * Contains the closing of the #content div and all content after.
 * Initial styles for front page template.
 *
 * @package equicore
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 */

namespace EquiCore;

// Featured image for Theme Checker (it's a requirement for theme to pass in official Theme directory)
// NB! Our dev version uses newtheme.sh build script which cleans ups things including this next line
$thumbnail = wp_get_attachment_url(get_post_thumbnail_id()) ?: THEME_SETTINGS['default_featured_image'];

get_header(); ?>

<main class="site-main">
  <?php
  the_content();
  air_edit_link();
  ?>
</main>

<?php get_footer();
