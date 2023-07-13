import type BigNumber from 'bignumber.js';

export interface Expence {
    id: string;
    name: string;
    price: number;
    percentageMarkup: number;
    total: BigNumber;
}

export type WipExpence = Partial<Omit<Expence, "id" | "total">>;
