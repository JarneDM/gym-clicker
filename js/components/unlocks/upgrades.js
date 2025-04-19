import { upgrades } from "../../data/data.js";

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
}

export function purchaseUpgrade(button) {
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
}

function applyUpgradeEffect(upgrade) {
  switch (upgrade.name) {
    case "Better Shoes":
      const currentClickPower = parseFloat(localStorage.getItem("clickPower") || 1);
      localStorage.setItem("clickPower", currentClickPower * 2);
      break;

    case "Gym Membership":
      const currentClickPower2 = parseFloat(localStorage.getItem("clickPower") || 1);
      localStorage.setItem("clickPower", currentClickPower2 * 3);
      break;

    case "BCAA Boost":
      const currentMPS = parseFloat(localStorage.getItem("musclePerSecond"));
      localStorage.setItem("musclePerSecond", currentMPS * 0.1);
      break;

    case "Advanced Program":
      const currentRPS = parseFloat(localStorage.getItem("repsPerSecond"));
      const unlockedBuildings = JSON.parse(localStorage.getItem("unlockedBuildings"));
      localStorage.setItem("repsPerSecond", currentRPS * (unlockedBuildings.length * 0.5));
      break;

    case "Nutrition Plan":
      localStorage.setItem("musclePerSecond", currentMPS * 0.1);
      break;

    case "Avanced Equipment":
      localStorage.setItem("musclePerSecond", currentMPS * 0.2);
  }
}
