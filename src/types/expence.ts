import type BigNumber from 'bignumber.js';

export interface Expence {
    name: string;
    price: number;
    percentageMarkup: number;
    total: BigNumber | null;
}

export type WipExpence = Partial<Expence>;
