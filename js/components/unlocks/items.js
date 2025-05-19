import items from "../../data/data.js"; // Ensure this path is correct relative to the file location
import { renderPassives } from "../../core/render.js";

export default class Item {
  constructor(classname, { name, cost, mps = 0 }) {
    this.name = name;
    this.cost = cost;
    this.mps = mps;
    this.classname = classname;
  }

  render() {
    const unlockedItems = JSON.parse(localStorage.getItem("unlockedItems") || "[]");
    const isUnlocked = unlockedItems.includes(this.name);

    return `
      <div class="${this.classname}">
  <div class="item-row">
    <span class="item-name name">${this.name}</span>
  </div>
  <div class="item-row">
    <span class="item-cost cost">Cost: ${this.cost.toLocaleString()} muscles</span>
  </div>
  <div class="item-row">
    <span class="item-mps mps">Muscle Per Second: ${this.mps}</span>
  </div>
  <button 
    class="unlock-btn" 
    data-itemname="${this.name}"
    ${isUnlocked ? 'style="display: none;"' : ""}
  >
    Unlock
  </button>
</div>
    `;
  }

  unlock(button) {
    const name = button.dataset.itemname;
    const item = items.find((item) => item.name === name);

    const currentMPS = parseFloat(localStorage.getItem("musclePerSecond") || 0);
    const unlockedItems = JSON.parse(localStorage.getItem("unlockedItems") || "[]");
    const counterValue = parseFloat(localStorage.getItem("muscleCount") || 0);

    if (unlockedItems.includes(name)) return alert("Item already unlocked!");
    if (counterValue < item.cost) return alert("Not enough muscles!");

    localStorage.setItem("unlockedItems", JSON.stringify([...unlockedItems, name]));
    localStorage.setItem("muscleCount", counterValue - item.cost);
    localStorage.setItem("musclePerSecond", currentMPS + item.mps);
    document.querySelector("#counter").textContent = counterValue - item.cost;

    button.style.display = "none";
    item.unlocked = true;

    renderPassives();
  }
}

export function unlockItem(button) {}
