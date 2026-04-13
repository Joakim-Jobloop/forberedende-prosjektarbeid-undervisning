const titleDJINN = "";
const imgDJINNUrl = "";
const textDJINN = "";
const cardColorDJINN = "";

if (titleDJINN && imgDJINNUrl && textDJINN && cardColorDJINN) {
  document.getElementById("titleDJINN").textContent = titleDJINN;
  document.getElementById("imgDJINN").src = imgDJINNUrl;
  document.getElementById("textDJINN").textContent = `"${textDJINN}!"`;
  document.getElementById("cardDJINN").style.backgroundColor = cardColorDJINN;
} else {
  document.getElementById("imgDJINN").src = "./images/archangel.png";
}
