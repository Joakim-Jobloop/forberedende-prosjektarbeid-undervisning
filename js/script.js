const LOGOS = ["./images/logo1.png", "./images/logo2.png"];
const container = document.querySelector(".container");

MONSTERS.forEach(({ id, name, img, description, color }, index) => {
  const filled = name && img && description && color;
  const placeholder = LOGOS[index % 2];

  const card = document.createElement("div");
  card.className = [
    "flex flex-col items-center gap-3 p-4 rounded-2xl cursor-pointer",
    "border border-white/10",
    "transition-all duration-300 hover:scale-105 hover:border-white/30 hover:shadow-2xl hover:shadow-black/80",
  ].join(" ");
  card.style.backgroundColor = filled ? color : "#111827";

  const title = document.createElement("h2");
  title.className = [
    "text-sm font-bold text-center tracking-wider uppercase",
    filled ? "text-white" : "text-white/50",
  ].join(" ");
  title.textContent = filled ? name : id;

  const image = document.createElement("img");
  image.className = "h-40 w-full object-contain rounded-lg";
  image.src = img || placeholder;
  image.alt = name || id;

  const desc = document.createElement("p");
  desc.className = [
    "text-xs text-center italic min-h-8",
    filled ? "text-white/90" : "text-white/30",
  ].join(" ");
  desc.textContent = filled ? `"${description}!"` : "???";

  card.append(title, image, desc);
  container.appendChild(card);
});
