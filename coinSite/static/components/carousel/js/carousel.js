define([
  'jquery',
  'ge-bootstrap',
  'jquery-backstretch'
],

function($) {
  'use strict';

  /* CAROUSEL PUBLIC CLASS DEFINITION
  * =============================== */

  var MDSCarousel = function(element, options) {
    this.init('mdsCarousel', element, options);
  };

  MDSCarousel.prototype = {

    constructor: MDSCarousel,

    init: function(type, element, options) {
      this.type = type;
      this.$carousel = $(element);

      // Monkey-patch carousel's broken pause implementation.
      // It's possible to mouseover the carousel while it is animating
      // which causes the animation to break and it creates a zombie
      // interval which keeps running and can never be killed.
      // This ensures that when pause is called it first clears its intervals
      // then goes about doing its normal behavior.
      // This code is targeted at the carousel in Bootstrap 2.2.2
      // If you're using a version of Bootstrap that is greater than 2.2.2 then
      // you may not need this block (assuming they fixed the bug).
      var oldPause = $.fn.carousel.Constructor.prototype.pause;
      $.fn.carousel.Constructor.prototype.pause = function() {
        clearInterval(this.interval);
        return oldPause.apply(this, arguments);
      };

      this.backstretch();
      this.addNavigation();

      // Call bootstrap carousel, passing in any data attributes
      this.$carousel.carousel(this.getOptions(options));

      // Add special modal behaviors
      if (this.$carousel.parents('.modal').length) {
        this.configureForModal();
      }
    },

    getOptions: function(options) {
      options = $.extend({}, $.fn[this.type].defaults, options, this.$carousel.data());
      return options;
    },

    backstretch: function() {
      /**
       * Backstretch (http://srobbin.com/jquery-plugins/backstretch/)
       * -----------
       * Enable backstretch plugin on any element with data-background
       * attribute. This is used by the hero carousel to make images
       * full width.
       */
      this.$carousel.find('[data-background]').each(function(i, el) {
        var $this = $(el);
        // Backstretch won't be able to properly calculate the img width/height
        // in IE if the containing element is set to display: none.
        // Set the containing element to display: block, then wait for the image's
        // loaded event out of backstretch and remove the inline display style.
        $this.css('display', 'block');
        $this.on("backstretch.show", function() {
          $this.css('display', '');
        });

        $this.backstretch($this.data('background'));
      });
    },

    addNavigation: function() {
      // Teaser carousels don't use navigation controls
      if (this.$carousel.hasClass('teasers')) {
          return;
      }

      // Get the carousel's ID or generate one if not present.
      var d = Math.round(Math.random()*10000);
      var id = this.$carousel.attr('id') || this.$carousel.attr( 'id', 'carousel-' + d ).attr( 'id' );

      // Generate navigation controls for carousel based on number of slides.
      // NOTE: Bootstrap 2.3.x now has its own version of this so this should be removed
      // when the design systems version up.

      this.$nav = $( '<ul class="carousel-navigation"></ul>' );
      for ( var i = 0, l = this.$carousel.find('.item').length; i < l; i++ ) {
        this.$nav.append( '<li><a' + ( i === 0 ? ' class="active"' : '' ) + ' href="#' + id + '" data-to="' + i + '">' + i + '</a></li>' );
      }

      // Attach the navigation controls to the carousel.
      this.$carousel.append( this.$nav );
      this.positionNavigation();

      // Attach click events to the navigation items.
      this.$nav.find('a').click($.proxy(this.jumpToSlide, this));

      // Change navigation active state based on current active slide.
      this.$carousel.on('slid', $.proxy(this.updateNavigation, this));
    },

    // Align the navigation to either the center or right side of the carousel
    positionNavigation: function() {
      if (!this.$nav) {
          return;
      }

      // Find the edge of the container inside the carousel
      var offset = (this.$carousel.width() - this.$carousel.find('.container').width()) / 2;
      // Lightbox carousels won't have an offset so default to 5%
      if (!offset) {
        offset = '5%';
      }

      // Set the navigation to either the ride side, or default to
      // the center.
      // WARNING: Right side seems buggy on modals. Probably best to leave
      // those as centered.
      if (this.$carousel.data('navigation-position') === 'right') {
        this.$nav.css( { left: 'auto', right: offset } );
      } else {
        this.$nav.css( { 'margin-left': -( this.$nav.width() / 2 ) } );
      }
    },

    updateNavigation: function(e) {
      // Remove the active class from all nav elements
      this.$nav.find('a').removeClass('active');
      // Find the current active item and highlight that nav element
      var activeIndex = this.$carousel.find('.item.active').index();
      this.$nav.find('li a').eq(activeIndex).addClass('active');
    },

    jumpToSlide: function(e) {
      e.preventDefault();
      this.$carousel.carousel(parseInt($(e.target).data('to'), 10));
    },

    configureForModal: function() {
      // Initial state should be paused and invisible
      this.$carousel.carousel('pause');

      $( '.modal' ).on( 'show', $.proxy(function() {
        // Hide the nav to prevent shifting on load.
        this.$nav.hide();
      }, this));

      $( '.modal' ).on( 'shown', $.proxy(function() {
        this.$nav.show();
        this.positionNavigation();
        // Tell the carousel to start playing.
        // Bootstrap doesn't do a very good job of managing
        // its intervals so call pause first to kill any zombie
        // intervals that might be running.
        this.$carousel.carousel('pause');
        this.$carousel.carousel('cycle');
      }, this));

      $( '.modal' ).on( 'hide', $.proxy(function() {
        this.$carousel.carousel('pause');
      }, this));
    }
  };

  /* CAROUSEL PLUGIN DEFINITION
  * ========================= */

  $.fn.mdsCarousel = function(option) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('mdsCarousel'),
          options = typeof option === 'object' && option;

      if (!data) {
          $this.data( 'mdsCarousel', ( data = new MDSCarousel(this, options) ) );
      }
      if (typeof option === 'string') {
          data[option]();
      }
    });
  };

  $.fn.mdsCarousel.Constructor = MDSCarousel;

  $.fn.mdsCarousel.defaults = {
    pause: 'hover',
    interval: 5000
  };

  $(function () {
    $('.carousel').mdsCarousel();
  });

});
