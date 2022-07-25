const navBtn = document.querySelector(".nav .btn__navbar");
const navCloseBtn = document.querySelector(".nav .close-btn__navbar");
const navbar = document.querySelector(".navbar");

navBtn.addEventListener("click", () => navbar.classList.add("open"))
navCloseBtn.addEventListener("click", () => navbar.classList.remove("open"))