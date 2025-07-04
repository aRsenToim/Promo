


export interface IArticle {
  id: string,
  title: string,
  image: string,
  content: string,
  date: Date,
  isChange: boolean,
  view: number,
  markers: String,
  desc: string
}

export interface IError {
  name: string
  message: string
}

export interface IComment {
  id: string,
  content: string,
  name: string
  date: Date
}