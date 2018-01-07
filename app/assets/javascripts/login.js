$(document).on('turbolinks:load', function() {
     var modal2 = document.getElementById("loginModal");
  $("#navLogin, #sideLogin").click(function(){
         modal2.style.display = "block";

        window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
    });
    $(".closeLogin").click(function() {
      modal2.style.display = "none";
    });
});
