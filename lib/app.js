const dbManager=require('./dbManager');
const Promise = require('bluebird');
const mongoose=require("mongoose");
const bodyParser=require('body-parser');
const path='../views/index.pug';
const initRoutes = require("../app/routes");
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
// serves all static files in /public
app.use(express.static(`${__dirname}/../public`));
const port = process.env.PORT || 8002;
const server = require('http').Server(app);
app.set("view engine", "pug");


// start server
server.listen(port, () => {
  console.log(`listening to port ${port}`);
});

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({
  extended: false,
});

let articles= require('../app/models/article');
dbManager();
initRoutes(app);
/*
app.get('/update/:id',function(req,res)
{
    console.log("pass");
    const  path='../views/update1.pug';
    console.log("inside getHome.js controllers")
    console.log("request===",req.params.id);
    articles.findOne({ _id:req.params.id}, function(err, results){
      console.log("level1 pass")
      if(err)
      {
          console.log(err);
      }
      else{
         // console.log("results are",results);
          res.render(path,{
            title:'Articles',
            articles1:results
    
        });
      } 
  })
  })
  */  
  /*
  app.post('/update/:id',function(req,res){
      var id=req.params.id;
     console.log("id at /update/id",id);
      console.log("JSON BODY",req.body);
      
      articles.findById(id, function(err, foundObject) {
        if (err) {
          console.error('error, no entry found');
        }
      else{
        if(!foundObject)
        {
          res.status(400).send();
        }
        else{
          foundObject.title = req.body.title;
          foundObject.author = req.body.author;
          foundObject.body = req.body.body;
            
        }
        foundObject.save(function(err,updatedObject){
            if(err)
            {
              console.log(err);
            //  res.status(500).send();
            }
            else{
              console.log(updatedObject)
             // res.send(updatedObject);
            }

        });
      }


    })

   
  //    res.redirect('/');
  
 });
 */
  
   
  //Contact.update({phone:request.phone}, {$set: { phone: request.phone }}, {upsert: true}, function(err){...})
