var mysql = require('mysql');

var con = mysql.createConnection({
    host: "34.145.78.32",
    user: "root",
    password: "cocoug",
    database: "cocoug"
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM Rating", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});