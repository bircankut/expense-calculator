import { FC } from 'react'
import style from '../modal/modal.module.css';
import { Button } from '../button/button';
import { COLOR } from '../../enums';
import { Expence } from '../../App';
import BigNumber from 'bignumber.js';

interface ModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  wipExpence: Partial<Expence>;
  handleWipExpenceChange: (value: Partial<Expence>) => void;
  intertToExpences: (expence: Expence) => void;
}

const Modal = ({ showModal, setShowModal, wipExpence, handleWipExpenceChange, intertToExpences }: ModalProps) => {

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

  function calculate(pr: number, per: number): Partial<Expence> {
    const price = new BigNumber(pr);
    const percentage = new BigNumber(per);
    const mult = price.multipliedBy(percentage);
    const total = price.plus(mult);
    return {
      name: wipExpence.name,
      price: wipExpence.price,
      percentageMarkup: wipExpence.percentageMarkup,
      total,
    }
  }

  function addExpence(value: Partial<Expence>) {
    const expence = calculate(value.price!, value.percentageMarkup!);
    intertToExpences(expence as Expence);
  }

  return <div className={style.darkBG}>
    <div className={style.centered}>
      <div className={style.modal}>
        <div className={style.inputBox}>
          <h3 className={`${style.modalHeader} fontLato colorDarkGrey`}>Adding New Expence</h3>
          <input className={`${style.input} fontLato`} type="text" value={wipExpence.name} onChange={handleNameChange} placeholder='Name' />
          <input className={`${style.input} fontLato`} type="text" value={wipExpence.price} onChange={handlePriceChange} placeholder='Price' />
          <input className={`${style.input} fontLato`} type="text" value={wipExpence.percentageMarkup} onChange={handlePercentageChange} placeholder='Percentage Markup' />
          <Button color={COLOR['grey']} onClick={() => { addExpence(wipExpence) }}>
            Add an Expence
          </Button>
        </div>
      </div>
    </div>
  </div>
}

export { Modal }