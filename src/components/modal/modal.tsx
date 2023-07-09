import { FC } from 'react'
import style from '../modal/modal.module.css';
import { Button } from '../button/button';
import { COLOR } from '../../enums';

interface ModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void
}

const Modal: FC<ModalProps> = ({showModal, setShowModal}) => {
  return <div className={style.darkBG}>
    <div className={style.centered}>
      <div className={style.modal}>
        <Button iconButton={true} color={COLOR['grey']} showModal={showModal} setShowModal={setShowModal}>
          X
        </Button>
        <div className={style.inputBox}>
          <h3 className={`${style.modalHeader} fontLato colorDarkGrey`}>Adding New Expence</h3>
          <input className={`${style.input} fontLato`} type="text"  placeholder='Name'/>
          <input className={`${style.input} fontLato`}  type="text" placeholder='Price'/>
          <input className={`${style.input} fontLato`}  type="text" placeholder='Percentage Markup'/>
          <Button color={COLOR['grey']} showModal={showModal} setShowModal={setShowModal}>
            Add an Expence
          </Button>
        </div>
      </div>
    </div>
  </div>
}

export { Modal }