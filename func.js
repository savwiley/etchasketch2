/* VARIABLES */
let numb = 16;
let color = "#000000";

/* DOMS */
const container = document.querySelector("#container");
const menu = document.querySelector("#menu");

/* FUNCTIONS */

/* change numb */
const numberChange = document.createElement('div');
numberChange.setAttribute('class', 'numberChange');

const numbInput = document.createElement('input');
numbInput.setAttribute('type', 'number');
numbInput.value = numb;

const numbButton = document.createElement('button');
numbButton.textContent = "Reset!";

numbButton.addEventListener('click', () => {
  const squareX = Array.from(document.querySelectorAll(".square"));
  squareX.forEach(e => e.remove());
  numb = numbInput.value;
  grid(numb);
});

menu.appendChild(numberChange);
numberChange.appendChild(numbInput);
numberChange.appendChild(numbButton);

/* change color */
const colorChange = document.createElement('div');
colorChange.setAttribute('class', 'colorChange');

const colorPicker = document.createElement('input');
colorPicker.setAttribute('type', 'color');
colorPicker.addEventListener('change', (e) => {
  color = e.target.value;
});

menu.appendChild(colorChange);
colorChange.appendChild(colorPicker);

/* make grid */
const squareEvents = (square) => {
  square.addEventListener('mouseover', (e) => {
    e.target.style.background = color;
  });
};

const grid = (numb) => {
  for (let i = 0; i < (numb * numb); i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.style.width = `${100 / numb}%`;
    square.style.height = `auto`;
    squareEvents(square);
    container.appendChild(square);
  }
};
grid(numb);

/** WISHLIST
 * - Ability to change to rainbow
 * - Ability to change to rgba
 * - Ability to erase
 * - Ability to clear
 */