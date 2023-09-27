// change navbar style on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

//show/hide faq answer

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // change icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});

// show/hide nav menu

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // when windows width  is >= 600px
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
  },
});

ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
});
ScrollReveal().reveal(
  ".header__left, .categories__left, .footer__1, .footer__2",
  {
    delay: 500,
    origin: "left",
  }
);

ScrollReveal().reveal(
  ".header__right, .footer__3, .footer__4, .footer__socials, .about__achievements-right",
  { delay: 500, origin: "right" }
);
ScrollReveal().reveal(".categories__right, .courses h2", { delay: 500 });
ScrollReveal().reveal(
  ".courses__container, .faqs h2, .testimonials__container h2, .mySwiper, .testimonials .super-slide",
  {
    delay: 600,
  }
);
ScrollReveal().reveal(".faq, .footer__copyright", { delay: 600, origin: "up" });
