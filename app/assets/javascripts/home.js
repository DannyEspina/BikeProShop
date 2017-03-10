$(document).ready(function(){
    $("#shopDrop").mouseenter(function(){
        $("#shopPanel").fadeIn("fast")
        
      
      
        $("#shopDrop").mouseleave(function(){
          
            $("#shopPanel").fadeOut("fast")
            
        });
        
   });
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
    function myYoutube(){
        var sparks = iframe.getElementById('sparks')
        sparks.mute();
    }