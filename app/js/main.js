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

    }
    else {
        $('li.active').removeClass('active');
        li.addClass('active');
        $('.submenu').slideToggle();
    }
};

function setupHeader()
{
    $("#mainHeader").fitText(1.2);
}