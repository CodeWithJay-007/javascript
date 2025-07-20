//Filter method 
// the filter method is always return a new array and the original array is not change 

const myNums = [1,2,3,4,5,6,7,8,9]

// first method of without the help of karly brakets 
    // const num1 = myNums.filter( (num) => 
    //     num > 4
    //     //   console.log(num);
    //     )

    // console.log(num1);
 
// second method with the help of karly brackets when we use this method u write the word of return keyword
    // const num1 = myNums.filter( (num) => {
    //     return  num > 4
    //     //   console.log(num);
    //     })

    // console.log(num1);

//insert into the second array
    const newNum = [];
    myNums.forEach( (num1) => {
        if(num1>4)
        {
            newNum.push(num1);
        }
    } )    
    // console.log(newNum);

// pratice section 
    const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
    ];
    
    let userBook = books.filter( (usbk) => usbk.genre === 'Non-Fiction');
    userBook = books.filter( (bk) => {
        return bk.publish >= 1995 && bk.genre === "History"
    })
    console.log(userBook);

    
    