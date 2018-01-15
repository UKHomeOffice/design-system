/* tab navigation and content show/hide */
$('ul.tab__nav li a').click(function(){
    var target = "#" + $(this).data("target");
    $("ul.tab__nav li a").removeClass('active');
    $(this).addClass('active');
    $('.tab__content').not(target).addClass('js-hidden');
    $(target).removeClass('js-hidden');
});

/* grey tab navigation and content show/hide */
$('ul.tab__nav--grey li a').click(function(){
    var target = "#" + $(this).data("target");
    $("ul.tab__nav-grey li a").removeClass('active');
    $(this).addClass('active');
    $('.tab__content').not(target).addClass('js-hidden');
    $(target).removeClass('js-hidden');
});
