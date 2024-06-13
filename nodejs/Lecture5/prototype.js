// We can also define the below function as function student(){    }
var student = function(){
    this.name = "Mohan";
    this.age = 20;
    this.email = "abc@gmail.com";
}
// Creating the object of the above function.
// var stud = new student();
// console.log(stud);            //gives all the values
// console.log(stud.name);       //gives only the name


// Prototype : It is similar to inheritance in OOP, it allows accessing the properties of other functions
// We can actually add or fetch properties from a function, from outside the function using  'Prototype'.

student.prototype={
    address: "New Delhi",
    getName: function(){
        return this.name;
    }
}
var stud = new student();
// console.log(stud.address);
console.log(stud.getName());