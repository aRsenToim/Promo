import type React from "react"
import Home from "../../pages/Home"
import Articles from "../../pages/Articles"
import Article from "../../pages/Article"


interface IRoute {
    path: string
    element: React.ElementType
}

enum RoutesNames {
    Home = '/',
    Articles = '/articles/:id',
    Article = 'article/:id',
    ArticleFull = 'article/'
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
]