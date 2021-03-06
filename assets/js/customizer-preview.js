/**
 * Customizer Live Preview
 *
 * @package   matilda
 * @copyright Copyright (c) 2016, Ashley Gibson
 * @license   GPL2+
 */

(function ($) {

    // Site title and description.
    wp.customize('blogname', function (value) {
        value.bind(function (to) {
            $('.site-title a').text(to);
        });
    });
    wp.customize('blogdescription', function (value) {
        value.bind(function (to) {
            $('.site-description').text(to);
        });
    });

    // Header text color.
    wp.customize('header_textcolor', function (value) {
        value.bind(function (to) {
            if ('blank' === to) {
                $('.site-title a, .site-description').css({
                    'clip': 'rect(1px, 1px, 1px, 1px)',
                    'position': 'absolute'
                });
            } else {
                $('.site-title a, .site-description').css({
                    'clip': 'auto',
                    'position': 'relative'
                });
                $('.site-title a, .site-description').css({
                    'color': to
                });
            }
        });
    });

    // Header BG
    wp.customize('header_image_bg', function (value) {
        value.bind(function (to) {
            $('#masthead').css('background-image', to);
        });
    });

    // Affiliate ID
    wp.customize('affiliate_id', function (value) {
        value.bind(function (to) {
            if (to) {
                $('#matilda-credit-link').attr('href', 'https://novelistplugin.com/downloads/matilda-theme/?ref=' + to);
            } else {
                $('#matilda-credit-link').attr('href', 'https://novelistplugin.com/downloads/matilda-theme/');
            }
        });
    });

    // Text Before Credits
    wp.customize('before_credits', function (value) {
        value.bind(function (to) {
            $('#matilda-text-before-copyright').empty().append(nl2br(to));
        });
    });

    // Copyright
    wp.customize('copyright_message', function (value) {
        value.bind(function (to) {
            $('#matilda-copyright').empty().append(to);
        });
    });

    /**
     * Convert "Enter" Key to <br> tags
     *
     * @param str
     * @param is_xhtml
     *
     * @returns {string}
     */
    function nl2br(str, is_xhtml) {
        var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
    }

})(jQuery);