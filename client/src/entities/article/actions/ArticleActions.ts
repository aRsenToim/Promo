import type { AppDispatch } from "../../../App/appStore"
import { ArticleApi } from "../api/ArticleApi"
import { CommentsApi } from "../api/CommentsApi"
import { setArticle, setArticles, setComments, setError } from "../model/articleSlice"


export const getAllArticles = () => {
  return (dispatch: AppDispatch) => {
    ArticleApi.getArticles().then((data) => {
      dispatch(setArticles(data))
    })
  }
}
export const getArticleFetch = (id: string) => {
  return (dispatch: AppDispatch) => {
    ArticleApi.getArticle(id).then((data) => {
      if (data.name != undefined) {
        dispatch(setError('SyntaxError'))
      } else {
        dispatch(setArticle(data))
        CommentsApi.getCommentsArticle(id).then((data) => {
          dispatch(setComments(data))
        })
      }
    })
  }
}

export const createComment = (name: string, content: string, idPost: string) => {
  return (dispatch: AppDispatch) => {
    CommentsApi.createComment(name, content, idPost).then(() => {
      CommentsApi.getCommentsArticle(idPost).then((data) => {
        dispatch(setComments(data))
      })
    }).catch(() => {

    })
  }
}