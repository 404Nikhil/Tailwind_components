function toggleMenu(flag) {
  let value = document.getElementById("menu");
  if (flag) {
      value.classList.remove("hidden");
  } else {
      value.classList.add("hidden");
  }
}


// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//     loop: true, 
//   });


