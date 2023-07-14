import type BigNumber from "bignumber.js";

export interface Expense {
  id: string;
  name: string;
  price: number;
  percentageMarkup: number;
  total: BigNumber;
}

export type WipExpense = Partial<Omit<Expense, "id" | "total">>;
