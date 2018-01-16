//for top 10 bicycle page
var modal3 = document.getElementById("myModal3");
var closeModal = document.getElementById("closeModalShop")

// Get the image and insert it inside the modal
$('.topTenPic, strong').click(function(e){

    var imgSrc3 = document.getElementById(e.target.id).src;
    var modalImg3 = document.getElementById("shopModalImg");
    modal3.style.display = "block";
    modalImg3.setAttribute("src", imgSrc3);

    var info = document.getElementById("info"+e.target.id); //im a genius
    var p =  document.getElementById("info"+e.target.id).childNodes;

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

  // When the user clicks on <span> (x), close the modal
  //reset animation when the user clicks on another item.
  closeModal.onclick = function() {
      modal3.style.display = "none";
      p[1].style.bottom ="62%";
      p[1].style.opacity="0";
      p[3].style.bottom ="69%";
      p[3].style.opacity="0";
      p[5].style.bottom ="66%";
      p[5].style.opacity="0";
  }
//when user clicks anywhere outside, close the modal
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
