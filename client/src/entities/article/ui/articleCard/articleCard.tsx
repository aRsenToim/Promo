import { useState, type FC } from 'react'
import s from './articleCard.module.scss'
import { NavLink } from 'react-router-dom'
import { useDate } from '../../../../shared/hooks/useDate'


interface IProps {
    title: string
    desc: string
    image: string
    id: string
    date: Date
    view: number
}

const ArticleCard: FC<IProps> = ({ title, desc, image, id, date, view }) => {
    const newDate = useDate(date)

    return <NavLink to={`/article/${id}`} className={s.ArticleCard}>
        <img className={s.ArticleCard__image} src={`http://localhost:5000/${image}`} alt="" />
        <div className={s.ArticleCard__content}>
            <h3 className={s.ArticleCard__title}>{title}</h3>
            <p className={s.ArticleCard__desc}>{desc}</p>
            <div className={s.ArticleCard__footer}>
                <p>{newDate.day} {newDate.monthName} {newDate.year} года</p>
                <p>{view} Просмотров</p>
            </div>
        </div>
    </NavLink>
}


export default ArticleCard