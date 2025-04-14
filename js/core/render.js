import items from "../data/data.js";
import GameItem from "../components/unlocks/gameItems.js";

export default function renderItems($div) {
  const gymItems = items.map((item) => new GameItem("gym__item", item));
  gymItems.forEach((item) => {
    $div.innerHTML += item.render();
  });
}
