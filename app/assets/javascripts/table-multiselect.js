
// Select all checkbox change
$(".jsCheckboxAll").change(function() {
  $(".jsCheckbox").prop('checked', $(this).prop("checked")); //change all ".jsCheckbox" checked status
  if(false == $(this).prop("checked")) {
    $(".jsCheckbox").parents('tr').removeClass('checked');
  } else {
    $(".jsCheckbox").parents('tr').addClass('checked');
  }
});

//".jsCheckbox" change
$('.jsCheckbox').change(function(){
  //uncheck "select all", if one of the listed checkbox item is unchecked
  if(false == $(this).prop("checked")){ //if this item is unchecked
    $(".jsCheckboxAll").prop('checked', false); //change "select all" checked status to false
  }
  //check "select all" if all checkbox items are checked
  if ($('.jsCheckbox:checked').length == $('.jsCheckbox').length ){
    $(".jsCheckboxAll").prop('checked', true);
  }
});

// Select entire table row
$('.table-clickable tbody tr').click(function() {
  if ($(this).hasClass('checked')) {
    $(this).find('input').click();
    $(this).removeClass('checked');
  } else {
    $(this).find('input').click();
    $(this).addClass('checked');
  }
});
