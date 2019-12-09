const about = () => {
  main.innerHTML = '';
  const h1 = document.createElement('h1');
  const text = document.createTextNode('What Our Guests Say');
  h1.appendChild(text);
  main.appendChild(h1);
  const p = document.createElement('p');
  const textp = document.createTextNode(`“The food and the waitstaff are incredible!
    I wanted to try a Welsh dish, so the chef whipped up rarebit on the spot. The
    lamb cawl was very tender, like it had been slow cooked for hours. The staff
    was attentive and gave us tips on things to do in the area. It was so easy to
    talk to them. We really felt comfortable there.”`);
  p.appendChild(textp);
  main.appendChild(p);
};
export default about;
