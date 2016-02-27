var button = document.querySelector(".hotel-search-button");
var popup = document.querySelector(".hotel-search-form");

button.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("hide");
});


var headerLink = document.querySelector(".header-link");
var header = document.querySelector(".header");

headerLink.addEventListener("click", function(event) {
  event.preventDefault();
  header.classList.toggle("hidden-xs");
});