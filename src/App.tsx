import './App.css';
import { Header } from '../src/components/header/header';
import { ExpenceList } from './components/expence-list/expence-list.tsx';

function App() {
  return (
    <div className='main'>
      <Header/>
      <ExpenceList/>
      </div>
  )
}
export default App
