// Synchronous and Asynchronous methods in File System Module
// A) Asynchronous method : A callback function is returned.
const fs = require("fs");        
// console.log(fs);     //This prints all the functions present inside file system module
// Every function has its Asynchronous function
// Here readFile is a 'Asynchronous function'.

fs.readFile(__dirname + "/hello.txt","utf-8",(err,data)=>{  
    // The data argument will contain the contents of the file as a string (because of "utf-8" encoding).
    console.log(data);     
});

console.log("File Ended Successfully!");

// When fs.readFile is called, it initiates the file reading process but doesn't wait for it to finish. It immediately moves on to the next line.
// Since the next line is console.log("File Ended Successfully!"), that gets printed first.
// In the meantime, the file reading continues in the background
// *** The core concept of asynchronous functions:- The flow of code doesn't wait for an asynchronous function to finish and moves on to the next line.