const titleBEHEMOTH = "";
const imgBEHEMOTHUrl = "";
const textBEHEMOTH = "";
const cardColorBEHEMOTH = "";

if (titleBEHEMOTH && imgBEHEMOTHUrl && textBEHEMOTH && cardColorBEHEMOTH) {
  document.getElementById("titleBEHEMOTH").textContent = titleBEHEMOTH;
  document.getElementById("imgBEHEMOTH").src = imgBEHEMOTHUrl;
  document.getElementById("textBEHEMOTH").textContent = `"${textBEHEMOTH}!"`;
  document.getElementById("cardBEHEMOTH").style.backgroundColor =
    cardColorBEHEMOTH;
} else {
  document.getElementById("imgBEHEMOTH").src = "./images/archangel.png";
}
