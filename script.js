const cores = ['blue', 'red', 'yellow', 'green', 'pink', 'orange'];
const createCircle = (circle) => {
  const nome = document.querySelector('#rgb-color');
  for (let index = 0; index < circle.length; index += 1) {
    const div2 = document.createElement('div');
    nome.appendChild(div2);
    div2.className = 'ball';
    div2.style.backgroundColor = circle[index];
  }
};

createCircle(cores);
