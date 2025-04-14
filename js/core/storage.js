const counter = document.querySelector("#counter");
const reps = document.querySelector("#reps");

export default function loadSavedData() {
  const savedCount = localStorage.getItem("muscleCount");
  if (savedCount) {
    counter.innerText = savedCount;
  }

  const savedReps = localStorage.getItem("repsPerSecond");
  if (savedReps) {
    reps.innerText = savedReps;
  }
}
