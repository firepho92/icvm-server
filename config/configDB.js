'use strict';
var mysql = require('mysql');

class Database {
  constructor(){
    this.credentials = {
      host: 'remotemysql.com',
      user: 'ZCLAKUbPWV',
      password: 'cuDdQKyxNB',
      database: 'ZCLAKUbPWV'
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