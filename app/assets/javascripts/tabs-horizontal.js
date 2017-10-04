// as JS is working, add 'tabs' class, which will style tabs and allow
// functionality
$('.js-tabs').addClass('tabs');

// hide all of the tab content for now
$('.tab-content').hide();

// check for hash in url and open that tab if its there, else show the first
// tab and content
var hash = window.location.hash;
if (hash) {
    $('.tabs a[href="' + hash +'"]').parent('li').addClass('active');
    $(hash).show();
} else {
    $('.tab-content:first').show();
    $('.tabs ul li:first').addClass('active');
}

$('.tabs a').click(function(e){
  e.preventDefault();

  var $this = $(this);
  var currentTab = $this.attr('href');

  // remove active class from nav and add to newly selected tab
  $(".tabs li").removeClass('active');
  $this.parent().addClass('active');

  // hide all of the tab content and show newly selected then update hash in URL
  $('.tab-content').hide();
  $(currentTab).show();
  history.pushState({}, '', currentTab);
});
