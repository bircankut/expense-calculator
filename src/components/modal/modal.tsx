import { FC } from 'react'
import style from '../modal/modal.module.css';
import { Button } from '../button/button';
import { COLOR } from '../../enums';
import { Expence } from '../../App';

interface ModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  wipExpence: Partial<Expence>;
  handleWipExpenceChange: (value: Partial<Expence>)=> void
}

const Modal = ({showModal, setShowModal, wipExpence, handleWipExpenceChange}: ModalProps) => {

  function handleNameChange(e: any) {
    handleWipExpenceChange({
      name: e.target.value, 
      price: wipExpence.price,
      percentageMarkup: wipExpence.percentageMarkup,
    });
  };
  function handlePriceChange(e: any) {
    handleWipExpenceChange({
      name: wipExpence.name, 
      price: e.target.value,
      percentageMarkup: wipExpence.percentageMarkup,
    });
  };
  function handlePercentageChange(e: any) {
    handleWipExpenceChange({
      name: wipExpence.name, 
      price: wipExpence.price,
      percentageMarkup: e.target.value,
    });
  };

  return <div className={style.darkBG}>
    <div className={style.centered}>
      <div className={style.modal}>
        <Button iconButton={true} color={COLOR['grey']} showModal={showModal} setShowModal={setShowModal}>
          X
        </Button>
        <div className={style.inputBox}>
          <h3 className={`${style.modalHeader} fontLato colorDarkGrey`}>Adding New Expence</h3>
          <input className={`${style.input} fontLato`} type="text" value={wipExpence.name} onChange={handleNameChange} placeholder='Name'/>
          <input className={`${style.input} fontLato`}  type="text" value={wipExpence.price} onChange={handlePriceChange}  placeholder='Price'/>
          <input className={`${style.input} fontLato`}  type="text" value={wipExpence.percentageMarkup} onChange={handlePercentageChange}  placeholder='Percentage Markup'/>
          <Button color={COLOR['grey']} showModal={showModal} setShowModal={setShowModal}>
            Add an Expence
          </Button>
        </div>
      </div>
    </div>
  </div>
}

export { Modal }