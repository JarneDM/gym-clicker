import { buildings } from "../../data/data.js";

export default class Building {
  constructor(classname, { name, cost, rps = 0 }) {
    this.name = name;
    this.cost = cost;
    this.rps = rps;
    this.classname = classname;
  }

  render() {
    const unlockBuildings = JSON.parse(localStorage.getItem("unlockedBuildings")) || [];
    const isUnlocked = unlockBuildings.includes(this.name);

    return `
      <div class="${this.classname}">
        <span class="building-name name">${this.name}</span>
        <br>
        <span class="building-cost cost">Cost: ${this.cost.toLocaleString()}</span>
        <br>
        <span class="building-rps rps">Reps Per Second: ${this.rps}</span>
        <button 
          class="unlock-btn" 
          data-buildingname="${this.name}"
          ${isUnlocked ? 'style="display: none;"' : ""}
        >
          Unlock
        </button>
      </div>
    `;
  }
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
