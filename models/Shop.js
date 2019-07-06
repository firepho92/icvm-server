'use strict';

var DB = require('../config/configDB.js');
var db = new DB();
var connection = db.getConnection();

module.exports = class Shop {
  constructor(date, beer, quantity) {
    this.date = date;
    this.beer = beer;
    this.quantity = quantity;
  }

  createShopping() {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO Shopping SET ?', {date: this.date, beer: this.beer, quantity: this.quantity}, (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }

  readShopping() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT id, date, beer, quantity FROM Shopping', (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }
}