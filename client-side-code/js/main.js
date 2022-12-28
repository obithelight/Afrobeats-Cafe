document.querySelector('button').addEventListener('click', getAfroName)

async function getAfroName(){
    const afroName = document.querySelector('input').value
    try{
        const res = await fetch(`https://rap-api-100devs.herokuapp.com/api/artists/${afroName}`)
        const data = await res.json()
        console.log(data)
        document.querySelector('.birthName').innerText = data.birthName
        document.querySelector('.birthPlace').innerText = data.birthPlace
    }catch(err){
        console.log(err)
    }

}
