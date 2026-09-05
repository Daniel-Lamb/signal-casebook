const buttons = [...document.querySelectorAll("[data-filter]")];
const cards = [...document.querySelectorAll(".case-card")];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    buttons.forEach((item) => item.classList.toggle("active", item === button));

    cards.forEach((card) => {
      const tags = card.dataset.tags.split(" ");
      card.hidden = filter !== "all" && !tags.includes(filter);
    });
  });
});
