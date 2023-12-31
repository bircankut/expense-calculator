import style from "../header/header.module.css";
import { Button } from "../button/button";
import { COLOR } from "../../enums";

interface HeaderProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const Header = ({ showModal, setShowModal }: HeaderProps) => {
  return (
    <div className={style.headerBox}>
      <header>
        <h2 className={`${style.fSize46} fontLato colorDarkGrey`}>
          Expense Calculator
        </h2>

        <h4 className={`${style.mTop10} fontLato colorDarkGrey`}>
          List of Expenses
        </h4>
      </header>
      <div>
        <Button
          color={COLOR["darkGrey"]}
          onClick={() => setShowModal(!showModal)}
        >
          Add an Expense
        </Button>
      </div>
    </div>
  );
};

export { Header };
