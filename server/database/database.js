const mysql = require('mysql');

require('dotenv').config('../.env');

const db = mysql.createPool({
  connectionLimit: 10,
  user: process.env.SQL_USER,
  password: process.env.SQL_PW,
  database: 'purchaseOptionscea',
});

const query = (queryString, queryArgs) => (
  new Promise((resolve, reject) => {
    db.query(queryString, queryArgs, (err, result) => {
      if (err) {
        reject(err.message);
      }
      resolve(result);
    });
  })
);

module.exports.query = query;
