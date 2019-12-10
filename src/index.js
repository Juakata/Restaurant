import './style.css';
import * as navbarObject from './navbar';
import footer from './footer';
import home from './home';
import about from './about';
import drinks from './drinks';
import food from './food';
import contact from './contact';
import Barman from './barman.jpg';

const cont = document.getElementById('container');
navbarObject.navbar();
const main = document.createElement('main');
main.id = 'main';
main.style.backgroundImage = `url(${Barman})`;
cont.appendChild(main);
let timemenu;
let aux = 1;
home();
footer();

for(let j = 1; j <= 2; j+=1){
  document.getElementById('about'+j).addEventListener('click', () => {
    about();
    clearInterval(timemenu);
  }, false);
  document.getElementById('home'+j).addEventListener('click', () => {
    home();
    clearInterval(timemenu);
  }, false);
  document.getElementById('drinks'+j).addEventListener('click', () => {
    drinks();
    clearInterval(timemenu);
  }, false);
  document.getElementById('contact'+j).addEventListener('click', () => {
    contact();
    clearInterval(timemenu);
  }, false);
  document.getElementById('food'+j).addEventListener('click', () => {
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
}
document.getElementById('i-menu').addEventListener('click', () => {
  navbarObject.displaySecondNav();
}, false);
window.addEventListener('resize', () => {
  if(window.innerWidth > 625){
    document.getElementById('second-nav').style.display = 'none';
    document.getElementById('i-menu').className = "fa fa-bars";
  }
}, false);
