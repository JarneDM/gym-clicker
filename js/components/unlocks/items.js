import items from "../../data/data.js";

export function unlockItem(button) {
  const name = button.dataset.itemname;
  const item = items.find((item) => item.name === name);

  const currentMPS = parseFloat(localStorage.getItem("musclePerSecond") || 0);
  const unlockedItems = JSON.parse(localStorage.getItem("unlockedItems")) || [];
  const counterValue = parseFloat(localStorage.getItem("muscleCount") || 0);

  if (unlockedItems.includes(name)) return alert("Item already unlocked!");
  if (counterValue < item.cost) return alert("Not enough muscles!");

  localStorage.setItem("unlockedItems", JSON.stringify([...unlockedItems, name]));
  localStorage.setItem("muscleCount", counterValue - item.cost);
  localStorage.setItem("musclePerSecond", currentMPS + item.mps);
  document.querySelector("#counter").textContent = counterValue - item.cost;

  button.style.display = "none";
  item.unlocked = true;
}
