export default class GameItem {
  constructor(classname, { name, cost, mps = 0 }) {
    this.name = name;
    this.cost = cost;
    this.mps = mps;
    this.classname = classname;
  }

  render() {
    const unlockedItems = JSON.parse(localStorage.getItem("unlockedItems")) || [];
    const isUnlocked = unlockedItems.includes(this.name);

    return `
      <div class="${this.classname}">
        <span class="item-name name">${this.name}</span>
        <br>
        <span class="item-cost cost">Cost: ${this.cost.toLocaleString()}</span>
        <br>
        <span class="item-mps mps">Muscle Per Second: ${this.mps}</span>
        <button 
          class="unlock-btn" 
          data-itemname="${this.name}"
          ${isUnlocked ? 'style="display: none;"' : ""}
        >
          Unlock
        </button>
      </div>
    `;
  }
}
