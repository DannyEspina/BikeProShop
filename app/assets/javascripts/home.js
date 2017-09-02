//fading dropdown menu when hover
$(document).on('turbolinks:load', function() {


    $('.dropdown-toggle').removeClass('active');
    /*listening to a window scroll event */
     if (this.hash !== "" && location.pathname == "/index"
         ||this.hash !== "" && location.pathname == "/" && $(window).width()>700) {
    $(window).scroll(function() {

        //how many pixels am i relation to the top of the page
        var wScroll1 = $(this).scrollTop();
        //max distance the bicycle should travel
        var maxDistance = $(window).width()*0.35;
        //restart wScroll to 0 at the start of the animation
        var wScroll2 = wScroll1-($('.Header').offset().top - ($(window).height() / 3));
          if (wScroll1 > $('.Header').offset().top - ($(window).height() / 3) && wScroll1 <= 790 && wScroll2<maxDistance) {

          $('.cust_bicycle').css({
              //keep the bicycle next to the customer.
              'left': ($(window).width()-1440)/30+'%',
              'transform': 'translate(' +wScroll1/2.9 + '%, 0px)'
          });
          }
    });
}
    // Add smooth scrolling to all links in navbar + footer link
    $(".mechanicLink, .contactLink, .locationLink, footer a[href='#top']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior

        if (this.hash !== "" && location.pathname == "/index"
            ||this.hash !== "" && location.pathname == "/") {
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
    setTimeout(function() {
        $('.logo1').addClass('is-showing-logo');
        $('.logo2').addClass('is-showing-logo');

    }, 600);


    $("#shopDrop, #shopDropTrans").mouseenter(function() {

        $("#shopPanel, #shopPanelTrans").fadeIn("fast");

        $("#shopDrop, #shopDropTrans").mouseleave(function() {

            $("#shopPanel, #shopPanelTrans").fadeOut("fast");


        });

    });
    $("#userDrop, #userDropTrans").mouseenter(function() {

        $("#userPanel, #userPanelTrans").fadeIn("fast");

        $("#userDrop, #userDropTrans").mouseleave(function() {

            $("#userPanel, #userPanelTrans").fadeOut("fast");


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
