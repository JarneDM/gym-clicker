// imports \\
import addMuscles, { addMusclesPerSecond } from "./components/muscles.js";
import renderUnlocks from "./components/unlocks/items.js";

// variables \\
const btn = document.querySelector("#click-btn");
const counter = document.querySelector("#counter");
const $items = document.querySelector("#items");

// Load saved count when page loads
const savedCount = localStorage.getItem("muscleCount");
if (savedCount) {
  counter.innerText = savedCount;
}

// code \\
btn.addEventListener("click", () => {
  addMuscles();
});
addMusclesPerSecond();

renderUnlocks($items);
