define([
  'jquery'
],

function($) {
  'use strict';

  /* BACKTOTOP PUBLIC CLASS DEFINITION
  * =============================== */

  var BackToTop = function(element, options) {
    this.init('backtotop', element, options);
  };

  BackToTop.prototype = {
    constructor: BackToTop,

    init: function(type, element, options) {

      this.$backtop = $( element );
      this.$backtop.remove();

      this.$scrollMax = 0;
      this.$scoll = 0;
      this.$fadeDuration = 300;
      this.$showBack = true;
      $( window )
        .on('scroll', $.proxy(this.updateBackTopScroll, this))
        .on('resize', $.proxy(this.updateScrollMax, this));
      this.updateBackTopScroll();
      this.updateScrollMax();

      // Extend jQuery with a better easing function, so we can make
      // some pretty scrolling animations.
      // This easing function is from:
      // jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
      // Open source under the BSD License.
      // Copyright Â© 2008 George McGinley Smith
      // All rights reserved.
      $.extend($.easing, {
        def: 'easeInOutCubic',
        easeInOutCubic: function (x, t, b, c, d) {
          if ((t/=d/2) < 1) return c/2*t*t*t + b;
          return c/2*((t-=2)*t*t + 2) + b;
        }
      });
    },

    updateScrollMax: function() {
      this.$scrollMax = $(document).height() - $(window).height() - $(".footer").height() - 23;
      this.checkMax();
    },
    checkMax: function() {
      if (this.$scroll > this.$scrollMax ) {
        $(".backtop").css({bottom:20+(this.$scroll-this.$scrollMax)});
      } else {
        $(".backtop").css({bottom:20});
      }
    },
    updateBackTopScroll: function() {
      this.$scroll = $(window).scrollTop();

      if ( this.$scroll > 400) {
        if (!$(".backtop").closest('html').length) {
          if (this.$showBack) {
            $("body").append('<div class="backtop"><i class="icon-ico_arrowup_lg"></i></div>');
            this.initBackTop();
          }
        }
        this.checkMax();
      } else {
        if ( $(".backtop").closest('html').length ) {
          this.hideBack();
        }
      }
    },
    hideBack: function() {
      $(".backtop").animate( {opacity:0}, this.$fadeDuration, function() {
        $(this).remove();
      });
    },
    initBackTop: function() {
      $(".backtop").animate( {opacity:0.4}, this.$fadeDuration);
      $(".backtop").on('mouseenter', $.proxy(function(event) {
        $(event.currentTarget).animate( {opacity:1}, this.$fadeDuration);
      }, this))
      .on('mouseleave', $.proxy(function(event) {
        $(event.currentTarget).animate( {opacity:0.4}, this.$fadeDuration);
      }, this))
      .on('click', $.proxy(function(event) {
        this.$showBack = false;
        $( 'html, body' ).animate( { scrollTop: 0 }, 1000, 'easeInOutCubic', $.proxy(function() {
          this.$showBack = true;
        }, this));
        this.hideBack();
      },this));
    }
  };

    /* BACK TO TOP PLUGIN DEFINITION
  * ========================= */

  $.fn.backtotop = function(option) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('backtotop'),
          options = typeof option === 'object' && option;

      if (!data) $this.data( 'backtotop', ( data = new BackToTop(this, options) ) );
      if (typeof option === 'string') data[option]();
    });
  };

  $.fn.backtotop.Constructor = BackToTop;

  $(function () {
    $('.backtop').each(function() {
      $(this).backtotop();
    });
  });

});
