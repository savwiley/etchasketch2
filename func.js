/* DOMS */
const container = document.querySelector("#container");
const menu = document.querySelector("#menu");

/* VARIABLES */
let numb = 16;
let color = "#000";

/* FUNCTION */
for (let i = 0; i < (numb * numb); i++) {
  const square = document.createElement('div');
  square.setAttribute('class', 'square');
  square.style.width = `${100 / numb}%`;
  square.style.height = `auto`;
  square.addEventListener('mouseenter', (e) => {
    e.target.style.background = color;
  })
  container.appendChild(square);
}