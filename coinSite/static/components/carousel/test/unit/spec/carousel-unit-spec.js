'use strict';

/*
 * Copyright (c) 2013 GE Global Research. All rights reserved.
 *
 * The copyright to the computer software herein is the property of
 * GE Global Research. The software may be used and/or copied only
 * with the written permission of GE Global Research or in accordance
 * with the terms and conditions stipulated in the agreement/contract
 * under which the software has been supplied.
 */

/**
 * @class Unit test spec
 *
 * Use any Mocha (http://visionmedia.github.io/mocha/), Chai (http://chaijs.com/), or Sinon (http://sinonjs.org/) statements here
 *
 * @author Jeff Reichenberg
 *
 */





define(['jquery', 'carousel'], function ($) {



    var _carouselStr = '\
    <div class="modal">\
        <div id="myCarousel" class="carousel slide">\
      <div class="carousel-inner ">\
        <div class="item">\
          <img src="http://placehold.it/400x300" alt="">\
          <div class="carousel-caption">\
            <h4>First Thumbnail label</h4>\
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\
          </div>\
        </div>\
        <div class="item active">\
          <img src="http://placehold.it/400x300" alt="">\
          <div class="carousel-caption">\
            <h4>Second Thumbnail label</h4>\
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\
          </div>\
        </div>\
        <div class="item">\
          <img src="http://placehold.it/400x300" alt="">\
          <div class="carousel-caption">\
            <h4>Third Thumbnail label</h4>\
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\
          </div>\
        </div>\
      </div>\
      <a class="left carousel-control" href="#myCarousel" data-slide="prev"><i class="icon-arrow-left"></i></a>\
      <a class="right carousel-control" href="#myCarousel" data-slide="next"><i class="icon-arrow-right"></i></a>\
    </div>\
    </div>\
    ';




    describe('Provides a JQuery plugin', function(){
        var $dom = $(_carouselStr);
            $dom.mdsCarousel( {} );
            $('body').append($dom);

        var carousel = $dom.data('mdsCarousel');

        it('should expose a carousel JQuery plugin', function() {
            expect($('*').carousel).not.to.equal(null);
        });


       it('should excerice modal', function(){
            carousel.configureForModal();
            //$( '.modal' ).trigger('shown')
            $( '.modal' ).modal('show')
            //console.log( "isShown:", $( '.modal' ) )
            //console.log( "isShown:", $( '.modal' ).attr('aria-hidden') );
            expect( $( '.modal' ).attr('aria-hidden') ).to.equal('false');
            $( '.modal' ).modal('hide');

            //console.log( "debug:isShown:", $( '.modal' ).attr('aria-hidden'));
            expect( $( '.modal' ).attr('aria-hidden') ).to.equal('true');
            carousel.updateNavigation({});
       });


        it('should instance a carousel optoins', function(){
           
                //console.log("$dom.data:",$dom.data);
            

                

            var options = carousel.getOptions();
                
                console.log("options:" , options );
/*               
                console.log("pause:" , options.pause );//hover
                console.log("paused:" , options.paused );//undefined
                console.log("interval:" , options.interval );//5000
                console.log("type:" , options.type );
*/                
                expect( options.interval ).to.equal(5000);

                
//                carousel.backstretch();
                    
            console.log( "left:", $dom.find(".left ")[0] );

            //insert so it has a width
            //carousel.$carousel.carousel('cycle');
            //$("#myCarousel").find(".left ").trigger("click");
            //$( $dom.find(".right ")[0] ).trigger("click");
            //console.log($dom.find(".left "))
            //$dom.find(".left").trigger("click");

        });




    });




/*
    describe('getOptions:', function(){
        console.log("getOptions");
        
        it('should instance a carousel', function(){
        
        $(document).append( "<p>Test</p>" );            
            console.log(window);
        });
    });
*/


/*

    describe('backstretch:', function(){
        console.log("backstretch");
    });
    describe('addNavigation:', function(){
        console.log("addNavigation");
    });
    describe('positionNavigation:', function(){
        console.log("positionNavigation");
    });
    describe('updateNavigation:', function(){
        console.log("updateNavigation");
    });
    describe('jumpToSlide:', function(){
        console.log("jumpToSlide");
    });
    describe('configureForModal:', function(){
        console.log("configureForModal");
    });

*/

});