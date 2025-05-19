const resetButton = document.querySelector("#reset-btn");

function resetGame() {
  localStorage.setItem("clickPower", 1);
  localStorage.setItem("muscleCount", 1);
  localStorage.setItem("musclePerSecond", 0);
  localStorage.setItem("purchasedUpgrades", JSON.stringify([]));
  localStorage.setItem("repCount", 0);
  localStorage.setItem("repsPerSecond", 0);
  localStorage.setItem("unlockedBuildings", JSON.stringify([]));
  localStorage.setItem("unlockedItems", JSON.stringify([]));
  localStorage.setItem("unlockedPersonel", JSON.stringify([]));
  localStorage.setItem("unlockedSteroids", JSON.stringify([]));
}

resetButton.addEventListener("click", () => {
  resetGame();
  location.reload(); // Optionally reload to re-render everything
});
