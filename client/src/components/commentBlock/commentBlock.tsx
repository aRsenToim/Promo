import type { FC } from 'react'
import s from './commentBlock.module.scss'
import { useDate } from '../../shared/hooks/useDate'
import { NavLink } from 'react-router-dom'


interface IProps {
    name: string
    date: Date
    content: string
    id: string
}

const CommentBlock: FC<IProps> = ({date, name, content, id}) => {
    const newDate = useDate(date)
    return <NavLink to={`/comment/${id}`} className={s.CommentBlock}>
        <div className={s.CommentBlock__header}>
            <p>{name}</p>
            <p>{newDate.day} {newDate.monthName} {newDate.year} года</p>
        </div>
        <p className={s.CommentBlock__content}>{content}</p>
    </NavLink>
}

export default CommentBlock