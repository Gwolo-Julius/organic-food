/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector(".nav__cont");
const navClose = document.querySelector(".close__button");
const navToggle = document.querySelector(".toggle__button");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
if (navLink) {
  navLink.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  });
}

/*=============== ADD BLUR HEADER ===============*/

const blurHeader = () => {
  const header = document.querySelector(".header");
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};

window.addEventListener("scroll", blurHeader);

/*=============== SWIPER FAVORITES ===============*/

let swiperFavorite = new Swiper(".favorite__swiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  grabCursor: true,

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.querySelector(".scrollup");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id");

const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 58,
      sectionId = section.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home__social, .hero, .favorite__container, .sponsor__container`);
sr.reveal(`.home__title span:nth-child(1), .popular__product`, {
  origin: "left",
  opacity: 1,
});
sr.reveal(`.home__title span:nth-child(3), .popular__categories`, {
  origin: "right",
  opacity: 1,
});
sr.reveal(`.home__tooltip, .home__button, .home__button,  .footer`, {
  origin: "bottom",
});
sr.reveal(`.about__data, .contact__container-card`, { origin: "left" });
sr.reveal(`.about__img, .model__tooltip, .contact__container-right`, {
  origin: "right",
});
