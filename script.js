document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Hero Section Entrance Animation
    const heroContent = document.getElementById('hero-content');
    const heroTech = document.getElementById('hero-tech');
    
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 200);

    setTimeout(() => {
        heroTech.style.opacity = '1';
    }, 800);

    // Navbar Scroll Effect
    const header = document.querySelector('header nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('nav-scrolled');
        } else {
            header.classList.remove('nav-scrolled');
        }
    });

    // Reveal Animations on Scroll
    const reveals = document.querySelectorAll('.reveal');
    const observerOptions = {
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Add reveal class to sections
    document.querySelectorAll('section > div, .group').forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = 'Message Sent!';
                btn.style.backgroundColor = '#10b981';
                btn.style.color = '#fff';
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                    btn.disabled = false;
                    contactForm.reset();
                }, 3000);
            }, 1000);
        });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
