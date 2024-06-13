// 1) Normal Export of data
// var num = 30;

// var multiplication = function(){
//     console.log("This function does multiplication!!");
// }
// module.exports.abc = num;
// module.exports.abc1 = multiplication;


// 2) Directly exporting the data inside the module.exports, instead of defining the data separately

module.exports = {
    multi: function(){
        console.log("This is multiplying function!!");
    },
    number: 30
}