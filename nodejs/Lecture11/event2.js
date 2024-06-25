const events = require("events");
const event = new events.EventEmitter();

// A different way of defining an event
const first_event = function(n1,n2){
    console.log(n2-n1);
    event.emit('click2');
    // Emitting the 2nd event inside 1st event so that it executes after 1st event.
    event.emit('click3');
}

// Creating a Second Event
const second_event = function(){
    console.log("Second Event Tirggered!!");
    // event.emit('click3');
}

event.on('click2',second_event);         //Triggering the 2nd event


// Creating a Third Event
const third_event = function(){
    console.log("Third Event Tirggered!!");
}

event.on('click3',third_event);         //Triggering the 3rd event
event.on('click',first_event);          //Triggering the 1st event
event.emit('click',4,5);                //Emitting the 1st event

