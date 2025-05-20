document.addEventListener("DOMContentLoaded", function () {
  const menus = document.querySelectorAll(".menu");
  const contents = document.querySelectorAll(".content");
  const overlay = document.createElement("div");

  // Maak een overlay element
  overlay.className = "content-overlay";
  document.body.appendChild(overlay);

  // Sluit functie voor popups
  function closeAllPopups() {
    contents.forEach((content) => {
      content.style.display = "none";
    });
    overlay.style.display = "none";
  }

  // Overlay klik om popups te sluiten
  overlay.addEventListener("click", closeAllPopups);

  // Menu klik handlers
  menus.forEach((menu) => {
    menu.addEventListener("click", function (e) {
      e.stopPropagation();

      const targetId = this.getAttribute("data-target");
      const targetContent = document.getElementById(targetId);

      if (targetContent) {
        // Sluit eerst alle andere popups
        closeAllPopups();

        // Toon overlay en popup
        overlay.style.display = "block";
        targetContent.style.display = "block";

        // Positioneer de popup in het midden
        targetContent.style.top = "50%";
        targetContent.style.left = "50%";
        targetContent.style.transform = "translate(-50%, -50%)";
      }
    });
  });

  // Sluit knop toevoegen aan elke content
  contents.forEach((content) => {
    const closeBtn = document.createElement("button");
    closeBtn.className = "close-popup";
    closeBtn.innerHTML = "×";
    closeBtn.addEventListener("click", closeAllPopups);
    content.prepend(closeBtn);
  });
});
