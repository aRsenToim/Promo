import type { FC } from 'react'
import s from './CommentPage.module.scss'
import type { IComment } from '../../model/types'
import { useDate } from '../../../../shared/hooks/useDate'

interface IProps {
    comment: IComment
}

const CommentPage: FC<IProps> = ({comment}) => {
    const date = useDate(comment.date)
    return <div className={s.CommentPage}>
        <h1 className={s.CommentPage__title}>{comment.name}</h1>
        <p className={s.CommentPage__date}>{date.day} {date.monthName} {date.year} года</p>
        <p className={s.CommentPage__content}>{comment.content}</p>
    </div>
}


export default CommentPage