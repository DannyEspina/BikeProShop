$(document).on('turbolinks:load', function() {
var countLeft = 10;
var countRight = 0;
var targetID
window.onclick = function(e) {
if (event.target ==  document.getElementById("myModal")) {
     document.getElementById("myModal").style.display = "none";
     countLeft = 10;
     countRight = 0;
}
}
$(".galleryImage").click(function(e){
    targetID = e.target.id;
    displayModal(e);
});
 $(".tumbImgs").click(function(e) {
   var imgSrc = document.getElementById(e.target.id).src;
   var modalImg = document.getElementById("modalImg");
   modalImg.setAttribute("src", imgSrc);
 });

 $("#tumbLeft").click(function(e) {
   var tumbs= document.getElementsByClassName("tumbImgs");
   //add animations
   $("#tumbImg1").fadeOut(300);
   $(".notFirst").addClass("moveTumbLeft");
   $("#tumbImg9").css("opacity", "0").addClass("appearTumb").css("opacity", "1");
   setTimeout(function(){
   $("#tumbImg1").css("opacity", "1");

   id = parseInt(targetID) + countLeft;

   countLeft++
   countRight--;
   if(id > 28) {
     id -= 28;
     countLeft -= 28;
     countRight = 0;
   }
   if(targetID - countRight > 28){
     countRight = 0;
   }
   var next = document.getElementById(id).src;

   //exchanges image source to the left
   for(i = 0; i<tumbs.length; i++)
   {
     if(i<8){
     tumbs[i].setAttribute("src", tumbs[i+1].src);
     }
     else {
       tumbs[i].setAttribute("src", next);
     }
   }
   $("#tumbImg1").stop().show();
   $(".notFirst").removeClass("moveTumbLeft");
 }, 280);

 });

 $("#tumbRight").click(function(e) {
   var tumbs= document.getElementsByClassName("tumbImgs");

   $("#tumbImg9").fadeOut(300);
   $(".notLast").addClass("moveTumbRight");
   $("#tumbImg1").css("opacity", "0").addClass("appearTumb").css("opacity", "1");
   setTimeout(function(){
   id = parseInt(targetID) - countRight;
   countRight++;
   countLeft--;
   if(id == 0) {
     id = 28;
     countLeft += 28;
     countRight = targetID - 27;
   }
   if(targetID - countLeft < 0){
     countLeft = 28;
   }
   var next = document.getElementById(id).src;

   for(i = 0; i<tumbs.length; i++)
   {
     if(i<8){
     tumbs[8-i].setAttribute("src", tumbs[8-i-1].src);
     }
     else {
     tumbs[0].setAttribute("src", next);
     }
   }

   //had issues when tumbImg9 not reappearing. This worked
   $("#tumbImg9").fadeIn(1).stop().show();

   $(".notLast").removeClass("moveTumbRight");
   }, 280);
 });
//for top 10 bicycle page
var modal3 = document.getElementById("myModal3");
// Get the image and insert it inside the modal - use its "alt" text as a caption
$('.topTenPic, strong').click(function(e){

    //fancy button
    // var docStyle = document.documentElement.style;
    // var aElem = document.getElementById("shopBtn");

    // var boundingClientRect = aElem.getBoundingClientRect();

    // aElem.onmousemove = function (e) {

    //     var x = e.clientX - boundingClientRect.left;
    //     var y = e.clientY - boundingClientRect.top;
    //     console.log(boundingClientRect.left);
    //     var xc = boundingClientRect.width / 2;
    //     var yc = boundingClientRect.height / 2;

    //     var dx = x - xc;
    //     var dy = y - yc;

    //     docStyle.setProperty('--rx', dy / -1 + 'deg');
    //     docStyle.setProperty('--ry', dx / 10 + 'deg');

    // };

    // aElem.onmouseleave = function (e) {

    //     docStyle.setProperty('--ty', '0');
    //     docStyle.setProperty('--rx', '0');
    //     docStyle.setProperty('--ry', '0');
    // };

    // aElem.onmousedown = function (e) {

    //     docStyle.setProperty('--tz', '-25px');
    // };

    // document.body.onmouseup = function (e) {

    //     docStyle.setProperty('--tz', '-12px');
    // };


    var imgSrc3 = document.getElementById(e.target.id).src;
    var modalImg3 = document.getElementById("shopModalImg");
    modal3.style.display = "block";
    modalImg3.setAttribute("src", imgSrc3);

    var info = document.getElementById("info"+e.target.id); //im a genius
    var p =  document.getElementById("info"+e.target.id).childNodes;
    console.log(p[1]);

    info.style.display = "block";
    $("#infoBox").append(info);

     setTimeout(function() {
         p[1].style.bottom ="75%";
         p[1].style.opacity="1";

    }, 330);
  setTimeout(function() {
         p[3].style.bottom ="72%";
         p[3].style.opacity="1";
  }, 430);
  setTimeout(function() {
         p[5].style.bottom ="69%";
         p[5].style.opacity="1";
  }, 530);
    window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
        p[1].style.bottom ="62%";
        p[1].style.opacity="0";
        p[3].style.bottom ="69%";
        p[3].style.opacity="0";
        p[5].style.bottom ="66%";
        p[5].style.opacity="0";
    }
}
});

});

// Get the image and insert it inside the modal
function displayModal(e){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  //tumb.style.display = "block";

  var imgSrc = document.getElementById(e.target.id).src;
  var modalImg = document.getElementById("modalImg");
  modalImg.setAttribute("src", imgSrc);

  var tumbImgSrc;
  var tumbModal;
  var id;
  var maxid = 28;

  //adds 9 additional images for the lightbox
  for (i = 1; i <= 9; i++) {
    id = parseInt(e.target.id) + i;
    //wraps back to the first image
    if(id > maxid) {
      id -= 28;
    }
    tumbImgSrc = document.getElementById(id).src;
    tumbModal = document.getElementById("tumbImg" + i);
    tumbModal.setAttribute("src", tumbImgSrc);
  }
}
