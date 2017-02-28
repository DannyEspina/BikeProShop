$(document).ready(function(){
    $("#shopDrop").mouseenter(function(){
        $("#shopPanel").fadeIn("fast")
        $("#shopDisplay").fadeIn("fast")
        $("#menu").addClass("menuShadow")
        $("#shopDrop").mouseleave(function(){
            $("#menu").removeClass("menuShadow")
            $("#shopPanel").fadeOut("fast")
            $("#shopDisplay").fadeOut("fast")
        });
        
   });
});