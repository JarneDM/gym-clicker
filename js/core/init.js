// =========================
// Imports
// =========================

import addMuscles, { addMusclesPerSecond, addRepsPerSecond } from "../components/muscles.js";
import renderBuildings from "../components/unlocks/buildings.js";
import renderUnlocks from "../components/unlocks/items.js";
import loadSavedData from "./storage.js";
import setupEventListeners from "./events.js";
import renderItems from "./render.js";

// =========================
// DOM Elements
// =========================

const btn = document.querySelector("#click-btn");
const $items = document.querySelector("#items");
const $buildings = document.querySelector("#buildings");

// =========================
// Initialization
// =========================

function initializeGame() {
  loadSavedData();
  setupEventListeners(btn, addMuscles);
  renderItems($items);
  addMusclesPerSecond();
  addRepsPerSecond();
  // renderUnlocks($items);
  // renderBuildings($buildings);
}

export default initializeGame;
