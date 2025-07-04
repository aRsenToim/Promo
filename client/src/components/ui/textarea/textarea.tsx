import type { FC } from 'react'
import s from './textarea.module.scss'

interface IProps {
    label: string
    value: string
    setValue: (v: string) => void
    placeholder: string
}

const Textarea: FC<IProps> = ({label, value, setValue, placeholder}) => {
    return <form className={s.TextareaForm}>
        <label className={s.TextareaForm__label}>{label}</label>
        <textarea placeholder={placeholder} value={value} onChange={(e) => setValue(e.currentTarget.value)} className={s.TextareaForm__textarea}></textarea>
    </form>
}

export default Textarea