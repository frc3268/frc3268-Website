// jQuery
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';

script.onload = function() {
  document.body.appendChild(script);
};


// While we could use Position:sticky for some browsers, it is not a universal thus, I believe this is the better option
const scrollYBeforeLogoDisappears = 70;

window.onscroll = function() {
  if(!logo) {
    return;
  }
  if (scrollY >= scrollYBeforeLogoDisappears) {
    $('#logo').fadeOut(1000);
  } else {
    $('#logo').fadeIn(1000);
  }
};