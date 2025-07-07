const tinderUser = new Object(); //single ton object

const tinderUser1 = {}; //non single ton object both are same but some difference

tinderUser1.email = "rider@gmail.com";
tinderUser1.isLoggedIn = false;
tinderUser1.presentDays = ["Monday" , "Tuesday" , "Thursday"]

const regularCustomer = {
    email: "markJack@gmail.com",
    fullName : {
       userFullName :{
        firstName : "markJack",
        lastName : "Andreson"
       }
    }
} // nested object 

console.log(regularCustomer.fullName.userFullName.firstName);

console.log(regularCustomer.hasOwnProperty('email'))

const course = {
    coursename: "javaScript",
    price: "25000",
    courseInstructor: "hiteshChoudary"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);