const titleWEREWOLF = "";
const imgWEREWOLFUrl = "";
const textWEREWOLF = "";
const cardColorWEREWOLF = "";

if (titleWEREWOLF && imgWEREWOLFUrl && textWEREWOLF && cardColorWEREWOLF) {
  document.getElementById("titleWEREWOLF").textContent = titleWEREWOLF;
  document.getElementById("imgWEREWOLF").src = imgWEREWOLFUrl;
  document.getElementById("textWEREWOLF").textContent = `"${textWEREWOLF}!"`;
  document.getElementById("cardWEREWOLF").style.backgroundColor =
    cardColorWEREWOLF;
} else {
  document.getElementById("imgWEREWOLF").src = "./images/archangel.png";
}