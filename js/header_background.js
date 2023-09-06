document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.querySelector(".header")

    const a = document.createElement("a");
    a.href = "index.html";
    a.textContent = "HARRY POTTER";

    const section = document.createElement("section");
    section.className = "color";

    const label = document.createElement("label");
    label.htmlFor = "color";
    label.textContent = "Background color:"

    const select = document.createElement("select");
    select.name = "Color";
    select.id = "color";
    select.onchange = updateBackground;

    const option1 = document.createElement("option");
    option1.value = "background_std";
    option1.textContent = "Standard";

    const option2 = document.createElement("option");
    option2.value = "background_wht";
    option2.textContent = "White";

    section.appendChild(label);
    section.appendChild(select);
    select.appendChild(option1);
    select.appendChild(option2);


    headerContainer.appendChild(a);
    headerContainer.appendChild(section);
})

function updateBackground() {
    const color = document.getElementById("color")
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
