"use strict";

const {fakeOrderHandler} = require('./clients/driver');


setInterval(() => {
  fakeOrderHandler();
}, 5000);