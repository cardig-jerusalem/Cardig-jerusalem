document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded successfully.");

  // FILTER BUTTONS (for team page compatibility)
  const filterButtons = document.querySelectorAll(".filter-btn");
  const divisions = document.querySelectorAll(".division");

  console.log("Filter buttons found:", filterButtons.length);
  console.log("Divisions found:", divisions.length);

  filterButtons.forEach(button => {
    button.addEventListener("click", handleFilterClick);
    button.addEventListener("touchstart", handleFilterClick);
  });

  function handleFilterClick(event) {
    event.preventDefault();
    const button = event.currentTarget;
    const target = button.getAttribute("data-target");

    console.log("Filter button clicked:", target);

    divisions.forEach(section => {
      if (target === "all" || section.classList.contains(target)) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });

    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    console.log("Active button set to:", button.textContent);

    setTimeout(() => window.dispatchEvent(new Event("resize")), 0);
  }

  // LIVE SEARCH (for team page compatibility)
  const searchInput = document.getElementById("search");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase();
      const cards = document.querySelectorAll(".card");

      console.log("Search term:", searchTerm);

      cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(searchTerm) ? "flex" : "none";
      });

      setTimeout(() => window.dispatchEvent(new Event("resize")), 0);
    });
  } else {
    console.error("Search input not found.");
  }

  // BUTTON CLICK HANDLING FOR HOMEPAGE
  const homepageButtons = document.querySelectorAll(".btn");
  homepageButtons.forEach(button => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const href = this.getAttribute("href");
      console.log("Button clicked:", this.textContent, "href:", href);
      if (href) {
        if (href.startsWith("#")) {
          document.querySelector(href).scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.href = href;
        }
      }
    });
    button.addEventListener("touchstart", function (event) {
      event.preventDefault();
      const href = this.getAttribute("href");
      console.log("Touch button clicked:", this.textContent, "href:", href);
      if (href) {
        if (href.startsWith("#")) {
          document.querySelector(href).scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.href = href;
        }
      }
    });
  });

  // CARD CLICK FEEDBACK
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const name = card.querySelector(".name")?.innerText || "Unknown";
      console.log(`You clicked on: ${name}`);
    });
  });
});
