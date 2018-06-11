class articlesController {
    
    

    static getArticles(req, res) {
        return res.end("dfhgkjhfk");
    }
    static deleteArticles(req,res)
    {
        let articles= require('../models/article');
        console.log("deletion started");
        articles.find({ _id:req.params.id }).remove().exec();
        res.send("<H1>1 records deleted </H1>");
       //res.redirect('/')
      }

    static insertArticles(req,res)
      {   
        let articles= require('../models/article');
        let article1 = new articles(req.body);
        article1.save((err, result) => {
        if (err) throw err;
        console.log("saved to database");
       // res.send("<H1>1 records inserted </H1>");
        //alert("one Rocord inserted");
        res.redirect('/')
        });
  
      }

     static changeArticles(req,res)
     {
        let articles= require('../models/article');
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
      }

    static updateArticles(req,res)
    {
    var id=req.params.id;
    let articles= require('../models/article');
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

}
}

module.exports =articlesController;

