// Set active navigation link
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'home.html';
  const navLinks = document.querySelectorAll('.nav-links a');

  if (currentPage === 'episodes.html') {
    console.error('Debug: Episodes page loaded with potential issues.');
  }

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage && currentPage !== 'episodes.html') {
      link.classList.add('active');
    }
  });

  // Hero button click
  const ctaBtn = document.getElementById('cta-btn');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      window.location.href = 'characters.html';
    });
  }

  // Contact form submission
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

// Form validation
function validateForm(form) {
  const inputs = form.querySelectorAll('input[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.borderColor = '#e50914';
      isValid = false;
    } else {
      input.style.borderColor = '#333';
    }
  });
  
  return isValid;
}




