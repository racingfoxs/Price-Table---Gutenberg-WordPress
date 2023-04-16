<?php
/**
 * Plugin Name:       Price Table
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       price-table
 *
 * @package           tailwind-wp-starter-code
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function tailwind_wp_starter_code_price_table_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'tailwind_wp_starter_code_price_table_block_init' );


function my_enqueue_assets() {
    wp_enqueue_script( 'tailwind', 'https://cdn.tailwindcss.com' );
}
add_action( 'wp_enqueue_scripts', 'my_enqueue_assets' );
