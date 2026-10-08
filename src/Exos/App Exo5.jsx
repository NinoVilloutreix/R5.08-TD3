import { useState } from "react";

export default function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
  ]);

  // SUPPRIMER : on garde tous les users SAUF celui qui a cet id
  const deleteUser = (id) => {
    setUsers((current) => current.filter((user) => user.id !== id));
  };

  // MODIFIER : .map() renvoie une copie ; seul le user ciblé est remplacé
  // par un NOUVEL objet ({ ...user, active: !user.active })
  const toggleUser = (id) => {
    setUsers((current) =>
      current.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user,
      ),
    );
  };

  return (
    <div className="p-8">
      <h1 className="mb-4 text-xl">Exercice 5</h1>

      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center justify-between rounded border p-4"
          >
            <span>
              <strong>{user.name}</strong> -{" "}
              {user.active ? "🟢 Actif" : "🔴 Inactif"}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => toggleUser(user.id)}
                className="rounded bg-blue-500 px-3 py-1 text-sm text-white"
              >
                Basculer statut
              </button>
              <button
                onClick={() => deleteUser(user.id)}
                className="rounded bg-red-500 px-3 py-1 text-sm text-white"
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}