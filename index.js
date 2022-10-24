const express = require("express")
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const hotels = require('./Data/hotels.json');
const products = require('./Data/products.json')

app.get('/', (req, res) => {
    res.send('server is running ')
})

app.get('/hotels', (req, res) => {
    res.send(hotels)
})

app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    const getSingleItem = products.find(p => p.id == id)

    if (getSingleItem) {

        res.send(getSingleItem)
    } else {
        res.send(('products not found'))
    }

})

app.get('/catagory/:name', (req, res) => {
    const productsName = req.params.name;
    const catagory_products = products.filter(p => p.category == productsName)
    res.send(catagory_products)
})


app.listen(port, () => {
    console.log(`the server is ruuning on port: ${port}`)
})

module.exports = app;