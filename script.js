// =========================================================
// Invictus Chess Academy — site scripts
// =========================================================

document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Mobile nav toggle ----------
const burger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll('.reveal');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach(el => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // small stagger for elements revealing in the same batch
        setTimeout(() => entry.target.classList.add('is-visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -10% 0px' });

  revealEls.forEach(el => observer.observe(el));
}

// ---------- Contact form ----------
// Wired to Formspree by default (see README.md to set your own form ID).
// If the action still points at "YOUR_FORM_ID", intercept submission and
// show a helpful note instead of letting it fail silently.
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  if (form.action.includes('YOUR_FORM_ID')) {
    e.preventDefault();
    formNote.innerHTML = 'This form isn\'t connected yet — see README.md to add your Formspree ID. For now, email <a href="mailto:essaiselim209@gmail.com">essaiselim209@gmail.com</a> directly.';
  }
  // Otherwise, let it submit normally to Formspree.
});
