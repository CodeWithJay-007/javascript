//The map() method in JavaScript is used to transform each element in an array and return a new array 
// with the transformed values.
//It does not change the original array.
//It’s perfect when you want to change every item in an array.


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);