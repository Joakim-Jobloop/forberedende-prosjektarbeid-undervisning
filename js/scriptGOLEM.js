const titleGOLEM = "";
const imgGOLEMUrl = "";
const textGOLEM = "";
const cardColorGOLEM = "";

if (titleGOLEM && imgGOLEMUrl && textGOLEM && cardColorGOLEM) {
  document.getElementById("titleGOLEM").textContent = titleGOLEM;
  document.getElementById("imgGOLEM").src = imgGOLEMUrl;
  document.getElementById("textGOLEM").textContent = `"${textGOLEM}!"`;
  document.getElementById("cardGOLEM").style.backgroundColor = cardColorGOLEM;
} else {
  document.getElementById("imgGOLEM").src = "./images/archangel.png";
}
