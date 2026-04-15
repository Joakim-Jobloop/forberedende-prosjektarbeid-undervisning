const titleCYCLOPS = "Eira Stormgaze";
const imgCYCLOPSUrl = "/images/CYCLOPS/cyclops.jpg";
const textCYCLOPS =
  "This Storm-Cyclops is a ruthless Viking warrior who raids the stormy seas";
const cardColorCYCLOPS = "#0e1b24";

if (titleCYCLOPS && imgCYCLOPSUrl && textCYCLOPS && cardColorCYCLOPS) {
  document.getElementById("titleCYCLOPS").textContent = titleCYCLOPS;
  document.getElementById("imgCYCLOPS").src = imgCYCLOPSUrl;
  document.getElementById("textCYCLOPS").textContent = `"${textCYCLOPS}!"`;
  document.getElementById("cardCYCLOPS").style.backgroundColor =
    cardColorCYCLOPS;
} else {
  document.getElementById("imgCYCLOPS").src = "./images/archangel.png";
}
