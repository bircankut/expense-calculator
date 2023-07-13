import style from '../expence-list/expence-list.module.css'
import { useExpence } from '../../contexts/expence'
import { useState } from 'react';

const ExpenceList = () => {
  const { expences, updateExpence, setExpences } = useExpence();
  const [isSaved, setIsSaved] = useState(false);

  const handleNameChange = (e: any, id: string) => {
    updateExpence(id, { name: e.target.value });
  }

  const handlePriceChange = (e: any, id: string) => {
    updateExpence(id, { price: e.target.value });
  }

  const handlePercentageChange = (e: any, id: string) => {
    updateExpence(id, { percentageMarkup: e.target.value });
  }

  return (
    <section className={`${style.container} fontLato colorDarkGrey`}>
      <div className={style.grid}>
        <div className={style.gridHeader}>Name</div>
        <div className={style.gridHeader}>Price</div>
        <div className={style.gridHeader}>Percentage Markup</div>
        <div className={style.gridHeader}>Total</div>
      </div>
      <ul>
        {expences.map((el) => {
          return <li key={el.id} className={`${style.grid} ${style.expenceBox}`}>
            <input className={`${style.gridEntry} ${style.input} fontLato colorDarkGrey`}
              value={el.name} type="text" onChange={(event) => handleNameChange(event, el.id)} />
            <input className={`${style.gridEntry} ${style.input} fontLato colorDarkGrey`}
              value={el.price} type="text" onChange={(event) => handlePriceChange(event, el.id)} />
            <input className={`${style.gridEntry} ${style.input} fontLato colorDarkGrey`}
              value={el.percentageMarkup} type="text" onChange={(event) => { handlePercentageChange(event, el.id) }} />
            <p className={`${style.gridEntry} ${style.input} fontLato colorDarkGrey`}>{el.total?.toString()}</p>
            <button className={style.gridEntry} onClick={() => setIsSaved(!isSaved)}>X</button>
            <button className={style.gridEntry}
              onClick={() => {
                setExpences(
                  expences.filter((_expence) => _expence.id !== el.id)
                );
              }}>
              Delete
            </button>
          </li>
        })}
      </ul>
    </section>
  )
}

export { ExpenceList }
