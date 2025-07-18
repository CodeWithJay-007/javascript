const arr = ["Shaktiman" , "spiderman" , "markJack"];

// another for loop of printing an array
    for (const i of arr) 
    {
    //console.log(i);
        
    }

// map
    
        const map = new Map();
        map.set( 'IT' , "Information Technology")
        map.set( 'BSC' , "Bachelor Of Sceience" )
        map.set( 'LLB' , "Bachelor Of Laws" )
    
         // console.log(map);
    
        for (const [key, value] of map) {
            // console.log(key, ':-', value);
        }

// this for of loop try with an object
    // const myObject = {
    //     'IT' : "Information Technology",
    //     'BSC' : "Bachelor Of Sceience",
    //     'LLB' : "Bachelor Of Laws" 
    // }

    // for (const i of myObject) {
    //     //console.log(i);
        
    // }

// this for in loop try with an object    
    const myObject = {
        js: 'javascript',
        cpp: 'C++',
        rb: "ruby",
        swift: "swift by apple"
    }

    for (const key in myObject) {
     // console.log(`${key} shortcut is for ${myObject[key]}`);
    }

 // this loop is forEach loop using with array
    const coding = ["js", "ruby", "java", "python", "cpp"]

    coding.forEach( function (val){
        console.log(val);
    } )

    coding.forEach( (item) => {
        console.log(item);
    } )

    coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
    } )

    const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
      ]

    myCoding.forEach( (item) => {
        
        console.log(item.languageName);
    } )