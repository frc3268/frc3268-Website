// While we could use Position:sticky for some browsers, it is not a universal thus, I believe this is the better option
const scrollYBeforeLogoDisappears = 70;
const logo = document.querySelector('#logo');

window.onscroll = function() {
  if(!logo) {
    return;
  }
  if (scrollY >= scrollYBeforeLogoDisappears) {
    logoFadeOut();
  } else {
    logoFadeIn();
  }
};

function logoFadeOut() {
  if(!logo) {
    return;
  }
  let logoOpacity = 1;
  function fade() {
    logoOpacity -= 0.01;
    logo.style.opacity = logoOpacity;
    if(logoOpacity <= 0) {
      clearInterval(fade);
      logo.style.opacity = 0;
    }
  }
  setInterval(fade, 10);
}

function logoFadeIn() {
  if(!logo) {
    return;
  }
  let logoOpacity = 0;
  function fade() {
    logoOpacity += 0.01;
    logo.style.opacity = logoOpacity;
    if(logoOpacity >= 1) {
      clearInterval(fade);
      logo.style.opacity = 1;
    }
  }
  setInterval(fade, 10);
}