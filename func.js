/* DOMS */
const container = document.querySelector("#container");

const numb = 20;

for (let i = 0; i < (numb * numb); i++) {
  const square = document.createElement('div');
  square.setAttribute('class', 'square');
  square.style.width = `${100 / numb}%`;
  square.style.height = `auto`;
  container.appendChild(square);
}