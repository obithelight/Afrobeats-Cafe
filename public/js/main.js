document.querySelector('button').addEventListener('click', getArtistInfo)

async function getArtistInfo(){
    const artistName = document.querySelector('input').value
    try{
        const res = await fetch(`https://cerulean-foal-kit.cyclic.app/api/${artistName}`)
        const data = await res.json()
        console.log(data)
        document.querySelector('.age').innerText = `Age: ${data.age}`
        document.querySelector('.birthName').innerText = `Birth Name: ${data.birthName}`
        document.querySelector('.birthLocation').innerText = `Birth Location: ${data.birthLocation}`
        document.querySelector('.yearsActive').innerText = `Years Active: ${data.yearsActive}`
        document.querySelector('.label').innerText = `Record Label: ${data.labels}`
    }catch(err){
        console.log(err)
    }

}
