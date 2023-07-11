import { useState, useContext, ReactNode, createContext } from 'react'
import { Expence, WipExpence } from '../types/expence';
import BigNumber from 'bignumber.js';

interface ExpenceContextData {
    expences: Expence[];
    setExpences: (value: Expence[]) => void;
    wipExpence: WipExpence;
    setWipExpence: (value: WipExpence) => void;
    updateWipExpence: (value: WipExpence) => void;
    intertWipExpenceToExpences: () => void;
}

const ExpenceContext = createContext<ExpenceContextData>({
    expences: [],
    setExpences: () => undefined,
    wipExpence: {},
    setWipExpence: () => undefined,
    updateWipExpence: () => undefined,
    intertWipExpenceToExpences: () => undefined,
});

const useExpence = (): ExpenceContextData => useContext(ExpenceContext);

interface ExpenceProps {
    children: ReactNode;
}

const WithExpence = ({ children }: ExpenceProps) => {
    const [expences, setExpences] = useState<Expence[]>([]);
    const [wipExpence, setWipExpence] = useState<WipExpence>({});

    const updateWipExpence = (value: WipExpence) => {
        setWipExpence({ ...wipExpence, ...value });
    }

    const getTotal = (_wipExpence: WipExpence): BigNumber => {
        const { price, percentageMarkup } = _wipExpence;

        if (!price || !percentageMarkup) {
            return new BigNumber(0);
        }

        const priceAsBigNumber = new BigNumber(price);
        const percentageAsBigNumber = new BigNumber(percentageMarkup);
        return priceAsBigNumber.multipliedBy(percentageAsBigNumber.plus(100)).dividedBy(100);
    };

    const intertWipExpenceToExpences = () => {
        setExpences([...expences, { ...wipExpence, total: getTotal(wipExpence)} as Expence]);
        setWipExpence({});
    }

    return <ExpenceContext.Provider value={{ expences, setExpences, wipExpence, setWipExpence, updateWipExpence, intertWipExpenceToExpences }}>{children}</ExpenceContext.Provider>
}

export { WithExpence, useExpence };
