const navLinks = document.querySelectorAll(".nav-item");
const collapsable = document.getElementById("navbarNav");
navLinks.forEach((navLink) => navLink.addEventListener("click", (_) => collapsable.classList.toggle("collapsing")));
