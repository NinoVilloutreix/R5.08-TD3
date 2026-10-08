import { useState } from "react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  // Donnée DÉRIVÉE : recalculée à chaque rendu, pas de useState pour ça
  const themeClass = isDarkMode ? "dark" : "";

  return (
    // text-fg / bg-bg : tokens de couleurs définis dans le index.css fourni
    <div
      className={`text-fg bg-bg min-h-screen p-8 transition-colors ${themeClass}`}
    >
      <h1 className="mb-4 text-xl">Exercice 3</h1>
      <button onClick={toggleDarkMode} className="rounded border px-4 py-2">
        {/* Ternaire : choisir entre deux valeurs */}
        {isDarkMode ? "Passer en mode Clair ☀️" : "Passer en mode Sombre 🌙"}
      </button>

      {/* && : afficher si isDarkMode est true ou ne rien afficher */}
      {isDarkMode && <p className="mt-4">Bienvenue du côté obscur !</p>}
    </div>
  );
}