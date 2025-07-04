import type React from "react"
import Home from "../../pages/Home"
import Articles from "../../pages/Articles"
import Article from "../../pages/Article"
import Create from "../../pages/Create"
import Comment from "../../pages/Comment"


interface IRoute {
    path: string
    element: React.ElementType
}

enum RoutesNames {
    Home = '/',
    Articles = '/articles/:id',
    Article = 'article/:id',
    ArticleFull = 'article/',
    Create = '/create',
    Commnet = '/comment/:id'
}


export const routes: IRoute[] = [
    {
        path: RoutesNames.Home,
        element: Home
    },
    {
        path: RoutesNames.Articles,
        element: Articles
    },
    {
        path: RoutesNames.Article,
        element: Article
    },
    {
        path: RoutesNames.ArticleFull,
        element: Article
    },
    {
        path: RoutesNames.Create,
        element: Create
    },
    {
        path: RoutesNames.Commnet,
        element: Comment
    }
]