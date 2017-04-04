$(document).on('turbolinks:load', function() { 
     var modal2 = document.getElementById("myModal2");
    $("#login").click(function(){
         modal2.style.display = "block";
         
        window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
    });
});