import { useState } from "react";

function ColorPicker({ onColorSelect }) {
  return (
    <div className="mb-4 flex gap-2">
      {/* Fonction fléchée OBLIGATOIRE dès qu'on passe un argument */}
      <button
        onClick={() => onColorSelect("red")}
        className="rounded bg-red-500 px-3 py-1 text-white"
      >
        Rouge
      </button>
      <button
        onClick={() => onColorSelect("blue")}
        className="rounded bg-blue-500 px-3 py-1 text-white"
      >
        Bleu
      </button>
    </div>
  );
}

export default function App() {
  const [bgColor, setBgColor] = useState("white");

  // Reçoit la couleur envoyée par l'enfant.
  // Elle ne dépend pas de l'ancienne valeur : on passe directement la valeur.
  const handleColorChange = (color) => setBgColor(color);

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="min-h-screen p-8 transition-colors"
    >
      <h1 className="mb-4 text-xl">Exercice 2</h1>
      // On passe la fonction au composant enfant pour qu'il puisse remonter la
      couleur choisie
      <ColorPicker onColorSelect={handleColorChange} />
      <p>
        // On affiche la couleur du state Couleur actuelle :{" "}
        <strong>{bgColor}</strong>
      </p>
    </div>
  );
}