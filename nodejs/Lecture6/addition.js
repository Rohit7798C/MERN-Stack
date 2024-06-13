// function add(){
//     // console.log("This is Addition module");
//     // Suppose if we directly return, instead of printing
//     return "This is Addition module";
// }

// module.exports.abc = add;
// var a = 20;
// module.exports.aval = a;

// We can also export the data as 
module.exports = {
    add: function(){
        console.log("This is addition!!");
    },
    aval:20
}
