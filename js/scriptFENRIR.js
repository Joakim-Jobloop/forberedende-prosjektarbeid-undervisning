const titleFENRIR = "";
const imgFENRIRUrl = "";
const textFENRIR = "";
const cardColorFENRIR = "";

if (titleFENRIR && imgFENRIRUrl && textFENRIR && cardColorFENRIR) {
  document.getElementById("titleFENRIR").textContent = titleFENRIR;
  document.getElementById("imgFENRIR").src = imgFENRIRUrl;
  document.getElementById("textFENRIR").textContent = `"${textFENRIR}!"`;
  document.getElementById("cardFENRIR").style.backgroundColor = cardColorFENRIR;
} else {
  document.getElementById("imgFENRIR").src = "./images/archangel.png";
}
