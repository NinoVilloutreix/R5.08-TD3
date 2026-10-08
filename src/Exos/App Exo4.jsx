import { useState } from "react";

export default function App() {
  // Initialisation paresseuse : randomUUID n'est appelé qu'au 1er rendu
  const [items, setItems] = useState(() => [
    { id: crypto.randomUUID(), name: "Pomme" },
    { id: crypto.randomUUID(), name: "Banane" },
  ]);

  const addItem = () => {
    // ❌ items.push(...) : modifie le tableau existant
    // ✅ on crée un NOUVEAU tableau avec le spread
    const newItem = { id: crypto.randomUUID(), name: "Cerise" }; // id généré UNE fois, à la création
    // ... le spred opérateur recupère tous les éléments existants, puis ajoute le nouveau à la fin
    setItems((current) => [...current, newItem]);
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

      <ul className="list-disc pl-5">
        {items.map((item) => (
          // key stable et unique : l'id de l'objet
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}