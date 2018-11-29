const path = '../views/index.pug';
const articles = require('../models/article.js');
class openHomeController {
  static getHome(req, res) {
    console.log("inside getHome.js controllers")
    articles.find({}, function (err, results) {
      console.log("level1 pass")
      if (err) {
        console.log(err);
      }
      else {
        //console.log("results are",results);
        res.render(path, {
          title: 'Articles',
          articles1: results
        });
      }
    })
  }
}
module.exports = openHomeController;