import items from "../data/data.js";
import GameItem from "../components/unlocks/gameItems.js";
import { unlockItem } from "../components/unlocks/items.js";

export default function renderItems($div) {
  let sortedItems = [...items].sort((a, b) => a.cost - b.cost);
  const gymItems = sortedItems.map((item) => new GameItem("gym__item", item));

  let content = "";
  gymItems.forEach((item) => {
    content += item.render();
  });

  $div.innerHTML = content;

  // add click listeners only to visible buttons
  $div.addEventListener("click", (e) => {
    const btn = e.target.closest(".unlock-btn");
    if (btn && btn.style.display !== "none") {
      unlockItem(btn);
    }
  });
}
