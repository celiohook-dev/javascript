/* const aPromise = new Promise((resolve, reject) => {
    const aNumber = 37
    // resolve (aNumber)
    reject(aNumber)
    
})

aPromise
.then((value=>value))
.then((value)=>{
    console.log(value)

}).catch((rejectValue)=>{
    console.log({rejectValue})

})
   
*/

const url ='https://dog-ceo/api/breeds/image/ramdom'

fetch(url)
.then((dogData)=>{
    if(!dogData.ok){
        throw new Error(`HTTP error, status ${dogData.status} `)

    }
    console.log(dogData)

}).catch((error)=>{
    console.log(error.message)

})


