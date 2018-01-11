$(document).on('turbolinks:load', function() {

  $('.input-1').keyup(function() {

    var len = this.value.length;
    var pbText = $('.form-1 .progress-bar_text1');

    if (len === 0) {

      $('.form-1 .progress-bar_item1').each(function() {
        $(this).removeClass('active1')
      });
      $('.form-1 .active1').css('background-color', 'transparent');
      $(".progress-bar_text1").text("Password is blank");
    } else if (len > 0 && len <= 4) {

      $('.form-1 .progress-bar_item-1-1').addClass('active1');
      $('.form-1 .progress-bar_item-2-1').removeClass('active1');
      $('.form-1 .progress-bar_item-3-1').removeClass('active1');
      $('.form-1 .active1').css('background-color', '#FF4B47');
      $(".progress-bar_text1").text("Too Weak");
    } else if (len > 4 && len <= 8) {

      $('.form-1 .progress-bar_item-2-1').addClass('active1');
      $('.form-1 .progress-bar_item-3-1').removeClass('active1');
      $('.form-1 .active1').css('background-color', '#F9AE35');
      $(".progress-bar_text1").text("Could be stronger");
    } else {

      $('.form-1 .progress-bar_item1').each(function() {
        $(this).addClass('active1');
      });
      $('.form-1 .active1').css('background-color', '#2DAF7D');
      $(".progress-bar_text1").text("Strong password");
    }
  });

  $('.input-2').keyup(function() {

    var len = this.value.length;
    var pbText = $('.form-1 .progress-bar_text2');

    if (len === 0) {

      $('.form-1 .progress-bar_item2').each(function() {
        $(this).removeClass('active2')
      });
      $('.form-1 .active2').css('background-color', 'transparent');
      $(".progress-bar_text2").text("Password is blank");
    } else if (len > 0 && len <= 4) {

      $('.form-1 .progress-bar_item-1-2').addClass('active2');
      $('.form-1 .progress-bar_item-2-2').removeClass('active2');
      $('.form-1 .progress-bar_item-3-2').removeClass('active2');
      $('.form-1 .active2').css('background-color', '#FF4B47');
      $(".progress-bar_text2").text("Too Weak");
    } else if (len > 4 && len <= 8) {

      $('.form-1 .progress-bar_item-2-2').addClass('active2');
      $('.form-1 .progress-bar_item-3-2').removeClass('active2');
      $('.form-1 .active2').css('background-color', '#F9AE35');
      $(".progress-bar_text2").text("Could be stronger");
    } else {

      $('.form-1 .progress-bar_item2').each(function() {
        $(this).addClass('active2');
      });
      $('.form-1 .active2').css('background-color', '#2DAF7D');
      $(".progress-bar_text2").text("Strong password");
    }
  });
});
