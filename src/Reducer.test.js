import React from 'react';
import { getBasketTotal } from './Reducer';

let basket = [];
beforeEach(() => {
  basket = [{
    price: 20
  }, {
    price: 20
  }, {
    price: 20
  }, {
    price: 50
  }];
});

test("test the total basket value", () => {
  expect(getBasketTotal(basket)).toBe(110);
});