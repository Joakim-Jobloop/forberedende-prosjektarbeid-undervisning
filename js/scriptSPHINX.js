const titleSPHINX = "";
const imgSPHINXUrl = "";
const textSPHINX = "";
const cardColorSPHINX = "";

if (titleSPHINX && imgSPHINXUrl && textSPHINX && cardColorSPHINX) {
  document.getElementById("titleSPHINX").textContent = titleSPHINX;
  document.getElementById("imgSPHINX").src = imgSPHINXUrl;
  document.getElementById("textSPHINX").textContent = `"${textSPHINX}!"`;
  document.getElementById("cardSPHINX").style.backgroundColor =
    cardColorSPHINX;
} else {
  document.getElementById("imgSPHINX").src = "./images/archangel.png";
}