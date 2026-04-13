const titleELEMENTAL = "";
const imgELEMENTALUrl = "";
const textELEMENTAL = "";
const cardColorELEMENTAL = "";

if (titleELEMENTAL && imgELEMENTALUrl && textELEMENTAL && cardColorELEMENTAL) {
  document.getElementById("titleELEMENTAL").textContent = titleELEMENTAL;
  document.getElementById("imgELEMENTAL").src = imgELEMENTALUrl;
  document.getElementById("textELEMENTAL").textContent = `"${textELEMENTAL}!"`;
  document.getElementById("cardELEMENTAL").style.backgroundColor =
    cardColorELEMENTAL;
} else {
  document.getElementById("imgELEMENTAL").src = "./images/archangel.png";
}
