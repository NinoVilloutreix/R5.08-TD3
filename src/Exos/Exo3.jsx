import { useState } from "react";

export default function Exo3() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev)
  // TODO : donnée dérivée themeClass (pas de useState pour ça !)

  const themeClass = isDarkMode?"dark" : "";
  return (
    // TODO : ajoute themeClass à la className
    <div className={`text-fg bg-bg min-h-screen p-8 transition-colors  ${themeClass}`}>
      <h1 className="mb-4 text-xl">Exercice 3</h1>
      <button onClick={toggleDarkMode} className="rounded border px-4 py-2">
        {/* TODO : texte conditionnel selon isDarkMode */}
        pouet
      </button>
      
    </div>
  );
}