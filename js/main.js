//---------- Cấu hình cho Swiper 1: Slide tự động
const swiperConfig1 = {
  slidesPerView: 1, // Hiển thị 1 danh mục (hoặc slide)
  spaceBetween: 10, // Khoảng cách giữa các slide
  loop: true, // Lặp vô tận
  autoplay: {
    delay: 3000, // Chạy tự động mỗi 3 giây
    disableOnInteraction: false, // Tiếp tục chạy sau khi tương tác
  },
  pagination: {
    el: ".swiper-pagination-1", // Sử dụng pagination riêng cho Swiper 1
    clickable: true, // Cho phép click vào pagination
  },
  navigation: false, // Tắt nút prev và next
};

// Khởi tạo Swiper 1
const swiper1 = new Swiper(".swiper-container-1", swiperConfig1);

//---------- Cấu hình cho Swiper 2: Slide danh mục
const swiperConfig2 = {
  slidesPerView: 4, // Hiển thị 4 danh mục cùng lúc
  spaceBetween: 10, // Khoảng cách giữa các slide
  loop: true, // Tạo vòng lặp
  autoplay: {
    delay: 3000, // Tự động chuyển slide sau 3 giây
  },
  pagination: {
    el: ".swiper-pagination-2", // Sử dụng pagination riêng cho Swiper 2
    type: "progressbar", // Dạng bar thay vì dots
  },
  navigation: false, // Tắt nút prev và next
};

// Khởi tạo Swiper 2
const swiper2 = new Swiper(".swiper-container-cate", swiperConfig2);

//---------- Cấu hình cho Swiper 3: Sản phẩm
const swiperConfig3 = {
  slidesPerView: 2.5, // Hiển thị 2.5 sản phẩm
  spaceBetween: 20, // Khoảng cách giữa các slide
  loop: true, // Lặp vô tận
  navigation: false, // Tắt prev, next
  pagination: false, // Tắt pagination
  grabCursor: true, // Kéo thả
  centeredSlides: true, // Căn giữa slide
};

// Khởi tạo Swiper 3
const swiperProduct = new Swiper(".swiper-container-product", swiperConfig3);

// xử lý span độ dài
document
  .querySelectorAll(".product_main_content span")
  .forEach(function (element) {
    const maxLength = 30;
    if (element.innerText.length > maxLength) {
      element.innerText = element.innerText.substring(0, maxLength) + "...";
    }
  });
