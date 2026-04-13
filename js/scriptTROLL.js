const titleTROLL = "";
const imgTROLLUrl = "";
const textTROLL = "";
const cardColorTROLL = "";

if (titleTROLL && imgTROLLUrl && textTROLL && cardColorTROLL) {
  document.getElementById("titleTROLL").textContent = titleTROLL;
  document.getElementById("imgTROLL").src = imgTROLLUrl;
  document.getElementById("textTROLL").textContent = `"${textTROLL}!"`;
  document.getElementById("cardTROLL").style.backgroundColor =
    cardColorTROLL;
} else {
  document.getElementById("imgTROLL").src = "./images/archangel.png";
}