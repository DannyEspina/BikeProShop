$(document).on('turbolinks:load', function() {

    $('.dropdown-toggle').removeClass('active');

       // Store top position
       var postion = $(this).scrollTop();

       $(window).scroll(function() {
           // Checks if page is root/home.html before executes code.
         if(top.location.pathname == "/") {
        // How many pixels am I relation to the top of the page.
        var wScroll = $(this).scrollTop();

        /* Start animation after the user scrolls pass 1/3 of the page and stop
        at 790 pixels down. If the window width is samller than 991 pixels then
        don't do the animation. */

        // subtract 150 to start sooner.
        var offset = $('.header').offset().top - 150;
        var max = offset + 340;

        /*
        As the user scroll down I want to move/translate the bibycle
        to the mechanic on any screen sizes.
        We first delcare the start variable which stores the scroll with
        a offset of the distance of the .header class (The start of the animation)
        Then we find the difference between the start and the end of the
        scroll animation: 790-450 = 340
        So the plan is for start to go from 1 - 340. We then have to
        convert the start variable to a 1-100 scale and store it into
        the percent variable: (start/340) * 100.
        I discovered from playing with the CSS that it takes up to 26vw
        for the bicycle to reach the mechanic. The vw unit is key for
        this animation to work on different screen sizes.
        So in order to convert percent to a vw scale we need to solve for
        x in this equation:
        percent / 100 = x / 26
        which is
        x = 26 * percent / 100
        we store this into the move variable.
        place the move variable into transform: translate(move,0)
        ta-da! The bicycle moves to customer to mechanic on any screen
        size.
        we can simply this by removing the 100 in the percent and move
        variables:
        var percent = (start / 340) * 100 => start / 340
        var move = (percent * 26) / 100 => percent * 26
        */
        if (wScroll > offset &&
            wScroll <= max) {
            var start = wScroll - offset;
            var percent = start / 340;
            var move = percent * 26

          $('.customBicycle').css({
              'transform': 'translate( '+move+'vw, 0px)'
          });
            }
          }
        });
        /*
        Loads google maps after each page direct. This fixes a bug where
        the map won't load if you go to a direct page and don't refresh.
        we need it to be inside $(document).on('turbolinks:load', function()
        */
        if (this.hash !== "" && location.pathname == "/" ) {
          myMap();
      }
});
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
        styles: [
  {
    "featureType": "administrative.country",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#f3f2f2"
      }
    ]
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
