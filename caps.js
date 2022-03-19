"use strict";


console.log('hello from caps');

const event = require('./events');
const faker = require('faker');
require('./driver');
require('./vendor');

//commented setinterval to prevent the infinte loop when testing.

let counter = 0;
let StartingFunction = () => {
  let interval = setInterval(function () {
    let payload = {
      store: "flowers store",
      orderID: faker.datatype.uuid(),
      customer: faker.name.findName(),
      address: faker.address.streetAddress(),
    };
    event.emit('pick', payload);
    // console.log('counter', counter++);
  }, 5000);
  // clear interval after executing
  clearInterval(interval);
};

StartingFunction();

module.exports = StartingFunction;