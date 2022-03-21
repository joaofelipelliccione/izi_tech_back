const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const pingRoutes = require('./routes/pingRoutes');
const verifyTokenRoutes = require('./routes/verifyTokenRoutes');
const loginRoutes = require('./routes/loginRoutes');
const userRoutes = require('./routes/userRoutes');
const productCategoriesRoutes = require('./routes/productCategoriesRoutes');
const publishedProductsRoutes = require('./routes/publishedProductsRoutes');

const errorMw = require('./middlewares/errorMw');

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/izi', pingRoutes);
app.use('/login', loginRoutes);
app.use('/verify_token', verifyTokenRoutes);
app.use('/user', userRoutes);
app.use('/products_categories', productCategoriesRoutes);
app.use('/published_products', publishedProductsRoutes);

app.use(errorMw);

module.exports = app;
