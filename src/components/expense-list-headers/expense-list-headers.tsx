import { FC } from "react";
import style from "../expense-list-headers/expense-list-headers.module.css";

interface expenseListHeadersProps {}

const expenseListHeaders: FC<expenseListHeadersProps> = ({}) => {
  return (
    <li className={`${style.grid} ${style.headerBox}`}>
      <div className={style.item}>Name</div>
      <div className={style.item}>Price</div>
      <div className={style.item}>
        <p>Percentange Markup</p>
      </div>
      <p className={`${style.input} ${style.item}  fontLato colorDarkGrey`}>
        Total
      </p>

      <span />
    </li>
  );
};

export default expenseListHeaders;
