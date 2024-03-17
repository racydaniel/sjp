document.addEventListener('DOMContentLoaded', function () {
  const sr = ScrollReveal();

  sr.reveal('.hidden', {
    duration: 1000,
    origin: 'bottom',
    distance: '20px',
  });

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
});
