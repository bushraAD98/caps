"use strict";

const {fakeOrder} = require('./clients/driver');


setInterval(() => {
  fakeOrder();
}, 5000);