let btnChange = document.querySelector(".btn");
let boxes = document.querySelectorAll(".box");
let hOne = document.querySelectorAll(".box h1");
let p = document.querySelectorAll(".p-white");
let body = document.querySelector("body");
let boxMode = document.querySelector(".mode");
let mode = "light";
btnChange.addEventListener("click", (e) => {
  if (mode === "light") {
    mode = "dark";
    localStorage.setItem("mode", mode);
    btnChange.classList.add("dark-on");
    btnChange.style = ` background-color: #262a43;  `;
    boxMode.style = `background-color: #3cc2a3;`;

    darkMode();
  } else if (mode === "dark") {
    mode = "light";
    localStorage.setItem("mode", mode);
    lightMode();
    boxMode.style = `background-color: #adb1cb;;`;
    btnChange.style = `  background-color: #f2f2f7; `;
    btnChange.classList.remove("dark-on");
  }
});

mode = localStorage.getItem("mode") || "light";
if (mode === "dark") darkMode();

if (mode === "light") {
  lightMode();
  boxMode.style = `background-color: #adb1cb;;`;
  btnChange.style = `  background-color: #f2f2f7; `;
  btnChange.classList.remove("dark-on");
} else if (mode === "dark") {
  darkMode();
  btnChange.style = ` background-color: #262a43;  `;
  boxMode.style = `background-color: #3cc2a3;`;
  btnChange.classList.add("dark-on");
}

function darkMode() {
  body.style.backgroundColor = "#20222f";
  boxes.forEach((element) => {
    element.style.backgroundColor = "#252b43";
    element.classList.add("active");
  });
  p.forEach((element) => {
    element.style.color = "white";
  });
  hOne.forEach((element) => {
    element.style.color = "white";
  });
}
function lightMode() {
  body.style.backgroundColor = "#ffffff";
  boxes.forEach((element, index) => {
    element.classList.remove("active");
    element.style.backgroundColor = "#f0f3fa";
  });
  p.forEach((element) => {
    element.style.color = "#1c1f28";
  });
  hOne.forEach((element) => {
    element.style.color = "#1c1f28";
  });
}
