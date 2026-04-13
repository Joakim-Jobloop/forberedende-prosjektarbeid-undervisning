const titleIMP = "";
const imgIMPUrl = "";
const textIMP = "";
const cardColorIMP = "";

if (titleIMP && imgIMPUrl && textIMP && cardColorIMP) {
  document.getElementById("titleIMP").textContent = titleIMP;
  document.getElementById("imgIMP").src = imgIMPUrl;
  document.getElementById("textIMP").textContent = `"${textIMP}!"`;
  document.getElementById("cardIMP").style.backgroundColor = cardColorIMP;
} else {
  document.getElementById("imgIMP").src = "./images/archangel.png";
}
