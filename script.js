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

      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

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
      card.style.display = text.includes(searchTerm) ? "flex" : "none";
    });

    setTimeout(() => window.dispatchEvent(new Event("resize")), 0);
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
