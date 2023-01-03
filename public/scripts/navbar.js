let navBarBtn = document.getElementById("navbar-btn");
let navBar = document.querySelector("nav");
let navBarTitle = document.querySelector(".navbar-title");
let navList = document.querySelector(".nav-list");
let helpList = document.querySelector(".help-list");
let header = document.querySelector("header");
let toggleIcon = document.querySelector(".toggle-icon");
let navBarCloseBtn = document.querySelector(".navbar-close-btn");

var id = null;
function moveNavBar() {
  var width = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (width == 100) {
      clearInterval(id);
    } else {
      width++;
      navBar.style.width = width + "vw";
      navBar.style.opacity = width + "%";
    }
  }
}

navBarBtn.addEventListener("click", () => {
  moveNavBar();
  navBar.classList.toggle("hidden");
  navBarTitle.classList.toggle("hidden");
  navList.classList.toggle("hidden");
  helpList.classList.toggle("hidden");
  header.classList.toggle("hidden");
  navBar.classList.toggle("flex");
  navBar.classList.toggle("flex-col");
  helpList.classList.toggle("flex");
  helpList.classList.toggle("flex-col");
  helpList.classList.toggle("items-center");
  navList.classList.toggle("flex");
  navList.classList.toggle("flex-col");
  navList.classList.toggle("items-center");
  navBarCloseBtn.style.right = "1rem";
  navBarCloseBtn.style.top = "50%";
});

navBarCloseBtn.addEventListener("click", () => {
  navBar.classList.toggle("hidden");
  navBarTitle.classList.toggle("hidden");
  header.classList.toggle("hidden");
  navList.classList.toggle("hidden");
  helpList.classList.toggle("hidden");
});
