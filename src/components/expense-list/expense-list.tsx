import style from "../expense-list/expense-list.module.css";
import { TotalCount } from "../total-count/total-count";
import { ExpenseItems } from "../expense-items/expense-items";

interface ExpenseListProps {}

const ExpenseList = ({}: ExpenseListProps) => {
  return (
    <section className={`${style.container} fontLato colorDarkGrey`}>
      <div className={style.scrollBox}>
        <ExpenseItems />
      </div>
      <TotalCount />
    </section>
  );
};

export { ExpenseList };
