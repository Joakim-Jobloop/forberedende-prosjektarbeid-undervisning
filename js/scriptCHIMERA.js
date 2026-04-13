const titleCHIMERA = "";
const imgCHIMERAUrl = "";
const textCHIMERA = "";
const cardColorCHIMERA = "";

if (titleCHIMERA && imgCHIMERAUrl && textCHIMERA && cardColorCHIMERA) {
  document.getElementById("titleCHIMERA").textContent = titleCHIMERA;
  document.getElementById("imgCHIMERA").src = imgCHIMERAUrl;
  document.getElementById("textCHIMERA").textContent = `"${textCHIMERA}!"`;
  document.getElementById("cardCHIMERA").style.backgroundColor =
    cardColorCHIMERA;
} else {
  document.getElementById("imgCHIMERA").src = "./images/archangel.png";
}
