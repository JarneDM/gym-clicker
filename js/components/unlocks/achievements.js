import { achievements } from "../../data/data";

export default class Achievements {
  constructor(className, { name, condition }) {
    this.className = className;
    this.name = name;
    this.condition = condition;
  }

  render() {
    return `
    <div class="${this.className}">
        <div class="achievement-row">
          <span class="achievement-name" data-achievementname="${this.name}">${this.name}</span>
        </div>
        <div class="achievement-row">
          <span class="achievement-condition">${this.condition}</span>
        </div>
      </div>
    `;
  }

  unlock(name) {
    const achievementName = name.dataset.achievementname;
    const achievement = achievements.find((u) => u.name === achievementName);

    if (!achievement) return false; // Stop als achievement niet gevonden is

    let unlocked = false;

    switch (achievement.name) {
      case "First Rep":
        const reps = parseInt(localStorage.getItem("repCount") || "0");
        if (reps >= 1) {
          achievement.unlocked = true;
          unlocked = true;
        }
        break;
      // Voeg andere achievements hier toe
      default:
        console.warn(`Achievement condition not defined for: ${achievement.name}`);
        break;
    }

    if (unlocked) {
      // Opslaan dat achievement is gehaald
      const unlockedAchievements = JSON.parse(localStorage.getItem("Achievements") || "[]");
      if (!unlockedAchievements.includes(achievementName)) {
        unlockedAchievements.push(achievementName);
        localStorage.setItem("Achievements", JSON.stringify(unlockedAchievements));
      }
      return true;
    }
    return false;
  }
}
