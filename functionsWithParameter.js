function addTwoNumbers(number1 , number2) 
{
    // console.log(number1 + number2)
    return number1 + number2
}
let result = addTwoNumbers(3 ,5)
console.log(result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("jay"))

