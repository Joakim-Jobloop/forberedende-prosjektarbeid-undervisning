const titleMANTICORE = "";
const imgMANTICOREUrl = "";
const textMANTICORE = "";
const cardColorMANTICORE = "";

if (titleMANTICORE && imgMANTICOREUrl && textMANTICORE && cardColorMANTICORE) {
  document.getElementById("titleMANTICORE").textContent = titleMANTICORE;
  document.getElementById("imgMANTICORE").src = imgMANTICOREUrl;
  document.getElementById("textMANTICORE").textContent = `"${textMANTICORE}!"`;
  document.getElementById("cardMANTICORE").style.backgroundColor =
    cardColorMANTICORE;
} else {
  document.getElementById("imgMANTICORE").src = "./images/archangel.png";
}