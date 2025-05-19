const counter = document.querySelector("#counter");
const reps = document.querySelector("#reps");

export default function addMuscles() {
  const currentCount = parseFloat(localStorage.getItem("muscleCount") || 0);
  const currClickPower = parseFloat(localStorage.getItem("clickPower") || 1);
  const newValue = currentCount + currClickPower;

  counter.innerText = newValue;
  localStorage.setItem("muscleCount", newValue);
}

export function addMusclesPerSecond() {
  const MPS = parseFloat(localStorage.getItem("musclePerSecond") || 0);
  const currentCount = parseFloat(localStorage.getItem("muscleCount") || 0);
  const newValue = currentCount + MPS;

  counter.innerText = newValue.toLocaleString();
  localStorage.setItem("muscleCount", newValue);
  document.title = `Gym Clickr | ${newValue.toLocaleString()} Muscle`;

  if (MPS !== 0) {
    setTimeout(() => {
      addMusclesPerSecond();
    }, 1000);
  }
}

export function addRepsPerSecond() {
  const RPS = parseFloat(localStorage.getItem("repsPerSecond") || 0);
  const currentCount = parseFloat(localStorage.getItem("repCount") || 0);
  const newValue = currentCount + RPS;

  reps.innerText = parseFloat(newValue.toFixed(2)).toLocaleString();
  localStorage.setItem("repCount", newValue.toFixed(2));

  if (RPS !== 0) {
    setTimeout(() => {
      addRepsPerSecond();
    }, 1000);
  }
}
