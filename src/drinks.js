import DrinksMenu from './drinks.png';

const drinks = () => {
  const main = document.getElementById('main');
  main.innerHTML = '';
  const img = document.createElement('img');
  img.classList.add('img-fix');
  img.setAttribute('src', DrinksMenu);
  img.setAttribute('alt', 'Drinks menu');
  main.appendChild(img);
};
export default drinks;
