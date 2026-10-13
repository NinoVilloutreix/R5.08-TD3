import { useState } from "react";
import { motion } from "motion/react";
import logo from "./assets/Nintendo.svg";
import UncontrolledInput from "./components/UncontrolledInput"
import EditableCard from "./components/EditableCard"

export default function App() {
  // Tableau Original
  const [items, setItems] = useState(() => [
    { id: crypto.randomUUID(), name: "Déclarer son demi SMIC" },
    { id: crypto.randomUUID(), name: "Se faire casser la tronche par un CRS" },
  ]);
  // Handler
  const [order, setOrder] = useState("");
  const handleOrder = (e) => {
    setOrder(e.target.value);
  }

  const addItem = (name) => {
    console.log(name)
    const newItem = { id: crypto.randomUUID(), name: name };
    setItems((current) => [...current, newItem]);
  };
  const deleteItem = (id) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const sortedItems = [...items].sort((a, b) => {
    if (order === "anti") {
      return b.name.localeCompare(a.name); // inverse
    }
    return a.name.localeCompare(b.name); // normal
  });

  //////////////////////////////////////////////////////////////////////ANIMATION//////////////////////////////////////////////////////////////////////



  return (
    <div className="flex flex-col p-8 g-5 gap-5 bg-primary">
      <div className="flex flex-col items-center justify-center">
        <img src={logo} alt="Nintendo" className="w-30" />
        <h1 className="mb-4 text-3xl text-white font-bold">To-Do List</h1>
      </div>

      <UncontrolledInput
        name="username"
        placeholder="Nom de la tâche..."
        buttonText="Soumettre"
        onSubmit={addItem}
        order={order}
        handleOrder={handleOrder}
      />

      <ul className="list-disc flex flex-col gap-1">
        {sortedItems.map((item) => (
          <li key={item.id} className="flex justify-between align-center bg-white text-primary rounded-md py-2 px-5">
            <EditableCard value={item.name} onSave={(value) => {
              console.log(item, value)
              item.name = value
              setItems([...items])

            }} />
            <div className="flex gap-10">

              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
              ></input>
              <button
                onClick={() => deleteItem(item.id)}
                className="rounded-4xl bg-primary px-1 py-1 text-sm text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

              </button>
            </div>

          </li>
        ))}
      </ul>
    </div >
  );
}