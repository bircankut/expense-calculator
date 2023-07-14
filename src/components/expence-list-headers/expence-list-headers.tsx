import { FC } from "react";
import style from "../expence-list-headers/expence-list-headers.module.css";

interface expenceListHeadersProps {}

const expenceListHeaders: FC<expenceListHeadersProps> = ({}) => {
  return (
    <li className={`${style.grid} ${style.headerBox}`}>
      <div className={style.item}>Name</div>
      <div className={style.item}>Price</div>
      <div className={style.item}>
        <p>Percentange Markup</p>
      </div>
      <p
        className={`${style.input} ${style.item}  fontLato colorDarkGrey`}
      >
        Total
      </p>

      <span />
    </li>
  );
};

export default expenceListHeaders;
