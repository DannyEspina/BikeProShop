$(document).on('turbolinks:load', function() {
var countLeft = 10;
var countRight = 0;
var targetID;

// displays modal with the imaged clicked enlarged. saves id for tumb images.
$(".galleryImage").click(function(e){
    targetID = e.target.id;
    displayModal(e);
});

// displays picture that is in the tumb images row.
 $(".tumbImgs").click(function(e) {
   var imgSrc = document.getElementById(e.target.id).src;
   var modalImg = document.getElementById("modalImg");
   modalImg.setAttribute("src", imgSrc);
 });

// rotate to the previous image left
 $("#tumbRight").click(function(e) {
   var tumbs = document.getElementsByClassName("tumbImgs");
   var elementToFade = $("#tumbImg1");
   var elementsToMove = $(".notFirst");
   var moveUnit;

   if(window.innerWidth>1360)
   {
     moveUnit = 10;
   }
   else if(window.innerWidth > 1200)
   {
     moveUnit = 10
   }
   else if(window.innerWidth > 1000)
   {
     moveUnit = 12;
   }
   else if(window.innerWidth > 815)
   {
     moveUnit = 13;
   }
   else if(window.innerWidth > 695)
   {
     moveUnit = 17;
   }
   else if(window.innerWidth > 500)
   {
     moveUnit = 18;
   }
  else if(window.innerWidth > 450)
   {
     moveUnit = 18.5;
   }
   else
   {
     moveUnit = 18.7;
   }
   elementsToMove.animate({right: "+="+moveUnit+"%"},300,'swing', function() {
     $(this).removeAttr('style');
   });
   elementToFade.fadeTo(300 , 0, function() {
     $(this).fadeTo(0, 1);

     id = parseInt(targetID) + countLeft;
     countLeft++
     countRight--;
     if(id > 24) {
       id -= 24;
       countLeft -= 24;
       countRight = 0;
     }
     if(targetID - countRight > 24){
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
 });
 });
//rotate to the next image right
 $("#tumbLeft").click(function(e) {
   var elementToFade, elementsToMove, moveUnit;
   var tumbs = document.getElementsByClassName("tumbImgs");
   if(window.innerWidth>1360)
   {
     elementToFade = $("#tumbImg9");
     elementsToMove = $(".notLast");
     moveUnit = 10;
   }
   else if(window.innerWidth > 1200)
   {
     elementToFade = $("#tumbImg8");
     elementsToMove = $(".1thru7");
     moveUnit = 10
   }
   else if(window.innerWidth > 1000)
   {
     elementToFade = $("#tumbImg7");
     elementsToMove = $(".1thru6");
     moveUnit = 12;
   }
   else if(window.innerWidth > 815)
  {
     elementToFade = $("#tumbImg6");
     elementsToMove = $(".1thru5");
     moveUnit = 13;
   }
   else if(window.innerWidth > 695)
   {
     elementToFade = $("#tumbImg5");
     elementsToMove = $(".1thru4");
     moveUnit = 17;
   }
   else if(window.innerWidth > 500)
   {
     elementToFade = $("#tumbImg4");
     elementsToMove = $(".1thru3");
     moveUnit = 18;
   }
  else if(window.innerWidth > 450)
  {
    elementToFade = $("#tumbImg4");
    elementsToMove = $(".1thru3");
     moveUnit = 18.5;
   }
   else
   {
     elementToFade = $("#tumbImg4");
     elementsToMove = $(".1thru3");
      moveUnit = 18.7;
   }

   elementsToMove.animate({left: "+="+moveUnit+"%"},300,'swing', function() {
     $(this).removeAttr('style');
   });
   elementToFade.fadeTo(300 , 0, function() {
      $(this).fadeTo(0, 1);

      id = parseInt(targetID) - countRight;
      countRight++;
      countLeft--;
      if(id == 0) {
        id = 24;
        countLeft += 24;
        countRight = targetID - 23;
      }
      if(targetID - countLeft < 0){
        countLeft = 24;
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
   });
 });

// Closes the modal on either the close button or by clicking outside of the picture. It also resets tumb counters.
 window.onclick = function(e) {
 if (event.target ==  document.getElementById("closeModal") || event.target ==  document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
      countLeft = 10;
      countRight = 0;
    }
 }
});

// Get the image and insert it inside the modal
function displayModal(e){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";

  var imgSrc = document.getElementById(e.target.id).src;
  var modalImg = document.getElementById("modalImg");
  modalImg.setAttribute("src", imgSrc);

  var tumbImgSrc;
  var tumbModal;
  var id;
  var maxid = 24;

  //adds 9 additional images for the lightbox. starting from the image after the source
  for (i = 1; i <= 9; i++) {
    id = parseInt(e.target.id) + i;
    //wraps back to the first image
    if(id > maxid) {
      id -= 24;
    }
    tumbImgSrc = document.getElementById(id).src;
    tumbModal = document.getElementById("tumbImg" + i);
    tumbModal.setAttribute("src", tumbImgSrc);
    tumbModal.style.opacity = "0";
    $("#tumbLeft").css("opacity", "0");
    $("#tumbRight").css("opacity", "0");
  }

  //calls animation for each tumb. Each has a delay longer then it's last.
  for (i = 1; i <= 9; i++) {
    doScaledTimeout(i)
  }

//remove classes to restart animation when the user exits out and reclick an image.
$(".tumbImgs").removeClass("displayTumb");
$("#tumbLeft").removeClass("displayArrows");
$("#tumbRight").removeClass("displayArrows");
}

//sets a delay on each tumb image animation as it appears.
function doScaledTimeout(i) {
  setTimeout(function() {
    if(i == 1){
      $("#tumbLeft").addClass("displayArrows").css("opacity", "1");
    }
    if (i == 9) {
      $("#tumbRight").addClass("displayArrows").css("opacity", "1");
    }
    $("#tumbImg" + i).addClass("displayTumb").css("opacity", "1");

  }, i * 55);

}
