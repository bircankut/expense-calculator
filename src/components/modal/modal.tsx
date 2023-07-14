import style from "../modal/modal.module.css";
import { Button } from "../button/button";
import { COLOR } from "../../enums";
import { useExpense } from "../../contexts/expense";

interface ModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const Modal = ({ showModal, setShowModal }: ModalProps) => {
  const { updateWipExpense, wipExpense, intertWipExpenseToExpenses } =
    useExpense();

  function handleNameChange(e: any) {
    updateWipExpense({
      name: e.target.value,
    });
  }

  function handlePriceChange(e: any) {
    updateWipExpense({
      price: e.target.value,
    });
  }

  function handlePercentageChange(e: any) {
    updateWipExpense({
      percentageMarkup: e.target.value,
    });
  }

  const onAddButtonClick = () => {
    console.log("bircan", wipExpense.name);
    if (wipExpense.name === "" || wipExpense.name === undefined) {
      alert("Input value cannot be empty!");
    } else {
      intertWipExpenseToExpenses();
      setShowModal(!showModal);
    }
  };

  return (
    <div className={style.darkBG}>
      <div className={style.centered}>
        <div className={style.modal}>
          <div className={style.inputBox}>
            <h3 className={`${style.modalHeader} fontLato colorDarkGrey`}>
              Adding New Expense
            </h3>
            <input
              className={`${style.input} fontLato`}
              type="text"
              value={wipExpense.name || ""}
              onChange={handleNameChange}
              placeholder="Name"
            />
            <input
              className={`${style.input} fontLato`}
              type="number"
              value={wipExpense.price || ""}
              onChange={handlePriceChange}
              placeholder="Price"
            />
            <input
              className={`${style.input} fontLato`}
              type="number"
              value={wipExpense.percentageMarkup || ""}
              onChange={handlePercentageChange}
              placeholder="Percentage Markup"
            />
            <Button color={COLOR["darkGrey"]} onClick={onAddButtonClick}>
              Add an Expense
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Modal };
