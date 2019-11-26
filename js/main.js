var navBtn = document.getElementById("btn-navbar");
var links = document.getElementById("nav-links");

// add event listener
navBtn.addEventListener("click", function()  {
  links.classList.toggle("show-links");
});