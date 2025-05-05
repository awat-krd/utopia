// Initialize Bootstrap Carousel
const carousel = new bootstrap.Carousel('#carouselExample', {
    interval: 3000, // Auto-rotate every 3 seconds
    wrap: true
  });
  
  // Smooth Scroll for Navbar Links (optional)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // Menu Filtering
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filter = button.dataset.filter;
      const cards = document.querySelectorAll('[data-category]');
      
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  // Scroll Animation Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  // Add to elements you want to animate
  document.querySelectorAll('#hotCoffee, #about, #contact').forEach(section => {
    section.classList.add('scroll-animate');
    observer.observe(section);
  });

// Hide loader when page loads
window.addEventListener('load', () => {
  document.querySelector('.loader-wrapper').classList.add('hidden');
});

