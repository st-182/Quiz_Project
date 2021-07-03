// document.addEventListener(`DOMContentLoaded`, () => {
//   animateDiv(".a");
//   animateDiv(".b");
//   animateDiv(".c");
//   animateDiv(".d");
// });
// setInterval(() => {
//   animateDiv(".a");
//   // animateDiv(".b");
//   // animateDiv(".c");
//   // animateDiv(".d");
// }, 1000);

function makeNewPosition() {
  // Get viewport dimensions (remove the dimension of the div)
  let h = window.innerHeight - 50;
  let w = window.innerWidth - 50;
  console.log(h);

  let nh =
    Math.floor(Math.random() * h) < 50 ? 50 : Math.floor(Math.random() * h);
  console.log(nh);
  let nw =
    Math.floor(Math.random() * w) < 50 ? 50 : Math.floor(Math.random() * w);

  return [nh, nw];
}

setTimeout(() => {
  for (let child of document.querySelector(`.animation-logos`).children) {
    let oldHeight = child.getBoundingClientRect().y.toFixed(3);
    let oldwidth = child.getBoundingClientRect().x.toFixed(3);
    setInterval(() => {
      animateDiv();
    }, 1500);
    function animateDiv() {
      const newq = makeNewPosition();
      child.animate(
        [
          { top: `${oldHeight}px`, left: `${oldwidth}px` },
          { top: `${newq[0]}px`, left: `${newq[1]}px` },
        ],
        {
          duration: 1500,
        }
      );
      oldHeight = newq[0];
      oldwidth = newq[1];
    }
  }
}, 3000);
