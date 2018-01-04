$(document).on('turbolinks:load', function() {

var shop = $('#shopDrop');
shop.click(function() {
  $('#shopLink').css({
    'color': 'white'
  });
  $('.caret').css({
    'border-top-color': 'white'
  });

  $(window).click(function() {
    $('#shopLink').css({
      'color': 'rgb(210, 210, 210)'
    });
    $('.caret').css({
      'border-top-color': 'rgb(210, 210, 210)'
    });

  });
});

var info = $('#infoDrop');
info.click(function() {
  $('#infoLink').css({
    'color': 'white'
  });
  $('.caret').css({
    'border-top-color': 'white'
  });

  $(window).click(function() {
    $('#infoLink').css({
      'color': 'rgb(210, 210, 210)'
    });
    $('.caret').css({
      'border-top-color': 'rgb(210, 210, 210)'
    });

  });


});


});
