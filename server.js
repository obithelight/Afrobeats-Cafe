const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors());
app.use(express.static('public'));

let artists = {
    'davido': {
        'age': 30,
        'birthName': 'David Adedeji Adeleke',
        'birthLocation': 'Atlanta, Georgia, USA'
    },
    'wizkid':{
        'age': 32,
        'birthName': 'Ayodeji Ibrahim Balogun',
        'birthLocation': 'Surulere, Lagos, Nigeria'
    },
    'burna boy':{
        'age': 31,
        'birthName': 'Damini Ebunoluwa Ogulu',
        'birthLocation': 'Port Harcourt, Rivers, Nigeria'
    },
    'tiwa savage':{
        'age': 42,
        'birthName': 'Tiwatope Savage',
        'birthLocation': 'Isale Eko, Lagos, Nigeria'
    },
    'flavour':{
        'age': 39,
        'birthName': 'Chinedu Izuchukwu Okoli',
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