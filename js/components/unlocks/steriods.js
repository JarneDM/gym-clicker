import { steroids } from "../../data/data.js";

export default class Steroids {
  constructor(classname, { name, effect, cost }) {
    this.name = name;
    this.effect = effect;
    this.cost = cost;
    this.classname = classname;
  }

  render() {
    const unlockedSteroids = JSON.parse(localStorage.getItem("unlockedSteroids") || "[]");
    const isUnlocked = unlockedSteroids.includes(this.name);

    return `
      <div class="${this.classname}">
        <div class="steroid-row">
          <span class="steroid-name">${this.name}</span>
        </div>
        <div class="steroid-row">
          <span class="steroid-effect">${this.effect}</span>
        </div>
        <div class="steroid-row">
          <span class="steroid-cost">Cost: ${this.cost.toLocaleString()} reps</span>
        </div>
        <button 
          class="unlock-btn" 
          data-steroidname="${this.name}"
          ${isUnlocked ? 'style="display: none;"' : ""}
        >
          Unlock
        </button>
      </div>
    `;
  }

  // cost is in reps
  unlock(button) {
    const name = button.dataset.steroidname;
    const steroid = steroids.find((steroid) => steroid.name === name);

    const unlockedSteroids = JSON.parse(localStorage.getItem("unlockedSteroids") || "[]");
    const currReps = parseFloat(localStorage.getItem("repCount") || 0);

    if (unlockedSteroids.includes(name)) return alert("Steroid already unlocked!");
    if (currReps < steroid.cost) return alert("Not enough reps!");

    localStorage.setItem("unlockedSteroids", JSON.stringify([...unlockedSteroids, name]));
    localStorage.setItem("repCount", currReps - steroid.cost);

    button.style.display = "none";
    steroid.unlocked = true;

    applyAnabolicEffect(steroid);
  }
}

function applyAnabolicEffect(steroid) {
  const currentRPS = parseFloat(localStorage.getItem("repsPerSecond") || 0);
  const currentMPS = parseFloat(localStorage.getItem("musclePerSecond") || 0);

  switch (steroid.name) {
    case "Testosterone":
      const calculatedMPS = currentMPS * 0.1;
      const calculatedRPS = currentRPS * 0.1;
      localStorage.setItem("musclePerSecond", currentMPS + calculatedMPS);
      localStorage.setItem("repsPerSecond", currentRPS + calculatedRPS);
      break;
    case "Anavar":
      const calculatedMPS2 = currentMPS * 0.15;
      const calculatedRPS2 = currentRPS * 0.15;
      localStorage.setItem("musclePerSecond", currentMPS + calculatedMPS2);
      localStorage.setItem("repsPerSecond", currentRPS + calculatedRPS2);
      break;
    case "Dianabol":
      const calculatedMPS3 = currentMPS * 0.2;
      const calculatedRPS3 = currentRPS * 0.2;
      localStorage.setItem("musclePerSecond", currentMPS + calculatedMPS3);
      localStorage.setItem("repsPerSecond", currentRPS + calculatedRPS3);
      break;
    case "SARMs":
      const calculatedMPS4 = currentMPS * 0.25;
      const calculatedRPS4 = currentRPS * 0.25;
      localStorage.setItem("musclePerSecond", currentMPS + calculatedMPS4);
      localStorage.setItem("repsPerSecond", currentRPS + calculatedRPS4);
      break;
    case "Winstrol":
      const calculatedMPS5 = currentMPS * 0.3;
      const calculatedRPS5 = currentRPS * 0.3;
      localStorage.setItem("musclePerSecond", currentMPS + calculatedMPS5);
      localStorage.setItem("repsPerSecond", currentRPS + calculatedRPS5);
      break;
    case "Deca Durabolin":
      const calculatedMPS6 = currentMPS * 0.35;
      const calculatedRPS6 = currentRPS * 0.35;
      localStorage.setItem("musclePerSecond", currentMPS + calculatedMPS6);
      localStorage.setItem("repsPerSecond", currentRPS + calculatedRPS6);
      break;
    case "HGH":
      const calculatedMPS7 = currentMPS * 0.4;
      const calculatedRPS7 = currentRPS * 0.4;
      localStorage.setItem("musclePerSecond", currentMPS + calculatedMPS7);
      localStorage.setItem("repsPerSecond", currentRPS + calculatedRPS7);
      break;
    case "Insulin":
      const calculatedMPS8 = currentMPS * 0.5;
      const calculatedRPS8 = currentRPS * 0.5;
      localStorage.setItem("musclePerSecond", currentMPS + calculatedMPS8);
      localStorage.setItem("repsPerSecond", currentRPS + calculatedRPS8);
      break;
    case "Clenbuterol":
      const calculatedMPS9 = currentMPS * 0.6;
      const calculatedRPS9 = currentRPS * 0.6;
      localStorage.setItem("musclePerSecond", currentMPS + calculatedMPS9);
      localStorage.setItem("repsPerSecond", currentRPS + calculatedRPS9);
      break;
    case "Trenbolone":
      const calculatedMPS10 = currentMPS * 0.7;
      const calculatedRPS10 = currentRPS * 0.7;
      localStorage.setItem("musclePerSecond", currentMPS + calculatedMPS10);
      localStorage.setItem("repsPerSecond", currentRPS + calculatedRPS10);
      break;
  }
}
