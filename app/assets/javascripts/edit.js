$(document).on('turbolinks:load', function() {
  $(".gravatar_edit img, .change").hover(function() {
      $(".gravatar_edit img").addClass("darken");
      $(".change").addClass("displayChange");
  }, function() {
    $(".gravatar_edit img").removeClass("darken");
    $(".change").removeClass("displayChange");
  });
});
