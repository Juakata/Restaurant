import './style.css';
import navbar from './navbar.js';
import footer from './footer.js';
import home from './home.js';
import about from './about.js';
import drinks from './drinks.js';
import food from './food.js';
import contact from './contact.js';
import Barman from './barman.jpg';

navbar();
const main = document.createElement('MAIN');
main.id = 'main';
container.appendChild(main);
main.style.backgroundImage = `url(${Barman})`;
let myInterval;
let aux = 1;
home();
footer();

document.getElementById('about').addEventListener('click', () => {
  about();
  clearInterval(myInterval);
}, false);
document.getElementById('home').addEventListener('click', () => {
  home();
  clearInterval(myInterval);
}, false);
document.getElementById('drinks').addEventListener('click', () => {
  drinks();
  clearInterval(myInterval);
}, false);
document.getElementById('contact').addEventListener('click', () => {
  contact();
  clearInterval(myInterval);
}, false);
document.getElementById('food').addEventListener('click', () => {
  food(2);
  myInterval = window.setInterval(function() {
    food(aux);
    if (aux == 1) {
      aux = 2;
    } else {
      aux = 1;
    }
  }, 5000);
}, false);
