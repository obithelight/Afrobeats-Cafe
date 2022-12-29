document.querySelector('button').addEventListener('click', getArtistInfo)

async function getArtistInfo(){
    const artistName = document.querySelector('input').value
    try{
        const res = await fetch(`https://cerulean-foal-kit.cyclic.app/api/${artistName}`)
        const data = await res.json()
        console.log(data)
        document.querySelector('.birthName').innerText = "BirthName: " + data.birthName
        document.querySelector('.birthLocation').innerText = "BirthLocation: " + data.birthLocation
    }catch(err){
        console.log(err)
    }

}
