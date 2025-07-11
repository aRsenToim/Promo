import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useSelector, type TypedUseSelectorHook } from 'react-redux'
import { useDispatch } from 'react-redux'
import { articleSlice } from '../entities/article'
import { CommentsSlice } from '../entities/Admin'


const rootReducers = combineReducers({
    articleSlice,
    CommentsSlice
})




export const setupStore = () => configureStore({
    reducer: rootReducers,
})

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']



export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;