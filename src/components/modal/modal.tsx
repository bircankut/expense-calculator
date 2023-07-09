import { FC } from 'react'
import style from '../modal/modal.module.css';
import { Button } from '../button/button';

interface ModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void
}

const Modal: FC<ModalProps> = ({showModal, setShowModal}) => {
  return <div className={style.darkBG}>
    <div className={style.centered}>
      <div className={style.modal}>
      <Button showModal={showModal} setShowModal={setShowModal}>Close</Button>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      </div>
    </div>
  </div>
}

export { Modal }