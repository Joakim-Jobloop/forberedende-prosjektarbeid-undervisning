const titleBASILISK = "";
const imgBASILISKUrl = "";
const textBASILISK = "";
const cardColorBASILISK = "";

if (titleBASILISK && imgBASILISKUrl && textBASILISK && cardColorBASILISK) {
  document.getElementById("titleBASILISK").textContent = titleBASILISK;
  document.getElementById("imgBASILISK").src = imgBASILISKUrl;
  document.getElementById("textBASILISK").textContent = `"${textBASILISK}!"`;
  document.getElementById("cardBASILISK").style.backgroundColor =
    cardColorBASILISK;
} else {
  document.getElementById("imgBASILISK").src = "./images/archangel.png";
}
