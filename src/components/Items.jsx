var React = require('react');
var AltContainer = require('alt/AltContainer');
var ItemStore = require('../stores/item-store');
var ItemActions = require('../actions/item-actions');

var AllItems = React.createClass({
  onStarClicked(e) {
    var item = ItemStore.getItem(Number(e.target.getAttribute('data-id')));

    if (e.target.getAttribute('data-starred') !== 'true') {
      ItemActions.starItem(item);
    } else {
      ItemActions.unstarItem(item);
    }
  },
  render() {
    
    return (
      <ul>
        {
          this.props.items.map((item, i) => {

            var starButton = (
              <button data-starred={item.has_star} data-id={item.id} onClick={this.onStarClicked}>
                {item.has_star ? ':-)' : ':-('}
              </button>
            );

            return (
              <li>{item.name}{starButton}</li>
              );
          })
        }
      </ul>
    )
  }
});

var Items = React.createClass({
  addItem() {
    console.log('addItem');
    var item = { id: +new Date, name: Math.round(Math.random() * 5) + '' };
    ItemActions.addItem(item);
  },
  componentDidMount() {
    ItemStore.fetchItems();
  },
	render() {
    return (
      <div>
        <h1>Items</h1>
        <button onClick={this.addItem}>Add Item</button>
        <AltContainer store={ItemStore}>
          <AllItems />
        </AltContainer>
      </div>
    );
	}
});

module.exports = Items;