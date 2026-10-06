import { useState } from "react";


function ColorPicker({onColorSelect}) {
  return (
    <div className="mb-4 flex gap-2">

      <button onClick ={() => onColorSelect("red")} className="rounded bg-red-500 px-3 py-1 text-white">Rouge</button>

      <button onClick ={() => onColorSelect("blue")} className="rounded bg-blue-500 px-3 py-1 text-white">Bleu</button>
    </div>
  );
}

export default function Exo2() {
  const [bgColor, setBgColor] = useState("white");
  const handleColorChange = (color) => {setBgColor(color);};
  

  return (
    // TODO : ajoute style={{ backgroundColor: bgColor }}
    <div className="min-h-screen p-8 transition-colors">
      <h1 className="mb-4 text-xl">Exercice 2</h1>
      <ColorPicker onColorSelect = {handleColorChange}/>

      <p>
        Couleur actuelle : <strong>{bgColor}</strong>
      </p>
    </div>
  );
}