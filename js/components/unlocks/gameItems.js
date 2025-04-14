export default class GameItem {
  constructor(classname, { name, cost, mps }) {
    this.classname = classname;
    this.name = name;
    this.cost = cost;
    this.mps = mps;
    this.unlocked = false;
  }

  render() {
    const isUnlocked = this.unlocked ? 'style="display: none;"' : "";
    const cost = this.cost.toLocaleString();

    return `
      <div class="${this.classname}">
        <span class="item-name name">${this.name}</span>
        <span class="item-cost cost">Cost: ${cost}</span>
        <span class="item-mps mps">Muscle Per Second: ${this.mps}</span>
        <button 
          class="unlock-btn" 
          data-itemname="${this.name}"
          ${isUnlocked}
        >
          Unlock
        </button>
      </div>
    `;
  }
}
