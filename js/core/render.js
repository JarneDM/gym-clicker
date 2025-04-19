import items, { buildings, personel, upgrades } from "../data/data.js";
import Item from "../components/unlocks/items.js";
import Building from "../components/unlocks/buildings.js";
import Personel from "../components/unlocks/personel.js";
import Upgrades from "../components/unlocks/upgrades.js";

export default function renderItems($itemsDiv) {
  let sortedItems = [...items].sort((a, b) => a.cost - b.cost);
  const gymItems = sortedItems.map((item) => new Item("gym__item", item));

  let content = "";
  gymItems.forEach((item) => {
    content += item.render();
  });

  $itemsDiv.innerHTML = content;

  $itemsDiv.addEventListener("click", (e) => {
    const btn = e.target.closest(".unlock-btn");
    if (btn && btn.style.display !== "none") {
      const itemInstance = gymItems.find((item) => item.name === btn.dataset.itemname);
      if (itemInstance) {
        itemInstance.unlock(btn);
      }
    }
  });
}

export function renderBuildings($buildingsDiv) {
  let sortedBuildings = [...buildings].sort((a, b) => a.cost - b.cost);
  const gymBuildings = sortedBuildings.map((building) => new Building("gym__buildings", building));

  let bContent = "";
  gymBuildings.forEach((building) => {
    bContent += building.render();
  });

  $buildingsDiv.innerHTML = bContent;

  // add click listeners only to visible buttons
  $buildingsDiv.addEventListener("click", (e) => {
    const btn = e.target.closest(".unlock-btn");
    if (btn && btn.style.display !== "none") {
      const buildingInstance = gymBuildings.find((building) => building.name === btn.dataset.buildingname);
      if (buildingInstance) {
        buildingInstance.unlock(btn);
      }
    }
  });
}

export function renderPersonel($personelDiv) {
  let sortedPersonel = [...personel].sort((a, b) => a.cost - b.cost);
  const gymPersonel = sortedPersonel.map((person) => new Personel("gym__personel", person));

  let pContent = "";
  gymPersonel.forEach((person) => {
    pContent += person.render();
  });

  $personelDiv.innerHTML = pContent;

  // add click listeners only to visible buttons
  $personelDiv.addEventListener("click", (e) => {
    const btn = e.target.closest(".unlock-btn");
    if (btn && btn.style.display !== "none") {
      const personInstance = gymPersonel.find((person) => person.name === btn.dataset.personelname);
      if (personInstance) {
        personInstance.unlock(btn);
      }
    }
  });
}

export function renderPassives() {
  const $mps = document.querySelector("#mps");
  const $rps = document.querySelector("#rps");

  const mps = parseFloat(localStorage.getItem("musclePerSecond") || 0);
  const rps = parseFloat(localStorage.getItem("repsPerSecond") || 0);

  $mps.textContent = `${mps.toLocaleString()} Per Second`;
  $rps.textContent = `${rps.toLocaleString()} Per Second`;
}

export function renderUpgrades($upgradesDiv) {
  let sortedUpgrades = [...upgrades].sort((a, b) => a.cost - b.cost);
  const gymUpgrades = sortedUpgrades.map((upgrade) => new Upgrades("gym__upgrades", upgrade));

  let uContent = "";
  gymUpgrades.forEach((upgrade) => {
    uContent += upgrade.render();
  });

  $upgradesDiv.innerHTML = uContent;

  $upgradesDiv.addEventListener("click", (e) => {
    const btn = e.target.closest(".unlock-btn");
    if (btn && btn.style.display !== "none") {
      const upgradeInstance = gymUpgrades.find((upgrade) => upgrade.name === btn.dataset.upgradename);
      if (upgradeInstance) {
        upgradeInstance.purchase(btn);
      }
    }
  });
}
