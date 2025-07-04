import type { FC } from 'react'
import s from './baseLayout.module.scss'
import Header from '../../../components/header/header'
import { Outlet } from 'react-router-dom'

const BaseLayout: FC = () => {
    return <div className={s.BaseLayout}>
        <Header />
        <div className={s.BaseLayout__wrapper}>
            <Outlet />
        </div>
    </div>
}


export default BaseLayout