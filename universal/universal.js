// While we could use Position:sticky for some browsers, it is not a universal thus, I believe this is the better option
var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;
window.onscroll = function() {
  if (window.pageYOffset >= sticky) {
    //navbar.classList.add("sticky")
  } else {
    //navbar.classList.remove("sticky");
  }
};
