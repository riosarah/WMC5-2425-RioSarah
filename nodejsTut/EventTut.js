const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const welcomeUser =()=>{
    console.log('Hello there. Welcome to this server.');
}
const greetBirthday=(name, newAge)=>{
    console.log('Happy Birthday ' +name+'! You are now '+newAge + ' years old.');
}
myEmitter.on('birthdayEvent', greetBirthday);
myEmitter.on('userJoined', welcomeUser);

myEmitter.emit('userJoined');
myEmitter.emit('birthdayEvent', 'Joey', '32');