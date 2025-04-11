import items from "./list.js";

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
          <span class="item-mpc">Muscle Per Click: ${item.mpc}</span>
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

  const mpc = items.find((item) => item.name === name).mpc;
  const item = items.find((item) => item.name === name);

  const MPC = localStorage.getItem("MusclePerClick") || 1;
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
  localStorage.setItem("MusclePerClick", parseFloat(MPC) + mpc);

  button.style.display = "none";
  item.unlocked = true;
}
