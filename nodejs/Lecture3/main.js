var name = "Rohit";
// For this we have to export the variables or functions
module.exports.abc = name;
// We can give any name on place of abc
// 'abc' is a property of the object 'module.exports'

var users = (a,b) =>{
    var c = a+b;
    console.log(`Addition of ${a} and ${b} = ${c}`);
}
users(2,5);