import { useState } from "react";

function ControlledInput({ value, onChange }) {
  return (
    <input
      type="text"
      value={value} // le state alimente l'input
      onChange={onChange} // l'input signale chaque frappe
      placeholder="Tapez ici..."
      aria-label="Texte libre"
      className="rounded border px-3 py-2"
    />
  );
}

export default function App() {
  // Toujours "" au départ, jamais undefined ni null
  const [text, setText] = useState("");

  return (
    <div className="p-8">
      <h1 className="mb-4 text-xl">Exercice 6</h1>
      <ControlledInput value={text} onChange={(e) => setText(e.target.value)} />
      <p className="mt-4">
        Valeur : <strong>{text || "—"}</strong>
      </p>
    </div>
  );
}