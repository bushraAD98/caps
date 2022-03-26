
'use strict';

const events = require('../lib/events')
const { faker } = require('@faker-js/faker');



let storeName = {
    store: "Tulips",
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
};


describe('test the events', () => {
    let consoleSpy;
    beforeAll(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    })

    it('test the pickup event ', async () => {
        events.emit('pickUp', storeName);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })
    it('test in transit event', async () => {
        events.emit('inTransit', storeName);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })
    it('test the deliver event', async () => {
        events.emit('delivered', storeName);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })

})