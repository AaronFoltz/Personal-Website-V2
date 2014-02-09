var EXTENSION = '.html';
var HOME = 'home' + EXTENSION;

$(document).ready(function () {
    $('a.button').click(function (event) {
        // event.preventDefault();
        // $('#content').load(event.target.id + EXTENSION);

        // Reset all other button background colors
        $(".left-nav li a").removeClass('active');

        $(event.target).addClass('active');
    });


    $("li:has(a#projects)").hover(function (ev) {
        ev.stopPropagation();
        toggleAccordion($(this));
    });
});

function toggleAccordion(li) {
    if(li.hasClass('active')) {
        li.removeClass('active');
        $('.submenu', li).slideToggle();

        // $("li a#projects").css('margin-bottom', '1em');
    }
    else {
        // Remove margin below hovered li
        // $("li a#projects").css('margin-bottom', 0);

        // $('li.active .submenu').slideDown();
        $('li.active').removeClass('active');
        li.addClass('active');
        $('.submenu').slideToggle();
    }
};