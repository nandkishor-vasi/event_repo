document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "home.html";
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  const ctaBtn = document.getElementById("cta-btn");
  const nextBtn = document.querySelector(".hidden");

  ctaBtn.addEventListener("click", () => {
    ctaBtn.innerText = "ACCESS GRANTED";
    ctaBtn.classList.add("glitch-active");

    setTimeout(() => {
      nextBtn.classList.remove("hidden");
    }, 1000);
  });

  console.log("%cHawkins Lab Online", "color:red; font-size:16px;");
  console.warn("Unidentified signal detected...");
  setTimeout(() => {
    console.error("Connection unstable...");
  }, 4000);

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;

      alert(
        `Thanks ${name}! Your message has been sent. We'll contact you at ${email}.`,
      );
      contactForm.reset();
    });
  }
});

function validateForm(form) {
  const inputs = form.querySelectorAll("input[required]");
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.borderColor = "#e50914";
      isValid = false;
    } else {
      input.style.borderColor = "#333";
    }
  });

  return isValid;
}
