const navbar = () => {
  const container = document.getElementById('container');
  container.innerHTML += `<nav class="nav-start">
    <ul class="top-menu">
      <li id="about1">About us</li>
      <li id="contact1">Contact us</li>
      <li id="home1"><img class="logo" src="https://pitchcardiff.com/wp-content/uploads/2018/03/Asset-5@330x-1-uai-258x192.png" alt="logo"></li>
      <li id="drinks1">Drinks</li>
      <li id="food1">Food</li>
    </ul>
  </nav>`;

  container.innerHTML += `<nav class="nav-end">
    <ul class="top-menu">
      <li id="home2"><img class="logo" src="https://pitchcardiff.com/wp-content/uploads/2018/03/Asset-5@330x-1-uai-258x192.png" alt="logo"></li>
      <i id="i-menu" class="fa fa-bars"></i>
    </ul>
  </nav>`;

  container.innerHTML += `<nav id="second-nav" class="second-nav-end">
    <ul class="second-top-menu">
      <li id="about2">About us</li>
      <li id="contact2">Contact us</li>
      <li id="drinks2">Drinks</li>
      <li id="food2">Food</li>
    </ul>
  </nav>`;
};

const displaySecondNav = () => {
  const i = document.getElementById('i-menu');
  const secondNav = document.getElementById('second-nav');
  if (i.className === 'fa fa-bars') {
    i.className = 'fa fa-times';
    secondNav.style.display = 'block';
  } else {
    i.className = 'fa fa-bars';
    secondNav.style.display = 'none';
  }
};

export { navbar, displaySecondNav };
