import BigNumber from "bignumber.js";
import { useExpense } from "../../contexts/expense";
import style from "../total-count/total-count.module.css";

const TotalCount = () => {
  const { expenses } = useExpense();

  const total = expenses.reduce((acc, expense) => {
    return acc.plus(expense.total);
  }, new BigNumber(0));

  return (
    <div className={style.expensesTotalBox}>
      <p className={style.expenseTotal}>Total Count: {total.toString()} €</p>
    </div>
  );
};

export { TotalCount };
