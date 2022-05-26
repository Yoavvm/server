const express = require('express');
const cors = require('cors');
const { connectToMongoDB } = require('./db/config')

const app = express();
connectToMongoDB();

app.use(cors());
app.use(express.json());

app.use('/api/users', require('./routes/user.js'))
app.use('/api/categories', require('./routes/category.js'))
app.use('/api/products', require('./routes/product.js'))

app.listen(3001, (() => console.log('listening on port 3001')));

