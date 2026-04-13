const titleSATYR = "";
const imgSATYRUrl = "";
const textSATYR = "";
const cardColorSATYR = "";

if (titleSATYR && imgSATYRUrl && textSATYR && cardColorSATYR) {
  document.getElementById("titleSATYR").textContent = titleSATYR;
  document.getElementById("imgSATYR").src = imgSATYRUrl;
  document.getElementById("textSATYR").textContent = `"${textSATYR}!"`;
  document.getElementById("cardSATYR").style.backgroundColor =
    cardColorSATYR;
} else {
  document.getElementById("imgSATYR").src = "./images/archangel.png";
}