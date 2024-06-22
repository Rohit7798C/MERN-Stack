const fs = require("fs");

try{
    const data = fs.readFileSync(__dirname+"/hello.text","utf-8");

    console.log(data);
}
catch(e){
    console.log(e);
}

console.log("File Ended Successfully!!!");