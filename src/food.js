import BreakFast from './breakfast.png';
import Sandwiches from './sandwiches.png';

const food = (aux) => {
  const main = document.getElementById('main');
  main.innerHTML = '';
  const img = document.createElement('img');
  img.setAttribute('alt', 'food');
  if (aux == 1) {
    img.setAttribute('src', Sandwiches);
  } else {
    img.setAttribute('src', BreakFast);
  }
  main.appendChild(img);
};
export default food;
