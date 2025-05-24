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
          const section = document.querySelector(href);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
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
          const section = document.querySelector(href);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          window.location.href = href;
        }
      }
    });
  });

  // NAVIGATION LINKS HANDLING WITH SMOOTH SCROLL OR NAVIGATION
  const navLinks = document.querySelectorAll(".nav-links a");
  const isHomepage = window.location.pathname === "/index.html" || window.location.pathname === "/";

  navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const sectionId = this.getAttribute("data-section");
      const href = this.getAttribute("href");
      console.log("Nav link clicked:", this.textContent, "section:", sectionId, "href:", href);

      // If on homepage and section exists, scroll to it
      if (isHomepage && sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }

      // Otherwise, navigate to the href
      if (href) {
        window.location.href = href;
      }
    });

    link.addEventListener("touchstart", function (event) {
      event.preventDefault();
      const sectionId = this.getAttribute("data-section");
      const href = this.getAttribute("href");
      console.log("Nav touch clicked:", this.textContent, "section:", sectionId, "href:", href);

      if (isHomepage && sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }

      if (href) {
        window.location.href = href;
      }
    });
  });

  // Handle hash-based navigation on page load
  if (isHomepage && window.location.hash) {
    const sectionId = window.location.hash.substring(1); // Remove the "#"
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  // CARD CLICK FEEDBACK
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const name = card.querySelector(".name")?.innerText || "Unknown";
      console.log(`You clicked on: ${name}`);
    });
  });

  // GLOBAL SEARCH FUNCTIONALITY
  const globalSearchInput = document.getElementById("global-search");
  if (globalSearchInput) {
    globalSearchInput.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase();
      console.log("Global search term:", searchTerm);

      const searchableContent = [
        { title: "Team", url: "/team.html", keywords: "team executive board cardioscience cardiosupport" },
        { title: "Cardioscience Division", url: "/cardioscience.html", keywords: "cardioscience education research skills" },
        { title: "Cardiosupport Division", url: "/cardiosupport.html", keywords: "cardiosupport projects branding technical" },
        { title: "Events", url: "/events.html", keywords: "events workshops seminars" },
        { title: "Contact", url: "/contact.html", keywords: "contact form inquiry" },
        { title: "About Us", url: "/about.html", keywords: "about history mission" },
      ];

      const matches = searchableContent.filter(item =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.keywords.toLowerCase().includes(searchTerm)
      );

      console.log("Search matches:", matches);

      if (matches.length > 0) {
        window.location.href = matches[0].url;
      }
    });
  } else {
    console.error("Global search input not found.");
  }
});
