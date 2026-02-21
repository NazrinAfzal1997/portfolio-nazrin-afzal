/* Menu */
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menuOverlay");

menuBtn.onclick = () => {
  menu.classList.toggle("active");
};

/* Close menu on click */
document.querySelectorAll(".menu-link").forEach(link => {
  link.onclick = () => {
    menu.classList.remove("active");
  };
});

/* Typing */
const text = "Nazrin Afzal: Software Engineer & Laravel Expert.";
let i = 0;
const typing = document.getElementById("typing");

(function type() {
  if (i < text.length) {
    typing.textContent += text.charAt(i++);
    setTimeout(type, 40);
  }
})();

/* Disable tilt on touch devices */
if (window.matchMedia("(hover: hover)").matches) {
  const tilt = document.getElementById("tilt");
  tilt.addEventListener("mousemove", e => {
    const r = tilt.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    tilt.style.transform = `rotateX(${-y / 20}deg) rotateY(${x / 20}deg)`;
  });
  tilt.addEventListener("mouseleave", () => {
    tilt.style.transform = "rotateX(0) rotateY(0)";
  });
}

/* Reveal */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
