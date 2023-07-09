import { FC } from 'react'
import style from '../header/header.module.css'
import { Button } from '../button/button'

interface HeaderProps {
  showModal: boolean;
  setShowModal: (value:boolean) => void
}

const Header: FC<HeaderProps> = ({showModal, setShowModal}) => {
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
      <Button showModal={showModal} setShowModal={setShowModal}>Add an Expence</Button>
    </div>
  </div>
}

export { Header }
