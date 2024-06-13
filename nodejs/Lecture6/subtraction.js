// 1) Normal Exporting of data
// var name = "Subtraction";

// var Subtraction = function(){
//     // console.log("This is Subtraction!!");
//     return "This is Subtraction!!";
// }

// module.exports.sub = Subtraction;
// module.exports.nam = name;

// 2) Directly exporting the data inside the module.exports, instead of defining the data separately
module.exports = {
    subtraction : function(){
        console.log("This is a Subtraction function!!");
    },
    aval: 33
}