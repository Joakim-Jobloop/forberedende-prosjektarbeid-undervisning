const titleANGEL = "";
const imgANGELUrl = "";
const textANGEL = "";
const cardColorANGEL = "";

if (titleANGEL && imgANGELUrl && textANGEL && cardColorANGEL) {
  document.getElementById("titleANGEL").textContent = titleANGEL;
  document.getElementById("imgANGEL").src = imgANGELUrl;
  document.getElementById("textANGEL").textContent = `"${textANGEL}!"`;
  document.getElementById("cardANGEL").style.backgroundColor = cardColorANGEL;
} else {
  document.getElementById("imgANGEL").src = "../images/archangel.png";
}
