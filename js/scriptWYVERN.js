const titleWYVERN = "";
const imgWYVERNUrl = "";
const textWYVERN = "";
const cardColorWYVERN = "";

if (titleWYVERN && imgWYVERNUrl && textWYVERN && cardColorWYVERN) {
  document.getElementById("titleWYVERN").textContent = titleWYVERN;
  document.getElementById("imgWYVERN").src = imgWYVERNUrl;
  document.getElementById("textWYVERN").textContent = `"${textWYVERN}!"`;
  document.getElementById("cardWYVERN").style.backgroundColor =
    cardColorWYVERN;
} else {
  document.getElementById("imgWYVERN").src = "./images/archangel.png";
}