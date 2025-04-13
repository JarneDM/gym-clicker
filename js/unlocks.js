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
  const item = items.find((item) => item.name === name);

  // current values
  const currentMPS = parseFloat(localStorage.getItem("musclePerSecond") || 0);
  const unlockedItems = JSON.parse(localStorage.getItem("unlockedItems")) || [];
  const counterValue = parseFloat(localStorage.getItem("muscleCount") || 0);

  if (unlockedItems.includes(name)) {
    alert("Item already unlocked!");
    return;
  }

  if (counterValue < item.cost) {
    alert("Not enough muscles!");
    return;
  }

  // unlock item
  const updatedUnlockedItems = [...unlockedItems, name];
  localStorage.setItem("unlockedItems", JSON.stringify(updatedUnlockedItems));

  const newMuscleCount = counterValue - item.cost;
  localStorage.setItem("muscleCount", newMuscleCount);
  document.querySelector("#counter").textContent = newMuscleCount;

  const newMPS = currentMPS + item.mps;
  localStorage.setItem("musclePerSecond", newMPS);

  button.style.display = "none";
  item.unlocked = true;
}
