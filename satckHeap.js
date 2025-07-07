let myYoutubeChannel = "jaykartela"

let anotherName = myYoutubeChannel
anotherName = "ChaiOrCode"

//  Here inCase if you change a name in second term then they cant change in first term in the Stack

console.log(myYoutubeChannel);
console.log(anotherName);


let userOne = {
    Email : "jayKartela@gmail.com",
    upi : "ybl123"
}
let userTwo = userOne

//  Here inCase if you change a name in second term then they can change in first term in the Heap
userTwo.Email = "PamnaniJay@gmail.com"
console.log(userOne.Email);
// console.log(userTwo.Email);

