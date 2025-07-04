import { createComment, getAllArticles, getArticleFetch, getArticleMarker } from './actions/ArticleActions'
import articleSlice from './model/articleSlice'
import ArticleCard from './ui/articleCard/articleCard'
import ArticleCatalog from './ui/ArticleCatalog/ArticleCatalog'
import ArticlePage from './ui/articlePage/articlePage'
import CreateComment from './ui/CreateComment/CreateComment'



export {
    articleSlice,
    getAllArticles,
    getArticleFetch,
    ArticleCatalog, 
    ArticlePage,
    CreateComment,
    createComment,
    getArticleMarker
}
