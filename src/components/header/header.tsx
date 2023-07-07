import { FC } from 'react'
import style from '../header/header.module.css'

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({}) => {
  return <div className={style.headerBox}>
    <h2 className={`${style.fSize46} fontLato colorDarkGrey`}>
      Expence Calculater
    </h2>
    <h4 className={`${style.mTop10} fontLato colorDarkGrey`}>List of Expences</h4>

  </div>
}

export { Header }
