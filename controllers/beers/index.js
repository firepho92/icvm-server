'use strict'
let Product = require('../../models/Product.js');

module.exports = (router) => {

  router.get('/', async(req, res) => {
    let product = new Product();
    product = await product.readProducts();
    res.send(product);
  });
	
	router.post('/', async(req, res) => {
    let product = new Product(req.body.name, req.body.quantity);
		product = await product.createProduct();
		res.send(product);
  });
  
  router.put('/' , async(req, res) => {
    let product = new Product(req.body.name, req.body.quantity);
    product = await product.updateProduct(req.body.id);
    res.send(product);
  });
}