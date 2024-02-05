const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots");

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;
let slideInterval;

// Set up the slider
function init() {
  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });

  slideImage[0].classList.add("active");

  createNavigationDots();
  startSlideInterval();
}

init();

// Create navigation dots
function createNavigationDots() {
  for (let i = 0; i < numberOfImages; i++) {
    const dot = document.createElement("div");
    dot.classList.add("single-dot");
    navigationDots.appendChild(dot);

    dot.addEventListener("click", () => {
      goToSlide(i);
      clearInterval(slideInterval);
      startSlideInterval();
    });
  }

  navigationDots.children[0].classList.add("active");
}

// Next Button
nextBtn.addEventListener("click", () => {
  clearInterval(slideInterval);
  if (currentSlide >= numberOfImages - 1) {
    goToSlide(0);
  } else {
    currentSlide++;
    goToSlide(currentSlide);
  }
  startSlideInterval();
});

// Previous Button
prevBtn.addEventListener("click", () => {
  clearInterval(slideInterval);
  if (currentSlide <= 0) {
    goToSlide(numberOfImages - 1);
  } else {
    currentSlide--;
    goToSlide(currentSlide);
  }
  startSlideInterval();
});

// Go To Slide
function goToSlide(slideNumber) {
  slidesContainer.style.transform =
    "translateX(-" + slideWidth * slideNumber + "px)";

  currentSlide = slideNumber;

  setActiveClass();
}

// Set Active Class
function setActiveClass() {
  let currentActive = document.querySelector(".slide-image.active");
  currentActive.classList.remove("active");
  slideImage[currentSlide].classList.add("active");

  let currentDot = document.querySelector(".single-dot.active");
  currentDot.classList.remove("active");
  navigationDots.children[currentSlide].classList.add("active");
}

// Start slide interval
function startSlideInterval() {
  slideInterval = setInterval(() => {
    if (currentSlide >= numberOfImages - 1) {
      goToSlide(0);
    } else {
      currentSlide++;
      goToSlide(currentSlide);
    }
  }, 5000); // 5000 milliseconds = 5 seconds
}

window.onresize = function () {
  slideWidth = slideImage[0].clientWidth;
  slidesContainer.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
};
