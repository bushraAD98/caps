"use strict";

const { faker } = require("@faker-js/faker");

function createOrder() {
  let fakeOrder = {
    store: "Tulips",
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.city()} , ${faker.address.state()}`,
  };

  return fakeOrder;
}

module.exports = {createOrder};
