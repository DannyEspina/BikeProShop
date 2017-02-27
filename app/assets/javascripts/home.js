$(document).ready(function(){
    $("#shopDrop").mouseenter(function(){
        $("#shopPanel").fadeIn("fast")
        $("#shopDisplay").fadeIn("fast")
        $("#shopDrop").mouseleave(function(){
            $("#shopPanel").fadeOut("fast")
             $("#shopDisplay").fadeOut("fast")
        });
        
   });
});