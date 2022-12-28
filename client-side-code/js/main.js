document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const afroArtistName = document.querySelector('input').value
    try{
        const response = await fetch(`https://rap-names-api-fun.herokuapp.com/api/${afroArtistName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('.birthName').innerText = data.birthName
        document.querySelector('.birthPlace').innerText = data.birthPlace
    }catch(error){
        console.log(error)
    }
}