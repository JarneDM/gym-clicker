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
  }
}

function applyUpgradeEffect(upgrade) {
  switch (upgrade.name) {
    case "Better Shoes":
      const currentClickPower = parseFloat(localStorage.getItem("clickPower") || 1);
      const calculatedClickPower = currentClickPower * 2;
      localStorage.setItem("clickPower", currentClickPower + calculatedClickPower);
      break;

    case "Gym Membership":
      const currentClickPower2 = parseFloat(localStorage.getItem("clickPower") || 1);
      const calculatedCP = currentClickPower2 * 3;
      localStorage.setItem("clickPower", currentClickPower2 + calculatedCP);
      break;

    case "BCAA Boost":
      const currentMPS = parseFloat(localStorage.getItem("musclePerSecond"));
      const calculatedMPS = currentMPS * 0.1;
      localStorage.setItem("musclePerSecond", currentMPS + calculatedMPS);
      break;

    case "Advanced Program":
      const currentRPS = parseFloat(localStorage.getItem("repsPerSecond"));
      const unlockedBuildings = JSON.parse(localStorage.getItem("unlockedBuildings"));
      const calculatedRPS = currentRPS * (unlockedBuildings.length * 0.05);
      localStorage.setItem("repsPerSecond", currentRPS + calculatedRPS);
      break;

    case "Nutrition Plan":
      const currentMPS2 = parseFloat(localStorage.getItem("musclePerSecond"));
      const calculatedMPS2 = currentMPS2 * 0.1;
      localStorage.setItem("musclePerSecond", currentMPS2 + calculatedMPS2);
      break;

    case "Advanced Equipment":
      const currentMPS3 = parseFloat(localStorage.getItem("musclePerSecond"));
      const calculatedMPS3 = currentMPS3 * 0.2;
      localStorage.setItem("musclePerSecond", currentMPS3 + calculatedMPS3);
      break;

    case "Personal Trainer":
      const currentRPS2 = parseFloat(localStorage.getItem("repsPerSecond"));
      const currentPersonel = JSON.parse(localStorage.getItem("unlockedPersonel"));
      const calculatedRPS2 = currentRPS2 * (currentPersonel.length * 0.5);
      localStorage.setItem("repsPerSecond", currentRPS2 + calculatedRPS2);
      break;

    case "Advanced Supplements":
      const currentMPS4 = parseFloat(localStorage.getItem("musclePerSecond"));
      const calculatedMPS4 = currentMPS4 * 0.3;
      localStorage.setItem("musclePerSecond", currentMPS4 + calculatedMPS4);
      break;

    case "Elite Program":
      const currentMPS5 = parseFloat(localStorage.getItem("musclePerSecond"));
      const calculatedMPS5 = currentMPS5 * 0.5;
      localStorage.setItem("musclePerSecond", currentMPS5 + calculatedMPS5);
      break;

    case "Ultimate Equipment":
      const currentRPS3 = parseFloat(localStorage.getItem("repsPerSecond"));
      const unlockedBuildings2 = JSON.parse(localStorage.getItem("unlockedBuildings"));
      const calculatedRPS3 = currentRPS3 * (unlockedBuildings2.length * 1.0); // 100% boost
      localStorage.setItem("repsPerSecond", currentRPS3 + calculatedRPS3);
      break;
  }
}
