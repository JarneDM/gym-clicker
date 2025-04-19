import { personel } from "../../data/data.js";
import { renderPassives } from "../../core/render.js";

export default class Personel {
  constructor(classname, { name, cost, rps = 0 }) {
    this.name = name;
    this.cost = cost;
    this.rps = rps;
    this.classname = classname;
  }

  render() {
    const unlockPersonel = JSON.parse(localStorage.getItem("unlockedPersonel")) || [];
    const isUnlocked = unlockPersonel.includes(this.name);

    return `
      <div class="${this.classname}">
        <span class="personel-name name">${this.name}</span>
        <br>
        <span class="personel-cost cost">Cost: ${this.cost.toLocaleString()} muscles</span>
        <br>
        <span class="personel-rps rps">Reps Per Second: ${this.rps}</span>
        <button 
          class="unlock-btn" 
          data-personelname="${this.name}"
          ${isUnlocked ? 'style="display: none;"' : ""}
        >
          Unlock
        </button>
      </div>
    `;
  }

  unlock(button) {
    const name = button.dataset.personelname;
    const person = personel.find((person) => person.name === name);

    // current values
    const currentRPS = parseFloat(localStorage.getItem("repsPerSecond") || 0);
    const unlockedPersonel = JSON.parse(localStorage.getItem("unlockedPersonel")) || [];
    const counterValue = parseFloat(localStorage.getItem("muscleCount") || 0);
    const repCount = parseFloat(localStorage.getItem("repCount") || 0);

    if (unlockedPersonel.includes(name)) {
      alert("Item already unlocked!");
      return;
    }

    if (counterValue < person.cost) {
      alert("Not enough muscles!");
      return;
    }

    const updatedPersonel = [...unlockedPersonel, name];
    localStorage.setItem("unlockedPersonel", JSON.stringify(updatedPersonel));

    const newCounterValue = counterValue - person.cost;
    localStorage.setItem("muscleCount", newCounterValue);

    parseFloat(localStorage.setItem("repCount", repCount + person.rps));
    localStorage.setItem("repsPerSecond", currentRPS + person.rps);

    // update UI
    button.style.display = "none";
    person.unlocked = true;

    // Dynamically update rps and mps
    renderPassives();
  }
}

export function unlockPersonel(button) {}
