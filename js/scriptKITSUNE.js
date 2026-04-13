const titleKITSUNE = "";
const imgKITSUNEUrl = "";
const textKITSUNE = "";
const cardColorKITSUNE = "";

if (titleKITSUNE && imgKITSUNEUrl && textKITSUNE && cardColorKITSUNE) {
  document.getElementById("titleKITSUNE").textContent = titleKITSUNE;
  document.getElementById("imgKITSUNE").src = imgKITSUNEUrl;
  document.getElementById("textKITSUNE").textContent = `"${textKITSUNE}!"`;
  document.getElementById("cardKITSUNE").style.backgroundColor =
    cardColorKITSUNE;
} else {
  document.getElementById("imgKITSUNE").src = "./images/archangel.png";
}
