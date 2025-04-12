// muscles.js
const counter = document.querySelector("#counter");

export default function addMuscles() {
  const counterValue = parseFloat(counter.innerText, 10);
  const newValue = counterValue + 1;
  counter.innerText = newValue;
  localStorage.setItem("muscleCount", newValue);
}

export function addMusclesPerSecond() {
  const MPS = localStorage.getItem("musclePerSecond") || 0;
  const counterValue = parseFloat(counter.innerHTML, 10);
  const newValue = counterValue + parseFloat(MPS, 10);
  counter.innerText = newValue;
  localStorage.setItem("muscleCount", newValue);
  setTimeout(() => {
    addMusclesPerSecond();
  }, 1000);
}
