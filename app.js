$(document).ready(function(){
 
 var typed = new Typed(".typing", {
      strings:["Front-End Developer", "From Boston", "16 years old"],
      typeSpeed:100,
      backSpeed:60,
      loop:true
});

  var typed = new Typed(".typing-2", {
     trings:["Front-End Developer", "From Boston", "16 years old"],
     typeSpeed:100,
     backSpeed:60,
     loop:true
});
});

function splashover() {
  $("#splash").fadeOut(400);
}

window.onload = function () {
  setTimeout(function () {
      splashover();
  }, 4300);
}
