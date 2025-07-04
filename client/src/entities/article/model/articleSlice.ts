import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IArticle, IComment } from "./types";




interface IinitialState {
    articles: IArticle[] | null
    article: IArticle | null
    comments: IComment[] | null
    error: string
}


const initialState: IinitialState = {
 articles: null,
 error: "",
 article: null,
 comments: null
}

const articleSlice = createSlice({
    name: "articleSlice",
    initialState,
    reducers: {
        setArticles(state, action: PayloadAction<IArticle[]>){
            state.articles = action.payload
        },
        setError(state, action: PayloadAction<string>){
            state.error = action.payload
        },
        setArticle(state, action: PayloadAction<IArticle>){
            state.article = action.payload
        },
        setComments(state, action: PayloadAction<IComment[]>){
            state.comments = action.payload
        }
    }
})

export default articleSlice.reducer
export const {setArticles, setError, setArticle, setComments} = articleSlice.actions