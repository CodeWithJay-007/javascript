//promise one
    // const promiseOne = new Promise(function(resolve , reject){
    //     setTimeout(function(){
    //         console.log("promise task is completed")
    //         //if you connect to then function it will execute with resolve function
    //             resolve()
    //     },1000)
    
    // })

    // //promise consumption
    // //The then method is directly relation with the resolve function
    // promiseOne.then(function(){
    //     console.log("promise is consumed")
    // })
//promise two
        // const promiseTwo = new Promise(function(resolve , reject){
        //     setTimeout(function(){
        //         console.log("promise task is completed")
        //         // in the resolve function you can pass any value or parameter
        //         resolve({userName:"John1" , userId:1234})
        //     } ,1000)
        // })

        // promiseTwo.then(function(user){
        //     console.log(user);
            
        // })
//promise three with reject function
        // const promiseThree = new Promise(function(resolve , reject){
        //     setTimeout(function(){
        //         let error = false
        //         if(!error){ 
        //             resolve({userName:"John2" , userId:1234})        
        //         }
        //         else{
        //             reject("Error: Something went wrong")
        //         }
        //     })
        // })

        // promiseThree.then(function(user){
        //     console.log(user);
        // }).catch(function(error){
        //     console.log(error);
        // })

//promise five with async await
        const promiseFive = new Promise(function(resolve , reject){
            setTimeout(function(){
                let error = true
                if(!error){
                    resolve({userName:"John3" , userId:1234})
                }   
                else{
                    reject("Error: Something went wrong")
                }   
            } ,1000)
        });
        async function consumePromiseFive(){
            try{
                const response = await promiseFive
                console.log(response);
            }
            catch(error){
                console.log(error);
            }
            
        }
        consumePromiseFive()

//promise six with async await and fetch api
        // async function fetchUserData(){
        //     try{
        //         const response = await fetch("https://jsonplaceholder.typicode.com/users")
        //         const data = await response.json()
        //         console.log(data);
        //     }
        //     catch(error){
        //         console.log("Error: Something went wrong");
        //     }   
        // }
        // fetchUserData()        

//promise six with then catch and fetch api
  const promiseSix = new Promise(function(resolve , reject){
      setTimeout(function(){
          let error = false
            if(!error){
                resolve("https://jsonplaceholder.typicode.com/users")
            }   
            else{
                reject("Error: Something went wrong")
            }
        } ,1000)
    });

promiseSix.then(function(url){
    fetch(url).then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data);
    }).catch(function(error){
        console.log("Error: Something went wrong");
    })
})    