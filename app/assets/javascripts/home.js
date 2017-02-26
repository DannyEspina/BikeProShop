$(document).ready(function(){
    $(".shopDrop").mouseenter(function(){
        $("#shopPanel").fadeIn()
        
        $(".shopDrop").mouseleave(function(){
            $("#shopPanel").fadeOut()
        });
        
   });
});