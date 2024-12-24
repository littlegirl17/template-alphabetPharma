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

//--------------------------------

document.addEventListener("DOMContentLoaded", () => {
  let unitPrice = 300000; // Giá mặc định cho "Hộp"
  let quantity = 1;

  // Cập nhật giá khi chọn đơn vị
  const unitButtons = document.querySelectorAll(".modal_product_box_btn");
  unitButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const price = parseInt(button.getAttribute("data-price"));
      unitPrice = price; // Cập nhật giá đơn vị
      document.getElementById("product_price").textContent = unitPrice;
      updateTotalPrice(unitPrice, quantity);
    });
  });

  function updateTotalPrice(price, quantity) {
    const total = price * quantity;
    document.getElementById("total_price").textContent = total;
  }

  const decreaseButton = document.querySelector(".decrease");
  const increaseButton = document.querySelector(".increase");
  const quantityInput = document.querySelector(".quantity_model");

  decreaseButton.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityInput.value = quantity;
      updateTotalPrice(unitPrice, quantity);
    }
  });

  increaseButton.addEventListener("click", () => {
    quantity++;
    quantityInput.value = quantity;
    updateTotalPrice(unitPrice, quantity);
  });
});
//--------------------------------
function showModalProduct() {
  const modalProduct = document.getElementById("modalProduct");
  modalProduct.classList.add("show"); // Thêm lớp 'show' để modal hiển thị
  modalProduct.style.pointerEvents = "auto";

  const closeModal = document.getElementById("close_modal");
  closeModal.onclick = function () {
    modalProduct.classList.remove("show");
    modalProduct.style.pointerEvents = "none";
  };
}

window.addEventListener("click", function (event) {
  const modalProduct = document.getElementById("modalProduct");

  // Kiểm tra xem người dùng có click ra ngoài modal hay không
  if (event.target === modalProduct) {
    modalProduct.classList.remove("show"); // Ẩn modal
    modalProduct.style.pointerEvents = "none"; // Ngừng tương tác khi ẩn modal
  }
});
