
async function load() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const user = await response.json()

     for(const item of user){
        console.log(item.name);
        
     }    
    
    
}

load();

