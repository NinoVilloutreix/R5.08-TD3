import { useState } from "react";

export default function App() {
  // Tableau Original
  const [items, setItems] = useState(() => [
    { id: crypto.randomUUID(), name: "Pomme" },
    { id: crypto.randomUUID(), name: "Banane" },
  ]);

  return (
    <div className="flex flex-col p-8 g-5">
      <h1 className="mb-4 text-2xl">To-Do List</h1>
      {/* <button
        onClick={addItem}
        className="mb-4 rounded bg-green-500 px-4 py-2 text-white"
      >
        Ajouter une tâche
      </button> */}

      <div className="list-disc">
        {items.map((item) => (
          <div className ="flex border-1 border-black">
            <p key={item.id}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}