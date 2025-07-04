import { useEffect, type FC } from "react"
import { NavLink, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../App/appStore"
import { ArticleCatalog, ArticlePage, createComment, CreateComment, getAllArticles, getArticleFetch } from "../entities/article"
import CommentBlock from "../components/commentBlock/commentBlock"



const Article: FC = () => {
    const { id } = useParams<string>()
    const { articles, article, error, comments } = useAppSelector(state => state.articleSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (id) {
            dispatch(getArticleFetch(id))
        } else {
            dispatch(getAllArticles())
        }
    }, [id])


    return <div>
        {id ? <div style={{
            width: "65%",
            margin: "0px auto"
        }}>
            <ArticlePage marker={article?.markers ?? ""} view={article?.view ?? 0} title={article?.title ?? ""} isChange={article?.isChange ?? false} date={article?.date ?? new Date()} content={article?.content ?? ""} desc={article?.desc ?? ""} image={article?.image ?? ""} />
            <CreateComment create={(name: string, content: string) => {
                dispatch(createComment(name, content, article?.id ?? ""))
            }} />
            <h1>Комментарий ({comments?.length})</h1>
            <div>
                {comments?.map(comment => <CommentBlock id={comment.id} date={comment.date} key={comment.id} name={comment.name} content={comment.content}/>)}
            </div>
        </div> : <ArticleCatalog articles={articles || []} title="Все статьи:" />}
        {error ? <div>Hate</div> : undefined}

    </div>
}


export default Article