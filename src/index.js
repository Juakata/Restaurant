import './style.css';
import navbar from './navbar';
import footer from './footer';
import home from './home';
import about from './about';
import drinks from './drinks';
import food from './food';
import contact from './contact';
import Barman from './barman.jpg';

const cont = document.getElementById('container');
navbar();
const main = document.createElement('main');
main.id = 'main';
main.style.backgroundImage = `url(${Barman})`;
cont.appendChild(main);
let timemenu;
let aux = 1;
home();
footer();

document.getElementById('about').addEventListener('click', () => {
  about();
  clearInterval(timemenu);
}, false);
document.getElementById('home').addEventListener('click', () => {
  home();
  clearInterval(timemenu);
}, false);
document.getElementById('drinks').addEventListener('click', () => {
  drinks();
  clearInterval(timemenu);
}, false);
document.getElementById('contact').addEventListener('click', () => {
  contact();
  clearInterval(timemenu);
}, false);
document.getElementById('food').addEventListener('click', () => {
  food(2);
  timemenu = window.setInterval(() => {
    food(aux);
    if (aux === 1) {
      aux = 2;
    } else {
      aux = 1;
    }
  }, 5000);
}, false);
