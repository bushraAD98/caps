"use strict";

const { faker } = require("@faker-js/faker");

function makeOrder() {
  let fakeOrder = {
    store: "Tulips",
    customerId: faker.datatype.uuid(),
    customerName: faker.name.findName(),
    address: `${faker.address.city()} , ${faker.address.state()}`,
  };

  return fakeOrder;
}

module.exporte = makeOrder;
