
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

        if (wScroll > $('.Header').offset().top - ($(window).height() / 3) &&
            wScroll <= 790) {
            var start = wScroll - 450;
            var move = (start/340) * 100;
          $('.cust_bicycle').css({
              /* As the user scroll down I want to move/translate the bibycle
              to the mechanic.

              Find the difference between the start and the end
              790-450 = 340

              start%/340 * 100 = the distance from the customer as you scroll.
              */

              'transform': 'translate( '+move+'%, 0px)'
          });
            }
          }
        });


    // Add smooth scrolling to all links in navbar + footer link
    $(".mechanicLink, .contactLink, .locationLink, footer a[href='#top']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior

        if (this.hash !== "" && location.pathname == "/index"
            ||this.hash !== "" && location.pathname == "/" && window.innerWidth > 700) {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });

  
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
        scrollwheel: false
    };
    //creates the map
    var map = new google.maps.Map(mapCanvas, mapOptions);
    //places the marker on the barnyard flea market
    var marker = new google.maps.Marker({
        position: myCenter
    });
    marker.setMap(map);
}
