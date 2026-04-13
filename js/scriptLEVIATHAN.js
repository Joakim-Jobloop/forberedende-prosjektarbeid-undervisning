const titleLEVIATHAN = "";
const imgLEVIATHANUrl = "";
const textLEVIATHAN = "";
const cardColorLEVIATHAN = "";

if (titleLEVIATHAN && imgLEVIATHANUrl && textLEVIATHAN && cardColorLEVIATHAN) {
  document.getElementById("titleLEVIATHAN").textContent = titleLEVIATHAN;
  document.getElementById("imgLEVIATHAN").src = imgLEVIATHANUrl;
  document.getElementById("textLEVIATHAN").textContent = `"${textLEVIATHAN}!"`;
  document.getElementById("cardLEVIATHAN").style.backgroundColor =
    cardColorLEVIATHAN;
} else {
  document.getElementById("imgLEVIATHAN").src = "./images/archangel.png";
}