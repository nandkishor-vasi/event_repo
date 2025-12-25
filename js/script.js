const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent to Hawkins Lab!");
});
