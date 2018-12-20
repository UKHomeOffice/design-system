$('.navbar__list-items a').click(function (e) {
    e.preventDefault();
    var target = $(this);
    target.parents('.navbar').find('.active').removeClass('active');
    target.parents('li').addClass('active');
    target.parents().find('h1:first').text($(this).text());
});
