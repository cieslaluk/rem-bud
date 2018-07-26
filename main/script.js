function myFunction() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


var $link = $(".topnav li:not(:last-child)");
$link.click(function () {
    if ($("#myTopnav").hasClass("responsive")) {
        $("#myTopnav").removeClass("responsive");
    }
});


$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $("nav").addClass("scrolling");
    } else {
        $("nav").removeClass("scrolling");
    }
});


if ($('#back-to-top').length) {
    var scrollTrigger = 100,
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}


$(document).ready(function () {

    $('a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

$(document).ready(function () {

    $('#about_us').css('opacity', 0);

    $('#about_us').waypoint(function () {
        $('#about_us').addClass('fadeIn');
    }, {
        offset: '50%'
    });

});

$(document).ready(function () {

    $('#pro').css('opacity', 0);

    $('#pro').waypoint(function () {
        $('#pro').addClass('fadeIn');
    }, {
        offset: '50%'
    });

});