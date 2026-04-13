const titleVAMPIRE = "";
const imgVAMPIREUrl = "";
const textVAMPIRE = "";
const cardColorVAMPIRE = "";

if (titleVAMPIRE && imgVAMPIREUrl && textVAMPIRE && cardColorVAMPIRE) {
  document.getElementById("titleVAMPIRE").textContent = titleVAMPIRE;
  document.getElementById("imgVAMPIRE").src = imgVAMPIREUrl;
  document.getElementById("textVAMPIRE").textContent = `"${textVAMPIRE}!"`;
  document.getElementById("cardVAMPIRE").style.backgroundColor =
    cardColorVAMPIRE;
} else {
  document.getElementById("imgVAMPIRE").src = "./images/archangel.png";
}