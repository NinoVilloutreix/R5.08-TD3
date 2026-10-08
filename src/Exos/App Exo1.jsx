import { useState } from "react";

// Destructuration : { count, onLike } au lieu de props.count / props.onLike
function LikeButton({ count, onLike }) {
  return (
    // On PASSE la fonction (onLike), on ne l'appelle pas (onLike())
    <button
      onClick={onLike}
      className="relative rounded bg-pink-500 px-4 py-2 text-white"
    >
      ❤️ J'aime
      <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
        {count}
      </span>
    </button>
  );
}

export default function App() {
  const [likes, setLikes] = useState(0); // le state vit dans le parent

  // Forme fonctionnelle : la nouvelle valeur dépend de l'ancienne (prev)
  const handleLike = () => setLikes((prev) => prev + 1);

  return (
    <div className="p-8">
      <h1 className="mb-4 text-xl">Exercice 1</h1>
      // on passe le state et la fonction au composant enfant
      <LikeButton count={likes} onLike={handleLike} />
    </div>
  );
}