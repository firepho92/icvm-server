'use strict'
var Sale = require('../../models/Sale.js');
var Product = require('../../models/Product.js');

module.exports = function(router) {

  router.get('/', async function(req, res) {
    var sale = new Sale();
    sale = await sale.readsales();
    res.send(sale);
  });
	
  router.post('/', async function(req, res) {
    if(req.body.sales !== undefined) {
      sales = req.body.sales.map(sale => [new Date(), sale.id, sale.quantity]);
      var sale = new Sale();
      var product = new Product();
      sale = await sale.createMultipleSales(sales);
      req.body.sales.forEach(sale => {
        product.updateProduct(sale.id, sale.quantity)
      });
    }
    res.send(sale);
  });
  
  router.put('/' , async function(req, res) {
    var product = new Product(req.body.name, req.body.quantity);
    product = await product.updateProduct(req.body.id);
    res.send(product);
  });
}