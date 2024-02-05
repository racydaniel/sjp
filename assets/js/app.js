// Initialize ScrollReveal
const sr = ScrollReveal();

// Define the reveal animation for elements with the class '.hidden'
sr.reveal('.hidden', {
  duration: 1000,   // Animation duration in milliseconds
  origin: 'bottom', // Animation starting point
  distance: '20px', // Distance to reveal elements
});

// You can keep your IntersectionObserver code for other functionalities
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
