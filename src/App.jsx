import { useState } from "react";

function UncontrolledInput({ name, placeholder, buttonText, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const value = new FormData(e.currentTarget).get(name);
    if (typeof value === "string" && value.trim()) {
      onSubmit(value.trim());
    }

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        aria-label={placeholder}
        required
        className="rounded border px-3 py-2"
      />
      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        {buttonText}
      </button>
    </form>
  );
}


function EditableCard({ value, onSave }) {

  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(value); // brouillon

  const startEditing = () => {

    setDraft(value);
    setIsEditing(true);
  };

  const cancel = () => setIsEditing(false); // pas d'appel à onSave

  const handleSubmit = (e) => {
    e.preventDefault(); // la touche Entrée valide aussi
    const trimmed = draft.trim();
    if (!trimmed) return; // un brouillon vide n'est pas enregistré
    onSave(trimmed); // remontée de la valeur finale au parent
    setIsEditing(false);
  };

  return (
    <div className="">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
          {/* Champ contrôlé par draft (voir Ex. 6) */}
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            aria-label="Nouvelle valeur"
            className="flex-1 rounded border px-2 py-1"
            autoFocus
          />
          <button
            type="submit"
            className="rounded bg-blue-600 px-3 py-1 text-sm text-white"
          >
            Valider
          </button>
          <button
            type="button"
            onClick={cancel}
            className="rounded bg-gray-200 px-3 py-1 text-sm"
          >
            Annuler
          </button>
        </form>
      ) : (
        <div className="flex items-center gap-3">
          {/* Mode lecture : on affiche value, pas draft */}
          <span className="flex-1">{value}</span>
          <button
            onClick={startEditing}
            className="rounded bg-gray-200 px-3 py-1 text-sm"
          >
            Modifier
          </button>
        </div>
      )}
    </div>
  );
}



export default function App() {
  // Tableau Original
  const [items, setItems] = useState(() => [
    { id: crypto.randomUUID(), name: "Déclarer son demi SMIC" },
    { id: crypto.randomUUID(), name: "Se faire casser la gueule par un CRS" },
  ]);
  // Handler
  const addItem = (name) => {
    console.log(name)
    const newItem = { id: crypto.randomUUID(), name: name };
    setItems((current) => [...current, newItem]);
  };
  const deleteItem = (id) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };


  return (
    <div className="flex flex-col p-8 g-5">
      <h1 className="mb-4 text-2xl">To-Do List</h1>
      <UncontrolledInput
        name="username"
        placeholder="Nom de la tâche..."
        buttonText="Soumettre"
        onSubmit={addItem}
      />

      <ul className="list-disc">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between align-center border-1 border-black py-2 px-5">
            <EditableCard value={item.name} onSave={(value) => {
              console.log(item, value)
              item.name = value
              setItems([...items])
            }} />
            <div className="flex gap-10">

              <input id="default-checkbox" type="checkbox" value="" class="border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
              <button
                onClick={() => deleteItem(item.id)}
                className="rounded-4xl bg-red-500 px-1 py-1 text-sm text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

              </button>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}