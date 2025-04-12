import items from "./data.js";

export default function renderUnlocks(itemsDiv) {
  const unlockedItems = JSON.parse(localStorage.getItem("unlockedItems")) || [];

  let sortedItems = [...items].sort((a, b) => a.cost - b.cost);

  itemsDiv.innerHTML = sortedItems
    .map((item) => {
      const isUnlocked = unlockedItems.includes(item.name);
      return `
        <div>
          <span class="item-name">${item.name}</span>
          <br>
          <span class="item-cost">Cost: ${item.cost}</span>
          <br>
          <span class="item-mps">Muscle Per Second: ${item.mps}</span>
          <button 
            class="unlock-btn" 
            data-itemname="${item.name}"
            ${isUnlocked ? 'style="display: none;"' : ""}
          >
            Unlock
          </button>
        </div>
      `;
    })
    .join("");

  // add click listeners only to visible buttons
  itemsDiv.querySelectorAll(".unlock-btn:not([style*='display: none'])").forEach((button) => {
    button.addEventListener("click", () => unlockItem(button));
  });
}

export function unlockItem(button) {
  const name = button.dataset.itemname;

  const mps = items.find((item) => item.name === name).mps;
  const item = items.find((item) => item.name === name);

  const MPS = localStorage.getItem("msuclePerSeconds");
  if (!MPS) {
    localStorage.setItem("musclePerSecond", 0);
  }
  const unlockedItems = JSON.parse(localStorage.getItem("unlockedItems")) || [];

  const counter = document.querySelector("#counter");

  const counterValue = parseFloat(counter.textContent, 10);

  // check if already unlocked
  if (unlockedItems.includes(name)) {
    alert("Item already unlocked!");
    return;
  }

  // check cost
  if (counterValue < item.cost) {
    alert("Not enough muscles!");
    return;
  }

  // unlock the item
  const updatedUnlockedItems = [...unlockedItems, name];
  localStorage.setItem("unlockedItems", JSON.stringify(updatedUnlockedItems));
  counter.textContent = counterValue - item.cost;
  localStorage.setItem("muscleCount", counterValue - item.cost);
  if (MPS) {
    localStorage.setItem("musclePerSecond", parseFloat(MPS) + parseFloat(mps, 10));
  }
  button.style.display = "none";
  item.unlocked = true;
}
