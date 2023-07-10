import { FC, useState } from 'react'
import BigNumber from "bignumber.js";
import { Expence } from '../../App';
import style from '../expence-box/expence-box.module.css';

interface ExpenceBoxProps {
  expences: Expence[];
}

const ExpenceBox = ({ expences }:ExpenceBoxProps) => {
  return <div>{expences.map((el)=>{
    return (<div className={`${style.expenceBox} fontLato colorLigthGrey`}>
        <span style={{width: '30%'}} className={style.span}>{el.name}</span>
        <span style={{width: '25%'}} className={style.span}>{el.price}€</span>
        <span style={{width: '10%'}} className={style.span}>{el.percentageMarkup}%</span>
        <span style={{width: '30%'}} className={style.span}>{el.total?.toString()}€</span>
    </div>)
  })}</div>
}

export { ExpenceBox }