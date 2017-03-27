
window.onload = function () {
    // Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("galleryImage");
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = image_path('Gallery/tuneUp1.JPG');
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}
};
// When the user clicks on <span> (x), close the modal
