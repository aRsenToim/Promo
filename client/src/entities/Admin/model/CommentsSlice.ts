import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IComment } from "./types";

interface IinitialState {
    Comment: IComment | null
    error: string
}

const initialState: IinitialState = {
    Comment: null,
    error: ""
}

const CommentsSlice = createSlice({
    name: "CommentsSlice",
    initialState,
    reducers: {
        setComment(state, action: PayloadAction<IComment>){
            state.Comment = action.payload
        },
        setError(state, action: PayloadAction<string>){
            state.error = action.payload
        }
    }
})
export const {setComment, setError} = CommentsSlice.actions
export default CommentsSlice.reducer