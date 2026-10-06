import { useState } from "react";

export default function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
  ]);

  const deleteUser = (id) => {
    // TODO : garde tous les users SAUF celui qui a cet id (.filter)
  };

  const toggleUser = (id) => {
    console.log(id);
    setUsers((prev) => prev.map((user)=>
      user.id === id ? {...user, !user.active} : user,),)}
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
            <span>{user.name}{user.active ? "Connecté" : "Hors-Ligne"}{user.id}</span>

            <div className="flex gap-2">
              
              <button onClick = {toggleUser(user.id)} className="rounded bg-blue-500 px-3 py-1 text-sm text-white">
                Basculer statut
              </button>

              {/* TODO : ajoute onClick → deleteUser(user.id) au bouton ci-dessous */}
              <button className="rounded bg-red-500 px-3 py-1 text-sm text-white">
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}