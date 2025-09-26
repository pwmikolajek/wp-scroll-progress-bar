<?php
/**
 * Plugin Name: Scroll Progress Bar
 * Plugin URI: https://example.com
 * Description: A draggable block that creates a scroll progress bar at the top of the page.
 * Version: 1.0.0
 * Author: Your Name
 * License: GPL v2 or later
 */

if (!defined('ABSPATH')) {
    exit;
}

class ScrollProgressBar {

    public function __construct() {
        add_action('init', array($this, 'register_block'));
        add_action('enqueue_block_editor_assets', array($this, 'enqueue_editor_assets'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_frontend_assets'));
    }

    public function register_block() {
        register_block_type('scroll-progress-bar/progress-bar', array(
            'attributes' => array(
                'height' => array(
                    'type' => 'number',
                    'default' => 4
                ),
                'color' => array(
                    'type' => 'string',
                    'default' => ''
                ),
                'backgroundColor' => array(
                    'type' => 'string',
                    'default' => 'rgba(0,0,0,0.1)'
                )
            ),
            'render_callback' => array($this, 'render_block'),
            'editor_script' => 'scroll-progress-bar-editor',
            'editor_style' => 'scroll-progress-bar-editor',
            'style' => 'scroll-progress-bar-frontend'
        ));
    }

    public function enqueue_editor_assets() {
        wp_enqueue_script(
            'scroll-progress-bar-editor',
            plugin_dir_url(__FILE__) . 'assets/editor.js',
            array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-data'),
            '1.0.0',
            true
        );

        wp_enqueue_style(
            'scroll-progress-bar-editor',
            plugin_dir_url(__FILE__) . 'assets/editor.css',
            array(),
            '1.0.0'
        );
    }

    public function enqueue_frontend_assets() {
        // Only enqueue if the block is present on the page
        if (has_block('scroll-progress-bar/progress-bar')) {
            wp_enqueue_script(
                'scroll-progress-bar-frontend',
                plugin_dir_url(__FILE__) . 'assets/frontend.js',
                array(),
                '1.0.0',
                true
            );

            wp_enqueue_style(
                'scroll-progress-bar-frontend',
                plugin_dir_url(__FILE__) . 'assets/frontend.css',
                array(),
                '1.0.0'
            );
        }
    }

    public function render_block($attributes) {
        $height = isset($attributes['height']) ? $attributes['height'] : 4;
        $color = isset($attributes['color']) ? $attributes['color'] : '#007cba';
        $backgroundColor = isset($attributes['backgroundColor']) ? $attributes['backgroundColor'] : 'rgba(0,0,0,0.1)';

        $style = sprintf(
            'height: %dpx; --progress-color: %s; --progress-bg: %s;',
            $height,
            esc_attr($color),
            esc_attr($backgroundColor)
        );

        // Debug output - this will show in the page source if the block is rendering
        $debug_comment = sprintf(
            '<!-- Scroll Progress Bar Debug: height=%s, color=%s, bg=%s -->',
            $height,
            $color,
            $backgroundColor
        );

        return $debug_comment . sprintf(
            '<div class="scroll-progress-bar" style="%s" data-debug="scroll-progress-active">
                <div class="scroll-progress-bar__fill" style="background-color: %s;"></div>
            </div>',
            $style,
            esc_attr($color)
        );
    }
}

new ScrollProgressBar();