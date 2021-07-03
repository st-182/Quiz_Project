// Variables

const footer = document.querySelector(`footer`);
const currentYear = document.querySelector(`#current-year`);

// Functions

const addBackground = () => {
  // Changing footer background-color based on page // copied form header
  if (location.href.includes(`index.html`))
    footer.style.backgroundColor = `var(--dark-color)`;
  if (location.href.includes(`html.html`))
    footer.style.backgroundColor = `var(--html-color)`;
  if (location.href.includes(`css.html`))
    footer.style.backgroundColor = `var(--css-color)`;
  if (location.href.includes(`js.html`))
    footer.style.backgroundColor = `var(--js-color)`;
};
const addDate = () => {
  currentYear.textContent = `${new Date().getFullYear()}`;
};

// Events

document.addEventListener(`DOMContentLoaded`, () => {
  addBackground();
  addDate();
});
