var express = require("express")
var body_parser = require("body-parser");

const app = express();

app.get("/", function(req, res){
  res.sendfile(__dirname + "/main.html");
});

app.get("/rent.html", function(req, res){
  res.sendfile(__dirname + "/rent.html");

});

app.get("/return.html", function(req, res){
  res.sendfile(__dirname + "/return.html");

});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
