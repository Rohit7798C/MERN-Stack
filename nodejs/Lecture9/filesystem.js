// 'File system' is a module that is used to read the content of a file in the console.

const fs = require("fs");        //importing the inbuild module of 'filesystem' in Js
// console.log(fs);              //This line prints all the functions inside the file system module

// To read or fetch the file we give the path (__dirname)(It is a global object).
// "/hello.txt" is file name.
// "utf-8" is the fileformat
// callback function is (err,data)=>{} , It returns two parameters i.e. error and data.

fs.readFile(__dirname + "/hello.txt","utf-8",(err,data)=>{    // fs.readFile() is an event that returns the callback value
    if(err) throw err;     //If there is an error in the file it throws error
    console.log(data);     //Otherwise it prints the data in console.
});                  

// fs.unlink is used to delete the text file 
// It prints the data of file, and then deletes it.
// fs.unlink(__dirname+"/hello.txt",(err,data)=>{
//     if(err) throw err;
//     console.log("File deleted!! "+data);
// });





