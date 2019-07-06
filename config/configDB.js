'use strict';
var mysql = require('mysql');

class Database {
  constructor(){
    this.credentials = {
      host: 'localhost',
      user: 'root',
      password: 'auza940220',
      database: 'icvm'
    }
  }

  getConnection(){
    var connection = mysql.createConnection(this.credentials);
    return connection;
  }
}

module.exports = Database;
//ZCLAKUbPWV
//cuDdQKyxNB