//---------- START SWIPER SLIDE

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true, // Lặp vô tận
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000, // Chạy tự động mỗi 3 giây
    disableOnInteraction: false, // Tiếp tục chạy sau khi tương tác
  },
});

//---------- END SWIPER SLIDE
