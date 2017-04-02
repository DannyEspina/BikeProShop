$(document).on('turbolinks:load', function() {

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
$(".galleryImage").click(function(e){

    var imgSrc = document.getElementById(e.target.id).src;
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.setAttribute("src", imgSrc);
   
    
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
});

});




