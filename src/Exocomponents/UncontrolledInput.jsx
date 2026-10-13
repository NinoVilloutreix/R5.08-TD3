import { useState } from "react";

export default function UncontrolledInput({ name, placeholder, buttonText, onSubmit }) {
  const handleSubmit = (e) => {
    // TODO : empêche le rechargement de la page
    e.preventDefault();
    console.log(new FormData(e.currentTarget));
    const formData = new FormData(e.currentTarget);
    const value = formData.get(name);
    if(typeof value === "string" && value.trim()){
      onSubmit(value.trim());
    }
    e.currentTarget.reset();
    // TODO : récupère la valeur avec new FormData(e.currentTarget).get(name)
    // TODO : si la valeur (trim) n'est pas vide, appelle onSubmit(valeur)
    // TODO : vide le formulaire avec e.currentTarget.reset()
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        aria-label={placeholder}
        className="rounded border px-3 py-2"
      />
      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        {/* TODO : buttonText */}
      </button>
    </form>
  );
}
