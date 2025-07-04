import { prisma } from "../app.js"
import CommentsService from "../servies/CommentsService.js"



class CommentsContreller {
    async createComment(req, res) {
        try {
            const { idPost, name, content } = req.body
            if (!idPost || !name || !content) {
                throw new SyntaxError('Данные не заполнены')
            }
            await prisma.comment.create({
                data: {
                    articleId: idPost,
                    name,
                    content
                }
            })
            res.send('good')
        } catch (error) {
            res.send(error.message)
        }
    }
    async getComments(req, res) {
        try {
            const comments = await prisma.comment.findMany()
            res.json(comments)
        } catch (error) {
            res.send(error.message)
        }
    }
    async deleteComments(req, res) {
        try {
            const id = req.params.id
            await prisma.comment.delete({
                where: {
                    id
                }
            })
            res.send('good')
        } catch (error) {
            res.send(`error ${error.message}`)
        }
    }
    async getComment(req, res) {
        try {
            const id = req.params.id
            const comment = await prisma.comment.findUnique({
                where: {
                    id
                }
            })
            res.json(comment)
        } catch (error) {
            res.send(`error ${error.message}`)
        }
    }
    async getCommentsArticle(req, res) {
        try {
            const idArticle = req.params.id
            const comments = await prisma.comment.findMany({
                where: {
                    articleId: idArticle
                }
            })
            res.json(comments)
        } catch (error) {
            res.send(`error ${error.message}`)
        }
    }
    async deleteCommentsArticle(req, res){
        try {
            const idArticle = req.params.id
            await CommentsService.deleteAllComments(idArticle)
            res.send('good')
        } catch (error) {
            res.send('error')
        }
    }
}


export default new CommentsContreller()