const titleUNICORN = "";
const imgUNICORNUrl = "";
const textUNICORN = "";
const cardColorUNICORN = "";

if (titleUNICORN && imgUNICORNUrl && textUNICORN && cardColorUNICORN) {
  document.getElementById("titleUNICORN").textContent = titleUNICORN;
  document.getElementById("imgUNICORN").src = imgUNICORNUrl;
  document.getElementById("textUNICORN").textContent = `"${textUNICORN}!"`;
  document.getElementById("cardUNICORN").style.backgroundColor =
    cardColorUNICORN;
} else {
  document.getElementById("imgUNICORN").src = "./images/archangel.png";
}