import type { FC } from 'react'
import s from './header.module.scss'
import { NavLink } from 'react-router-dom'


const Header: FC = () => {
    return <div className={s.Header}>
        <div className={s.HeaderConteiner}>
            <NavLink to={'/'} className={s.Header__logo}>
                <img className={s.Header__image} src="/image/logo.png" alt="" />
            </NavLink>
            <ul className={s.Header__items}> 
                <li className={s.Header__item}>
                    <NavLink to={'/articles/Frontend'} className={s.Header__link}>
                        Frontend
                    </NavLink>
                </li>
                <li className={s.Header__item}>
                    <NavLink to={'/articles/Backend'} className={s.Header__link}>
                        Backend
                    </NavLink>
                </li>
                <li className={s.Header__item}>
                    <NavLink to={'/articles/DevOps'} className={s.Header__link}>
                        DevOps
                    </NavLink>
                </li>
                <li className={s.Header__item}>
                    <NavLink to={'/articles/Python'} className={s.Header__link}>
                        Python
                    </NavLink>
                </li>
                 <li className={s.Header__item}>
                    <NavLink to={'/article'} className={s.Header__link}>
                        All article
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
}

export default Header