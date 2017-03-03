$(document).ready(function(){
    $("#shopDrop").mouseenter(function(){
        $("#shopPanel").fadeIn("fast")
        
        $("#navBar").addClass("menuShadow")
      
        $("#shopDrop").mouseleave(function(){
            $("#navBar").removeClass("menuShadow")
          
            $("#shopPanel").fadeOut("fast")
            
        });
        
   });
});