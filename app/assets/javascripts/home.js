//fading dropdown menu when hover
$(document).on('turbolinks:load', function() {

    //edit gravatar
    $(".zoomInGrav img, .change").hover(function(){
        $(".change").toggleClass("displayChange");
        $(".zoomInGrav img").toggleClass("zoomIn1");
    });

    $('.dropdown-toggle').removeClass('active');
    /*logo parallax
     *listening to a window scroll event */

    $(window).scroll(function() {

        //how many pixels am i relation to the top of the page
        var wScroll = $(this).scrollTop();
        //landing effect on logo
      
          if (wScroll > $('.Header').offset().top - ($(window).height() / 3) && wScroll <= 790) {
          console.log("hi");
          $('.cust_bicycle').css({
              'left': '0%',
              'transform': 'translate(' + wScroll / 3.2 + '%, 0px)'
          });
          }
    });

    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#top']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "" && window.location.href.indexOf("/index") > -1
        ||this.hash !== "" && window.location.href.indexOf("") > -1) {
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

    $(".navLightItem").mouseenter(function() {
        $("#navBar").addClass("navLightBar");

        $(".navLightItem").mouseleave(function() {
            $("#navBar").removeClass("navLightBar");
        });
    });

    $("#shopDrop").mouseenter(function() {

        $("#shopPanel").fadeIn("fast");

        $("#shopDrop").mouseleave(function() {

            $("#shopPanel").fadeOut("fast");


        });

    });
    $("#userDrop").mouseenter(function() {

        $("#userPanel").fadeIn("fast");

        $("#userDrop").mouseleave(function() {

            $("#userPanel").fadeOut("fast");


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
