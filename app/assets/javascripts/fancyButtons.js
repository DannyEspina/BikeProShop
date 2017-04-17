// 'use strict';

 $(document).on('turbolinks:load', function() {
     
 // Design / Dribbble by:
// Adam Whitcroft
// URL: https://dribbble.com/shots/969445-The-Double-Delete

$("button").click(function(){
    if($(this).hasClass("confirm")){
        $(this).addClass("done");
        $("#spanDelete").text("Deleted");
        $("#linkDelete").click();
    } else {
        $(this).addClass("confirm");
        $("#spanDelete").text("Are you sure?");
    }
});

// Reset
$("button").on('mouseout', function(){
    if($(this).hasClass("confirm") || $(this).hasClass("done")){
        setTimeout(function(){
            $("button").removeClass("confirm").removeClass("done");
            $("#spanDelete").text("Delete");
        }, 3000);
    }
});

});