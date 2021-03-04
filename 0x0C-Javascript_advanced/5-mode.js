function changeMode (size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  let tag = document.createElement('p');
  let text = document.createTextNode('Welcome Holberton!');
  tag.appendChild(text);
  document.body.appendChild(tag);

  let my_button = document.createElement('button');
  my_button.innerHTML = "Spooky";
  my_button.onclick = function () {
    spooky();
  }
  document.body.appendChild(my_button);


  let dark_button = document.createElement('button');
  dark_button.innerHTML = "Dark mode";
  dark_button.onclick = function () {
    darkMode();
  }
  document.body.appendChild(dark_button);


  let screm_button = document.createElement('button');
  screm_button.innerHTML = "Scream mode";
  screm_button.onclick = function () {
    screamMode();
  }
  document.body.appendChild(screm_button);
}

main();