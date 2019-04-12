/**
 * Created by nbaki on 8/18/14.
 */
(function( $ ) {
    var methods = {
        init : function(options) {
            var defaults = {
                'duration': 0,
                'collapsed': true,
                'open': null
            };
            var li_array = [];
            var settings = $.extend(defaults, options);

            /* GET THE PARENT NAVIGATION */
            var parent_navigation = $('meta[name="navigation"]').attr('content');

            /* If parent nav is set, strip & clean it */
            if (typeof(parent_navigation) != "undefined") {
                parent_navigation = cleanText(parent_navigation);
            }

            /* Get current navigation */
            var current_navigation = $('meta[name="navigation_current"]').attr('content')

            /* If current nav is set, strip & clean it */
            if (typeof(current_navigation) != "undefined") {
                current_navigation = cleanText(current_navigation);
            } else {
                li_array.push(parent_navigation);
            }


            /* GET PARENT TREE */
            this.find("li:has(ul)").each(function() {
                var link_text = cleanText($(this).children("a").text());
                if (link_text == current_navigation) {
                    li_array.push(current_navigation);
                    checkCurrentNavigation($(this));
                    return false;
                } else {
                    $(this).find("ul li").each(function() {
                        var child_text =  cleanText($(this).children("a").text());
                        if (child_text == current_navigation) {
                            checkCurrentNavigation($(this));
                            return false;
                        }
                    });
                }
            });

            if (parent_navigation == null) {
                parent_navigation = settings['open'];
                var url_pieces = window.location.href.split("/");
                url_pieces.splice(0, 3);
                var current_url = url_pieces.join("/");
            }

            /* IF THE SETTINGS ARE SET TO COLLAPSED: TRUE THEN IT WILL SLIDE UP ALL LI'S */
            if (settings['collapsed']) {
                this.find("li:has(ul)").children("ul").slideUp(settings['duration']);
            }

            /* IF THE PAGE YOU ARE ON IS ONE OF THE LINK PAGES, ADD CLASS CURRENTURL */
            this.find("a").each(function() {
                var link = $(this);
                if (typeof(current_url) != 'undefined') {
                    if (link.attr('href').search(current_url) != -1) {
                        link.addClass("currentUrl");
                    }
                }
            });

            this.find("li:has(ul)").each(function() {
                $(this).bind('click', function(e) {
                    var link_to = ($(e.target).attr("href"));
                    if (link_to == "#") {
                        e.preventDefault();
                    };

                    /* Opens & closes navigation that has a sub nav */
                    if ($(this).children("ul:first").is(':visible')) {
                        $(this).children("ul:visible").slideUp(settings['duration']);
                    }
                    else {
                        $(this).children("ul:hidden").slideDown(settings['duration']);
                    }
                });

                $(this).children("ul").bind('click', function(e) { e.stopPropagation() });
                var this_navigation = cleanText($(this).children("a").text());

                if (this_navigation == parent_navigation) {
                    $(this).find("ul").slideDown(settings['duration']);
                }
                else if ($(this).find(".currentUrl").length
                    || $(this).hasClass('currentUrl')){
                    $(this).find("ul").slideDown(settings['duration']);
                }
            })

            /* Close all except current navigation */
            return this.find("li:has(ul)").each(function() {
                var this_navigation = cleanText($(this).children("a").text());

                var ul = $(this).find("ul");
                if ($.inArray(this_navigation, li_array) >= 0) {
                    ul.slideDown(settings['duration']);
                } else {
                    if (this_navigation != parent_navigation) {
                        ul.slideUp(settings['duration']);
                    }
                }
            });

            /* Check whether the 'current_navigation' is a menu in itself or just a list item link, then get it's parent tree */
            function checkCurrentNavigation(element) {
                var parents = element.parents("ul");
                console.log(parents);
                $(parents).each(function() {
                    var parent_text = cleanText($(this).parent("li").children(':first-child').text());
                    li_array.push(parent_text);
                });
            }

            /* Strip and clean text */
            function cleanText(text) {
                return text.split(/\r\n|\r|\n/)[0].replace(/[^a-zA-Z]/g, '')
                    .substring(0, 50).toLowerCase();
            }
        },

        openAll : function( options ) {
            var defaults = {
                'duration': 0
            };
            var settings = $.extend(defaults, options);
            return this.children('li:has(ul)').each(function() {
                $(this).children("ul").each(function() {
                    $(this).slideDown(settings['duration']);
                });
            });
        }


    };

    $.fn.sidenav = function( method, options ) {
        if (methods[method]) {
            return methods[method].apply( this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method == 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.sidenav');
        }
    };
})( jQuery );