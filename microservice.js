var express = require('express');
var app = express();

var customer = function(req,res){

var Information = [
{CustomerId:1,CustomerName:"Dinesh singh",AccountNo:1001,Company:"Mahindra"},
{CustomerId:2,CustomerName:"Nagesh Chauhan",AccountNo:1002,Company:"BMW"},
{CustomerId:3,CustomerName:"Gaurav Raut",AccountNo:1003,Company:"Mercedes"},
{CustomerId:4,CustomerName:"Pramod Desai",AccountNo:1004,Company:"Bugati"},
{CustomerId:5,CustomerName:"Sameer Borkar",AccountNo:1005,Company:"Jagure"}
];


  res.send(Information);
};


app.get ('/Information',customer);
var server = app.listen(5000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Myserver is listening at http://localhost:5000", host, port)
})