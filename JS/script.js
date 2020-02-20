$(function () {
    $('ul.parent > li').hover(function () {
        $(this).find('ul.child').show(150);
    }, function () {
            $(this).find('ul.child').hide(100);
    })
});
