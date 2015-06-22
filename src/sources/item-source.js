var ItemActions = require('../actions/item-actions');

var mockData = [
  { id: 0, name: '0', has_star: false },
  { id: 1, name: '1', has_star: false },
  { id: 2, name: '2', has_star: false },
  { id: 3, name: '3', has_star: false },
  { id: 4, name: '4', has_star: false },
  { id: 5, name: '5', has_star: false }
];

var ItemSource = {
  fetchItems() {
    return {
      remote() {
        return new Promise(function (resolve, reject) {
          // simulate an asynchronous flow where data is fetched on
          // a remote server somewhere.
          setTimeout(function () {

            // change this to `false` to see the error action being handled.
            if (true) {
              // resolve with some mock data
              resolve(mockData);
            } else {
              reject('Things have broken');
            }
          }, 250);
        });
      },

      local() {
        // Never check locally, always fetch remotely.
        return null;
      },

      success: ItemActions.updateItems,
      error: ItemActions.itemsFailed,
      loading: ItemActions.fetchItems
    }
  }
};

module.exports = ItemSource;
