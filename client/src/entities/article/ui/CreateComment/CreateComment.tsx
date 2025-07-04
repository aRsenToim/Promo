import { useState, type FC } from 'react'
import s from './CreateComment.module.scss'
import { Button, Input, Textarea } from '../../../../components/ui'

interface IProps {
    create: (name: string, content: string) => void
}

const CreateComment: FC<IProps> = ({create}) => {
    const [name, setName] = useState<string>("")
    const [content, setContent] = useState<string>("")
    return <div className={s.CreateComment}>
        <h3 className={s.CreateComment__title}>Добавить комментарий</h3>
        <Input value={name} setValue={(v: string) => setName(v)} label='Ваше имя' placeholder='Введите ваше имя'/>
        <Textarea value={content} setValue={(v: string) => setContent(v)} label='Ваш комментарий' placeholder='Введите ваш комментрий'/>
        <Button onclick={() => {create(name, content)}} title='Добавить комментарий'/>
    </div>
}

export default CreateComment