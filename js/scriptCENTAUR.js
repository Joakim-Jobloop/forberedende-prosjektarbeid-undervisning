const titleCENTAUR = "CENTAUR";
const imgCENTAURUrl = "images/CENTAUR/CENTAUR.png";
const textCENTAUR = "Hear the thunder of my hooves, and know your end has come";
const cardColorCENTAUR = "darkred";

if (titleCENTAUR && imgCENTAURUrl && textCENTAUR && cardColorCENTAUR) {
  document.getElementById("titleCENTAUR").textContent = titleCENTAUR;
  document.getElementById("imgCENTAUR").src = imgCENTAURUrl;
  document.getElementById("textCENTAUR").textContent = `"${textCENTAUR}!"`;
  document.getElementById("cardCENTAUR").style.backgroundColor =
    cardColorCENTAUR;
} else {
  document.getElementById("imgCENTAUR").src = "./images/archangel.png";
}

// Add electric hover animation
const styleCENTAUR = document.createElement("style");
styleCENTAUR.textContent = `
  #cardCENTAUR {
    transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: relative;
    border-radius: 8px;
  }
  
  #cardCENTAUR:hover {
    transform: scale(1.08) translateY(-8px);
    /* Multi-layered animations: erratic glowing and violent vibration */
    animation: centaurElectric 0.15s infinite alternate, centaurVibrate 0.1s infinite linear;
    z-index: 10;
  }

  /* Intense core glow and erratic multi-drop-shadow */
  @keyframes centaurElectric {
    0% {
      box-shadow: 
        0 0 10px 2px #fff,
        0 0 20px 8px #0ff,
        -5px -5px 15px #00f,
        5px 5px 15px #0ff;
      filter: contrast(1) brightness(1);
    }
    50% {
      box-shadow: 
        0 0 15px 4px #fff,
        0 0 35px 12px #0ff,
        8px -8px 25px #00f,
        -8px 8px 25px #0ff;
      filter: contrast(1.2) brightness(1.2) hue-rotate(-5deg);
    }
    100% {
      box-shadow: 
        0 0 25px 8px #fff,
        0 0 50px 18px #0ff,
        -10px -10px 35px #00f,
        10px 10px 35px #0ff;
      filter: contrast(1.4) brightness(1.3) hue-rotate(5deg);
    }
  }

  /* Shaking the card violently to feel like raw power */
  @keyframes centaurVibrate {
    0% { transform: scale(1.08) translateY(-8px) rotate(0deg) translateX(0px); }
    25% { transform: scale(1.08) translateY(-8px) rotate(1deg) translateX(1px); }
    50% { transform: scale(1.08) translateY(-8px) rotate(0deg) translateX(-1px); }
    75% { transform: scale(1.08) translateY(-8px) rotate(-1deg) translateX(1px); }
    100% { transform: scale(1.08) translateY(-8px) rotate(0deg) translateX(0px); }
  }

  /* Lightning strikes inside/over the card */
  #cardCENTAUR::before, #cardCENTAUR::after {
    content: '';
    position: absolute;
    pointer-events: none;
    opacity: 0;
    z-index: 20;
    border-radius: 8px;
  }
  
  /* Creates a bright lightning flash illuminating the card contents */
  #cardCENTAUR:hover::before {
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(200, 255, 255, 0.6), transparent 80%);
    mix-blend-mode: overlay;
    animation: lightningFlash 0.35s infinite;
  }

  /* Creates high-voltage electric sparks racing around the border */
  #cardCENTAUR:hover::after {
    top: -4px; left: -4px; right: -4px; bottom: -4px;
    border: 3px solid #fff;
    box-shadow: 0 0 15px 5px #0ff, inset 0 0 15px 5px #0ff;
    animation: borderLightning 0.25s infinite;
  }

  @keyframes lightningFlash {
    0%, 100% { opacity: 0; }
    10% { opacity: 1; transform: scale(1.05); }
    15% { opacity: 0; transform: scale(0.95); }
    60% { opacity: 0.8; }
    65% { opacity: 0; }
  }

  @keyframes borderLightning {
    0% { opacity: 0; clip-path: polygon(0 0, 100% 0, 100% 5%, 0 5%); }
    15% { opacity: 1; clip-path: polygon(95% 0, 100% 0, 100% 100%, 95% 100%); }
    30% { opacity: 0; }
    45% { opacity: 1; clip-path: polygon(0 95%, 100% 95%, 100% 100%, 0 100%); }
    60% { opacity: 0; }
    75% { opacity: 1; clip-path: polygon(0 0, 5% 0, 5% 100%, 0 100%); }
    90% { opacity: 0; }
    100% { opacity: 0; }
  }
`;
document.head.appendChild(styleCENTAUR);

