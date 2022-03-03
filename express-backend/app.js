const express = require('express');
const app = express();
const port = 5002;
const cors = require('cors');
const productList = require('./assets/data/productList');
const db = require('./db_connection');

app.use(cors({
    origin: '*'
}));
app.get('/', (req, res) => {
    res.send('hello world');
});
app.get('/product-list', (req, res) => {
    res.json(productList);
});

app.get('/product-list-dynamic', (req, res, next) => {
    var query = "select * from fruits";
    db.getConnection((err, connection) => {
        if(err){
            next(err);
        }else{
            connection.query(query, (err, data) => {
                if(err){
                    // console.log("something went wrong while fetching data", err);
                    next(err);
                }else{
                    res.status(200).json(data);
                }
                connection.release();
            });
        }
    });
});

var errorHandler = (err, req, res, next) => {
    res.status(500).json({success: false, message: err.message});
};
app.use(errorHandler);

app.listen(port, () => {
    console.log("app listening to port "+ port);
});
