import { FC } from 'react'

interface ExpenceValueHeadersProps {
  children: string;
}

const ExpenceValueHeaders: FC<ExpenceValueHeadersProps> = ({children}) => {
  return <div>{children}</div>
}

export { ExpenceValueHeaders }