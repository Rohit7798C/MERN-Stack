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

app.listen(3000,()=>console.log("Server running on Port 3000"));












