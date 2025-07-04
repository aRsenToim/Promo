import { prisma } from "../app.js";
import CommentsService from "../servies/CommentsService.js";
import FileService from "../servies/FileService.js";
import * as uuid from 'uuid'

class ArticlesController {
    async getArticles(req, res) {
        try {
            const article = await prisma.article.findMany()
            res.json(article)
        } catch (error) {
            res.error(error.message)
        }
    }
    async getArticle(req, res) {
        try {
            const id = req.params.id
            const article = await prisma.article.findUnique({
                where: {
                    id
                }
            })
            if(!article){
                throw new SyntaxError('Article not found')
            }
            await prisma.article.update({
                where: {
                    id
                },
                data: {
                    view: article.view + 1
                }
            })
            res.json(article)
        } catch (error) {
            res.json({
                message: error.message,
                name: error.name
            })
        }
    }
    async create(req, res) {
        try {
            const { title, content, markers, desc } = req.body
            const id = uuid.v4()
            const image = req.files?.picture
            if (!title || !content || !markers || !desc) {
                throw new SyntaxError('Данные не заполнены')
            }
            const fileName = FileService.saveFile(image, id)
            const user = await prisma.article.create({
                data: {
                    id,
                    title,
                    content,
                    markers,
                    desc,
                    image: fileName,
                    isChange: false,
                    view: 0,
                }
            })
            res.send('article create')
        } catch (error) {
            res.send(error.message)
        }
    }
    async deleteArticle(req, res) {
        try {
            const id = req.params.id
            await CommentsService.deleteAllComments(id)
            await prisma.article.delete({
                where: {
                    id
                }
            }).then(() => {
                FileService.deleteFile(id)
            })
            res.send('good')
        } catch (error) {
            res.send(error.message)
        }
    }
}
export default new ArticlesController()
