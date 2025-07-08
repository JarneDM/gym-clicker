import { upgrades } from "../../data/data.js";
import { renderPassives } from "../../core/render.js"; // Add this import

export default class Upgrades {
  constructor(classname, { name, effect, cost }) {
    this.name = name;
    this.effect = effect;
    this.cost = cost;
    this.classname = classname;
  }

  render() {
    const purchasedUpgrades = JSON.parse(localStorage.getItem("purchasedUpgrades") || "[]");
    const isPurchased = purchasedUpgrades.includes(this.name);

    const currentMuscles = parseFloat(localStorage.getItem("muscleCount") || 0);
    const canAfford = currentMuscles >= this.cost;

    return `
      <div class="${this.classname}">
        <div class="upgrade-row">
          <span class="upgrade-name">${this.name}</span>
        </div>
        <div class="upgrade-row">
          <span class="upgrade-effect">${this.effect}</span>
        </div>
        <div class="upgrade-row">
          <span class="upgrade-cost">Cost: ${this.cost.toLocaleString()} reps</span>
        </div>
        <button 
          class="unlock-btn" 
          data-upgradename="${this.name}"
          ${isPurchased ? 'style="display: none;"' : ""}
          ${!canAfford ? "disabled" : ""}
        >
          Purchase
        </button>
      </div>
    `;
  }

  purchase(button) {
    const upgradeName = button.dataset.upgradename;
    const upgrade = upgrades.find((u) => u.name === upgradeName);

    const purchasedUpgrades = JSON.parse(localStorage.getItem("purchasedUpgrades") || "[]");
    const currReps = parseFloat(localStorage.getItem("repCount") || 0);

    if (purchasedUpgrades.includes(upgradeName)) return;
    if (currReps < upgrade.cost) return;

    localStorage.setItem("repCount", currReps - upgrade.cost);

    localStorage.setItem("purchasedUpgrades", JSON.stringify([...purchasedUpgrades, upgradeName]));

    applyUpgradeEffect(upgrade);

    button.style.display = "none";
    upgrade.purchased = true;

    renderPassives();
  }
}

// cleaning up function and fixing calculations
function applyUpgradeEffect(upgrade) {
  switch (upgrade.name) {
    case "Better Shoes": {
      const clickPower = parseFloat(localStorage.getItem("clickPower") || 1);
      localStorage.setItem("clickPower", clickPower * 2);
      break;
    }

    case "Gym Membership": {
      const clickPower = parseFloat(localStorage.getItem("clickPower") || 1);
      localStorage.setItem("clickPower", clickPower * 3);
      break;
    }

    case "BCAA Boost": {
      const mps = parseFloat(localStorage.getItem("musclePerSecond") || 0);
      localStorage.setItem("musclePerSecond", mps + mps * 0.1);
      break;
    }

    case "Advanced Program": {
      const rps = parseFloat(localStorage.getItem("repsPerSecond") || 0);
      const buildings = JSON.parse(localStorage.getItem("unlockedBuildings") || "[]");

      const newRPS = rps * (1 + buildings.length * 0.05);

      localStorage.setItem("repsPerSecond", newRPS);
      break;
    }

    case "Nutrition Plan": {
      const mps = parseFloat(localStorage.getItem("musclePerSecond") || 0);
      localStorage.setItem("musclePerSecond", mps + mps * 0.1);
      break;
    }

    case "Advanced Equipment": {
      const mps = parseFloat(localStorage.getItem("musclePerSecond") || 0);
      const items = JSON.parse(localStorage.getItem("unlockedItems") || "[]");

      localStorage.setItem("musclePerSecond", mps + mps * items.length * 0.2);
      break;
    }

    case "Personal Trainer": {
      const rps = parseFloat(localStorage.getItem("repsPerSecond") || 0);
      const staff = JSON.parse(localStorage.getItem("unlockedPersonel") || "[]");

      localStorage.setItem("repsPerSecond", rps + rps * staff.length * 0.5);
      break;
    }

    case "Advanced Supplements": {
      const mps = parseFloat(localStorage.getItem("musclePerSecond") || 0);
      localStorage.setItem("musclePerSecond", mps + mps * 0.3);
      break;
    }

    case "Elite Program": {
      const mps = parseFloat(localStorage.getItem("musclePerSecond") || 0);
      localStorage.setItem("musclePerSecond", mps + mps * 0.5);
      break;
    }

    case "Ultimate Equipment": {
      const rps = parseFloat(localStorage.getItem("repsPerSecond") || 0);
      const buildings = JSON.parse(localStorage.getItem("unlockedBuildings") || "[]");

      localStorage.setItem("repsPerSecond", rps + rps * buildings.length * 1.0);
      break;
    }
  }
}
