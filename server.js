/**
 * Module dependencies.
 */
const express = require('express')
var lookup = require('dns-lookup');
const dns = require('dns');
//var bodyParser = require('body-parser');
//var multer = require('multer'); // v1.0.5

//Define port
var port = process.env.PORT || 8080;

//instantiate multer object
//var upload = multer(); // for parsing multipart/form-data
//instantiate an express object
const app = express()

//GET Request Handler
app.get('/*', (req, res) => {
  var domain = req.url.substring(1);
  var response = "";
  dns.resolve4(domain, (err, addresses) => {
    if (err) throw err;
    //console.log(`addresses: ${JSON.stringify(addresses)}`);
    addresses.forEach((a) => {
      dns.reverse(a, (err, hostnames) => {
        if (err) {
          throw err;
        }
        response += `${a}\t${JSON.stringify(hostnames)}\n`;
        console.log(response);
      });
    });
    res.send(response);
  });
})

//Http support
var http = require("http");
var server = http.createServer(app);
//Start Server
server.listen(port);