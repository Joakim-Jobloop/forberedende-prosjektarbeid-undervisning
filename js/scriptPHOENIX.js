const titlePHOENIX = "";
const imgPHOENIXUrl = "";
const textPHOENIX = "";
const cardColorPHOENIX = "";

if (titlePHOENIX && imgPHOENIXUrl && textPHOENIX && cardColorPHOENIX) {
  document.getElementById("titlePHOENIX").textContent = titlePHOENIX;
  document.getElementById("imgPHOENIX").src = imgPHOENIXUrl;
  document.getElementById("textPHOENIX").textContent = `"${textPHOENIX}!"`;
  document.getElementById("cardPHOENIX").style.backgroundColor =
    cardColorPHOENIX;
} else {
  document.getElementById("imgPHOENIX").src = "./images/archangel.png";
}
