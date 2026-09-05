const header = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

function demoSubmit(form, statusId, message) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    const status = document.getElementById(statusId);
    status.textContent = message;
    form.reset();
  });
}

demoSubmit(
  document.getElementById("admissionForm"),
  "formStatus",
  "Thank you. Your enquiry has been recorded in this demo version. Connect the form to the school's email/database before publishing."
);

demoSubmit(
  document.getElementById("contactForm"),
  "contactStatus",
  "Thank you. The contact form is ready to be connected to the school's email service."
);
