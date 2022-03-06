var typed = new Typed(".auto-input",{
  strings:["Web Develper","UI Designer","App Develper"],
  typeSpeed:100,
  backSpeed:100,
  loop: true
})
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const menubtn= document.querySelector(".menu-btn");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
 if (menuIcon.style.display==='none') {
   menu.style.transform="translateX(150%)";
   menu.style.transition="transform 1s";
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else{
   menu.style.transform="translateX(0)";
   menu.style.transition="transform 1s";
   closeIcon.style.display = "block";
   menuIcon.style.display = "none";
  }
}

menubtn.addEventListener("click", toggleMenu);