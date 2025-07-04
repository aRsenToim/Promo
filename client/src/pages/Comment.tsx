import { useEffect, type FC } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../App/appStore";
import { CommentPage, getComment } from "../entities/Admin";



const Comment: FC = () => {
    const { id } = useParams<string>()
    const { Comment, error } = useAppSelector(state => state.CommentsSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (id) {
            dispatch(getComment(id))
        }
    }, [id])

    return <div>
        {Comment && <CommentPage comment={Comment}/>}
    </div>
}

export default Comment