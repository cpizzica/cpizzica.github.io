$(document).ready(function(){

//mobile nav button//

	$("#nav").addClass("js").before('<div id="navBtn"><i class="fa fa-reorder fa-2x"></i></div>');
        $("#navBtn").click(function(){
            $("#nav").slideToggle();
        });
        $(window).resize(function(){
            if(window.innerWidth > 768) {
                $("#nav").removeAttr("style");
            }
        });

});