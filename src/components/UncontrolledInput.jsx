import { motion } from "motion/react";

export default function UncontrolledInput({ name, placeholder, buttonText, onSubmit, order, handleOrder }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const value = new FormData(e.currentTarget).get(name);
    if (typeof value === "string" && value.trim()) {
      onSubmit(value.trim());
    }

    e.currentTarget.reset();
  };


  return (
    <div className="flex justify-between">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          aria-label={placeholder}
          required
          className="rounded border border-white text-white px-3 py-2"
        />
        <button
          type="submit"
          className="rounded bg-white px-4 py-2 text-primary"
        >
          {buttonText}
        </button>
      </form>
      <select className = "rounded bg-white px-4 py-2 text-primary"value={order} onChange={handleOrder}>
        <option value="">Ordre alphabétique</option>
        <option value="anti">Ordre antialphabétique</option>
      </select>
    </div>

  );
}