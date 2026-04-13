const titlePEGASUS = "";
const imgPEGASUSUrl = "";
const textPEGASUS = "";
const cardColorPEGASUS = "";

if (titlePEGASUS && imgPEGASUSUrl && textPEGASUS && cardColorPEGASUS) {
  document.getElementById("titlePEGASUS").textContent = titlePEGASUS;
  document.getElementById("imgPEGASUS").src = imgPEGASUSUrl;
  document.getElementById("textPEGASUS").textContent = `"${textPEGASUS}!"`;
  document.getElementById("cardPEGASUS").style.backgroundColor =
    cardColorPEGASUS;
} else {
  document.getElementById("imgPEGASUS").src = "./images/archangel.png";
}