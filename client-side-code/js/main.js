document.querySelector('button').addEventListener('click', getArtistName)

async function getAfroName(){
    const artistName = document.querySelector('input').value
    try{
        const res = await fetch(`https://cerulean-foal-kit.cyclic.app/api/artists/${artistName}`)
        const data = await res.json()
        console.log(data)
        document.querySelector('.birthName').innerText = data.birthName
        document.querySelector('.birthPlace').innerText = data.birthPlace
    }catch(err){
        console.log(err)
    }

}
