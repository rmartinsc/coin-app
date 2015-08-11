define([
  'jquery',
  'slider'
],

function($) {
  'use strict';

  /* FEEDBACK PUBLIC CLASS DEFINITION
  * ==================================== */

  var Feedback = function(element, options) {
    this.init('feedback', element, options);
  };

  Feedback.prototype = {
    constructor: Feedback,
    init: function(type, element, options) {
      this.document = $(document);
      this.window = $(window);
      this.action = $('.feedback-action');
      this.setFooter.call(this);
      $(window)
        .on('scroll', $.proxy(this.handleScroll, this))
        .on('resize', $.proxy(this.handleResize, this));
    },
    setFooter: function() {
      this.footer = $('footer .footer-small-mobile').is(":visible") ? $('footer .footer-small-mobile') : $('footer .footer');
    },
    handleScroll: function () {
      var scrollmax = (this.document.height() - this.window.height()) - this.footer.outerHeight();
      if(this.document.scrollTop() > scrollmax) {
        this.action.css('position', 'absolute');
        this.action.css('top', (this.footer.offset().top - 45) + 'px');
      }
      else {
        this.action.css('position', 'fixed');
        this.action.css('top', '');
        this.action.css('bottom', '0px');
      }
    },
    handleResize: function () {
      this.setFooter.call(this);
      this.handleScroll.call(this);
    }
  };

  /* FEEDBACK PLUGIN DEFINITION
  * ============================== */

  $.fn.feedback = function(option) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('feedback'),
          options = typeof option === 'object' && option;
      if (!data) $this.data( 'feedback', ( data = new Feedback(this, options) ) );
      if (typeof option === 'string') data[option]();

      $this.on('shown.bs.modal', function() {
        if(Modernizr.inputtypes.range) {
          $('input[type=range].slider', $this).slider({ stepper: false, progress: true });
        }
        else {
          $('.radio-container').show().removeClass('visible-phone');
          $('.slider-container', $this).hide();
        }

      });

    });
  };

  $.fn.feedback.Constructor = Feedback;

  $(function () {
    $('.feedback').feedback();
  });

});
