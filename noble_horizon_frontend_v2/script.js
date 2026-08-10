// =========================================================
// NOBLE HORIZON HOLDINGS INC.
// FRONTEND V2
// =========================================================

const header = document.getElementById("site-header");
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");
const revealItems = document.querySelectorAll(".reveal");

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

const yearElement = document.getElementById("current-year");


// ---------------------------------------------------------
// CURRENT YEAR
// ---------------------------------------------------------

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// ---------------------------------------------------------
// HEADER ON SCROLL
// ---------------------------------------------------------

function updateHeader() {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

updateHeader();

window.addEventListener("scroll", updateHeader, {
  passive: true,
});


// ---------------------------------------------------------
// MOBILE MENU
// ---------------------------------------------------------

function openMenu() {
  menuToggle.classList.add("active");
  mainNav.classList.add("open");

  document.body.classList.add("menu-open");

  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close navigation");
}


function closeMenu() {
  menuToggle.classList.remove("active");
  mainNav.classList.remove("open");

  document.body.classList.remove("menu-open");

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}


menuToggle.addEventListener("click", () => {
  const menuIsOpen = mainNav.classList.contains("open");

  if (menuIsOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});


mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});


window.addEventListener("resize", () => {
  if (window.innerWidth > 850) {
    closeMenu();
  }
});


// ---------------------------------------------------------
// ACTIVE NAVIGATION LINK
// ---------------------------------------------------------

function updateActiveNavigation() {
  let currentSection = "home";

  sections.forEach((section) => {
    const top = section.offsetTop - 150;

    if (window.scrollY >= top) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    const target = link.getAttribute("href")?.replace("#", "");

    link.classList.toggle(
      "active",
      target === currentSection
    );
  });
}


updateActiveNavigation();

window.addEventListener("scroll", updateActiveNavigation, {
  passive: true,
});


// ---------------------------------------------------------
// REVEAL ANIMATION
// ---------------------------------------------------------

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("visible");

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.12,
  }
);


revealItems.forEach((item) => {
  revealObserver.observe(item);
});


// ---------------------------------------------------------
// HERO VIDEO — REDUCED MOTION
// ---------------------------------------------------------

const heroVideo = document.querySelector(".hero-bg-video");
const reducedMotionQuery = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

function updateHeroVideoMotion(event) {
  if (!heroVideo) {
    return;
  }

  if (event.matches) {
    heroVideo.pause();
  } else {
    heroVideo.play().catch(() => {});
  }
}

updateHeroVideoMotion(reducedMotionQuery);

reducedMotionQuery.addEventListener("change", updateHeroVideoMotion);


// ---------------------------------------------------------
// TEMPORARY FRONTEND-ONLY CONTACT FORM
// ---------------------------------------------------------

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);

    const firstName =
      formData.get("first_name")?.toString().trim();

    if (firstName) {
      formStatus.textContent =
        `Thanks, ${firstName}. Your form is working on the frontend. We'll connect it to Django later.`;
    } else {
      formStatus.textContent =
        "Your form is working on the frontend. We'll connect it to Django later.";
    }

    contactForm.reset();
  });
}
