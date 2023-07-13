import style from "../expence-list/expence-list.module.css";
import { TotalCount } from "../total-count/total-count";
import ExpenceListHeaders from "../expence-list-headers/expence-list-headers";
import { ExpenceItems } from "../expence-items/expence-items";

const ExpenceList = () => {
  return (
    <section className={`${style.container} fontLato colorDarkGrey`}>
      <ExpenceListHeaders />
      <div className={style.scrollBox}>
        <ExpenceItems />
      </div>
      <TotalCount />
    </section>
  );
};

export { ExpenceList };
