import { FC } from 'react'
import style from '../expence-list/expence-list.module.css'
import { ListHeaderBox }  from '../list-header-box/list-header-box.tsx'
import { ExpenceBox } from '../expence-box/expence-box.tsx';
import { Expence } from '../../App';

interface ExpenceListProps {
  expences: Expence[];
}

const ExpenceList = ({expences}:ExpenceListProps) => {
  return <div className={style.expenceListBox}>
    <ListHeaderBox/>
    <ExpenceBox expences={expences}></ExpenceBox>
  </div>
}

export { ExpenceList }
