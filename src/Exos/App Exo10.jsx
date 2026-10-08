import { useState } from "react";

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
    <div className="rounded border p-4">
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
  const [username, setUsername] = useState("Alice"); // state du PARENT

  return (
    <div className="p-8">
      <h1 className="mb-4 text-xl">Exercice 10</h1>
      <EditableCard value={username} onSave={setUsername} />
      <p className="mt-4 text-sm text-gray-500">
        Valeur stockée dans le parent : <strong>{username}</strong>
      </p>
    </div>
  );
}