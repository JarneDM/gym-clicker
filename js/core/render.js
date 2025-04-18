import items, { buildings, personel } from "../data/data.js";
import Item, { unlockItem } from "../components/unlocks/items.js";
import Building, { unlockBuilding } from "../components/unlocks/buildings.js";
import Personel, { unlockPersonel } from "../components/unlocks/personel.js";

export default function renderItems($itemsDiv) {
  let sortedItems = [...items].sort((a, b) => a.cost - b.cost);
  const gymItems = sortedItems.map((item) => new Item("gym__item", item));

  let content = "";
  gymItems.forEach((item) => {
    content += item.render();
  });

  $itemsDiv.innerHTML = content;

  // add click listeners only to visible buttons
  $itemsDiv.addEventListener("click", (e) => {
    const btn = e.target.closest(".unlock-btn");
    if (btn && btn.style.display !== "none") {
      unlockItem(btn);
    }
  });
}

export function renderBuildings($buildingsDiv) {
  let sortedBuildings = [...buildings].sort((a, b) => a.cost - b.cost);
  const gymBuildings = sortedBuildings.map((building) => new Building("gym__buildings", building));

  let bContent = "";
  gymBuildings.forEach((building) => {
    bContent += building.render();
  });

  $buildingsDiv.innerHTML = bContent;

  // add click listeners only to visible buttons
  $buildingsDiv.addEventListener("click", (e) => {
    const btn = e.target.closest(".unlock-btn");
    if (btn && btn.style.display !== "none") {
      unlockBuilding(btn);
    }
  });
}

export function renderPersonel($personelDiv) {
  let sortedPersonel = [...personel].sort((a, b) => a.cost - b.cost);
  const gymPersonel = sortedPersonel.map((person) => new Personel("gym__personel", person));

  let pContent = "";
  gymPersonel.forEach((person) => {
    pContent += person.render();
  });

  $personelDiv.innerHTML = pContent;

  // add click listeners only to visible buttons
  $personelDiv.addEventListener("click", (e) => {
    const btn = e.target.closest(".unlock-btn");
    if (btn && btn.style.display !== "none") {
      unlockPersonel(btn);
    }
  });
}

export function renderPassives() {
  const $mps = document.querySelector("#mps");
  const $rps = document.querySelector("#rps");

  const mps = parseFloat(localStorage.getItem("musclePerSecond") || 0);
  const rps = parseFloat(localStorage.getItem("repsPerSecond") || 0);

  $mps.textContent = `${mps.toLocaleString()} Per Second`;
  $rps.textContent = `${rps.toLocaleString()} Per Second`;
}
