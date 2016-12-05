/* tab navigation and content show/hide */
$('ul.tab-nav li a').click(function(){
    var target = "#" + $(this).data("target");
    $("ul.tab-nav li a").removeClass('active');
    $(this).addClass('active');
    $('.tab-content').not(target).addClass('js-hidden');
    $(target).removeClass('js-hidden');
});

$('.js-button-next-tab').click(function(e){

    e.preventDefault();
    var target = $(this).data("target");

    $('html,body').scrollTop(0);
    $('.tab-content').not("#" + target).addClass('js-hidden');
    $("#" +target).removeClass('js-hidden');
    $('ul.tab-nav li a[data-target="' + target + '"]').parent().prev().find('.hod-checkmark').removeClass('js-hidden');
    $('ul.tab-nav li a').removeClass('active');
    $('ul.tab-nav li a[data-target="' + target + '"]').addClass('active');

});
