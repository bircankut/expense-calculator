import { FC } from 'react'
import style from '../expence-value-headers/expence-value-headers.module.css'

interface ExpenceValueHeadersProps {
  children: string;
  wideness: string;
}

const ExpenceValueHeaders: FC<ExpenceValueHeadersProps> = ({children, wideness}) => {
  return <div className={style.expenceValueHeader} style={{width: `${wideness}`}}>{children}</div>
}

export { ExpenceValueHeaders }