const titleYETI = "";
const imgYETIUrl = "";
const textYETI = "";
const cardColorYETI = "";

if (titleYETI && imgYETIUrl && textYETI && cardColorYETI) {
  document.getElementById("titleYETI").textContent = titleYETI;
  document.getElementById("imgYETI").src = imgYETIUrl;
  document.getElementById("textYETI").textContent = `"${textYETI}!"`;
  document.getElementById("cardYETI").style.backgroundColor =
    cardColorYETI;
} else {
  document.getElementById("imgYETI").src = "./images/archangel.png";
}