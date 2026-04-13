const titleMEDUSA = "";
const imgMEDUSAUrl = "";
const textMEDUSA = "";
const cardColorMEDUSA = "";

if (titleMEDUSA && imgMEDUSAUrl && textMEDUSA && cardColorMEDUSA) {
  document.getElementById("titleMEDUSA").textContent = titleMEDUSA;
  document.getElementById("imgMEDUSA").src = imgMEDUSAUrl;
  document.getElementById("textMEDUSA").textContent = `"${textMEDUSA}!"`;
  document.getElementById("cardMEDUSA").style.backgroundColor =
    cardColorMEDUSA;
} else {
  document.getElementById("imgMEDUSA").src = "./images/archangel.png";
}