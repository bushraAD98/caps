"use strict";

const event = require('./events');

event.on('pick', (payload) => {
  let order = {
    event: 'pickup',
    time: new Date().toISOString(),
    payload,
  };
  console.log('EVENT', order);

  //   console.log(`hello vendor, this  ${payload} is picked up`);
  setTimeout(function () {
    event.emit('deliver', payload);
  }, 1000);
});

event.on('delivered', (payload) => {
  let order = {
    event: 'delivered',
    time: new Date().toISOString(),
    payload,
  };
  console.log(`VENDOR: Thank you for delivering ORDER_ID : ${payload.orderID}`);
  console.log('EVENT', order);
  //   console.log(
  //     `hello vendor, i'm the driver and this ${payload} is delivered successfully.`
  //   );
});