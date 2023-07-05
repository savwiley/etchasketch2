/* DOMS */
const container = document.querySelector("#container");

const numb = 20;

for (let i = 0; i < numb; i++) {
  const square = document.createElement('div');
  square.setAttribute('class', 'square');
  console.log(Math.sqrt(numb));
  const dimensions = 100 / (Math.sqrt(numb));
  console.log(dimensions);
  square.style.width = `${dimensions}%`;
  square.style.height = `${dimensions}%`;
  container.appendChild(square);
}

/**
  16 squares
  16 / 2 = 4
  4 squares across & down
  100 / 4 = 25

  const help = (x) => {
    let a;
    let b;
    if (!a) {
        for (let i = (x - 1); i > 0; i--) {
            let answer = x / i;
            if (Number.isInteger(x / i)) {
                a = i;
            }
        }
    } else {
        for (let i = 1; i < x; i++) {
            if (i * a === x) {
                b = i;
            }
        }
    }
    return `${a} * ${b} = ${a*b}`;
}
  */