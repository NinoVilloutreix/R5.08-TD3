import { useState } from "react";

const fruits = [
    {key : crypto.randomUUID, name: "pomme"},
    {key : crypto.randomUUID, name: "durian"},
    {key : crypto.randomUUID, name: "Georges Pompidou"},
]

export default function Exo4() {
    const [items, setItems] = useState(fruits);

    const addItem = () => {
        const newItem = {key: crypto.randomUUID(), name:"cerise"};
    setItems((currentItems) => [...currentItems, newItem])
  };

  return (
    <div className="p-8">
      <h1 className="mb-4 text-xl">Exercice 4</h1>
      <button
        onClick={addItem}
        className="mb-4 rounded bg-green-500 px-4 py-2 text-white"
      >
        Ajouter une Cerise 🍒
      </button>

      <ul className="list-disc pl-5">{items.map((items)=> <li>{items.name}</li>)}</ul>
    </div>
  );
}