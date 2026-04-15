const titleCENTAUR = "CENTAUR";
const imgCENTAURUrl = "images/CENTAUR/CENTAUR.png";
const textCENTAUR = "Hear the thunder of my hooves, and know your end has come";
const cardColorCENTAUR = "darkred";

if (titleCENTAUR && imgCENTAURUrl && textCENTAUR && cardColorCENTAUR) {
  document.getElementById("titleCENTAUR").textContent = titleCENTAUR;
  document.getElementById("imgCENTAUR").src = imgCENTAURUrl;
  document.getElementById("textCENTAUR").textContent = `"${textCENTAUR}!"`;
  document.getElementById("cardCENTAUR").style.backgroundColor =
    cardColorCENTAUR;
} else {
  document.getElementById("imgCENTAUR").src = "./images/archangel.png";
}
