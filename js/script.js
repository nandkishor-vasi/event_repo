document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'home.html';
  const navLinks = document.querySelector('nav-links a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  const ctaBtn = document.getElementById("cta-btn");
const nextBtn = document.querySelector(".hidden");

ctaBtn.addEventListener("click", () => {
  ctaBtn.innerHTML = "ACCESS GRANTED";
  ctaBtn.classList.add("glitch-active");

  setTimeout(() => {
    nextBtn.classList.remove("hidden");
  }, 1000);
});



  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      
      alert(`Thanks ${name}! Your message has been sent. We'll contact you at ${email}.`);
      contactForm.reset();
    });
  }
});






