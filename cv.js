// Función para que cambie a Darkmode
//  Darkmode Function
function darkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

// Función para que cambie de idioma
//  Language change function
function english() {
  let element = document.body;
  element.classList.toggle("english");
}

// Función para que aparesca la flecha que lleva al inicio luego de scroll down.
// Function to make the up arrow visible before scroll down.
window.onscroll = function () {
  if (pageYOffset >= 200) {
    document.getElementById("back-to-top").style.visibility = "visible";
  } else {
    document.getElementById("back-to-top").style.visibility = "hidden";
  }
};
