document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://aquamarine-cricket-belt.cyclic.app/api/${rapperName}`)
        const data = await response.json()

        console.log(data + "success")
        document.querySelector('h2').innerText = data.birthName
    }catch(error){
        console.log(error)
    }
}