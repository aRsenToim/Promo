import Router from "express";
import articlesController from "./controllers/articlesController.js";
import CommentsContreller from "./controllers/commentsController.js";

const routes = new Router()

routes.get('/article', articlesController.getArticles)
routes.post('/article', articlesController.create)
routes.get('/article/:id', articlesController.getArticle)
routes.delete('/article/:id', articlesController.deleteArticle)


routes.post('/comments', CommentsContreller.createComment)
routes.get('/comments', CommentsContreller.getComments)
routes.delete('/comments/:id', CommentsContreller.deleteComments)
routes.get('/comments/:id', CommentsContreller.getComment)

routes.get('/commentsArticle/:id', CommentsContreller.getCommentsArticle)
routes.delete('/commentsArticle/:id', CommentsContreller.deleteCommentsArticle)

export default routes