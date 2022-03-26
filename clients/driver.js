"use strict";

const eventEmitter = require('../lib/events');
const makeOrder = require('./vendor');
// event.on('delivered', (payload) => {
//   console.log(`DRIVER: delivered up ORDER_ID : ${payload.orderID}`);
//   //   console.log(
//   //     `hello system, i'm the driver and this ${payload} is delivered successfully.`
//   //   );
// });

// event.on('transit', (payload) => {
//   let order = {
//     event: 'in-transit',
//     time: new Date().toISOString(),
//     payload,
//   };
//   console.log('EVENT', order);

//   //   console.log(`hello system, i'm the driver and this ${payload} in the way`);
//   setTimeout(function () {
//     event.emit('delivered', payload);
//   }, 3000);
// });

// event.on('deliver', (payload) => {
//   console.log(`DRIVER: picked up ORDER_ID : ${payload.orderID} `);
//   //   console.log(`hello driver, this ${payload} will be delivered`);

//   event.emit('transit', payload);
// });

eventEmitter.on('pickUp',pickupHandler);
eventEmitter.on('inTransit',onwayHandler);
eventEmitter.on('delivered',deliverHandler);



function fakeOrder (){
console.log('new order is ready to be picked up');
eventEmitter.emit('pickUp' , {
  event : 'pickUp' ,
  time : new Date().toString() ,
  payload : makeOrder() 
})

}

function onwayHandler (payload) {
console.log('EVENT',payload);
console.log(`DRIVER: picked up ${payload.payload.orderID} `);
}

function deliverHandler (payload){
console.log('EVENT', payload);

}

setTimeout(() => {

  payload.time = new Date().toString()
  payload.event = 'in-transit'

eventEmitter.emit('in-transit', payload) 
}, 1000);


setTimeout(() => {
  
  payload.time = new Date().toString().split('(')
  payload.event = 'delivered'
  console.log(`DRIVER: delivered up ${payload.payload.orderID}`);
  console.log(`VENDOR: Thank you for delivering ${payload.payload.orderID}`);
eventEmitter.emit('delivered', payload)
},3000);


module.exports = {fakeOrder};