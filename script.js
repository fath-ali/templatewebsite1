const navigation = document.querySelector(".navigation");
const toggle = document.querySelector(".toggle");
const background = document.querySelector(".background");

//LOGIN FORM
let icons = document.querySelector(".icons");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");

//NAVIGATIONS
const navs = document.querySelectorAll(".nav");

navs.forEach((nav) => {
  nav.addEventListener("click", () => {
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
    background.classList.toggle("active");
    icons.classList.toggle("active");
  });
});

//VIDEO CONTROLS
const videoBtn = document.querySelectorAll(".vid-btn");

const onClick = () => {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
  background.classList.toggle("active");
  icons.classList.toggle("active");
};

toggle.addEventListener("click", onClick);

// LOFIN FORM
formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});

formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

// VIDEO CONTROLS
videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});

// // var swiper = new Swiper(".review-slider", {
// //   spaceBetween: 20,
// //   loop: true,
// //   autoplay: {
// //     delyay: 2500,
// //     disableOnInteraction: false,
// //   },
// //   breakpoints: {
// //     640: {
// //       slidesPerView: 1,
// //     },
// //     768: {
// //       slidesPerView: 2,
// //     },
// //     1024: {
// //       slidesPerView: 3,
// //     },
// //   },
// // });
// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "vertical",
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });
