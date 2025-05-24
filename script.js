document.addEventListener("DOMContentLoaded", function () {
  // FILTER BUTTONS
  const filterButtons = document.querySelectorAll(".filter-btn");
  const divisions = document.querySelectorAll(".division");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-target");

      divisions.forEach(section => {
        if (target === "all" || section.classList.contains(target)) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });

      // Highlight active button
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // Force layout recalculation
      setTimeout(() => window.dispatchEvent(new Event("resize")), 0);
    });
  });

  // LIVE SEARCH
  const searchInput = document.getElementById("search");
  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      if (text.includes(searchTerm)) {
        card.style.opacity = "1";
        card.style.visibility = "visible";
        card.style.height = "auto"; // Ensure card takes up space
      } else {
        card.style.opacity = "0";
        card.style.visibility = "hidden";
        card.style.height = "0"; // Collapse height but keep width for centering
        card.style.margin = "0"; // Remove margins to avoid gaps
      }
    });

    // Force layout recalculation
    setTimeout(() => window.dispatchEvent(new Event("resize")), 0);
  });

  // CARD CLICK FEEDBACK (example)
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const name = card.querySelector(".name")?.innerText || "Unknown";
      console.log(`You clicked on: ${name}`);
    });
  });
});
