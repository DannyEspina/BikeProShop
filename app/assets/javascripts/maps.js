ready = function() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC7yJrbl-M3wlaFxBVhMcQDm1si7AwClCo&'  + 'callback=myMap';
  document.body.appendChild(script);
};

//google maps
function myMap() {
  //centers the map to the adress of the barnyard flea market
  var myCenter = new google.maps.LatLng(34.882067, -82.150943);
  //selects element to place the map which in this case is the map div
  var mapCanvas = document.getElementById("map");
  //adds the options
  var mapOptions = {
    center: myCenter,
    zoom: 15,
    scrollwheel: false,
    styles: [{
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [{
          "visibility": "on"
        }]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#f3f2f2"
        }]
      }
    ]
  };
  //creates the map
  var map = new google.maps.Map(mapCanvas, mapOptions);
  //places the marker on the barnyard flea market
  var marker = new google.maps.Marker({
    position: myCenter
  });
  marker.setMap(map);
}
