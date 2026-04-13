const titleHYDRA = "";
const imgHYDRAUrl = "";
const textHYDRA = "";
const cardColorHYDRA = "";

if (titleHYDRA && imgHYDRAUrl && textHYDRA && cardColorHYDRA) {
  document.getElementById("titleHYDRA").textContent = titleHYDRA;
  document.getElementById("imgHYDRA").src = imgHYDRAUrl;
  document.getElementById("textHYDRA").textContent = `"${textHYDRA}!"`;
  document.getElementById("cardHYDRA").style.backgroundColor =
    cardColorHYDRA;
} else {
  document.getElementById("imgHYDRA").src = "./images/archangel.png";
}