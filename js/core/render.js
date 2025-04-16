import items, { buildings } from "../data/data.js";
import Item from "../components/unlocks/items.js";
import Building from "../components/unlocks/buildings.js";
import { unlockItem } from "../components/unlocks/items.js";
import { unlockBuilding } from "../components/unlocks/buildings.js";

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
  const gymBuildings = sortedBuildings.map((building) => new Building("gym__buildings", building)); // Corrected class name

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
