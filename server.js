/*var http = require('http');
  var server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello World\n");
  });
  server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
  });
*/
 var http = require("http");
 var express = require("express");
 var app = express();
 
 var server = http.Server(app);
 var bodyParser = require('body-parser');
 
 var mongo=require("mongodb");
 var db, uri = "mongodb://"+"classwork5-venomousabid.c9users.io/email";
 var mongoose =require("mongoose");
 
 mongoose.connect("mongodb://"+"classwork5-venomousabid.c9users.io/email")
 ///uri ="mongodb://"+"classwork5-venomousabid.c9users.io/email"
/*
 mongo.MongoClient.connect(uri, 
    {useNewUrlParser: true}, 
    function(err, client){
        if(err){
            console.log("could not connect to MongoDB");
           } else {
                db =client.db('simple-node');
            }
        }
     
 });
 
 var save =function(form_dat){
     db.createCollection('users',function(err,collection{}));
     var collection=db.collection('users');
     collection.save(form_data);
 }
 
 */
    mongoose.connection.on('error', function(){
        console.log('could not connect yo mongodb');
    });
    
    var userSchema = new Schema({
        name: String,
        email: String
        
    });

    var user =mongoose.model('user', userSchema);
    

 
 
 app.get('/', function(req, res){
     res.sendFile(__dirname+'/index.html');
 
 });
 
 app.get('/email', function(req, res){
     res.sendFile(__dirname+'/email.html');
 
 });
 
 app.post('/submit_user', function(req,res){
     console.log(req.body);
     var new_user = new User(req.body);
     new_user.save(function(err, data){
         if(err)
         return res.status(400)
                    .json({message: "could not Save"});
                    res.status(200).json(data);
     })
 })
/* 
app.post('/submit_user', function(req, res) {
 
   console.log(req.body);
   save(req,body);
   res.status('200');
     
});
 */
 server.listen(process.env.PORT, process.env.IP, function(){
     console.log("server Running");
     
 });
