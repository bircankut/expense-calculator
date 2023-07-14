import "./App.css";
import { Header } from "../src/components/header/header";
import { ExpenseList } from "./components/expense-list/expense-list";
import { WithExpense } from "./contexts/expense";
import { useState } from "react";
import { Modal } from "./components/modal/modal.tsx";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <WithExpense>
      <div className="main">
        <Header showModal={showModal} setShowModal={setShowModal} />
        <ExpenseList />
        {showModal && (
          <Modal showModal={showModal} setShowModal={setShowModal} />
        )}
      </div>
    </WithExpense>
  );
}
export default App;
