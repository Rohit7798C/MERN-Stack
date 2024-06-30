// BASIC ROUTING IN EXPRESS AND NODE JS

//Taking the same code from lecture 12

const express = require("express");           //Imports the Express.Js framework 
const app = express();                        //Creating an object
// console.log(app);                             //It prints the functionalities provided by Express Js.

app.get("/",(req,res)=>{                     //get() method is used to handle the HTTP GET Requests
    // "/" defines the path (URL) that this route handler will respond to.
    res.send("Hello World!!");
});
//Users Data access
app.get("/users",(req,res)=>{                    
    res.send("Users data accessed");
});

//Users Profile Data access
app.get("/users/profile",(req,res)=>{                    
    res.send("Users Profile data accessed");
});
// all above codes show that we can use 'get' method directly from the URL to get the data

// Changing the method to POST method
app.post("/users/profile",(req,res)=>{                    
    res.send("Users Profile data accessed");
});

app.listen(3000,()=>console.log("Server running on Port 3000"));












