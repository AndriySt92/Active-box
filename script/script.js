$(function() {

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        console.log(introH);

        checkScroll(scrollPos, introH);
      
    });

    function checkScroll(scrollPos, introH) {
    	if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };
 /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 60
        }, 700);
    });

    /*nav toglle*/

    navToggle.on("click", function(event){
    	event.preventDefault();
    	nav.toggleClass("show");
    });

    /*slick js*/

    $('#reviewsSlider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots:true,
  fade: true,
  arrows: false

});

});

