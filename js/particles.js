export default function createMuscleParticles(clickEvent) {
  const button = document.getElementById("click-btn");
  const buttonRect = button.getBoundingClientRect();
  const centerX = buttonRect.left + buttonRect.width / 2;
  const centerY = buttonRect.top + buttonRect.height / 2;

  const particleCount = 8;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "muscle-particle";

    const angle = Math.random() * Math.PI * 2;
    const distance = 20 + Math.random() * 100;
    const startX = centerX + Math.cos(angle) * distance;
    const startY = centerY + Math.sin(angle) * distance;

    const endDistance = 100 + Math.random() * 100;
    const endX = Math.cos(angle) * endDistance;
    const endY = Math.sin(angle) * endDistance;

    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;
    particle.style.setProperty("--tx", `${endX}px`);
    particle.style.setProperty("--ty", `${endY}px`);

    const size = 0.3 + Math.random() * 0.4;
    particle.style.transform = `scale(${size})`;
    particle.style.animationDuration = `${0.5 + Math.random() * 2}s`;

    document.body.appendChild(particle);

    particle.addEventListener("animationend", function () {
      particle.remove();
    });
  }
}
