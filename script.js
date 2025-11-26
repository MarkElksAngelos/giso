document.addEventListener('DOMContentLoaded', () => {
  const dropdownItems = document.querySelectorAll('.nav-item[class*="has-dropdown"]');
  dropdownItems.forEach(item => {
    const menu = item.querySelector('div');
    if (!menu) return;
    item.addEventListener('mouseenter', () => {
      menu.classList.add('show');
    });
    item.addEventListener('mouseleave', () => {
      menu.classList.remove('show');
    });
  });
});

let loginNav = document.querySelector(".login-navbar");
let firstSec = document.querySelector(".first-sec");
let gosiNav = document.querySelector(".gosi-navbar");
let logoImg = document.querySelector(".gosi-logo");
let navtexts = document.querySelectorAll(".nav-text")

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    loginNav.style.display = "none";
    firstSec.style.display = "none";
    gosiNav.style.backgroundColor = "#030e4e";
    logoImg.src = "./image/logo-black.png";
    logoImg.style.height = "15rem";
    document.querySelectorAll(".nav-text").forEach(e => {
  e.style.color = "white";
});

    requestAnimationFrame(() => {
      logoImg.style.opacity = "1";
    });

  } else {
    loginNav.style.display = "flex";
    firstSec.style.display = "flex";
    gosiNav.style.backgroundColor = "";
    logoImg.src = "./image/logoW.png";
    logoImg.style.height = "4rem";
    document.querySelectorAll(".nav-text").forEach(e => {
  e.style.color = "#030e4e";
});

    

    requestAnimationFrame(() => {
      logoImg.style.opacity = "1";
    });
  }
});

const btn = document.querySelector('.language-select');
const menu = document.querySelector('.languages');

btn.addEventListener('click', () => {
  menu.style.display = 
    menu.style.display === "flex" ? "none" : "flex";
});