//fading dropdown menu when hover
$(document).ready(function(){
    
    setTimeout(function(){
         $('.logo1').addClass('is-showing-logo');
         $('.logo2').addClass('is-showing-logo');
         
    }, 200);
    
         
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
       console.log(wScroll);
       //how many pixels am i relation to the top of the page
       var wScroll = $(this).scrollTop();
       //landing effect on logo
 
       if(wScroll > $('.tuneHeader').offset().top-($(window).height()/3) && wScroll<=790) {
           
         $('.cust_bicycle').css({
                'left': '0%',
              'transform' : 'translate('+wScroll/3+'%, 0px)' 
           });
      
          
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
        videoId: 'fsM5ZHv_8F0',
        playerVars: {
          autoplay: 1, //automatically plays video when page loads
          controls: 0, //removes controls
          loop: 1,
          modestbranding: 1, //remove youtube logo
          showinfo: 0, //removes title
          autohide: 1,
          listType:'playlist',
          list: 'PL1Qm-Ugsa8xXAy1G0tUQZWH0lsPDruDNN', //this is required for the loop to work
          iv_load_policy: 3, // video annotations to not be shown by default
          disablekb: 1, // disables keyboard controls
          rel: 0, //don't show related videos
         
        },
        events: {
            'onReady': onPlayerReady
            
        }
    }); // end of player delcaration 
  }

//mutes the video
function onPlayerReady(event){
    player.mute();
    player.setPlaybackQuality('hd720') // sets quality
}

