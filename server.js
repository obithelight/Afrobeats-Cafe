const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors());
app.use(express.static('public'));

let artists = {
    'davido': {
        'age': 30,
        'birthName': 'David Adeleke',
        'birthLocation': 'Atlanta, USA',
        'yearsActive': '2009–present',
        'labels': 'DMW, Sony Music Africa'
    },
    'wizkid':{
        'age': 32,
        'birthName': 'Ayodeji Balogun',
        'birthLocation': 'Lagos, Nigeria',
        'yearsActive': '2001–present',
        'labels': 'Starboy Entertainment'
    },
    'burna boy':{
        'age': 31,
        'birthName': 'Damini Ogulu',
        'birthLocation': 'Port Harcourt, Nigeria',
        'yearsActive': '2010–present',
        'labels': 'Atlantic Records'
    },
    'tiwa savage':{
        'age': 42,
        'birthName': 'Tiwatope Savage',
        'birthLocation': 'Lagos, Nigeria',
        'yearsActive': '1996–present',
        'labels': '323, Universal Music Group'
    },
    'flavour':{
        'age': 39,
        'birthName': 'Chinedu Okoli',
        'birthLocation': 'Enugu, Nigeria',
        'yearsActive': '2005–present',
        'labels': '2nite Music Group'
    },
        'unknown':{
        'age': 'unknown',
        'birthName': 'unknown',
        'nickName': 'unknown',
        'birthLocation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown'
     }
 } 

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
    
})

app.get('/api/:musician', (request, response) => {
    const artistName = request.params.musician.toLowerCase()
    if(artists[artistName]){
        response.json(artists[artistName])        
    }else{
        response.json('unknown')        
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})