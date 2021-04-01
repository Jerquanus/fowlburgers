var mysql = require("mysql");


if (process.env.JAWSDB_URL) {
  connection=mysql.createConnection(process.env.JAWSDB_URL)
} else {
  var connection = mysql.createConnection({
  host: "vkh7buea61avxg07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "v9cnfi0eyzniw5nr",
  password: "qd3mldhm88t0onpg",
  database: "r5ewbxwt3j43w7cz"
});
}


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
