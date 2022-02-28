const express = require('express');
const app = express();
const port = 5002;
const cors = require('cors');
const productList = require('./assets/data/productList');

app.use(cors({
    origin: '*'
}));
app.get('/', (req, res) => {
    res.send('hello world');
});
app.get('/product-list', (req, res) => {
    res.json(productList);
});
app.listen(port, () => {
    console.log("app listening to port "+ port);
});
