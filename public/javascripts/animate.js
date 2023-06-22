document.getElementById("go-top-button").addEventListener("click", scrollUp);

function scrollUp(){
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0){
    window.scrollTo (0, 0);
  }
}

buttonUp = document.getElementById("go-top-button");
 
window.onscroll = function(){

   var scroll = document.documentElement.scrollTop || document.body.scrollTop;

   if (scroll > 220){
      buttonUp.style.transform = "scale(1)";    
   }else if ("scroll < 220"){
      buttonUp.style.transform = "scale(0)"
   }
}