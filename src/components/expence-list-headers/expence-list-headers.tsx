import { FC } from "react";
import style from "../expence-list-headers/expence-list-headers.module.css";

interface expenceListHeadersProps {}

const expenceListHeaders: FC<expenceListHeadersProps> = ({}) => {
  return (
    <div className={`${style.headerBox} ${style.grid}`}>
      <p className={style.gridHeader}>Name</p>
      <p className={style.gridHeader}>Price</p>
      <p className={style.gridHeader}>Percentage Markup</p>
      <p className={style.gridHeader}>Total</p>
    </div>
  );
};

export default expenceListHeaders;
