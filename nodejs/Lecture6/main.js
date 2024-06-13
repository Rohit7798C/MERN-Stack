// Modules in Js : How different modules are fetched into a single file.
// When we make multiple files for different events, so to call them all on a single file, we use different Modules.

// We are making a Calculator
// 1)We are calling addition file
var cal = require("./addition");

// cal.abc();     //When we are directly printing, instead of returning 
// If we are returning some value instead of printing then here we have to use console.log
// console.log(cal.abc());
// console.log(cal.aval);
// When we are directly exporting by creating the function directly inside the module.exports function, we don't have to create the extra property
// We can directly use the function name as

cal.add();
console.log(cal.aval);

// 2)We are calling subtraction file
var sub = require("./subtraction");

// console.log(subt.nam);
// // subt.sub();                //When we are directly printing inside the function
// console.log(subt.sub());      //When we are only returning, instead of printing


sub.subtraction();
console.log(sub.aval);

// 3)We are calling multiplication file
var mul = require("./multiplication");
// console.log(mul.abc);
// mul.abc1();

mul.multi();
console.log(mul.number);

























































































