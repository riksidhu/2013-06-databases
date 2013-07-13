var mysql = require('mysql');
var http = require('http');
var path = require('path');
var fs = require('fs');
/* If the node mysql module is not found on your system, you may
 * need to do an "sudo npm install -g mysql". */

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

var extend = function(target, source){
  for (var key in  source ){
    target[key] = source[key];
  }
  return target;
};

/* You'll need to fill the following out with your mysql username and password.
 * database: "chat" specifies that we're using the database called
 * "chat", which we created by running schema.sql.*/
var port = 8080;
var ip = "127.0.0.1";
var dbConnection = mysql.createConnection({
  user: "root",
  password: "plantlife",
  database: "chrisApp"
});
// dbConnection.connect();

var server = http.createServer(function(req,res){
  var headers = extend({
    "Content-Type": "application/json"
  }, defaultCorsHeaders);

  if (req.method === "GET") {
    dbConnection.connect();
    var test = dbConnection.query('SELECT * FROM users;', function(err, results, fields){
      console.log(results);
      res.writeHead(200,{"content-type" : "text/html"});
      res.end(JSON.stringify(results));
    });
    // fs.readFile('../index.html', function(err, data){
    //   if(err) {
    //     throw err;
    //   } else{
    //   }
  // });
  } else if (req.method === "POST"){
      var postData = '';
        req.on('data', function(err,data){
          if(err){
            throw err;
          } else{
            postData += data;
          }
        });
      req.on('end',function(){ res.end(JSON.parse(postData)); });
    } else {
      response.writeHead(200, headers);
      response.end();
      console.log('this is an options request');
    }
});


console.log("Listening on http://" + ip + ":" + port);
server.listen(port,ip);


//dbConnection.connect();
/* Now you can make queries to the Mysql database using the
 * dbConnection.query() method.
 * See https://github.com/felixge/node-mysql for more details about
 * using this module.*/

/* You already know how to create an http server from the previous
 * assignment; you can re-use most of that code here. */

//dbConnection.end();
