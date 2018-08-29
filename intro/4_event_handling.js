// https://nodejs.org/api/events.html

// "emitter" objects periodically emit events
// "listener" objects are called when a corresponding event is emitted

// Node.js's events module allows you to create, fire, and listen for events
var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an event handler - this is just a function
    // by default, event handling is synchronous
var myEventHandler = function () { console.log('I hear a scream!'); }
    // setImmediate() can be used for async event handling
var myEventHandlerAsync = function() {
    setImmediate(() => {
        console.log('this happens asynchronously');
    });
}

// Listener - assign the event handler (a function) to an event (a string)
eventEmitter.on('scream', myEventHandler);

// Listener - same as eventEmitter.on, but only occurs once;
    // doesn't repeat if event occurs again
eventEmitter.once('scream2', myEventHandlerAsync);

// Emitter - fire the 'scream' event
eventEmitter.emit('scream');    // 'I hear a scream!'
eventEmitter.emit('scream2');   // 'this happens asynchronously'
eventEmitter.emit('scream');    // 'I hear a scream!'
eventEmitter.emit('scream2');   //  prints nothing