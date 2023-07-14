import { useExpence } from "../../contexts/expence";
import style from "../expence-items/expence-items.module.css";

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
      {expences.map((el) => {
        return (
          <li key={el.id} className={`${style.grid} ${style.expenceBox}`}>
            <div className={style.itemStyleForPhone}>
              <label className={style.label}>Name:</label>
              <input
                className={`${style.input} fontLato colorDarkGrey`}
                value={el.name}
                type="text"
                onChange={(event) => handleNameChange(event, el.id)}
              />
            </div>
            <div className={style.itemStyleForPhone}>
              <label className={style.label}>Price:</label>
              <input
                className={`${style.input}  ${style.input} fontLato colorDarkGrey`}
                value={el.price}
                type="text"
                onChange={(event) => handlePriceChange(event, el.id)}
              />
            </div>
            <div className={style.itemStyleForPhone}>
              <label className={style.label}>Percentage:</label>
              <input
                className={`${style.input} fontLato colorDarkGrey`}
                value={el.percentageMarkup}
                type="text"
                onChange={(event) => {
                  handlePercentageChange(event, el.id);
                }}
              />
            </div>
            <p
              className={`${style.input} ${style.itemStyleForPhone}  fontLato colorDarkGrey`}
            >
              <label className={style.label}>Total:</label>
              {el.total?.toString()}
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
