/* <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="js/jquery.reveal.js" type="text/javascript"></script>

<script> */


/*
 * jQuery Reveal Plugin 1.0
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/


(function($) {

/*---------------------------
 Defaults for Reveal
----------------------------*/

/*---------------------------
 Listener for data-reveal-id attributes
----------------------------*/

    $('a[data-reveal-id]').live('click', function(e) {
        e.preventDefault();
        var modalLocation = $(this).attr('data-reveal-id');
        $('#'+modalLocation).reveal($(this).data());
    });

/*---------------------------
 Extend and Execute
----------------------------*/

    $.fn.reveal = function(options) {


        var defaults = {
            animation: 'fadeAndPop', //fade, fadeAndPop, none
            animationspeed: 300, //how fast animtions are
            closeonbackgroundclick: true, //if you click background will modal close?
            dismissmodalclass: 'close-reveal-modal' //the class of a button or element that will close an open modal
        };

        //Extend dem' options
        var options = $.extend({}, defaults, options);

        return this.each(function() {

/*---------------------------
 Global Variables
----------------------------*/
            var modal = $(this),
                topMeasure  = parseInt(modal.css('top')),
                topOffset = modal.height() + topMeasure,
                  locked = false,
                modalBG = $('.reveal-modal-bg');

/*---------------------------
 Create Modal BG
----------------------------*/
            if(modalBG.length == 0) {
                modalBG = $('<div class="reveal-modal-bg" />').insertAfter(modal);
            }

/*---------------------------
 Open & Close Animations
----------------------------*/
            //Entrance Animations
            modal.bind('reveal:open', function () {
              modalBG.unbind('click.modalEvent');
                $('.' + options.dismissmodalclass).unbind('click.modalEvent');
                if(!locked) {
                    lockModal();
                    if(options.animation == "fadeAndPop") {
                        modal.css({'top': $(document).scrollTop()-topOffset, 'opacity' : 0, 'visibility' : 'visible'});
                        modalBG.fadeIn(options.animationspeed/2);
                        modal.delay(options.animationspeed/2).animate({
                            "top": $(document).scrollTop()+topMeasure + 'px',
                            "opacity" : 1
                        }, options.animationspeed,unlockModal());
                    }
                    if(options.animation == "fade") {
                        modal.css({'opacity' : 0, 'visibility' : 'visible', 'top': $(document).scrollTop()+topMeasure});
                        modalBG.fadeIn(options.animationspeed/2);
                        modal.delay(options.animationspeed/2).animate({
                            "opacity" : 1
                        }, options.animationspeed,unlockModal());
                    }
                    if(options.animation == "none") {
                        modal.css({'visibility' : 'visible', 'top':$(document).scrollTop()+topMeasure});
                        modalBG.css({"display":"block"});
                        unlockModal()
                    }
                }
                modal.unbind('reveal:open');
            });

            //Closing Animation
            modal.bind('reveal:close', function () {
              if(!locked) {
                    lockModal();
                    if(options.animation == "fadeAndPop") {
                        modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
                        modal.animate({
                            "top":  $(document).scrollTop()-topOffset + 'px',
                            "opacity" : 0
                        }, options.animationspeed/2, function() {
                            modal.css({'top':topMeasure, 'opacity' : 1, 'visibility' : 'hidden'});
                            unlockModal();
                        });
                    }
                    if(options.animation == "fade") {
                        modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
                        modal.animate({
                            "opacity" : 0
                        }, options.animationspeed, function() {
                            modal.css({'opacity' : 1, 'visibility' : 'hidden', 'top' : topMeasure});
                            unlockModal();
                        });
                    }
                    if(options.animation == "none") {
                        modal.css({'visibility' : 'hidden', 'top' : topMeasure});
                        modalBG.css({'display' : 'none'});
                    }
                }
                modal.unbind('reveal:close');
            });

/*---------------------------
 Open and add Closing Listeners
----------------------------*/
            //Open Modal Immediately
        modal.trigger('reveal:open')

            //Close Modal Listeners
            var closeButton = $('.' + options.dismissmodalclass).bind('click.modalEvent', function () {
              modal.trigger('reveal:close')
            });

            if(options.closeonbackgroundclick) {
                modalBG.css({"cursor":"pointer"})
                modalBG.bind('click.modalEvent', function () {
                  modal.trigger('reveal:close')
                });
            }
            $('body').keyup(function(e) {
                if(e.which===27){ modal.trigger('reveal:close'); } // 27 is the keycode for the Escape key
            });


/*---------------------------
 Animations Locks
----------------------------*/
            function unlockModal() {
                locked = false;
            }
            function lockModal() {
                locked = true;
            }

        });//each call
    }//orbit plugin call
})(jQuery);


jQuery(document).ready(function($) {
    /* Browser detection patch */
    /* http://pupunzi.open-lab.com/2012/08/14/jquery-1-8-and-browser-detection/ */
    jQuery.browser = {};
    jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
    jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
    jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
    jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());

    function isCompatibilityMode() {
        var IE7BrowserMode = ($.browser.msie && $.browser.version == 7.0);
        var IE7DocumentMode = ($.browser.msie && document.documentMode && document.documentMode == 7);
        var compatibilityMode = ( IE7BrowserMode || IE7DocumentMode );
        return compatibilityMode;
    }

    function showCompatibilityWarning() {
        var html = ' <div id="myModal" class="reveal-modal"> <h2>You\'re in COMPATIBILITY MODE!</h2> <p>It looks as if you have compatibility mode turned <span class="green">on</span>. This will negatively impact your browsing experience on this site. For instructions on how to turn compatibility mode <span class="red">off</span>, click the button below.</p> <a class="right" href="http://windows.microsoft.com/en-us/internet-explorer/use-compatibility-view#ie=ie-10" target="_blank">How to Turn Off Compatibility Mode</a> <a class="close-reveal-modal">&#215;</a> </div> ';
        var s  = document.createElement('link');
        s.type = 'text/css';
        s.rel  = 'stylesheet';
        s.href = '//www.med.upenn.edu/js/ieCompat/ieCompat.css';
        document.getElementsByTagName("head")[0].appendChild(s);
        $('body').prepend(html);
        $('#myModal').reveal();
    }

    if (isCompatibilityMode()) {
        showCompatibilityWarning();
    }
});

