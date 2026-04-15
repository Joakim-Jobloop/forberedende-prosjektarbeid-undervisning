const titleMINOTAUR = "Legendary Minotaur";
const imgMINOTAURUrl = "images/MINOTAUR/MINOTAUR.jpg";
const textMINOTAUR =
  "This minotaur has the strength of a beast with the wisdom of man";
const cardColorMINOTAUR =
  "linear-gradient(45deg,rgba(229, 136, 0, 1) 0%, rgba(240, 250, 0, 1) 15%, rgba(139, 238, 0, 1) 30%, rgba(1, 236, 253, 1) 45%, rgba(1, 236, 253, 1) 55%, rgba(77, 63, 204, 1) 70%, rgba(254, 0, 193, 1) 85%, rgba(247, 17, 34, 1) 100%)";

if (titleMINOTAUR && imgMINOTAURUrl && textMINOTAUR && cardColorMINOTAUR) {
  document.getElementById("titleMINOTAUR").textContent = titleMINOTAUR;
  document.getElementById("titleMINOTAUR").style.fontWeight = "bold";
  document.getElementById("titleMINOTAUR").style.webkitTextStroke =
    "0.5px #1b3546";

  document.getElementById("imgMINOTAUR").src = imgMINOTAURUrl;
  document.getElementById("textMINOTAUR").textContent = `"${textMINOTAUR}!"`;
  document.getElementById("textMINOTAUR").style.textAlign = "center";
  document.getElementById("textMINOTAUR").style.background = "#1b3546";
  document.getElementById("textMINOTAUR").style.maxWidth = "160px";
  document.getElementById("textMINOTAUR").style.padding = "2px";
  document.getElementById("textMINOTAUR").style.paddingTop = "5px";
  document.getElementById("textMINOTAUR").style.paddingBottom = "5px";
  document.getElementById("textMINOTAUR").style.minHeight = "fit-content";

  document.getElementById("cardMINOTAUR").style.background = cardColorMINOTAUR;
} else {
  document.getElementById("imgMINOTAUR").src = "./images/archangel.png";
}
