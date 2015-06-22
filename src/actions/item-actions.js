var alt = require('../alt');

class ItemActions {
  updateItems(items) {
    console.log('updateItems');
    this.dispatch(items);
  }
  fetchItems() {
    console.log('fetchItems');
    this.dispatch();
  }
  itemsFailed(err) {
    console.log('itemsFailed', err);
    this.dispatch(err);
  }
  addItem(item) {
    console.log('addItem', item);
    this.dispatch(item);
  }
  starItem(item) {
    console.log('starItem', item);
    this.dispatch(item);
  }
  unstarItem(item) {
    console.log('unstarItem', item);
    this.dispatch(item);
  }
}

module.exports = alt.createActions(ItemActions);
