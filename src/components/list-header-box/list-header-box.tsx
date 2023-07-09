import { FC } from 'react'
import style from '../list-header-box/list-header-box.module.css'
import { ExpenceValueHeaders } from '../expence-value-headers/expence-value-headers'

interface ListHeaderBoxProps {
  
}

const  ListHeaderBox: FC< ListHeaderBoxProps> = ({}) => {
  return <div className={`${style.headersBox} fontLato colorDarkGrey`}>
    <ExpenceValueHeaders> Name </ExpenceValueHeaders>
    <ExpenceValueHeaders> Price </ExpenceValueHeaders>
    <ExpenceValueHeaders> Percentage </ExpenceValueHeaders>
    <ExpenceValueHeaders> Total </ExpenceValueHeaders>
  </div>
}

export { ListHeaderBox }