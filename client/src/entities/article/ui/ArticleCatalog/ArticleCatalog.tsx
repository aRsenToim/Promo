import type { FC } from 'react'
import s from './ArticleCatalog.module.scss'
import type { IArticle } from '../../model/types'
import ArticleCard from '../articleCard/articleCard'

interface IProps {
    title: string
    articles: IArticle[]
}

const ArticleCatalog: FC<IProps> = ({ title, articles }) => {
    return <div className={s.ArticleCatalog}>
        <h1 className={s.ArticleCatalog__title}>{title}</h1>
        <div className={s.ArticleCatalog__items}>
            {articles?.map(item => <ArticleCard date={item.date}  view={item.view} title={item.title} id={item.id} desc={item.desc} image={item.image} key={item.id} />)}
        </div>
    </div>
}


export default ArticleCatalog