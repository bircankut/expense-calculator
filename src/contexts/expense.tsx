import { useState, useContext, ReactNode, createContext } from "react";
import { Expense, WipExpense } from "../types/expense";
import { generateId } from "../utils/generate-id";
import { calculateValueRatio } from "../utils/calculate-percentage";

interface ExpenseContextData {
  expenses: Expense[];
  setExpenses: (value: Expense[]) => void;
  updateExpense: (expenseId: string, values: Partial<Expense>) => void;
  wipExpense: WipExpense;
  setWipExpense: (value: WipExpense) => void;
  updateWipExpense: (value: WipExpense) => void;
  intertWipExpenseToExpenses: () => void;
}

const ExpenseContext = createContext<ExpenseContextData>({
  expenses: [],
  setExpenses: () => undefined,
  updateExpense: () => undefined,
  wipExpense: {},
  setWipExpense: () => undefined,
  updateWipExpense: () => undefined,
  intertWipExpenseToExpenses: () => undefined,
});

const useExpense = (): ExpenseContextData => useContext(ExpenseContext);

interface ExpenseProps {
  children: ReactNode;
}

const WithExpense = ({ children }: ExpenseProps) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [wipExpense, setWipExpense] = useState<WipExpense>({});

  const updateWipExpense = (value: WipExpense) => {
    setWipExpense({ ...wipExpense, ...value });
  };

  const updateExpense = (expenseId: string, values: Partial<Expense>) => {
    const newExpenses = [...expenses];
    const selectedExpense = newExpenses.find(
      (_expense) => _expense.id == expenseId,
    );

    if (!selectedExpense) {
      return;
    }

    Object.assign(selectedExpense, values);

    if ("price" in values || "percentageMarkup" in values) {
      selectedExpense.total = calculateValueRatio(
        selectedExpense.price,
        selectedExpense.percentageMarkup,
      );
    }

    setExpenses(newExpenses);
  };

  const intertWipExpenseToExpenses = () => {
    const { price, percentageMarkup } = wipExpense;
    const total = calculateValueRatio(price, percentageMarkup);
    setExpenses([
      ...expenses,
      { ...wipExpense, total, id: generateId() } as Expense,
    ]);
    setWipExpense({});
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        setExpenses,
        updateExpense,
        wipExpense,
        setWipExpense,
        updateWipExpense,
        intertWipExpenseToExpenses,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export { WithExpense, useExpense };
