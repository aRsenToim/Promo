import axios from "axios"
import type { IComment } from "../model/types"



export const CommentsApi = {
    baseUrl: "http://localhost:5000/api/commentsArticle",
    baseUrlComment: "http://localhost:5000/api/comments",
    async getCommentsArticle(idArticle: string){
        const data = await axios.get<IComment[]>(`${this.baseUrl}/${idArticle}`)
        return data.data
    },
    async createComment(name: string, content: string, idPost: string){
        const data = await axios.post(this.baseUrlComment, {
            name, 
            idPost, 
            content
        })
        return data.data
    }
}