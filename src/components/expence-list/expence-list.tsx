import style from "../expence-list/expence-list.module.css";
import { TotalCount } from "../total-count/total-count";
import { ExpenceItems } from "../expence-items/expence-items";

interface ExpenceListProps {}

const ExpenceList = ({}: ExpenceListProps) => {
  return (
    <section className={`${style.container} fontLato colorDarkGrey`}>
      <div className={style.scrollBox}>
        <ExpenceItems />
      </div>
      <TotalCount />
    </section>
  );
};

export { ExpenceList };
