function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("active");
  }


  document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      }, {
        threshold: 0.2
      }
    );

    fadeElements.forEach((el) => observer.observe(el));
  });