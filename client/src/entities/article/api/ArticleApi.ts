import axios from "axios"
import type { IArticle, IError } from "../model/types"


export const ArticleApi = {
    baseUrl: "http://localhost:5000/api/article",
    async getArticles(){
        const data = await axios.get<IArticle[]>(this.baseUrl)
        return data.data
    },
    async getArticle(id: string){
        const data = await axios.get<IArticle | IError>(this.baseUrl + `/${id}`)
        return data.data
    }
}