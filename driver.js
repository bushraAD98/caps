"use strict";

const event = require('./events');

event.on('delivered', (payload) => {
  console.log(`DRIVER: delivered up ORDER_ID : ${payload.orderID}`);
  //   console.log(
  //     `hello system, i'm the driver and this ${payload} is delivered successfully.`
  //   );
});

event.on('transit', (payload) => {
  let order = {
    event: 'in-transit',
    time: new Date().toISOString(),
    payload,
  };
  console.log('EVENT', order);

  //   console.log(`hello system, i'm the driver and this ${payload} in the way`);
  setTimeout(function () {
    event.emit('delivered', payload);
  }, 3000);
});

event.on('deliver', (payload) => {
  console.log(`DRIVER: picked up ORDER_ID : ${payload.orderID} `);
  //   console.log(`hello driver, this ${payload} will be delivered`);

  event.emit('transit', payload);
});