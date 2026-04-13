const titleDEVIL = "";
const imgDEVILUrl = "";
const textDEVIL = "";
const cardColorDEVIL = "";

if (titleDEVIL && imgDEVILUrl && textDEVIL && cardColorDEVIL) {
  document.getElementById("titleDEVIL").textContent = titleDEVIL;
  document.getElementById("imgDEVIL").src = imgDEVILUrl;
  document.getElementById("textDEVIL").textContent = `"${textDEVIL}!"`;
  document.getElementById("cardDEVIL").style.backgroundColor = cardColorDEVIL;
} else {
  document.getElementById("imgDEVIL").src = "./images/archangel.png";
}
