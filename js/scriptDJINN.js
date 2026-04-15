const titleDJINN = "Weaver of Games";
const imgDJINNUrl = "/images/DJINN/DJINN-weaver-of-games.png";
const textDJINN = 
  "Rules are such fragile things… let me show you how easily they bend.";
const cardColorDJINN = "purple";

if (titleDJINN && imgDJINNUrl && textDJINN && cardColorDJINN) {
  document.getElementById("titleDJINN").textContent = titleDJINN;
  document.getElementById("imgDJINN").src = imgDJINNUrl;
  document.getElementById("textDJINN").textContent = `"${textDJINN}!"`;
  document.getElementById("cardDJINN").style.backgroundColor = cardColorDJINN;
} else {
  document.getElementById("imgDJINN").src = "./images/archangel.png";
}
