const arr1 = [1 , 3 , 2 , 4 , 5 , 6]

const newArr = arr1.join()

console.log(arr1);
console.log(newArr);
console.log(typeof arr1);
console.log(typeof newArr);


const spliceArr = [1,2,3,4,5]

console.log(spliceArr.slice(1 , 3)); //in this splice the orginal array does not change 
console.log(spliceArr);

// console.log(spliceArr.splice(1 , 3));//in this splice the orginal array was change 
// console.log(spliceArr)

console.log(spliceArr.slice(1 , 7));
console.log(spliceArr.splice(1 , 5));
