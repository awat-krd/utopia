// Initialize Bootstrap Carousel
const carousel = new bootstrap.Carousel('#carouselExample', {
    interval: 3000, // Auto-rotate every 3 seconds
    wrap: true
});

// Smooth Scroll for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top Button Functionality
const backToTopBtn = document.getElementById('backToTop');
const homeSection = document.getElementById('home');

window.addEventListener('scroll', () => {
    const homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;
    
    if (window.pageYOffset > homeSectionBottom) {
        backToTopBtn.style.display = 'flex';
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
        setTimeout(() => {
            if (!backToTopBtn.classList.contains('show')) {
                backToTopBtn.style.display = 'none';
            }
        }, 300);
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll to section function for menu navigation buttons
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const offsetTop = section.offsetTop - navbarHeight - 20; // 20px extra space
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Make scrollToSection available globally
window.scrollToSection = scrollToSection;

// Scroll to specific item function for special products
function scrollToSpecialItem(itemId) {
    const item = document.getElementById(itemId);
    if (item) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const offsetTop = item.offsetTop - navbarHeight - 30; // 30px extra space for better visibility
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        
        // item.style.boxShadow = '0 0 20px var(--accent-color)';
        // setTimeout(() => {
        //     item.style.boxShadow = '';
        // }, 2000);
    }
}

// Make scrollToSpecialItem available globally
window.scrollToSpecialItem = scrollToSpecialItem;

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
document.querySelectorAll('#HotCoffee, #IceCoffee, #ColdDrink').forEach(section => {
    section.classList.add('scroll-animate');
    observer.observe(section);
});

// Hide loader when page loads
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    if (loader) {
        loader.classList.add('hidden');
    }
});
