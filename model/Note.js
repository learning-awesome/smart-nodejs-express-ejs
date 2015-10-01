var MySQLUtil = require('../utils/mysql');
exports.query = function (callback) {
  MySQLUtil.query('select * from smart_user_note', function (rows, fields) {
    console.log('rows', JSON.stringify(rows));
    //console.log('fields', JSON.stringify(fields));
    callback(rows);
  });
};