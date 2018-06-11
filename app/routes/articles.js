const express = require("express");
const articlesController = require("../controllers/articles");
const initArticles = () => {
    const articlesRouter = express.Router();
    articlesRouter.get('/', articlesController.getArticles);
    articlesRouter.post('/', articlesController.insertArticles);
    articlesRouter.delete('/:id', articlesController.deleteArticles);
    articlesRouter.get('/:id', articlesController.changeArticles);
    articlesRouter.put('/:id', articlesController.updateArticles);
   return articlesRouter;
}
module.exports = initArticles;
              