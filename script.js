// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Close menu when link clicked
  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

// ================================
// REVEAL ANIMATIONS
// ================================

const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.12,
  }
);

revealItems.forEach((item) => {
  revealObserver.observe(item);
});

// ================================
// STATS COUNTER
// ================================

const statNumbers = document.querySelectorAll(".stat-num");

let statsPlayed = false;

function animateStats() {
  if (statsPlayed) return;

  const aboutSection = document.getElementById("about");

  if (!aboutSection) return;

  const top = aboutSection.getBoundingClientRect().top;

  if (top < window.innerHeight - 100) {
    statsPlayed = true;

    statNumbers.forEach((stat) => {
      const target = Number(stat.dataset.target || 0);

      let current = 0;

      const increment = Math.max(
        1,
        Math.ceil(target / 50)
      );

      function update() {
        current += increment;

        if (current >= target) {
          stat.textContent = target;
        } else {
          stat.textContent = current;
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    });
  }
}

window.addEventListener("scroll", animateStats);
animateStats();

// ================================
// PROJECT FILTERS
// ================================

const filterButtons = document.querySelectorAll(
  "#projectFilters button"
);

const projects = document.querySelectorAll(".project");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    const filter = button.dataset.filter;

    projects.forEach((project) => {
      if (
        filter === "all" ||
        project.dataset.tags.includes(filter)
      ) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});

// ================================
// SKILL SEARCH
// ================================

const skillSearch =
  document.getElementById("skillSearch");

const skillChips =
  document.querySelectorAll("#skills span");

if (skillSearch) {
  skillSearch.addEventListener("input", (e) => {
    const query = e.target.value
      .toLowerCase()
      .trim();

    skillChips.forEach((chip) => {
      const match = chip.textContent
        .toLowerCase()
        .includes(query);

      chip.style.display = match
        ? "inline-flex"
        : "none";
    });
  });
}

// ================================
// ACTIVE NAVIGATION
// ================================

const sections = [
  ...document.querySelectorAll("main section[id]"),
];

const navLinks = [
  ...document.querySelectorAll(".nav a"),
];

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 150;

    if (window.scrollY >= top) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    link.classList.toggle(
      "active",
      href === `#${current}`
    );
  });
});

// ================================
// COPY EMAIL BUTTON
// ================================

const copyEmail =
  document.getElementById("copyEmail");

if (copyEmail) {
  copyEmail.addEventListener(
    "click",
    async () => {
      try {
        await navigator.clipboard.writeText(
          "ayushayush591@gmail.com"
        );

        copyEmail.textContent = "Copied ✓";

        setTimeout(() => {
          copyEmail.textContent =
            "Copy Email";
        }, 1500);
      } catch {
        copyEmail.textContent = "Failed";

        setTimeout(() => {
          copyEmail.textContent =
            "Copy Email";
        }, 1500);
      }
    }
  );
}

// ================================
// HERO TYPING EFFECT
// Optional:
// Add this element under h1:
//
// <p id="typingText"></p>
//
// ================================

const typingElement =
  document.getElementById("typingText");

if (typingElement) {
  const roles = [
    "Machine Learning Engineer",
    "LLM Systems Engineer",
    "Applied AI Researcher",
    "NLP Practitioner",
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const currentRole =
      roles[roleIndex];

    if (!deleting) {
      typingElement.textContent =
        currentRole.substring(
          0,
          charIndex + 1
        );

      charIndex++;

      if (
        charIndex ===
        currentRole.length
      ) {
        deleting = true;

        setTimeout(type, 1500);

        return;
      }
    } else {
      typingElement.textContent =
        currentRole.substring(
          0,
          charIndex - 1
        );

      charIndex--;

      if (charIndex === 0) {
        deleting = false;

        roleIndex =
          (roleIndex + 1) %
          roles.length;
      }
    }

    setTimeout(
      type,
      deleting ? 40 : 80
    );
  }

  type();
}

// ================================
// CURRENT YEAR
// ================================

const yearElement =
  document.getElementById("year");

if (yearElement) {
  yearElement.textContent =
    new Date().getFullYear();
}

// ================================
// SMOOTH SCROLL FOR INTERNAL LINKS
// ================================

document
  .querySelectorAll('a[href^="#"]')
  .forEach((anchor) => {
    anchor.addEventListener(
      "click",
      (e) => {
        const targetId =
          anchor.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        )
          return;

        const target =
          document.querySelector(
            targetId
          );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    );
  });

// ================================
// PRELOADER FADE-IN
// ================================

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});
