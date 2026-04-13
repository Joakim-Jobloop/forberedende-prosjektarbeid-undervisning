const titleOGRE = "";
const imgOGREUrl = "";
const textOGRE = "";
const cardColorOGRE = "";

if (titleOGRE && imgOGREUrl && textOGRE && cardColorOGRE) {
  document.getElementById("titleOGRE").textContent = titleOGRE;
  document.getElementById("imgOGRE").src = imgOGREUrl;
  document.getElementById("textOGRE").textContent = `"${textOGRE}!"`;
  document.getElementById("cardOGRE").style.backgroundColor =
    cardColorOGRE;
} else {
  document.getElementById("imgOGRE").src = "./images/archangel.png";
}