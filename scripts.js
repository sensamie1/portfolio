document.addEventListener('DOMContentLoaded', function () {

    /* ── Navbar scroll shadow ── */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function () {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });

    /* ── Mobile nav toggle ── */
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('open');
        navToggle.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('open');
            navToggle.classList.remove('open');
        });
    });

    /* ── Active nav link on scroll ── */
    const sections = document.querySelectorAll('section[id]');
    const allNavLinks = document.querySelectorAll('.nav-links a');
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                allNavLinks.forEach(function (a) {
                    a.style.color = '';
                    a.style.background = '';
                });
                const active = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
                if (active) {
                    active.style.color = '#60a5fa';
                    active.style.background = 'rgba(59,130,246,0.1)';
                }
            }
        });
    }, { threshold: 0.35 });
    sections.forEach(function (s) { observer.observe(s); });

    /* ── Scroll-to-top button ── */
    const scrollBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', function () {
        scrollBtn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    scrollBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ── Reveal on scroll ── */
    const reveals = document.querySelectorAll(
        '.skill-card, .project-card, .info-card, .tag, .about-tags span, .fp-badges span, .ci-item'
    );
    const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    reveals.forEach(function (el, i) {
        el.classList.add('reveal');
        el.style.transitionDelay = (i % 8) * 0.05 + 's';
        revealObserver.observe(el);
    });

    /* ── Contact form ── */
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function () {
            setTimeout(function () { form.reset(); }, 1200);
        });
    }

});
