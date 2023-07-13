import BigNumber from "bignumber.js";

export const calculateValueRatio = (value?: number, ratio?: number): BigNumber => {
    
    if (!value || !ratio) {
        return new BigNumber(0);
    }

    const valueAsBigNumber = new BigNumber(value);
    const ratioAsBigNumber = new BigNumber(ratio);
    return valueAsBigNumber.multipliedBy(ratioAsBigNumber.plus(100)).dividedBy(100);
    
};
