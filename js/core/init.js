// =========================
// Imports
// =========================

import addMuscles, { addMusclesPerSecond, addRepsPerSecond } from "../components/muscles.js";
import loadSavedData from "./storage.js";
import setupEventListeners from "./events.js";
import renderItems, { renderBuildings, renderPersonel } from "./render.js";
// import renderBuildings from "../components/unlocks/buildings.js";

// =========================
// DOM Elements
// =========================

const btn = document.querySelector("#click-btn");
const $items = document.querySelector("#items");
const $buildings = document.querySelector("#buildings");
const $personel = document.querySelector("#personel");

// =========================
// Initialization
// =========================

function initializeGame() {
  loadSavedData();
  setupEventListeners(btn, addMuscles);

  // rendering
  renderItems($items);
  renderBuildings($buildings);
  renderPersonel($personel);

  // passive income
  addMusclesPerSecond();
  addRepsPerSecond();
  // renderUnlocks($items);
  // renderBuildings($buildings);
}

export default initializeGame;
