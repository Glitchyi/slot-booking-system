var mysql = require('mysql');

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "ECfDx4OqVX",
  password: "qsheRY0eyp"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("USE ECfDx4OqVX")
    con.query("SELECT * FROM slots", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    con.query("", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    con.query("", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    con.query("", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    con.query("", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
});