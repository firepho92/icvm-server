'use strict'

var DB = require('../config/configDB.js');
var db = new DB();
var connection = db.getConnection();

module.exports = class Product {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }

  createProduct() {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO beers SET ?', {name: this.name, quantity: this.quantity}, (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }

  readProducts() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT id, name, quantity FROM beers', (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }

  updateProduct(id) {
    return new Promise((resolve, reject) => {
      connection.query('Update beers SET quantity = ? WHERE id = ?', [this.quantity, id], (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }
}