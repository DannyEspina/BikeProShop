//fading dropdown menu when hover
$(document).ready(function(){
    
    setTimeout(function(){
         $('.logo1').addClass('is-showing-logo');
         $('.logo2').addClass('is-showing-logo');
         
    }, 200);
    setTimeout(function(){
         $('.logo1').addClass('removeTransition');
         $('.logo2').addClass('removeTransition');
         
    }, 1000);
         
    $("#shopDrop").mouseenter(function(){
        
        $("#shopPanel").fadeIn("fast");
         
       $("#navBar").addClass("navLightBar");
      
      
        $("#shopDrop").mouseleave(function(){
          
            $("#shopPanel").fadeOut("fast");
           $("#navBar").removeClass("navLightBar");
            
        });
        
   });
   
  
});
 /*logo parallax
  *listening to a window scroll event */
   $(window).scroll(function(){
       
       //how many pixels am i relation to the top of the page
       var wScroll = $(this).scrollTop();
       //landing effect on logo
       
       //as the user scrolls the logo will move down slowly to give that parallax effect
       $('.logo1').css({          
           'transform' : 'translate('+ wScroll/700 +'%, -'+ wScroll/21.25 +'%)'
           
           
       });
       $('.logo2').css({     
           /*dividing wScroll will effect it exponentially not linearly.
            * meaning as you dividing with bigger and bigger numbers the 
            * the effect it does becomes less and less*/
           'transform' : 'translate(-'+ wScroll/700 +'%, -'+ wScroll/22 +'%)'
           
       });
       
       
      /* Landing Elements
       * if the amount of pixels scrolled down is bigger than a specified point in the window then... */
      if(wScroll > $('#tuneInfo').offset().top - ($(window).height()/1.35)) {
          
            /*... add is-showing-header class which chances opacity to 1 
             * and moves the element up 30 pixels */
            $('#tuneHeader').addClass('is-showing-header');
            
            //adds delay before showing tunInfo element by 100 milliseconds
            setTimeout(function(){
                $('#tuneInfo').addClass('is-showing-body');
            }, 100);
            
            
        
       
    
      }
   });
//google maps
 function myMap() {
          //centers the map to the adress of the barnyard flea market
          var myCenter = new google.maps.LatLng(34.882067, -82.150943); 
          //selects element to place the map which in this case is the map div
          var mapCanvas = document.getElementById("map");
          //adds the options
          var mapOptions = {center: myCenter, zoom: 15, scrollwheel:false};
          //creates the map 
          var map = new google.maps.Map(mapCanvas, mapOptions);
          //places the marker on the barnyard flea market
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
    }); // end of player delcaration 
  }

//mutes the video
function onPlayerReady(event){
    player.mute();
}