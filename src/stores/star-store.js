var alt = require('../alt');
var ItemActions = require('../actions/item-actions');

class StarStore {
  constructor() {
    this.items = [];

    this.bindListeners({
      addStar: ItemActions.STAR_ITEM,
      removeStar: ItemActions.UNSTAR_ITEM
    });
  }

  addStar(item) {
    console.log('StarStore.addStar');
    this.items.push(item);
  }

  removeStar(item) {
    console.log('StarStore.removeStar', this.items);
    var indx = -1;
    
    for (var i = 0; i < this.items.length; i++) {

      // set has_star to true
      if (this.items[i].id === item.id) {
        indx = i;
        break;
      }
    }

    if (indx !== -1) {
      console.log('splicing item', indx);
      this.items.splice(indx, 1);
    }
  }
}

module.exports = alt.createStore(StarStore, 'StarStore');
