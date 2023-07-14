import { useExpence } from "../../contexts/expence";
import style from "../expence-items/expence-items.module.css";
import ExpenceListHeaders from "../expence-list-headers/expence-list-headers";

interface ExpenceItemsProps {}

const ExpenceItems = ({}: ExpenceItemsProps) => {
  const { expences, updateExpence, setExpences } = useExpence();

  const handleNameChange = (e: any, id: string) => {
    updateExpence(id, { name: e.target.value });
  };

  const handlePriceChange = (e: any, id: string) => {
    updateExpence(id, { price: e.target.value });
  };

  const handlePercentageChange = (e: any, id: string) => {
    updateExpence(id, { percentageMarkup: e.target.value });
  };
  return (
    <ul>
      <ExpenceListHeaders />
      {expences.map((el) => {
        return (
          <li key={el.id} className={`${style.grid} ${style.expenceBox}`}>
            <div className={style.item}>
              <label className={style.label}>Name:</label>
              <input
                className={`${style.input} fontLato colorDarkGrey`}
                value={el.name}
                type="text"
                onChange={(event) => handleNameChange(event, el.id)}
              />
            </div>
            <div className={style.item}>
              <label className={style.label}>Price:</label>
              <input
                className={`${style.input}  ${style.input} fontLato colorDarkGrey`}
                value={el.price}
                type="number"
                onChange={(event) => handlePriceChange(event, el.id)}
              /><span className={style.span}>€</span>
            </div>
            <div className={style.item}>
              <label className={style.label}>Percentage:</label>
              <input
                className={`${style.input} fontLato colorDarkGrey`}
                value={el.percentageMarkup}
                type="number"
                onChange={(event) => {
                  handlePercentageChange(event, el.id);
                }}
              /><span className={style.span}>€</span>
            </div>
            <p
              className={`${style.total} ${style.item}  fontLato colorDarkGrey`}
            >
              <label className={style.label}>Total:</label>
              {el.total?.toString()} €
            </p>

            <button
              className={style.deleteButton}
              onClick={() => {
                setExpences(
                  expences.filter((_expence) => _expence.id !== el.id),
                );
              }}
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export { ExpenceItems };
