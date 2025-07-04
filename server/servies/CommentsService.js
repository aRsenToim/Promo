import { prisma } from "../app.js";

class CommentsService {
    async deleteAllComments(idArticle){
        try {
            await prisma.comment.deleteMany({
                where: {
                    articleId: idArticle
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}


export default new CommentsService()