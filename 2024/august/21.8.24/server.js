
const express = require('express');
const app = express();

const products = [
    { id: "1", name: "Laptop", price: 1200 },
    { id: "2", name: "Smartphone", price: 800 },
    { id: "3", name: "Headphones", price: 150 },
    { id: "4", name: "Keyboard", price: 75 },
    { id: "5", name: "Monitor", price: 300 },
   ];
   


contactInfo = {
    email: 'HIHIHAHA@WALLA.com',
    phone: '1444444444499999'}





app.get('/', (req, res) => {
 res.send("Welcome to my basic Express server!");
});

app.get('/about', (req, res) => {
    res.send("This server was created by The smooth criminal!!");
})
app.get('/contact', (req, res) => {
    res.json(contactInfo);
})

app.get('/api/products', (req, res) => {
    res.json(products);
})

app.get("/api/products/:id", (req, res) => {
    const id = req.params.id;
    let product = null
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) product = products[i]
    }
    if (product === null) res.send ("product not found");
    else res.json(product)

})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
   });