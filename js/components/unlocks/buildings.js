import { buildings } from "../../data/data.js";

export default function renderBuildings(buildingDiv) {
  const unlockedBuildings = JSON.parse(localStorage.getItem("unlockedBuildings")) || [];

  let sortedBuildings = [...buildings].sort((a, b) => a.cost - b.cost);

  buildingDiv.innerHTML = sortedBuildings
    .map((building) => {
      const isUnlocked = unlockedBuildings.includes(building.name);
      const cost = building.cost.toLocaleString();
      return `
        <div>
          <span class="building-name name">${building.name}</span>
          <br>
          <span class="building-cost cost">Cost: ${cost}</span>
          <br>
          <span class="building-mps mps">Reps Per Second: ${building.rps}</span>
          <button 
            class="unlock-btn" 
            data-buildingname="${building.name}"
            ${isUnlocked ? 'style="display: none;"' : ""}
          >
            Unlock
          </button>
        </div>
      `;
    })
    .join("");

  // add click listeners only to visible buttons
  buildingDiv.querySelectorAll(".unlock-btn:not([style*='display: none'])").forEach((button) => {
    button.addEventListener("click", () => unlockBuilding(button));
  });
}

export function unlockBuilding(button) {
  const name = button.dataset.buildingname;
  const building = buildings.find((building) => building.name === name);

  // current values
  const currentRPS = parseFloat(localStorage.getItem("repsPerSecond") || 0);
  const unlockedBuildings = JSON.parse(localStorage.getItem("unlockedBuildings")) || [];
  const counterValue = parseFloat(localStorage.getItem("muscleCount") || 0);
  const repCount = parseFloat(localStorage.getItem("repCount") || 0);

  if (unlockedBuildings.includes(name)) {
    alert("Building already unlocked!");
    return;
  }

  if (counterValue < building.cost) {
    alert("Not enough muscles!");
    return;
  }

  // unlock building
  const updatedUnlockedBuildings = [...unlockedBuildings, name];
  localStorage.setItem("unlockedBuildings", JSON.stringify(updatedUnlockedBuildings));

  const newCounterValue = counterValue - building.cost;
  localStorage.setItem("muscleCount", newCounterValue);

  parseFloat(localStorage.setItem("repCount", repCount + building.rps));
  localStorage.setItem("repsPerSecond", currentRPS + building.rps);

  // update UI
  button.style.display = "none";
  building.unlocked = true;
}
