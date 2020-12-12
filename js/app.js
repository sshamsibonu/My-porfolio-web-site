window.addEventListener("scroll", function() {
    var navScroll = document.getElementById('nav')
    navScroll.classList.toggle("fixed", window.scrollY > 5);
})