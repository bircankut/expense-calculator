import { FC } from 'react'
import style from '../header/header.module.css'
import { Button } from '../button/button'

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({}) => {
  return <div className={style.headerBox}>
    <header>
      <h2 className={`${style.fSize46} fontLato colorDarkGrey`}>
        Expence Calculater
      </h2>

      <h4 className={`${style.mTop10} fontLato colorDarkGrey`}>
        List of Expences
      </h4>
    </header>
    <div>
      <Button text='Add an Expence'></Button>
    </div>
  </div>
}

export { Header }
