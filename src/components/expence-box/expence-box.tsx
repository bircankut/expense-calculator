import { FC, useState } from 'react'

interface ExpenceBoxProps {
  
}

interface Expence {
    name: string;
    price: number;
    percentageMarkup: number;
    total: (price: number, percentageMarkup: number) => {};
}

const ExpenceBox: FC<ExpenceBoxProps> = ({

}) => {
  const [expences, setExpences] = useState([]);

  return <div>expence-box</div>
}

export { ExpenceBox }