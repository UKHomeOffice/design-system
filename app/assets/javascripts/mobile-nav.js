$("#app-mobile-nav-toggler").click(function(){
    $(".app-navigation").toggle();
    $(".app-subnav").toggle();
});

$('#app-mobile-nav-toggler').on('click', function(e) {
  $('.app-header-mobile-nav-toggler').toggleClass("app-header-mobile-nav-toggler-active");
  e.preventDefault();
});
