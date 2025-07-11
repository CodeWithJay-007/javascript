const himanshu = "This is my First github push";

console.log(himanshu);


const user = {
  name: "himanshu",
  age: 21,
};

function add(num1) {
  if (typeof num1 === "object")
    console.log(`My name is ${num1.name} and age is ${num1.age}`);
  else return "enter an object";
}

console.log(add(5));

console.log(foo())

function foo()
{
   return "hello"
}

console.log(addTwo(5));

const addTwo = function(num){
  return num + 2
}

