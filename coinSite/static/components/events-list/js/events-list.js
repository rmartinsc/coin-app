define([
  'jquery'
],

function($) {
  'use strict';

  /* MY-COMPONENT PUBLIC CLASS DEFINITION
  * ==================================== */

  var EventsList = function(element, options) {
    this.init('events-list', element, options);
  };

  EventsList.prototype = {
    constructor: EventsList,

    init: function(type, element, options) {
      // Liftoff!
    }

  };

  /* MY-COMPONENT PLUGIN DEFINITION
  * ============================== */

  $.fn.eventsList = function(option) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('events-list'),
          options = typeof option === 'object' && option;

      if (!data) $this.data( 'events-list', ( data = new EventsList(this, options) ) );
      if (typeof option === 'string') data[option]();

      // apply interactions
      $('.event a', $this).bind('click tap', function (event) {
        event.preventDefault();
        var event = $(this).parent();
        if ( $(".actions", event).is( ":hidden" ) ) {
          $(".actions", event).slideDown();
          $(".hide", event).show();
        } else {
          $(".actions", event).slideUp();
          $(".hide", event).hide();
        }
      });


    });
  };

  $.fn.eventsList.Constructor = EventsList;

  $(function () {
    $('.events-list').eventsList();
  });

});
