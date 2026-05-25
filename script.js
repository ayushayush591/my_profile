const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
}

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealItems.forEach((el) => observer.observe(el));

const statNumbers = document.querySelectorAll(".stat-num");
let statsPlayed = false;
function animateStats() {
  if (statsPlayed) return;
  const trigger = document.querySelector("#about");
  if (!trigger) return;
  const top = trigger.getBoundingClientRect().top;
  if (top < window.innerHeight - 100) {
    statsPlayed = true;
    statNumbers.forEach((el) => {
      const target = Number(el.dataset.target || 0);
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 30));
      const tick = () => {
        current += step;
        if (current >= target) {
          el.textContent = String(target);
        } else {
          el.textContent = String(current);
          requestAnimationFrame(tick);
        }
      };
      requestAnimationFrame(tick);
    });
  }
}
window.addEventListener("scroll", animateStats);
animateStats();

const filterButtons = document.querySelectorAll("#projectFilters button");
const projects = document.querySelectorAll(".project");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    projects.forEach((card) => {
      if (filter === "all" || card.dataset.tags.includes(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const skillSearch = document.getElementById("skillSearch");
const skillChips = document.querySelectorAll("#skills span");
if (skillSearch) {
  skillSearch.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase().trim();
    skillChips.forEach((chip) => {
      chip.style.display = chip.textContent.toLowerCase().includes(q) ? "inline-flex" : "none";
    });
  });
}

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav a")];
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});

const copyEmail = document.getElementById("copyEmail");
if (copyEmail) {
  copyEmail.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("ayushayush591@gmail.com");
      copyEmail.textContent = "Copied";
      setTimeout(() => { copyEmail.textContent = "Copy Email"; }, 1200);
    } catch {
      copyEmail.textContent = "Failed";
      setTimeout(() => { copyEmail.textContent = "Copy Email"; }, 1200);
    }
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
