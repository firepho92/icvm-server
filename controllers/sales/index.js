'use strict'
var Sale = require('../../models/Sale.js');
var Product = require('../../models/Product.js');

module.exports = function(router) {

  router.get('/', async function(req, res) {
    var sale = new Sale();
    sale = await sale.readSales();
    res.send(sale);
  });
	
  router.post('/', async function(req, res) {
    console.log(req.body.sales);
    if(req.body.sales !== undefined) {
      var sales = req.body.sales.map(sale => {
        if(sale.beer !== undefined) {
          return [new Date(), sale.beer, sale.quantity]
        }
      });
      console.log(sales);
      var sale = new Sale();
      var product = new Product();
      sale = await sale.createMultipleSales(sales);
      req.body.sales.forEach(sale => {
        product.updateProduct(sale.beer, sale.quantity)
      });
      res.send(sale);
    }
  });
  
  router.put('/' , async function(req, res) {
    var product = new Product(req.body.name, req.body.quantity);
    product = await product.updateProduct(req.body.id);
    res.send(product);
  });
}