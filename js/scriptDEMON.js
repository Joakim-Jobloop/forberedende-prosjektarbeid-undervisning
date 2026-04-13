const titleDEMON = "";
const imgDEMONUrl = "";
const textDEMON = "";
const cardColorDEMON = "";

if (titleDEMON && imgDEMONUrl && textDEMON && cardColorDEMON) {
  document.getElementById("titleDEMON").textContent = titleDEMON;
  document.getElementById("imgDEMON").src = imgDEMONUrl;
  document.getElementById("textDEMON").textContent = `"${textDEMON}!"`;
  document.getElementById("cardDEMON").style.backgroundColor = cardColorDEMON;
} else {
  document.getElementById("imgDEMON").src = "./images/archangel.png";
}
