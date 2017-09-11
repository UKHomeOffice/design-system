/* horizontal-tab navigation and content show/hide */
$('ul.tab__horizontal li a').click(function(){
    var target = "#" + $(this).data("target");
    $("ul.tab__horizontal li").removeClass('active');
    $(this).parents('li').addClass('active');
    $('.tab__content-horizontal').not(target).addClass('js-hidden');
    $(target).removeClass('js-hidden');
});
