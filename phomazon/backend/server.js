import express from 'express';
import data from './data.js';
<<<<<<< HEAD
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() =>{
  console.log('connected to db')
}).catch(err =>{
  console.log(err.message);
});


const app = express();


=======
const app = express();

>>>>>>> 64ea274d283dd47403a59a562ded8202fbdc5faf
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
  res.send(data.products);
});
app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
  res.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
<<<<<<< HEAD
  
=======
>>>>>>> 64ea274d283dd47403a59a562ded8202fbdc5faf
});
