'use strict';

define([
  'jquery',
  'ge-bootstrap'
], function ($) {

  return {
    init: function () {

      // TODO
      // 1) Include animation curves as their own component
      // 2) Allow scrolly to be called with the following params
      //    a. Offset
      //    b. Easing Curve
      //    c. Animation time

      // First rev is simply going to set offset to 120 for MDS

      // Enable ScrollSpy for dynamic navigation highlighting.
      $('body').scrollspy({
        offset: 120,
        target: '.primary-navbar'
      });

      // Extend jQuery with a better easing function, so we can make
      // some pretty scrolling animations.
      // This easing function is from:
      // jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
      // Open source under the BSD License.
      // Copyright © 2008 George McGinley Smith
      // All rights reserved.
      $.extend($.easing, {
        def: 'easeInOutCubic',
        easeInOutCubic: function (x, t, b, c, d) {
          if ((t/=d/2) < 1) return c/2*t*t*t + b;
          return c/2*((t-=2)*t*t + 2) + b;
        }
      });

      // Finally, add some smooth scrolling to our body when one of the
      // primary-navbar links are clicked (even though this isn't in
      // Bootstrap, which everyone said it was... we'll rebuild anyway).
      $('.primary-navbar a').click(function( event ) {
        event.preventDefault();
        var offset = $( $(this).attr('href') ).offset();
        if (offset) {
          $( 'html, body' ).animate( { scrollTop: offset.top - 120 }, 1000, 'easeInOutCubic' );
        }
      });
    }
  };

});

