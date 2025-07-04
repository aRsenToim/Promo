import type { FC } from 'react'
import s from './button.module.scss'

interface IProps {
    title: string
    onclick: () => void
}

const Button: FC<IProps> = ({title, onclick}) => {
    return <button className={s.Button} onClick={onclick}>{title}</button>
}


export default Button