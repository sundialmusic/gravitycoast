/*
	Aerial by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function() {

  skel.init({    
    //		reset: 'full',
    breakpoints: {
      //			'global': { range: '*', href: 'css/style.css', viewport: { scalable: false } },
      //			'wide': { range: '-1680', href: 'css/style-wide.css' },
      //			'normal': { range: '-1280', href: 'css/style-normal.css' },
      //			'mobile': { range: '-736', href: 'css/style-mobile.css' },
      // 'extrasmall': {
      //   media: '(max-height: 533px)',
      //   href: 'css/style-extrasmall.css'
      // },
      // 'wide': {
      //   media: '(max-height: 320px)',
      //   href: 'css/style-wide.css'
      // }

      'narrow': {
        media: '(max-width: 540px)',  //600
        href: 'css/style-narrow.css',
      },
      'short': {
        media: '(max-height: 475px);,
//          and (max-width: 670px)',
        href: 'css/style-short.css'
      },
      'tall': {
        media: '(min-height: 1000px)', //780
        href: 'css/style-tall.css',
//        viewport: '(width: 520)'
      },
      'wide': {
        media: '(min-width: 1000px)', 
        href: 'css/style-wide.css'
//        viewport: '(height: 700) and (width: 900)'      
      }
    },
    
    viewport: {
    width: 520, // 770
    scalable: false
    }
  });

  // Events (JS).

  // Remove "loading" class once the page has fully loaded.
  window.onload = function() {
    document.body.className = '';
  }

  // Prevent scrolling on touch.
  //			window.ontouchmove = function() {
  //				return false;
  //			}

  // Fix scroll position on orientation change.
  window.onorientationchange = function() {
    document.body.scrollTop = 0;
  }

  /*

	// Events (jQuery).
	// Aerial doesn't need jQuery, but if you're going to use it anyway remove the
	// block of JS events above and use the jQuery-based ones below instead.

		jQuery(window)

			// Remove "loading" class once the page has fully loaded.
				.on('load', function() {
					jQuery('body').removeClass('loading');
				})

			// Prevent scrolling on touch.
				.on('touchmove', function() {
					return false;
				})

			// Fix scroll position on orientation change.
				.on('orientationchange', function() {
					jQuery('body').scrollTop(0);
				});

	*/

})();