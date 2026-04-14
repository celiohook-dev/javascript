const result = []

fetch("https://jsonplaceholder.tyicode.com/users")
.then((response)=> response.json())
.then((json)=>{
    result = json ;

    for(const item of result) {
        console.log(item);
        
    }
}) 