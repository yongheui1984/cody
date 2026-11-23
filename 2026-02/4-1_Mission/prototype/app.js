const screens = [...document.querySelectorAll(".screen")];
const classCards = [...document.querySelectorAll(".class")];
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const booking = document.querySelector("#booking");

function showScreen(focusTitle = false) {
  const screen = screens.find((item) => "#" + item.id === location.hash) || screens[0];
  booking.close();
  screens.forEach((item) => { item.hidden = item !== screen; });
  if (focusTitle) screen.querySelector("h1").focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

function filterClasses(category) {
  filterButtons.forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.filter === category);
  });
  classCards.forEach((card) => {
    card.hidden = category !== "all" && card.dataset.category !== category;
  });
  const visibleCount = classCards.filter((card) => !card.hidden).length;
  document.querySelector("#class-count").textContent = `가까운 공방의 수업 ${visibleCount}개`;
}

window.addEventListener("hashchange", () => showScreen(true));
filterButtons.forEach((button) => {
  button.addEventListener("click", () => filterClasses(button.dataset.filter));
});
document.querySelector("#reserve").addEventListener("click", () => booking.showModal());
showScreen();
