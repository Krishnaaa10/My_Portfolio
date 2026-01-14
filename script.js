// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// --------------------------------------------------------------------------
// Custom Cursor
// --------------------------------------------------------------------------
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

// Check if device has mouse (not touch)
const isDesktop = window.matchMedia('(pointer: fine)').matches;

if (isDesktop) {
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows instantly
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Outline follows with lag (handled by CSS transition or GSAP)
        // Using GSAP for smoother lag
        gsap.to(cursorOutline, {
            x: posX,
            y: posY,
            duration: 0.15,
            ease: "power2.out"
        });
    });

    // Add specific hover effects
    const hoverTargets = document.querySelectorAll('a, button, .project-visual, .contact-method');

    hoverTargets.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add('hovering');
        });
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('hovering');
        });
    });
}

// --------------------------------------------------------------------------
// Mobile Menu
// --------------------------------------------------------------------------
const menuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const bars = document.querySelectorAll('.bar');

let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        mobileMenu.classList.add('active');
        // Animate burger to X
        gsap.to(bars[0], { rotation: 45, y: 8, duration: 0.3 });
        gsap.to(bars[1], { rotation: -45, y: -8, duration: 0.3 });

        // Stagger links
        gsap.fromTo(mobileLinks,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, delay: 0.2 }
        );
    } else {
        mobileMenu.classList.remove('active');
        // Animate X back to burger
        gsap.to(bars[0], { rotation: 0, y: 0, duration: 0.3 });
        gsap.to(bars[1], { rotation: 0, y: 0, duration: 0.3 });
    }
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false;
        mobileMenu.classList.remove('active');
        gsap.to(bars[0], { rotation: 0, y: 0, duration: 0.3 });
        gsap.to(bars[1], { rotation: 0, y: 0, duration: 0.3 });
    });
});

// --------------------------------------------------------------------------
// Hero Animations
// --------------------------------------------------------------------------
const tl = gsap.timeline();

tl.from('.nav-logo', {
    y: -30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
})
    .from('.nav-item', {
        y: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")
    .to('.contact-btn', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")
    .from('.hero-status', {
        y: 20,
        opacity: 0,
        duration: 0.6
    }, "-=0.4")
    .from('.title-line', {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.4")
    .from('.hero-sub', {
        y: 20,
        opacity: 0,
        duration: 0.6
    }, "-=0.4")
    .from('.hero-actions', { /* Target container instead of individual buttons */
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.4")
    .from('.code-card', {
        x: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)"
    }, "-=0.6")
    .from('.scroll-indicator', {
        y: 20,
        opacity: 0,
        duration: 0.6
    }, "-=0.4");

// --------------------------------------------------------------------------
// Parallax Effect for Hero Cards
// --------------------------------------------------------------------------
document.addEventListener('mousemove', (e) => {
    if (!isDesktop) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    gsap.to('.card-front', {
        rotationY: x,
        rotationX: -y,
        duration: 0.5
    });

    gsap.to('.card-middle', {
        rotationY: x * 0.5,
        rotationX: -y * 0.5,
        duration: 0.5
    });
});

// --------------------------------------------------------------------------
// Scroll Animations (ScrollTrigger)
// --------------------------------------------------------------------------

// Skills Section
gsap.from('.section-title', {
    scrollTrigger: {
        trigger: '#skills',
        start: 'top 95%', // Trigger earlier
        toggleActions: 'play none none none',
        once: true // Lock in place
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    overwrite: 'auto' // Prevent conflict
});

// Projects
const projects = document.querySelectorAll('.project-row');

projects.forEach((row, index) => {
    gsap.from(row, {
        scrollTrigger: {
            trigger: row,
            start: 'top 95%',
            toggleActions: 'play none none none',
            once: true
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        overwrite: 'auto'
    });
});

// About / Stats
gsap.from('.stat-item', {
    scrollTrigger: {
        trigger: '#learning',
        start: 'top 90%',
        toggleActions: 'play none none none',
        once: true
    },
    y: 30,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    overwrite: 'auto'
});

// Certifications
gsap.from('.cert-card', {
    scrollTrigger: {
        trigger: '#certifications',
        start: 'top 90%',
        toggleActions: 'play none none none',
        once: true
    },
    y: 40,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    overwrite: 'auto'
});

// Contact
gsap.from('.contact-box', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 90%',
        toggleActions: 'play none none none',
        once: true
    },
    scale: 0.95,
    opacity: 0,
    duration: 0.8,
    overwrite: 'auto'
});

// --------------------------------------------------------------------------
// Navigation Active State on Scroll
// --------------------------------------------------------------------------
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('active');
        }
    });
});

// --------------------------------------------------------------------------
//                           CERTIFICATIONS LOGIC                             
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
//                           CERTIFICATIONS LOGIC                             
// --------------------------------------------------------------------------

// Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const certCards = document.querySelectorAll('.cert-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        certCards.forEach(card => {
            const categories = card.getAttribute('data-category');
            if (filterValue === 'all' || categories.includes(filterValue)) {
                card.style.display = 'flex'; // Changed to flex to maintain card layout
                // Smooth Premium Animation
                gsap.fromTo(card,
                    { opacity: 0, scale: 0.95, y: 10 },
                    { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power2.out" }
                );
            } else {
                card.style.display = 'none';
            }
        });

        // RE-TRIGGER SCROLLTRIGGER REFRESH to update layout positions
        ScrollTrigger.refresh();
    });
});

