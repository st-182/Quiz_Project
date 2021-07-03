// Variables
const wrapper = document.querySelector(`#wrapper`);
// Functions
const addBackgroundToWrapper = () => {
  if (location.href.includes(`index.html`))
    wrapper.style.backgroundColor = `var(--dark-color)`;
  if (location.href.includes(`html.html`))
    wrapper.style.backgroundColor = `var(--html-color)`;
  if (location.href.includes(`css.html`))
    wrapper.style.backgroundColor = `var(--css-color)`;
  if (location.href.includes(`js.html`))
    wrapper.style.backgroundColor = `var(--js-color)`;
};
// Events
document.addEventListener(`DOMContentLoaded`, () => {
  addBackgroundToWrapper();
});
