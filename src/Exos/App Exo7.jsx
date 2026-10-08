function UncontrolledInput({ name, placeholder, buttonText, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // empêche le rechargement de la page

    const value = new FormData(e.currentTarget).get(name);

    // `required` laisse passer "   " : on re-vérifie avec trim()
    if (typeof value === "string" && value.trim()) {
      onSubmit(value.trim()); // remonte la valeur au parent
    }

    e.currentTarget.reset(); // vide le formulaire
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      {/* Pas de value ni onChange : c'est le DOM qui garde la valeur */}
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

export default function App() {
  const handleNameSubmit = (name) => alert(`Bonjour, ${name} !`);

  return (
    <div className="p-8">
      <h1 className="mb-4 text-xl">Exercice 7</h1>
      <UncontrolledInput
        name="username"
        placeholder="Votre nom"
        buttonText="Soumettre"
        onSubmit={handleNameSubmit}
      />
    </div>
  );
}