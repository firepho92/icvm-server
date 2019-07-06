'use strict';

var DB = require('../config/configDB.js');
var db = new DB();
var connection = db.getConnection();

module.exports = class Sale {
  constructor(date, beer, quantity) {
    this.date = date;
    this.beer = beer;
    this.quantity = quantity;
  }

  createSale() {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO Sales SET ?', {date: this.date, beer: this.beer, quantity: this.quantity}, (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }

  readSales() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT id, date, beer, quantity FROM Sales', (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }

  createMultipleSales(sales) {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO Sales SET ?', [sales], (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }
}