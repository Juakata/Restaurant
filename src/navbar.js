const navbar = () => {
  container.innerHTML += `<nav>
    <ul class="top-menu">
      <li id="about">About us</li>
      <li id="contact">Contact us</li>
      <li id="home"><img class="logo" src="https://pitchcardiff.com/wp-content/uploads/2018/03/Asset-5@330x-1-uai-258x192.png" alt="logo"></li>
      <li id="drinks">Drinks</li>
      <li id="food">Food</li>
    </ul>
  </nav>`;
};

export default navbar;
