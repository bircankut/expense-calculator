import { useState, useContext, ReactNode, createContext } from "react";
import { Expence, WipExpence } from "../types/expence";
import { generateId } from "../utils/generate-id";
import { calculateValueRatio } from "../utils/calculate-percentage";

interface ExpenceContextData {
  expences: Expence[];
  setExpences: (value: Expence[]) => void;
  updateExpence: (expenceId: string, values: Partial<Expence>) => void;
  wipExpence: WipExpence;
  setWipExpence: (value: WipExpence) => void;
  updateWipExpence: (value: WipExpence) => void;
  intertWipExpenceToExpences: () => void;
}

const ExpenceContext = createContext<ExpenceContextData>({
  expences: [],
  setExpences: () => undefined,
  updateExpence: () => undefined,
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
  };

  const updateExpence = (expenceId: string, values: Partial<Expence>) => {
    const newExpences = [...expences];
    const selectedExpence = newExpences.find(
      (_expence) => _expence.id == expenceId,
    );

    if (!selectedExpence) {
      return;
    }

    Object.assign(selectedExpence, values);

    if ("price" in values || "percentageMarkup" in values) {
      selectedExpence.total = calculateValueRatio(
        selectedExpence.price,
        selectedExpence.percentageMarkup,
      );
    }

    setExpences(newExpences);
  };

  const intertWipExpenceToExpences = () => {
    const { price, percentageMarkup } = wipExpence;
    const total = calculateValueRatio(price, percentageMarkup);
    setExpences([
      ...expences,
      { ...wipExpence, total, id: generateId() } as Expence,
    ]);
    setWipExpence({});
  };

  return (
    <ExpenceContext.Provider
      value={{
        expences,
        setExpences,
        updateExpence,
        wipExpence,
        setWipExpence,
        updateWipExpence,
        intertWipExpenceToExpences,
      }}
    >
      {children}
    </ExpenceContext.Provider>
  );
};

export { WithExpence, useExpence };
