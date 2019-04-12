$(document).ready(function() {


//ACCORDION TOGGLE

	var style = document.createElement("style");
		style.type = "text/css";

		document.body.appendChild( style );
		//style all toggles as closed
		$(".toggle").addClass("closed");
		$(".description").hide();//hide description

		//toggle click
		$(".toggle").click(function() {
			$(".description").slideUp("fast");
			$(".toggle").removeClass("opened").addClass("closed");
			if ($(this).next(".description").is(":hidden")) {
				$(this).next(".description").slideDown("fast");
				$(this).removeClass("closed").addClass("opened");
			}
		});

		$(".inner-toggle").click(function() {
	     	$(".description").slideUp("fast");
			$(".toggle").removeClass("opened").addClass("closed");
	     });

//ADD ie10 SPECIFIC STYLES
	if ($.browser.msie && $.browser.version == 10) {
  		$("html").addClass("ie10");
	}


//PLACEHOLDER IN IE

	function add() {
		if($(this).val() === ''){
		  $(this).val($(this).attr('placeholder')).addClass('placeholder');
		}
	  }
	  function remove() {
		if($(this).val() === $(this).attr('placeholder')){
		  $(this).val('').removeClass('placeholder');
		}
	  }
	  // Create a dummy element for feature detection
	  if (!('placeholder' in $('<input>')[0])) {
		// Select the elements that have a placeholder attribute
		$('input[placeholder], textarea[placeholder]').blur(add).focus(remove).each(add);
		// Remove the placeholder text before the form is submitted
		$('form').submit(function(){
		  $(this).find('input[placeholder], textarea[placeholder]').each(remove);
		});
	  }

// PICTURE ELEMENT

	document.createElement("picture");


//FLEXSLIDER

	$('.flexslider').flexslider();


//BACK TO TOP

	$('a.scrollToTop').click(function() {
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});


//ANCHOR SCROLL

	$(function() {
        $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
			  $('html,body').animate({
			  scrollTop: (target.offset().top)
			  }, 'slow');
			  return false;
			  }
			}
        });
	});


	//Open weblinks in nav in new window
    $("nav li.weblink a").attr("target","_blank");

    //Open pdfs in nav in new window
    $("nav a[href$='.pdf']").attr("target","_blank");

	//Remove icon for images linked to documents
	$( "a" ).has( "img" ).addClass( "no-icon" );

});

//O
