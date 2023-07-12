/* VARIABLES */
let numb = 36;
let color = "#000";

/* DOMS */
const container = document.querySelector("#container");
const menu = document.querySelector("#menu");

/* FUNCTIONS */

/* grid */
for (let i = 0; i < (numb * numb); i++) {
  const square = document.createElement('div');
  square.setAttribute('class', 'square');
  square.style.width = `${100 / numb}%`;
  square.style.height = `auto`;
  square.addEventListener('dragover', (e) => {
    e.target.style.background = color;
  });
  square.addEventListener('click', (e) => {
    e.target.style.background = color;
  });
  container.appendChild(square);
}

/** WISHLIST
 * - Ability to change amount of squares
 * - Ability to change the color
 * - Ability to change to rainbow
 * - Ability to change to rgba
 * - Ability to erase
 * - Ability to clear
 */