//fading dropdown menu when hover
$(document).ready(function(){
    
/*logo parallax
  *listening to a window scroll event */
   $(window).scroll(function(){
       console.log(wScroll);
       //how many pixels am i relation to the top of the page
       var wScroll = $(this).scrollTop();
       //landing effect on logo
 
       if(wScroll > $('.Header').offset().top-($(window).height()/3) && wScroll<=790) {
           
         $('.cust_bicycle').css({
                'left': '0%',
              'transform' : 'translate('+wScroll/3+'%, 0px)' 
           });
      
          
       }
    
      
   });
    // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#top']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } 
  });
    setTimeout(function(){
         $('.logo1').addClass('is-showing-logo');
         $('.logo2').addClass('is-showing-logo');
         
    }, 600);
    
         
    $("#shopDrop").mouseenter(function(){
        
        $("#shopPanel").fadeIn("fast");
         
       $("#navBar").addClass("navLightBar");
      
      
        $("#shopDrop").mouseleave(function(){
          
            $("#shopPanel").fadeOut("fast");
           $("#navBar").removeClass("navLightBar");
            
        });
        
   });
   
  
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
        videoId: 'mHDWmUWLqo8', //first video that plays
        playerVars: {
          autoplay: 1, //automatically plays video when page loads
          controls: 0, //removes controls
          loop: 1,
          modestbranding: 1, //remove youtube logo
          showinfo: 0, //removes title
          autohide: 1,
          listType:'playlist',
          list: 'PL1Qm-Ugsa8xXAy1G0tUQZWH0lsPDruDNN', //this will link to the youtube playlist. figure out the order there.
          iv_load_policy: 3, // video annotations to not be shown by default
          disablekb: 1, // disables keyboard controls
          rel: 0, //don't show related videos
         
        },
        events: {
            'onReady': onPlayerReady
            
        }
    }); // end of player delcaration 
  }

//sets the video quality
function onPlayerReady(event){
    
    player.setPlaybackQuality('hd720') // sets quality
}

