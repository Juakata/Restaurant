const footer = () => {
  let foo = document.createElement('footer');
  let ul = document.createElement('ul');
  ul.classList.add('footer-wrapper');
  let li1 = document.createElement('li');
  let face = document.createElement('span');
  face.classList.add('fa');
  face.classList.add('fa-facebook');
  li1.appendChild(face);
  let li2 = document.createElement('li');
  let inst = document.createElement('span');
  inst.classList.add('fa');
  inst.classList.add('fa-instagram');
  li2.appendChild(inst);
  ul.appendChild(li1);
  ul.appendChild(li2);
  foo.appendChild(ul);
  container.appendChild(foo);
}
export default footer;
