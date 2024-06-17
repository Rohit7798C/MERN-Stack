/**
// Here we don't have to use ./ for http module because http is a prebuild module in Js.
// So no need to redefine it.
// We can directly use the functionality of http.

const http = require("http");         //http module is used for creating server.

// We are creating a server using the createServer() function which is already defined in the http module.
const server = http.createServer(function(req,res){

    // res.writeHead(200,{"content-type":"text/plain"});    //defines the text character style(content-type)
    // It ignores the <h1></h1> tag and prints it as it is

    res.writeHead(200,{"content-type":"text/html"});
    // It executes the <h1></h1> tag and makes the text of size 'h1'.

    res.write("<h1>Node Js Tutorial Running!!</h1>");      //Printing on the web page
    res.end();      
    // res.end() is compulsory at the end. It gives a limit/ending point to the page
    // res.end() tells the client that the server has finished sending the response data and there's no more information coming. 
    // If not written, the page will continue to buffer.
}).listen(3000,()=>console.log("Server Running on Port 3000"));    //here we are defining the port(localhost) on which the server will run.
                        // Printing on the console

*/

const http = require("http");

const server = http.createServer(function(req,res){
    
    res.writeHead(200,{"content-type":"text/plain"});    //This tells the customer that their order is ready(200) and it consists of plain text(text/plain).
    // res.writeHead(200,{"content-type":"text/html"});


    res.write("<h1>Node Js Tutorial is Running!!</h1>");
    res.end();
}).listen(3000,()=>console.log("Server has started running!!"));

// Category of Codes for Response
// Informational (1xx): Indicates provisional information about a request.
// Successful (2xx): The request was successful. (This is where 200 falls)
// Redirection (3xx): Further action is required to complete the request.
// Client Error (4xx): The request was faulty on the client side.
// Server Error (5xx): The server failed to fulfill the request.