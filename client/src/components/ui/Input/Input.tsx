import type { FC } from 'react'
import s from './input.module.scss'

interface IProps {
    value: string
    setValue: (v: string) => void
    label: string
    placeholder: string
}

const Input: FC<IProps> = ({value, setValue, label, placeholder}) => {
    
    return <form className={s.InputForm}>
        <label className={s.InputForm__label}>{label}</label>
        <input className={s.InputForm__input} type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)} placeholder={placeholder} />
    </form>
}


export default Input