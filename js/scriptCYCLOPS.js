const titleCYCLOPS = "";
const imgCYCLOPSUrl = "";
const textCYCLOPS = "";
const cardColorCYCLOPS = "";

if (titleCYCLOPS && imgCYCLOPSUrl && textCYCLOPS && cardColorCYCLOPS) {
  document.getElementById("titleCYCLOPS").textContent = titleCYCLOPS;
  document.getElementById("imgCYCLOPS").src = imgCYCLOPSUrl;
  document.getElementById("textCYCLOPS").textContent = `"${textCYCLOPS}!"`;
  document.getElementById("cardCYCLOPS").style.backgroundColor =
    cardColorCYCLOPS;
} else {
  document.getElementById("imgCYCLOPS").src = "./images/archangel.png";
}
