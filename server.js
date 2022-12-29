const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors());
app.use(express.static('public'));

let artists = {
    'davido': {
        'age': 28,
        'birthName': 'David Adeleke',
        'birthLocation': 'Atlanta, USA'
    },
    'wizkid':{
        'age': 32,
        'birthName': 'Ayo Balogun',
        'birthLocation': 'Lagos, Nigeria'
    },
    'burna boy':{
        'age': 30,
        'birthName': 'Damini Ogulu',
        'birthLocation': 'Port Harcourt, Nigeria'
    },
    'tiwa savage':{
        'age': 38,
        'birthName': 'Oluwatiwa Savage',
        'birthLocation': 'Lagos, Nigeria'
    },
    'flavour':{
        'age': 35,
        'birthName': 'Chinedu Okoli',
        'birthLocation': 'Enugu, Nigeria'
    },
        'unknown':{
        'age': 50,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
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