const home = () => {
  const main = document.getElementById('main');
  main.innerHTML = '';
  const h1 = document.createElement('h1');
  const text = document.createTextNode('CROESO, WELCOME TO PITCH BAR & EATERY, MILL LANE CARDIFF');
  h1.appendChild(text);
  main.appendChild(h1);
  const p = document.createElement('p');
  const textp = document.createTextNode(`We’re fiercely independent, priding ourself on simple,
  honest, modern Welsh food. Obsessively, we seek the best, most mouth-watering
  ingredients we can find locally from farmers, growers, makers and markets,
  fusing them together to create innovative flavours and fresh, vibrant,
  sumptuous dishes; putting our passion for your palate on a plate.`);
  p.appendChild(textp);
  main.appendChild(p);
};

export default home;
