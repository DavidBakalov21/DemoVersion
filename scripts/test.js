import { Cart } from './cart.js';

const assert = chai.assert;

describe('addItem', function() {
  it('should create food', function() {
    const cart1 = new Cart();
    const itemName = 'Testfood4';
    const itemPrice = 1.00;
    const itemCount = 3;
    cart1.addItem(itemName, itemPrice, itemCount);
    assert.strictEqual(cart1.orderCounts[itemName].count, itemCount);
    assert.strictEqual(cart1.orderCounts[itemName].price, itemPrice);
    localStorage.removeItem("orderCounts");
  });
});
describe('CartDelete', function() {
      it('should delete an item ', function() {
        const cart2 = new Cart();
        const itemName = 'Testfood';
        const itemPrice = 1.00;
        const itemCount = 3;
        cart2.addItem(itemName, itemPrice, itemCount);
        const deleteBtn = cart2.createDeleteButton(itemName);
        deleteBtn.click();
        assert.strictEqual(cart2.orderCounts[itemName].count, 0);
        localStorage.removeItem("orderCounts");
      });
    
  });
  describe('CartReduce', function() {
      it('should reduce amount', function() {
        const cart3 = new Cart();
        const itemName = 'Testfood7';
        const itemPrice = 1.00;
        const itemCount = 5;
        cart3.addItem(itemName, itemPrice, itemCount);
        const reduceBtn = cart3.createReduceButton(itemName);
        reduceBtn.click();
        assert.strictEqual(cart3.orderCounts[itemName].count, 4);
        localStorage.removeItem("orderCounts");
      });
  });

  describe('CartAdd', function() {
      it('should add to amount', function() {
        const cart4 = new Cart();
        const itemName = 'Testfood8';
        const itemPrice = 1.00;
        const itemCount = 5;
        cart4.addItem(itemName, itemPrice, itemCount);
        const reduceBtn = cart4.createAddButton(itemName);
        reduceBtn.click();
        assert.strictEqual(cart4.orderCounts[itemName].count, 6);
        localStorage.removeItem("orderCounts");
      });
  
  });
mocha.run();