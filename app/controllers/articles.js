const articles = require('../models/article');
const path = '../views/update1.pug';
class articlesController {

  static getArticles(req, res) {
    return res.end("welcome to articles");
  }

  static deleteArticles(req, res) {
    var id = req.params.id;
    articles.findById(id, function (err, foundObject) {
      if (err) {
        console.error('error, no entry found');
      }
      else {
        if (!foundObject) {
          res.send("<H1>record not found </H1>");
          res.status(400).send();
        }
        else {
          console.log("entry found");
          foundObject.remove();
          res.send("<H1>1 records deleted </H1>");
        }
      }
    })
  }


  static insertArticles(req, res) {
    let article1 = new articles(req.body);
    article1.save((err, result) => {
      if (err)
        throw err;
      console.log("saved to database");
      res.send("<H1>1 records inserted </H1>");
    });

  }

  static changeArticles(req, res) {
    console.log("pass");
    console.log("inside article.js controllers")
    console.log("request===", req.params.id);
    articles.findOne({ _id: req.params.id }, function (err, results) {
      console.log("level1 pass")
      if (err) {
        console.log(err);
      }
      else {
        res.render(path, {
          title: 'Articles',
          articles1: results
        });
      }
    })
  }

  static updateArticles(req, res) {
    var id = req.params.id;
    let articles = require('../models/article');
    console.log("id at /update/id", id);
    console.log("JSON BODY", req.body);
    articles.findById(id, function (err, foundObject) {
      if (err) {
        console.error('error, no entry found');
      }
      else {
        if (!foundObject) {
          res.status(400).send();
        }
        else {
          foundObject.title = req.body.title;
          foundObject.author = req.body.author;
          foundObject.body = req.body.body;

        }
        foundObject.save(function (err, updatedObject) {
          if (err) {
            console.log(err);
          }
          else {
            console.log(updatedObject)
            res.send("<h1> record updated </h1>");
          }

        });
      }
    })
  }
}

module.exports = articlesController;

