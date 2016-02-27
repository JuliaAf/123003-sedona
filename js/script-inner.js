var headerLink = document.querySelector(".header-link");
var header = document.querySelector(".header");

headerLink.addEventListener("click", function(event) {
  event.preventDefault();
  header.classList.toggle("hidden-xs");
});
