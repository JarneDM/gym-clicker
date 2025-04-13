// imports \\
import addMuscles, { addMusclesPerSecond, addRepsPerSecond } from "./components/muscles.js";
import renderBuildings from "./components/unlocks/buildings.js";
import renderUnlocks from "./components/unlocks/items.js";

// variables \\
const btn = document.querySelector("#click-btn");
const counter = document.querySelector("#counter");
const reps = document.querySelector("#reps");

const $items = document.querySelector("#items");
const $buildings = document.querySelector("#buildings");

// Load saved count when page loads
const savedCount = localStorage.getItem("muscleCount");
if (savedCount) {
  counter.innerText = savedCount;
}

const savedReps = localStorage.getItem("repsPerSecond");
if (savedReps) {
  reps.innerText = savedReps;
}

// code \\
btn.addEventListener("click", () => {
  addMuscles();
});

addMusclesPerSecond();
addRepsPerSecond();

renderUnlocks($items);
renderBuildings($buildings);
