// A Simple event in JavaScript
// $("#button").on('click' , function(){
//     console.log("First event created!!");
// });




// Create and Trigger a custom event in Node Js.
const events = require("events");            //Using the module 'events' for creating an event in Node JS

const event = new events.EventEmitter();     //Creating the object of the event using the function 'EventEmitter()'.

// event.on('click',()=>console.log("First event Created"));
// event.emit('click');

//With parameter n1
// event.on('click',(n1)=>console.log(n1));
// event.emit('click',"MERN Stack Course");
// event.emit is used to manually trigger events from an EventEmitter object

// We can also pass numbers as parameters and not only strings

event.on('click',(n1,n2)=>console.log(n1+n2));
event.emit('click',4,5)
 


// Firing one event into another event in JS

// $("button").on('click',function(){
//     console.log("xyz");
//     test();
// })

// function test(){
//     alert("hello");
// }


