import items from "../../data/data.js";
import upgrades from "../../data/data.js";
import buildings from "../../data/data.js";

export default class Achievements {
  constructor(className, { name, condition }) {
    this.className = className;
    this.name = name;
    this.condition = condition;
    this.element = null;
    this.unlocked = false;
  }

  render() {
    const unlockedAchievements = JSON.parse(localStorage.getItem("Achievements") || "[]");
    this.unlocked = unlockedAchievements.includes(this.name);

    return `
      <div class="${this.className}" style="opacity: ${this.unlocked ? 1 : 0.5}">
        <div class="achievement-row">
          <span class="achievement-name">${this.name}</span>
        </div>
        <div class="achievement-row">
          <span class="achievement-condition">${this.condition}</span>
        </div>
      </div>
    `;
  }

  mount(container) {
    const html = this.render();
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    this.element = template.content.firstChild;
    container.appendChild(this.element);
  }

  unlock() {
    if (this.unlocked) return true;

    let shouldUnlock = false;
    const reps = parseInt(localStorage.getItem("repCount") || "0");
    const muscles = parseInt(localStorage.getItem("muscleCount") || "0");
    const unlockedBuildings = JSON.parse(localStorage.getItem("UnlockedBuildings") || "[]");
    const unlockedItems = JSON.parse(localStorage.getItem("unlockedItems") || "[]");
    const mps = parseFloat(localStorage.getItem("musclePerSecond") || "0");
    const unlockedUpgrades = JSON.parse(localStorage.getItem("purchasedUpgrades") || "[]");

    switch (this.name) {
      case "First Rep":
        shouldUnlock = reps >= 1;
        break;
      case "Push-up Addict":
        shouldUnlock = reps >= 1000;
        break;
      case "Gym Owner":
        shouldUnlock = unlockedBuildings.length >= 10;
        break;
      case "Beast Mode":
        shouldUnlock = mps >= 1000;
        break;
      case "Muscle Machine":
        shouldUnlock = muscles >= 10000000;
        break;
      case "Gym Bro":
        shouldUnlock = unlockedItems.length === items.length;
        break;
      case "Fitness Guru":
        shouldUnlock = unlockedUpgrades.length === upgrades.length;
        break;
      case "Master of Muscles":
        shouldUnlock = mps >= 1000000;
        break;
      case "Ultimate Gym":
        shouldUnlock = unlockedBuildings.length === buildings.length;
        break;
      default:
        break;
    }

    if (shouldUnlock) {
      const unlockedAchievements = JSON.parse(localStorage.getItem("Achievements") || "[]");
      if (!unlockedAchievements.includes(this.name)) {
        unlockedAchievements.push(this.name);
        localStorage.setItem("Achievements", JSON.stringify(unlockedAchievements));
        this.unlocked = true;

        if (this.element) {
          this.element.style.opacity = "1";
        }

        console.log(`Unlocked achievement: ${this.name}`);
        return true;
      }
    }
    return false;
  }
}
