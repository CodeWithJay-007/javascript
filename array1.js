const arr = ["jay","Himanshu","vaibhav" , true]
console.log(arr);

const arr1 = ["itComapany" , "webDevloper" , "Bsc"]
const arr2 = ["DjSong" , "softwareDevloper" , "mechanicalEngee"]

//  arr1.push(arr2)
// console.log(arr1);

// const newarr1 =  arr1.concat(arr2)
// console.log(newarr1);

// const newArr2 = [...arr1 , ...arr2] //spreadOperator change into different elements
// console.log(newArr2);

const anotherArray = [1,2,3, [4,5,6] , 7 , [8,9,10,[11,13,14]]]
console.log(anotherArray[5][3][0]);
console.log(anotherArray.flat(Infinity));

console.log(Array);


console.log(typeof []);


const user = {
    name:"jay",
    jayFunction:function()
    {
        console.log("This is jay function");
        
    }
}

console.log(user.jayFunction());


user.himanshu = function()
{
    console.log("This is himanshu function");
    return "hello"
}

console.log(user.himanshu());
