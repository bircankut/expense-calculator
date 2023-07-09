import { Children, FC } from 'react'
import style from '../button/button.module.css'

interface ButtonProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  children: string;
}

const Button: FC<ButtonProps> = ({children, showModal, setShowModal}) => {
   
  return <button className={`${style.button} fontLato`} onClick={()=> setShowModal(!showModal)}>
    {children}
    </button>
}

export { Button }