import type { AppDispatch } from "../../../App/appStore";
import { AdminApi } from "../api/AdminApi";
import { setComment, setError } from "../model/CommentsSlice";



export function getComment(id: string) {
    return (disptach: AppDispatch) => {
        AdminApi.getComment(id).then((data) => {
            if (!data) {
                disptach(setError('Запись не найдена'))
            } else {
                disptach(setComment(data))
            }
        })
    }
}