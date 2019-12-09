const contact = () => {
  const main = document.getElementById('main');
  main.innerHTML = '';
  const contInfo = document.createElement('div');
  contInfo.classList.add('cont-info');
  const h1 = document.createElement('h1');
  h1.appendChild(document.createTextNode('Contact Info'));
  contInfo.appendChild(h1);
  const p = document.createElement('p');
  p.appendChild(document.createTextNode('Book a table for either food or drinks, parties of groups!'));
  contInfo.appendChild(p);
  const p2 = document.createElement('p');
  p2.appendChild(document.createTextNode('Phone number: 02920 228 882'));
  contInfo.appendChild(p2);
  const p3 = document.createElement('p');
  p3.appendChild(document.createTextNode('Email: bookings@pitchcardiff.com'));
  contInfo.appendChild(p3);
  const p4 = document.createElement('p');
  p4.appendChild(document.createTextNode('Open from breakfast \'till cocktails daily, every dish we serve is lovingly handmade with heart from our home on Mill Lane.'));
  contInfo.appendChild(p4);
  main.appendChild(contInfo);
};
export default contact;
