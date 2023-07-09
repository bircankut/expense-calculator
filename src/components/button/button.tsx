import { FC } from 'react'
import style from '../button/button.module.css'
import { COLOR } from '../../enums';

interface ButtonProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  children: string;
  color?: string;
  iconButton?: boolean;
}

const Button: FC<ButtonProps> = ({children, showModal, setShowModal, color, iconButton}) => {
   
  return <button style={{ backgroundColor: `${color}` }} className={iconButton ? `${style.iconButton} fontLato` :`${style.button} fontLato`} onClick={()=> setShowModal(!showModal)}>
    {children}
    </button>
}

export { Button }