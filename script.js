const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItem = document.querySelectorAll(".nav-item");

hamburger.addEventListener("click", function(){
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

navItem.forEach((item) => {
     item.addEventListener("click", function(){
       hamburger.classList.remove("active")
       navMenu.classList.remove("active");
     })
});