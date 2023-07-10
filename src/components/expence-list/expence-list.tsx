import { FC } from 'react'
import style from '../expence-list/expence-list.module.css'
import { ListHeaderBox }  from '../list-header-box/list-header-box.tsx'
import { ExpenceBox } from '../expence-box/expence-box.tsx';
import { Expence } from '../../App';

interface ExpenceListProps {
  expences: Expence[];
}

const ExpenceList = ({expences}:ExpenceListProps) => {
  return (
    <section className={`${style.container} fontLato colorDarkGrey`}>
      <div className={style.grid}>
          <div className={style.gridHeader}>Name</div>
          <div className={style.gridHeader}>Price</div>
          <div className={style.gridHeader}>Percentage Markup</div>
          <div className={style.gridHeader}>Total</div>
      </div>
      <div>
      {expences.map((el)=>{
            return <div className={`${style.grid} ${style.expenceBox}`}>
              <div className={style.gridEntry}>{el.name}</div>
              <div className={style.gridEntry}>{el.price} €</div>
              <div className={style.gridEntry}>{el.percentageMarkup}</div>
              <div className={style.gridEntry}>{el.total?.toString()} €</div>
              </div>
          })}
      </div>
    
    </section>
  )
}

export { ExpenceList }
