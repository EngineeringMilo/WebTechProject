document.addEventListener("DOMContentLoaded", function() {
          const toggle = document.querySelector(".header__toggle");
          const nav = document.querySelector(".header__nav");

          toggle.addEventListener("click", () => {
              toggle.classList.toggle("active");
              nav.classList.toggle("open");
          });
      });