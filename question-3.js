// เริ่มเขียนโค้ดตรงนี้
const getUsers = async() => {
    try{ 
        const userData = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await userData.json()
        const longName = data.map((a) => a.name).filter((b) => b.length > 17)
        console.log(longName)
    } catch(error){
        console.log(error)
    }

    
}

getUsers();