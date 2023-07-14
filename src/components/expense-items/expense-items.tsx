import { useExpense } from "../../contexts/expense";
import style from "../expense-items/expense-items.module.css";
import ExpenseListHeaders from "../expense-list-headers/expense-list-headers";

interface ExpenseItemsProps {}

const ExpenseItems = ({}: ExpenseItemsProps) => {
  const { expenses, updateExpense, setExpenses } = useExpense();

  const handleNameChange = (e: any, id: string) => {
    updateExpense(id, { name: e.target.value });
  };

  const handlePriceChange = (e: any, id: string) => {
    updateExpense(id, { price: e.target.value });
  };

  const handlePercentageChange = (e: any, id: string) => {
    updateExpense(id, { percentageMarkup: e.target.value });
  };
  return (
    <ul>
      <ExpenseListHeaders />
      {expenses.map((el) => {
        return (
          <li key={el.id} className={`${style.grid} ${style.expenseBox}`}>
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
              />
              <span className={style.span}>€</span>
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
              />
              <span className={style.span}>%</span>
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
                setExpenses(
                  expenses.filter((_expense) => _expense.id !== el.id),
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

export { ExpenseItems };
