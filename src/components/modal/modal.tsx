import style from "../modal/modal.module.css";
import { Button } from "../button/button";
import { COLOR } from "../../enums";
import { useExpence } from "../../contexts/expence";

interface ModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const Modal = ({ showModal, setShowModal }: ModalProps) => {
  const { updateWipExpence, wipExpence, intertWipExpenceToExpences } =
    useExpence();

  function handleNameChange(e: any) {
    console.log(e.target.value);

    updateWipExpence({
      name: e.target.value,
    });
  }

  function handlePriceChange(e: any) {
    updateWipExpence({
      price: e.target.value,
    });
  }

  function handlePercentageChange(e: any) {
    updateWipExpence({
      percentageMarkup: e.target.value,
    });
  }

  const onAddButtonClick = () => {
    intertWipExpenceToExpences();
    setShowModal(!showModal);
  };

  return (
    <div className={style.darkBG}>
      <div className={style.centered}>
        <div className={style.modal}>
          <div className={style.inputBox}>
            <h3 className={`${style.modalHeader} fontLato colorDarkGrey`}>
              Adding New Expence
            </h3>
            <input
              className={`${style.input} fontLato`}
              type="text"
              value={wipExpence.name || ""}
              onChange={handleNameChange}
              placeholder="Name"
            />
            <input
              className={`${style.input} fontLato`}
              type="text"
              value={wipExpence.price || ""}
              onChange={handlePriceChange}
              placeholder="Price"
            />
            <input
              className={`${style.input} fontLato`}
              type="text"
              value={wipExpence.percentageMarkup || ""}
              onChange={handlePercentageChange}
              placeholder="Percentage Markup"
            />
            <Button color={COLOR["darkGrey"]} onClick={onAddButtonClick}>
              Add an Expence
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Modal };
