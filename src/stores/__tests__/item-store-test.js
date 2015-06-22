jest.dontMock('../item-store');
jest.dontMock('../../actions/item-actions');

/*
var mockRegister = MyDispatcher.register;
var mockRegisterInfo = mockRegister.mock;
var callsToRegister = mockRegisterInfo.calls;
var firstCall = callsToRegister[0];
var firstArgument = firstCall[0];
var callback = firstArgument;*/


describe('ItemStore', function() {

  var alt;
  var callback;
  var ItemStore;

  beforeEach(function() {
    alt = require('../../alt');
    utils = require('../../alt/utils/AltTestingUtils');
    ItemStore = require('../item-store');
    ItemActions = require('../item-actions');

    // alt.dispatcher = { register: jest.genMockFunction() };
    // get reference to the first argument of the first call
    // to the alt dispatcher's register() method
    // callback = alt.dispatcher.register.mock.calls[0][0];
  });

  it('items can be fetched', function() {
    
    alt.dispatcher.dispatch({ ItemActions.UPDATE_ITEMS, [] });

    expect(ItemStore.getState().items.length).toEqual(0);
  });

  /*it('provides the unread thread count', function() {
    var ThreadStore = require('../ThreadStore');
    ThreadStore.getAll.mockReturnValueOnce(
      {
        foo: {lastMessage: {isRead: false}},
        bar: {lastMessage: {isRead: false}},
        baz: {lastMessage: {isRead: true}}
      }
    );
    expect(UnreadThreadStore.getCount()).toBe(2);
  });*/

});