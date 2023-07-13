import BigNumber from "bignumber.js";
import { useExpence } from "../../contexts/expence";
import style from "../total-count/total-count.module.css";

const TotalCount = () => {
    const { expences } = useExpence();

    const total = expences.reduce((acc, expence) => {
        return acc.plus(expence.total);
    }, new BigNumber(0));

    return <div className={style.expencesTotalBox}>
        <p className={style.expenceTotal}>{total.toString()} €</p>
    </div>
}

export { TotalCount };
