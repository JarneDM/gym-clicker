const counter = document.querySelector("#counter");

export default function addMuscles() {
  const currentCount = parseFloat(localStorage.getItem("muscleCount") || 0);
  const newValue = currentCount + 1;

  counter.innerText = newValue;
  localStorage.setItem("muscleCount", newValue);
}

export function addMusclesPerSecond() {
  const MPS = parseFloat(localStorage.getItem("musclePerSecond") || 0);
  const currentCount = parseFloat(localStorage.getItem("muscleCount") || 0);
  const newValue = currentCount + MPS;

  counter.innerText = newValue.toLocaleString();
  localStorage.setItem("muscleCount", newValue);

  setTimeout(() => {
    addMusclesPerSecond();
  }, 1000);
}
