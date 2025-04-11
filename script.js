/* script.js */

// Intersection Observer для анимации появления элементов
document.addEventListener('DOMContentLoaded', function() {
  const faders = document.querySelectorAll('.fade-in');
  
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});