// const app = require("express")();
const initArticles = require("./articles");
const openHome= require("./openHome.js");

const initRoutes = (app) => {
    console.log("inside index.js");
    app.use('/', openHome());
    app.use('/articles', initArticles()); 
    // app.use('/insert', initArticles()); 
    // app.use('/delete',initArticles());
    // app.use('/change',initArticles());
    // app.use('/update',initArticles());
    
   
}

module.exports = initRoutes;

