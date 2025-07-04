import { useEffect, type FC } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../App/appStore"
import { ArticleCatalog, getArticleMarker } from "../entities/article"



const Articles: FC = () => {
    const { id } = useParams<string>()
    const {articles} = useAppSelector(state => state.articleSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(id){
            dispatch(getArticleMarker(id))
            
        }
    }, [id])
    return <div>
        {articles ? <ArticleCatalog title={`${id} articles: `} articles={articles}/> : null}
    </div>
}


export default Articles