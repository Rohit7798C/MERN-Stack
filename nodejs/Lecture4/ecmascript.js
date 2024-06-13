// ECMAScript or ES6 2015
// let, const, templating string, class

// Using var
// var a = 10;           //var is both global scoped and function scoped
// var a = 20;
// console.log(a);

// Using let
// let a = 30;
// function abc(){
//     let a =40;           //let is function scoped
//     console.log(a);     //This value is inaccessible outside the function
// }
// abc();
// console.log(a);


// Using const
// const a=30;
// const a = {
//     "name" : "Rohit",
//     "age" : 20
// }                                //These things are allowed
// a.email = "abc@gmail.com";     //Adding a new property
// a.age = 30;                    //Changing the property value
// delete a.age;                  //Removing a property
// console.log(a);

// a = {name: "Lucky"};           //Reassigning is NOT Allowed



//Template Strings

var name = "Rohit";
var age  = 22;

// '%s' is a placeholder for Strings
// console.log("Hi %s you are %s years old",name,age);

// Using + for concatenation
// console.log("Hi "+name+" you are "+age+" years old");

// Template Strings (Using ${})
// console.log(`Hi ${name} you are ${age} years old`);


// Class in ECMAScript

// class Users{
//     constructor(){
//         this.name = "Rohit";    //If we want to access some value from class then we use 'this'
//         this.age = 28;
//     }
//     // To get the value from the class
//     getName(){
//         this.email = "abc@gmail.com";
//         return this.name;
//     }
//     getAge(){
//         return this.age;
//     }
//     getEmail(){
//         return this.email;
//     }
// };
// // creating the Object of the class
// var user = new Users();
// console.log(user.getName());
// console.log(user.getAge());
// console.log(user.getEmail());

class Users{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getName(){
        this.email = "rohit@gmail.com";
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getEmail(){
        return this.email;
    }
};
var user = new Users("Rohit",25);
// console.log(user.getName());
console.log(user.getAge());
console.log(user.getEmail());