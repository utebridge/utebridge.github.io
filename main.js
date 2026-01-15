// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('show');
            
            // Toggle hamburger icon to X
            const svg = mobileMenuToggle.querySelector('svg');
            const path = svg.querySelector('path');
            
            if (mobileMenu.classList.contains('show')) {
                path.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            } else {
                path.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu?.querySelectorAll('a');
    mobileMenuLinks?.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('show');
            
            const svg = mobileMenuToggle.querySelector('svg');
            const path = svg.querySelector('path');
            path.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll-based header shadow
    const header = document.getElementById('global-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 10) {
                header.classList.add('shadow-lg');
            } else {
                header.classList.remove('shadow-lg');
            }
        });
    }
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all code-sections for animation
    document.querySelectorAll('.code-section').forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
    });
    
    // Make first section visible immediately
    const firstSection = document.querySelector('.code-section');
    if (firstSection) {
        firstSection.style.opacity = '1';
    }
});

// Console message for developers
console.log('%c Ute Bridge Initiative ', 'background: #d71b15; color: white; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Built by Gavin Thomsen ', 'background: #f2c94e; color: #202020; font-size: 14px; padding: 5px;');
console.log('Learn more at: https://www.facebook.com/people/Ute-Bridge/100085178156840/');
