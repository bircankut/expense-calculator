import { FC } from 'react'
import style from '../list-header-box/list-header-box.module.css'
import { ExpenceValueHeaders } from '../expence-value-headers/expence-value-headers'

interface ListHeaderBoxProps {
  
}

const  ListHeaderBox = ({}:ListHeaderBoxProps) => {
  return <div className={`${style.headersBox} fontLato colorDarkGrey`}>
    <ExpenceValueHeaders wideness={'35%'}> Name </ExpenceValueHeaders>
    <ExpenceValueHeaders wideness={'25%'}> Price </ExpenceValueHeaders>
    <ExpenceValueHeaders wideness={'10%'}> Percentage </ExpenceValueHeaders>
    <ExpenceValueHeaders wideness={'30%'}> Total </ExpenceValueHeaders>
  </div>
}

export { ListHeaderBox }