document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.querySelector('.nav-menu-btn');
const navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

const navItems = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navItems.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${e.target.id}` ? 'var(--text)' : '';
      });
    }
  });
}, { threshold: 0.3 });
sections.forEach(s => observer.observe(s));
