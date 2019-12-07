import './style.css';

let container = document.getElementById("container");

import navbar from './navbar.js';
import footer from './footer.js';
import home from './home.js';
import about from './about.js';
import drinks from './drinks.js';
import food from './food.js';
import contact from './contact.js';
import Barman from './barman.jpg';

navbar();
container.innerHTML += `<main id="main"></main>`;
let main = document.getElementById("main");
main.style.backgroundImage = `url(${Barman})`;
home();
footer();

document.getElementById('about').addEventListener('click', () => {
  about();
}, false);
document.getElementById('home').addEventListener('click', () => {
  home();
}, false);
document.getElementById('drinks').addEventListener('click', () => {
  drinks();
}, false);
document.getElementById('contact').addEventListener('click', () => {
  contact();
}, false);
document.getElementById('food').addEventListener('click', () => {
  food();
}, false);
