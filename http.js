const https = require('https')
const url = 'https://api.weatherstack.com/current?access_key=0581f302fa408bd49daa5a8063e5be81&query=37.8267,-122.4233&units=f'

const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toStrig()
    })
        // console.log(chunk)
        response.on('end', () => {
            const body = JSON.parse(data)
            
            console.log(body)

       
    })
})
request.on('error',(error) => {
    console.log('An error', error)
})
request.end()