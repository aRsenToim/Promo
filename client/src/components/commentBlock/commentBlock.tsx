import type { FC } from 'react'
import s from './commentBlock.module.scss'
import { useDate } from '../../shared/hooks/useDate'


interface IProps {
    name: string
    date: Date
    content: string
}

const CommentBlock: FC<IProps> = ({date, name, content}) => {
    const newDate = useDate(date)
    return <div className={s.CommentBlock}>
        <div className={s.CommentBlock__header}>
            <p>{name}</p>
            <p>{newDate.day} {newDate.monthName} {newDate.year} года</p>
        </div>
        <p className={s.CommentBlock__content}>{content}</p>
    </div>
}

export default CommentBlock