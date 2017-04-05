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

//for top 10 bicycle page
var modal3 = document.getElementById("myModal3");
// Get the image and insert it inside the modal - use its "alt" text as a caption
$('.topTenPic, strong').click(function(e){

    var imgSrc3 = document.getElementById(e.target.id).src;
    var modalImg3 = document.getElementById("shopModalImg");
    modal3.style.display = "block";
    modalImg3.setAttribute("src", imgSrc3);
    
    var info = document.getElementById("info"+e.target.id); //im a genius
    
    info.style.display = "block";
    $("#infoBox").append(info);
    setTimeout(function() {
        $('#infoBox').css({"left" :"49%", "opacity": "1"});

    }, 330);
 
    
    
    window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
        $('#infoBox').css({"left" :"1%", "opacity": "0"});
    }
}
});

});




