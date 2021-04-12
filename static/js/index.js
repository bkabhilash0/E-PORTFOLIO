import TypeIt from 'typeit';
import gsap from "gsap";
import Glide from '@glidejs/glide';
import AOS from 'aos';

const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");
const navBar = document.querySelector(".nav");
const form = document.getElementById('c-form')


form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const navLeft = menu.getBoundingClientRect().left;

navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});

// Fix Nav
const navHeight = navBar.getBoundingClientRect().height;
// console.log("Nav Height", navHeight);
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  // console.log("Scroll Height", scrollHeight);
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Scroll Behaviour form Hamburger Menu
const links = [...document.querySelectorAll(".scroll-link")];
links.map((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    const position = el.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    menu.classList.remove("show");
    navBar.classList.remove("show");
    document.body.classList.remove("show");
  });
});

// TypeIt
new TypeIt("#type1", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Web Developer", { delay: 400 })
  .pause(500)
  .delete(15)
  .type("Python Developer", { delay: 400 })
  .pause(500)
  .delete(9)
  .go();

new TypeIt("#type2", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Pythonista ", { delay: 400 })
  .pause(500)
  .delete(15)
  .type("Developer", { delay: 400 })
  .pause(500)
  .delete(9)
  .go();

// GSAP
gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".banner", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 3, y: -30 });
gsap.from(".hero a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });
gsap.from(".nav-item", {
  opacity: 0,
  duration: 1,
  delay: 1.2,
  y: 30,
  stagger: 0.2,
});
gsap.from(".icons span", {
  opacity: 0,
  duration: 1,
  delay: 4,
  x: -30,
  stagger: 0.2,
});

// GLIDE JS
const glide = document.querySelector(".glide");
if (glide) {
  new Glide(glide, {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 30,
    hoverpause: true,
    // autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: "ease-in-out",
    breakpoints: {
      996: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();
}

// Animate On Scroll
AOS.init();
