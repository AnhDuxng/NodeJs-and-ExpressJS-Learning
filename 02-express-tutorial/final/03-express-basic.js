const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    console.log('User hit the resource')
    res.status(200).send('Homepage')
})

app.get('/about', (req, res) =>{
    console.log('User hit the resource')
    res.status(200).send('About page')
})

app.all('*', (req, res) => {
    res.status(200).send('<h1>resource not found</h1>')
})


app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})