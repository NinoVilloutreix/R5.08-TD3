import { useState } from "react";

// TODO : reçoit les props { value, onChange }
export default function ControlledInput({value, onChange}) {
  return (
    <input
      type="text"
      value ={value}
      onChange={onChange}
      placeholder="Tapez ici..."
      aria-label="Texte libre"
      className="rounded border px-3 py-2"
    />
  );
}
