import "./App.css";
import { Header } from "../src/components/header/header";
import { ExpenceList } from "./components/expence-list/expence-list";
import { WithExpence } from "./contexts/expence";
import { useState } from "react";
import { Modal } from "./components/modal/modal.tsx";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <WithExpence>
      <div className="main">
        <Header showModal={showModal} setShowModal={setShowModal} />
        <ExpenceList />
        {showModal && (
          <Modal showModal={showModal} setShowModal={setShowModal} />
        )}
      </div>
    </WithExpence>
  );
}
export default App;
