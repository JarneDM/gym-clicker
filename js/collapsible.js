document.addEventListener("DOMContentLoaded", function () {
  const menus = document.querySelectorAll(".menu");
  const contents = document.querySelectorAll(".content");
  const overlay = document.createElement("div");

  overlay.className = "content-overlay";
  document.body.appendChild(overlay);

  function closeAllPopups() {
    contents.forEach((content) => {
      content.style.display = "none";
    });
    overlay.style.display = "none";
  }

  overlay.addEventListener("click", closeAllPopups);

  menus.forEach((menu) => {
    menu.addEventListener("click", function (e) {
      e.stopPropagation();

      const targetId = this.getAttribute("data-target");
      const targetContent = document.getElementById(targetId);

      if (targetContent) {
        closeAllPopups();

        overlay.style.display = "block";
        targetContent.style.display = "block";

        targetContent.style.top = "50%";
        targetContent.style.left = "50%";
        targetContent.style.transform = "translate(-50%, -50%)";
      }
    });
  });

  contents.forEach((content) => {
    const closeBtn = document.createElement("button");
    closeBtn.className = "close-popup";
    closeBtn.innerHTML = "×";
    closeBtn.addEventListener("click", closeAllPopups);
    content.prepend(closeBtn);
  });
});
