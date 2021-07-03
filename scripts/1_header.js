// Variables
const header = document.querySelector(`header`);
// const head = document.querySelector(`head`);

// head.appendChild(`link`);

// `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />`

// Functions
const createNavigation = () => {
  // creating navigation elements
  const nav = document.createElement(`nav`);
  const ul = document.createElement(`ul`);
  const li1 = document.createElement(`li`);
  const li2 = document.createElement(`li`);
  const li3 = document.createElement(`li`);
  const li4 = document.createElement(`li`);
  const a1 = document.createElement(`a`);
  const a2 = document.createElement(`a`);
  const a3 = document.createElement(`a`);
  const a4 = document.createElement(`a`);

  // addling links
  a1.href = location.href.includes(`index`) ? `./index.html` : `../index.html`;
  a2.href = location.href.includes(`index`)
    ? `./pages/html.html`
    : `./html.html`;
  a3.href = location.href.includes(`index`) ? `./pages/css.html` : `./css.html`;
  a4.href = location.href.includes(`index`) ? `./pages/js.html` : `./js.html`;

  // adding text to menu items
  a1.innerHTML = `<i class="fas fa-home"></i>`;
  a2.innerText = `HTML quiz`;
  a3.innerText = `CSS  quiz`;
  a4.innerText = `JS   quiz`;

  // appending elements
  li1.appendChild(a1);
  li2.appendChild(a2);
  li3.appendChild(a3);
  li4.appendChild(a4);

  ul.append(li1, li2, li3, li4);
  // li1.appendChild(li1);
  // li2.appendChild(li2);
  // li3.appendChild(li3);
  // li4.appendChild(li4);

  nav.appendChild(ul);
  header.appendChild(nav);

  // Changing header background-color based on page
  if (location.href.includes(`index.html`))
    header.style.backgroundColor = `var(--dark-color)`;
  if (location.href.includes(`html.html`))
    header.style.backgroundColor = `var(--html-color)`;
  if (location.href.includes(`css.html`))
    header.style.backgroundColor = `var(--css-color)`;
  if (location.href.includes(`js.html`))
    header.style.backgroundColor = `var(--js-color)`;
};
// Events
document.addEventListener(`DOMContentLoaded`, createNavigation);
