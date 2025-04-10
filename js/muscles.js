// muscles.js
const counter = document.querySelector("#counter");

export default function addMuscles() {
  const MPC = localStorage.getItem("MusclePerClick") || 1;
  const counterValue = parseFloat(counter.innerHTML, 10);
  const newValue = counterValue + parseFloat(MPC);

  counter.innerText = newValue;
  localStorage.setItem("muscleCount", newValue);
}
