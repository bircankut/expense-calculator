import './App.css';
import { Header } from '../src/components/header/header';
import { ExpenceList } from './components/expence-list/expence-list.tsx';
import { useState } from 'react';

interface Expence {
  name: string;
  price: number;
  percentageMarkup: number;
  total: () => {};
}


function App() {
  const [expences, setExpences] = useState<Expence[]>([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='main'>
      <Header showModal={showModal} setShowModal={setShowModal}/>
      <ExpenceList/>
      </div>
  )
}
export default App
