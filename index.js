window.addEventListener("scroll", function() {
    var header = doucment.querySelector(".nav");
    header.classList.toggle("sticky", window.scrollY > 0);
})