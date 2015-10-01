var mysql = require('mysql');

exports.getConnection=function() {
 console.log('>>>start conn.........');
 return mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'smart-note',
  port: 3306
 });
}

exports.query=function(strSql, callback) {
  var conn = exports.getConnection();
  conn.connect();
  console.log('>>>start conn success');
  conn.query(strSql, function(err, rows, fields) {
   if (err) throw err;
   callback(rows, fields);
  });
  conn.end();
}