// Modal Elements
const modal = document.getElementById('cert-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');

// Certificate Data Source (Single Source of Truth)
const certData = {
    'Images/OCIDeveloperProfessional.png': {
        title: 'Oracle Cloud Infrastructure 2025 Certified Developer Professional',
        link: 'https://drive.google.com/file/d/1ym9O1dn2cnJUYEcXJMFYUxaiJ415mM5-/view?usp=sharing'
    },
    'Images/Devops.png': {
        title: 'Oracle Cloud Infrastructure 2025 Certified DevOps Professional',
        link: '#'
    },
    'Images/GENAI.png': {
        title: 'Gen AI Using IBM Watsonx',
        link: 'https://drive.google.com/file/d/1L6GJ_vRnIZlTP6HyQfWo72L_e_lkyoTk/view?usp=sharing'
    },
    'Images/CyberSecurityAnalyst.png': {
        title: 'IBM Cybersecurity Analyst',
        link: 'https://drive.google.com/file/d/1anQvjV5BKVgqhPPr1FUO0V2qX1aQKFA2/view?usp=sharing'
    },
    'Images/SEJobSimulation.png': { title: 'EA Sports Software Engineering Job Simulation', link: '#' },
    'Images/SEJobSimulationWellsFargo.png': { title: 'Wells Fargo Software Engineering Job Simulation', link: '#' },
    'Images/GlobalMarketingManagement.png': { title: 'NPTEL Global Marketing Management', link: '#' },
    'Images/HTMLCSSJS.png': { title: 'HTML, CSS, and Javascript for Web Developers (JHU)', link: '#' },
    'Images/SupplyChainManagement.png': { title: 'Supply Chain Management (NPTEL)', link: '#' },
    'Images/SimulinkOnRamp.png': { title: 'Simulink Onramp', link: '#' },
    'Images/PythonEssentials.png': { title: 'Python Essentials', link: '#' },
    'Images/FundamentalsOfAIML.png': { title: 'Fundamentals of AI/ML', link: '#' }
};

// Modal Open Function
window.openCertModal = function (imgSrc) {
    const modalLink = document.querySelector('.modal-caption .modal-link');

    modal.classList.add('active');
    modalImg.src = imgSrc;

    // Populate Details
    const details = certData[imgSrc] || { title: 'Certificate', link: '#' };
    modalTitle.innerText = details.title;
    modalLink.href = details.link;

    if (details.link === '#') {
        modalLink.style.display = 'none';
    } else {
        modalLink.style.display = 'inline-flex';
    }
};

// Modal Close Function
window.closeCertModal = function () {
    modal.classList.remove('active');
};

// Close on Esc
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') window.closeCertModal();
});

// Close on Click Outside
modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-overlay')) {
        window.closeCertModal();
    }
});

// Initialize Certifications Filter on Load
document.addEventListener('DOMContentLoaded', () => {
    const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
    if (allBtn) {
        allBtn.click();
    }
});

