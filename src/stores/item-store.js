var alt = require('../alt');
var ItemActions = require('../actions/item-actions');
var ItemSource = require('../sources/item-source');
var StarStore = require('../stores/star-store');

class ItemStore {
  constructor() {
  	// this will become state
  	this.items = [];

    // subscribe/listen to actions
    this.bindListeners({
      handleUpdateItems: ItemActions.UPDATE_ITEMS,
      handleFetchItems: ItemActions.FETCH_ITEMS,
      handleItemsFailed: ItemActions.ITEMS_FAILED,
      handleAddItem: ItemActions.ADD_ITEM,
      onStarAdded: ItemActions.STAR_ITEM,
      onStarRemoved: ItemActions.UNSTAR_ITEM
    });

    this.exportPublicMethods({
      getItem: this.getItem
    });

    this.exportAsync(ItemSource);

  }

  

  // action handlers - automatically emit change event
  // unless return false is specified
  handleUpdateItems(items) {
    console.log('handleUpdateItems');
  	this.items = items;
  }

  handleFetchItems() {
    console.log('handleFetchItems');
  	this.items = [];
  }

  handleItemsFailed(err) {
    console.error(err);
  }

  handleAddItem(item) {
    console.log('handleAddItem', item);
    this.items.push(item);
  }

  setStars(item) {
    console.log('setStars', item);

    this.waitFor(StarStore);

    var starredItems = StarStore.getState().items;
    console.log('starredItems', starredItems);
    this.resetAllStars();

    starredItems.forEach((item) => {
      // find each item in the array
      for (var i = 0; i < this.items.length; i += 1) {

        // set has_star to true
        if (this.items[i].id === item.id) {
          this.items[i].has_star = true;
          break;
        }
      }
    });

    console.log(this.items);

  }

  onStarRemoved(removedItem) {
    this.setStars(removedItem);
  }

  onStarAdded(addedItem) {
    this.setStars(addedItem);
  }

  resetAllStars() {
    this.items = this.items.map((item) => {
      return {
        id: item.id,
        name: item.name,
        has_star: false
      };
    });
  }

  getItem(id) {
    var { items } = this.getState();
    for (var i = 0; i < items.length; i += 1) {
      if (items[i].id === id) {
        return items[i];
      }
    }

    return null;
  }
}

module.exports = alt.createStore(ItemStore, 'ItemStore');
