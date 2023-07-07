import { FC } from 'react'
import style from '../header/header.module.css'

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({}) => {
  return <div className={style.headerBox}>header</div>
}

export { Header }
