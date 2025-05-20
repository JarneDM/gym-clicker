import initializeGame from "./core/init.js";
import createMuscleParticles from "./particles.js";

// =========================
// Start the Game
// =========================
initializeGame();
document.getElementById("click-btn").addEventListener("click", function (e) {
  createMuscleParticles(e);
});
