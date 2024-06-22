// B) Synchronous method : Here no callback function is returned
// const fs = require("fs");

// try{
//     const data = fs.readFileSync(__dirname+"/hello.txt","utf-8");
//     console.log(data);
// }
// catch(e){
//     // error object(e)
//     console.log(e);
// }
// console.log("File Ended Successfully!!");


const fs = require("fs");

try{
    const data = fs.readFileSync(__dirname+"/hello.txt","utf-8");

    console.log(data);
}
catch(e){
    console.log(e);
}

console.log("File Ended Successfully!!!");