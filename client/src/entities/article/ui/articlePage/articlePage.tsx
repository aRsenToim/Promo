import type { FC } from 'react'
import s from './articlePage.module.scss'
import { useDate } from '../../../../shared/hooks/useDate'

interface IProps {
    title: string,
    image: string,
    content: string,
    date: Date,
    isChange: boolean,
    view: number,
    desc: string
}

const ArticlePage: FC<IProps> = ({ title, image, content, date, isChange, view, desc }) => {
    const newDate = useDate(date)

    return <div className={s.ArticlePage}>
        <div className={s.ArticlePage__header}>
            <h1 className={s.ArticlePage__title}>{title}</h1>
            <p className={s.ArticlePage__text}>{desc}</p>
            <div className={s.ArticlePage__desc}>
                <p className={s.ArticlePage__date}>{newDate.day} {newDate.monthName} {newDate.year} года</p>
                <div className={s.ArticlePage__rigth}>
                    <p>{view} просмотров</p>
                    {isChange ?? <p>(изменено)</p>}
                </div>
            </div>
        </div>
        <img className={s.ArticlePage__image} src={`http://localhost:5000/${image}`} alt="" />
        <div className={s.ArticlePage__content}>
            {content}
        </div>
        <div className={s.ArticlePage__comments}>

        </div>
    </div>
}

export default ArticlePage