let buttons = document.querySelectorAll(".arrows button");
let leftbtn = document.querySelector(".leftbtn");
let rightbtn = document.querySelector(".rightbtn");
let section = document.querySelector("section");
let mainText = document.querySelector(".main-text h4");
let random = 0;
let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let clickCheck = false;
let leftColor = "#a0cea1";
let rightColor = "#a4d542";
let clrDir = "to right";

function getColorCode() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    random = Math.floor(Math.random() * 16);
    hexColor += colors[random];
  }
  return hexColor;
}

function arrowDir() {
  buttons.forEach((element, index) => {
    element.addEventListener("click", (dets) => {
      switch (element.className) {
        case "right":
          clrDir = "to right";
          break;
        case "left":
          clrDir = "to left";
          break;
        case "top":
          clrDir = "to top";
          break;
        case "bottom":
          clrDir = "to bottom";
          break;
        case "rightTop":
          clrDir = "to right top";
          break;
        case "rightBottom":
          clrDir = "to right bottom";
          break;
        case "leftBottom":
          clrDir = "to left bottom";
          break;
        case "leftTop":
          clrDir = "to left top";
          break;
      }
    });
  });
}
arrowDir();
leftbtn.addEventListener("click", () => {
  leftbtn.innerHTML = getColorCode();
  leftColor = leftbtn.innerHTML;
  leftbtn.style.backgroundColor = `${leftColor}`;
  section.style.backgroundImage = `linear-gradient(${clrDir},${leftColor},${rightColor})`;
  mainText.innerHTML = `background-image: linear-gradient(${clrDir},${leftColor},${rightColor})`;
});
rightbtn.addEventListener("click", () => {
  rightbtn.innerHTML = getColorCode();
  rightColor = rightbtn.innerHTML;
  rightbtn.style.backgroundColor = `${rightColor}`;
  section.style.backgroundImage = `linear-gradient(${clrDir},${leftColor},${rightColor})`;
  mainText.innerHTML = `background-image: linear-gradient(${clrDir},${leftColor},${rightColor})`;
});

mainText.addEventListener("click", function () {
  var textToCopy = this.textContent || this.innerText; // Get text content of the div
  navigator.clipboard.writeText(textToCopy); // Write text to clipboard
  alert("Text Copied");
});
