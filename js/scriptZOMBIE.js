const titleZOMBIE = "";
const imgZOMBIEUrl = "";
const textZOMBIE = "";
const cardColorZOMBIE = "";

if (titleZOMBIE && imgZOMBIEUrl && textZOMBIE && cardColorZOMBIE) {
  document.getElementById("titleZOMBIE").textContent = titleZOMBIE;
  document.getElementById("imgZOMBIE").src = imgZOMBIEUrl;
  document.getElementById("textZOMBIE").textContent = `"${textZOMBIE}!"`;
  document.getElementById("cardZOMBIE").style.backgroundColor =
    cardColorZOMBIE;
} else {
  document.getElementById("imgZOMBIE").src = "./images/archangel.png";
}