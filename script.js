document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
});

/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

var scene = $('#scene').get(0);
var parallaxInstance = new Parallax(scene, {
  relativeInput: true,
	hoverOnly: true,
	calibrateX: true
});