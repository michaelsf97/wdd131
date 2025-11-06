// temples.js - Temple album specific JavaScript functionality
// Author: Michael Smith Saavedra Forero

// Example: Display a custom message in the console
document.getElementById("currentyear").textContent = new Date().getFullYear();

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
}

if (navMenu.classList.contains("active")) {
    hamburger.textContent = "X";
} else {
    hamburger.textContent = "☰";
});