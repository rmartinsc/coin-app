define([
  'jquery'
],

function($) {
  'use strict';

  /* CONTACT LIST PUBLIC CLASS DEFINITION
  * ==================================== */

  var ContactList = function(element, options) {
    this.init('contact-list', element, options);
  };

  ContactList.prototype = {
    constructor: ContactList,

    init: function(type, element, options) {

    }

  };

  /* CONTACT LIST PLUGIN DEFINITION
  * ============================== */

  $.fn.contactList = function(option) {
    return this.each(function () {

      var $this = $(this),
          data = $this.data('contact-list'),
          options = typeof option === 'object' && option;

      if (!data) $this.data( 'contact-list', ( data = new ContactList(this, options) ) );
      if (typeof option === 'string') data[option]();

      // apply interactions
      $('.contact', $this).bind('click tap', function () {
        var listItem = $(this).parent();
        if ( $(".actions", listItem).is( ":hidden" ) ) {
          $(".actions", listItem).slideDown();
          $(".hide", listItem).show();
        } else {
          $(".actions", listItem).slideUp();
          $(".hide", listItem).hide();
        }
      });

    });
  };

  $.fn.contactList.Constructor = ContactList;

  $(function () {
    $('.contact-list').contactList();
  });

});
