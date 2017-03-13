//fading dropdown menu when hover
$(document).ready(function(){
    $("#shopDrop").mouseenter(function(){
        $("#shopPanel").fadeIn("fast");
         
       $("#navBar").addClass("navLightBar");
      
      
        $("#shopDrop").mouseleave(function(){
          
            $("#shopPanel").fadeOut("fast");
           $("#navBar").removeClass("navLightBar");
            
        });
        
   });
   
  
});
 //logo parallax
 //listening to a window scroll event
   $(window).scroll(function(){
       //how many pixels am i relation to the top of the page
       var wScroll = $(this).scrollTop();
       
       //as the user scrolls the logo will move down slowly to give that parallax effect
       //a lot of trial and error to get the look I want
       $('.logo1').css({          
           'transform' : 'translate('+ wScroll/700 +'%, -'+ wScroll/23.25 +'%)'
           
           
       });
       $('.logo2').css({     
           //dividing wScroll will effect it exponentially not linearly
           'transform' : 'translate(-'+ wScroll/700 +'%, -'+ wScroll/24 +'%)'
           
       });
       
       
      // Landing Elements
      if(wScroll > $('#tuneInfo').offset().top- ($(window).height()/1.35)) {
            console.log("hi");
            $('#tuneHeader').addClass('is-showing-header');
            
            setTimeout(function(){
                $('#tuneInfo').addClass('is-showing-body');
            }, 100);
            
            
        
       
    
      }
   });
//google maps
 function myMap() {
          var myCenter = new google.maps.LatLng(34.882067, -82.150943);
          var mapCanvas = document.getElementById("map");
          var mapOptions = {center: myCenter, zoom: 15, scrollwheel:false};
          var map = new google.maps.Map(mapCanvas, mapOptions);
          var marker = new google.maps.Marker({position:myCenter});
          marker.setMap(map);
        }
        

// Loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replaces the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
  var player;
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
       
        videoId: 'kQ5QhgEPG8o',
        playerVars: {
          autoplay: 1, //automatically plays video when page loads
          controls: 0, //removes controls
          loop: 1,
          modestbranding: 1, //remove youtube logo
          showinfo: 0, //removes title
          autohide: 1,
          playlist: 'kQ5QhgEPG8o', //this is required for the loop to work
          iv_load_policy: 3, // video annotations to not be shown by default
          disablekb: 1, // disables keyboard controls
          rel: 0 //don't show related videos
        },
        events: {
            'onReady': onPlayerReady,
        }
    });
  }

function onPlayerReady(event){
    player.mute();
}