import axios from "axios"
import type { IComment } from "../model/types"


export const AdminApi = {
    baseUrlComment: "http://localhost:5000/api/comments",
    async getComment(id: string){
        const data = await axios.get<IComment>(`${this.baseUrlComment}/${id}`)
        return data.data
    }
}