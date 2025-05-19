// This script handles the functionality of the FAQ section and the hamburger menu for mobile navigation.
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".faq-item");

  items.forEach((item) => {
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", () => {
      // Collapse other items if you want only one open at a time
      items.forEach((i) => {
        if (i !== item) {
          i.classList.remove("active");
        }
      });
      // Toggle current
      item.classList.toggle("active");
    });
  });
});

// Control the hamburger menu and overlay
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  // Close menu when clicking outside or on links
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove("active");
      overlay.classList.remove("active");
    }
  });

  // Close menu when clicking links
  document.querySelectorAll(".nav-links a, .nav-buttons a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      overlay.classList.remove("active");
    });
  });
});
