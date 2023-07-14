import style from "../expence-list/expence-list.module.css";
import { TotalCount } from "../total-count/total-count";
import ExpenceListHeaders from "../expence-list-headers/expence-list-headers";
import { ExpenceItems } from "../expence-items/expence-items";

interface ExpenceListProps {}

const ExpenceList = ({}: ExpenceListProps) => {
  return (
    <section className={`${style.container} fontLato colorDarkGrey`}>
      <div className={style.scrollBox}>
        <ExpenceListHeaders />
        <ExpenceItems />
      </div>
      <TotalCount />
    </section>
  );
};

export { ExpenceList };
