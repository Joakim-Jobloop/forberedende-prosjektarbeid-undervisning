const titleORC = "";
const imgORCUrl = "";
const textORC = "";
const cardColorORC = "";

if (titleORC && imgORCUrl && textORC && cardColorORC) {
  document.getElementById("titleORC").textContent = titleORC;
  document.getElementById("imgORC").src = imgORCUrl;
  document.getElementById("textORC").textContent = `"${textORC}!"`;
  document.getElementById("cardORC").style.backgroundColor =
    cardColorORC;
} else {
  document.getElementById("imgORC").src = "./images/archangel.png";
}