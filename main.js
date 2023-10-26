//Variable named Kelvin set to 293 
const Kelvin = 0;
//Variable named Celsius which = elvin -273 
const Celsius = Kelvin - 273;
//Variable named Fahrenheit - used let as it will change  
//Wrapped Farenheit equation in Math.floor to produce a whole number 
let Fahrenheit = Math.floor(Celsius * (9/5) + 32);
//convert celsius to Newton, using .floor method 
let Newton  = Math.floor(Celsius * (33/100));
//use console.log and write temperature using interpolation 
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${Newton} degrees Newton.`);
