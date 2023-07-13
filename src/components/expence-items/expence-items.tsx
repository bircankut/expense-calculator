import { useExpence } from '../../contexts/expence';
import style from '../expence-items/expence-items.module.css'

interface ExpenceItemsProps {
  
}

const ExpenceItems = ({} :ExpenceItemsProps) => {
  const { expences, updateExpence, setExpences } = useExpence();

  const handleNameChange = (e: any, id: string) => {
    updateExpence(id, { name: e.target.value });
  }

  const handlePriceChange = (e: any, id: string) => {
    updateExpence(id, { price: e.target.value });
  }

  const handlePercentageChange = (e: any, id: string) => {
    updateExpence(id, { percentageMarkup: e.target.value });
  }
  return  <ul >
  {expences.map((el) => {
    return <li key={el.id} className={`${style.grid} ${style.expenceBox}`}>
        
      <input className={`${style.input} fontLato colorDarkGrey`}
        value={el.name} type="text" onChange={(event) => handleNameChange(event, el.id)} />
      <input className={`${style.alignCenter}  ${style.input}  ${style.input} fontLato colorDarkGrey`}
        value={el.price} type="text" onChange={(event) => handlePriceChange(event, el.id)} />
      <input className={`${style.alignCenter}  ${style.input} fontLato colorDarkGrey`}
        value={el.percentageMarkup} type="text" onChange={(event) => { handlePercentageChange(event, el.id) }} />
      <p className={`${style.alignCenter}  ${style.input} fontLato colorDarkGrey`}>{el.total?.toString()}</p>

      <button className={style.deleteButton}
        onClick={() => {
          setExpences(
            expences.filter((_expence) => _expence.id !== el.id)
          );
        }}>
        X
      </button>

    </li>
  })}
</ul>
}

export {ExpenceItems}