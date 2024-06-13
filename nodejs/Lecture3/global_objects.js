// These are some of the Global Objects that we use in Node Js

// 1) __dirname : Used to get the path of a file , in which directory the file is present
// 2) __filename : What file is present inside a directory 
// 3) require : To use one file into another file 
// 4) console : console.log
// 5) buffer : It is used to store the values that we pass inside a temporary memory 
// 6) module : When one file is require into another then we use module.export to access the data of the file
// 7) exports : 

// 1) __dirname 
console.log("This gives the name & path of the directory : ")
console.log(__dirname);
// Output : c:\Users\dell\OneDrive\Desktop\nodejs\Lecture3

// 2) __filename
console.log("This gives the file name & path ")
console.log(__filename);
// Output : c:\Users\dell\OneDrive\Desktop\nodejs\Lecture3\global_objects.js

// 3) require
var req = require('./main');         //getting the data of main.js

// 4) console
// We are using it for giving output

// 5) buffer
// It is used to store temporary values into temporary memory space 

// 6) module
// When we write the name in main.js and make the file require here , then that name is not visible here
// For this we have to export the variables or functions from the main.js file
// Now we can fetch the info using below syntax
console.log(req.abc);  
// 'abc' is a property of the object 'module.exports' 

