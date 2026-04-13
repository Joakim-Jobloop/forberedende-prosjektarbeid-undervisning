const titleGARGOYLE = "";
const imgGARGOYLEUrl = "";
const textGARGOYLE = "";
const cardColorGARGOYLE = "";

if (titleGARGOYLE && imgGARGOYLEUrl && textGARGOYLE && cardColorGARGOYLE) {
  document.getElementById("titleGARGOYLE").textContent = titleGARGOYLE;
  document.getElementById("imgGARGOYLE").src = imgGARGOYLEUrl;
  document.getElementById("textGARGOYLE").textContent = `"${textGARGOYLE}!"`;
  document.getElementById("cardGARGOYLE").style.backgroundColor =
    cardColorGARGOYLE;
} else {
  document.getElementById("imgGARGOYLE").src = "./images/archangel.png";
}
