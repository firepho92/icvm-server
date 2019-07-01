'use strict'
var Product = require('../../models/Product.js');

module.exports = (router) => {

  router.get('/', async(req, res) => {
    var product = new Product();
    product = await product.readProducts();
    res.send(product);
  });
	
	router.post('/', async(req, res) => {
    var product = new Product(req.body.name, req.body.quantity);
		product = await product.createProduct();
		res.send(product);
  });
  
  router.put('/' , async(req, res) => {
    var product = new Product(req.body.name, req.body.quantity);
    product = await product.updateProduct(req.body.id);
    res.send(product);
  });
}