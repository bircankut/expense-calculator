import './App.css';
import { Header } from '../src/components/header/header';
import { ExpenceList } from './components/expence-list/expence-list.tsx';
import { useState } from 'react';
import { Modal } from './components/modal/modal.tsx';
import BigNumber from 'bignumber.js';

export interface Expence {
  name: string;
  price: number;
  percentageMarkup: number;
  total: BigNumber | null;
}


function App() {
  const [expences, setExpences] = useState<Expence[]>([]);
  const [wipExpence, setWipExpence] = useState<Partial<Expence>>({});

  const [showModal, setShowModal] = useState(false);

  const intertToExpences = (expence: Partial<Expence>) => {
    setExpences([...expences, expence as Expence]);
    setWipExpence({});
  }

  return (
    <div className='main'>
      <Header showModal={showModal} setShowModal={setShowModal} />
      <ExpenceList  expences={expences}/>
      {showModal && <Modal wipExpence={wipExpence} handleWipExpenceChange={setWipExpence} intertToExpences={intertToExpences} showModal={showModal} setShowModal={setShowModal} />}
    </div>
  )
}
export default App
