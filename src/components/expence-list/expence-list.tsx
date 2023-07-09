import { FC } from 'react'
import style from '../expence-list/expence-list.module.css'
import { ListHeaderBox }  from '../list-header-box/list-header-box.tsx'

interface ExpenceListProps {
  
}

const ExpenceList: FC<ExpenceListProps> = ({}) => {
  return <div className={style.expenceListBox}>
    <ListHeaderBox/>
  </div>
}

export { ExpenceList }
