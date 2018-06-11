//const path =require('path');
const express= require("express");
const app=express();
class openHomeController{

    static getHome(req,res)
    {
      let articles= require('../models/article.js');
      const  path='../views/index.pug';
    console.log("inside getHome.js controllers")
      articles.find({}, function(err, results){
        console.log("level1 pass")
        if(err)
        {
            console.log(err);
        }
        else{
           console.log("results are",results);
            res.render(path,{
              title:'Articles',
              articles1:results
      
          });
        } 
    })
    }
}
module.exports =openHomeController;