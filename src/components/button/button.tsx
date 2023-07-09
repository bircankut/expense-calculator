import { FC } from 'react'
import style from '../button/button.module.css'

interface ButtonProps {
  text: String
}

const Button: FC<ButtonProps> = ({text}) => {
  return <div className={`${style.button} fontLato`}>{text}</div>
}

export { Button }