import DrinksMenu from './drinks.png';

const drinks = () => {
  main.innerHTML = '';
  const img = document.createElement('img');
  img.setAttribute('src', DrinksMenu);
  img.setAttribute('alt', 'Drinks menu');
  main.appendChild(img);
};
export default drinks;
