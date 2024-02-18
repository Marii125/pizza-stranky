(function ($) {
    $(function () {
        $(".jq--scroll-our-pizza").click(function () {
            $("html, body").animate({
                scrollTop: $(".jq--our-pizza").offset().top
            }, 1000);

        });

        $(".jq--scroll-about-pizza").click(function () {
            $("html, body").animate({
                scrollTop: $(".jq--about-pizza").offset().top
            }, 1000);

        });





        //        btn jq--scroll-btn-first

        $(".jq--scroll-btn-first").click(function () {
            $("html, body").animate({
                scrollTop: $(".jq--our-pizza").offset().top
            }, 1000);

        });

        $(".jq--scroll-btn-second").click(function () {
            $("html, body").animate({
                scrollTop: $(".jq--reference").offset().top
            }, 1000);

        });

        //      mobile-navigation  
        $(".jq--nav-icon").click(function () {

            //$(".nav-background").slideToggle();
            //$(".mobile-nav-back").fadeToggle();
            $("nav ul").fadeToggle();
        });


        $(function () {
            $('.jq--image-hamburger').on('click', function () {
                
                if ($('.nav-background').hasClass('aktivni')) {
                    $('.nav-background').removeClass('aktivni');
                } else {
                    $('.nav-background').addClass('aktivni');
                }


            });



        });
    });
})(jQuery)
