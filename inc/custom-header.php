<?php
/**
 * Custom Header
 *
 * Implements the custom header feature.
 *
 * @package   matilda
 * @copyright Copyright (c) 2016, Ashley Gibson
 * @license   GPL2+
 */

/**
 * Custom Header Setup
 *
 * @uses  matilda_header_style();
 *
 * @since 1.0
 * @return void
 */
function matilda_custom_header_setup() {
	add_theme_support( 'custom-header', apply_filters( 'matilda/custom-header-args', array(
		'default-image'      => '',
		'default-text-color' => 'ffffff',
		'width'              => 1000,
		'height'             => 250,
		'flex-height'        => true,
		'flex-width'         => true,
		'wp-head-callback'   => 'matilda_header_style',
	) ) );
}

add_action( 'after_setup_theme', 'matilda_custom_header_setup' );

/**
 * Styles the header image and text displayed on the blog.
 *
 * @since 1.0
 * @return void
 */
function matilda_header_style() {
	$header_text_color = get_header_textcolor();

	/*
	 * If no custom options for text are set, let's bail.
	 * get_header_textcolor() options: Any hex value, 'blank' to hide text. Default: HEADER_TEXTCOLOR.
	 */
	if ( HEADER_TEXTCOLOR === $header_text_color ) {
		return;
	}

	// If we get this far, we have custom styles. Let's do this.
	?>
    <style type="text/css">
        <?php
			// Has the text been hidden?
			if ( ! display_header_text() ) :
		?>
        .site-title,
        .site-description {
            position: absolute;
            clip: rect(1px, 1px, 1px, 1px);
        }

        <?php
			// If the user has set a custom color for the text use that.
			else :
		?>
        .site-title a,
        .site-title a:hover,
        .site-description {
            color: #<?php echo esc_attr( $header_text_color ); ?>;
        }

        <?php endif; ?>
    </style>
	<?php
}