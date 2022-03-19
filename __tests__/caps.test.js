'use strict';

require('../caps');
require('../driver');
require('../vendor');

const event = require('../events.js');
const faker = require('faker');


describe('caps tests', () => {
  let consoleSpy;
  let payload = {
    store: "flowers store",
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('tet pick up  ', async () => {
    event.emit('pick', payload);
    await expect(consoleSpy).toHaveBeenCalled();
  });

  test('tet deliver  ', async () => {
    event.emit('deliver', payload);

    await expect(consoleSpy).toHaveBeenCalled();
  });

  test('tet transit  ', async () => {
    event.emit('transit', payload);

    await expect(consoleSpy).toHaveBeenCalled();
  });

  test('tet delivered  ', async () => {
    event.emit('delivered', payload);

    await expect(consoleSpy).toHaveBeenCalled();
  });
});