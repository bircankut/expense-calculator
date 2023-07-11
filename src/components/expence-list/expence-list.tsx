import style from '../expence-list/expence-list.module.css'
import { useExpence } from '../../contexts/expence'

interface ExpenceListProps {

}

const ExpenceList = ({}:ExpenceListProps) => {
  const {expences, wipExpence, updateWipExpence, setExpences, intertWipExpenceToExpences} = useExpence();

  function handleNameChange(e: any) {
    updateWipExpence({
      name: e.target.value
    });
  };
  function handlePriceChange(e: any) {
    updateWipExpence({
      price: e.target.value,
    });
  };
  function handlePercentageChange(e: any) {
    updateWipExpence({
      percentageMarkup: e.target.value,
    });
  };

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
              <input className={`${style.gridEntry} ${style.input} fontLato colorDarkGrey`} 
              value={el.name} type="text" onChange={handleNameChange}/>
              <input className={`${style.gridEntry} ${style.input} fontLato colorDarkGrey`} 
              value={`${el.price} €`} type="text" onChange={handlePriceChange}/>
              <input className={`${style.gridEntry} ${style.input} fontLato colorDarkGrey`} 
              value={`%${el.percentageMarkup}`} type="text" onChange={handlePercentageChange}/>
              <input className={`${style.gridEntry} ${style.input} fontLato colorDarkGrey`} 
              value={`${el.total?.toString()} €`} type="text" />
            </div>
          })}
      </div>
    
    </section>
  )
}

export { ExpenceList }
