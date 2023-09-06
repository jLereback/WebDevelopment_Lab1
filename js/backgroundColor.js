function updateBackground() {
  let color = document.getElementById("color")

  localStorage.setItem("background", color.value);
  setBackground(color.value)
}

function setBackground(color) {
  document.body.classList.remove("background_std", "background_wht")
  document.body.classList.add(color);
}

function onLoad() {
  let colorSelector = document.getElementById("color")
  let color = localStorage.getItem("background");

  setBackground(color)
  colorSelector.value = color;
}
