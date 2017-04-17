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




