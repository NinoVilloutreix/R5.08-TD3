import {useState} from "react";


export default function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Dune", watched: true },
    { id: 2, title: "Interstellar", watched: false },
    { id: 3, title: "Oppenheimer", watched: false },
  ]);
  let visibleMovies = movies;
  // TODO : state filter ("all" | "watched" | "unwatched")
  const[filterMovie, setFilterMovie] = useState("all");
  switch(filterMovie){
    case "watched":
      visibleMovies = movies.filter((movie)=>movie.watched)
      break;
    case "unwatched":
      visibleMovies = movies.filter((movie)=>!movie.watched)
      break;
  }
  // TODO : crée l'objet filters (all, watched, unwatched)
  // TODO : calcule visibleMovies avec filters[filter] (pas un state !)
  // BONUS : fonction toggleWatched(id), comme toggleUser à l'Ex. 5

  return (
    <div className="p-8">
      <h1 className="mb-4 text-xl">Exercice 8</h1>

      <div className="mb-4 flex gap-2">
        {/* TODO : 3 boutons qui appellent setFilter, avec le compteur entre parenthèses,
            un style différent pour le filtre actif et aria-pressed */}
        <button className="rounded border px-3 py-1" onClick={()=> setFilterMovie("all")}>Tous ({movies.filter((movie)=> movie).length})</button>
        <button className="rounded border px-3 py-1" onClick={()=> setFilterMovie("watched")}>Vus ({movies.filter((movie)=> movie.watched).length})</button>
        <button className="rounded border px-3 py-1" onClick={()=> setFilterMovie("unwatched")}>À voir ({movies.filter((movie)=> !movie.watched).length})</button>
      </div>

      <ul className="space-y-1">
        {visibleMovies.map((movies)=> (<li key={movies.id}><strong>{movies.title}</strong>{movies.watched?"🟢" : "⚪"}</li>))}
        {/* BONUS : un bouton par film qui bascule watched (setMovies + .map) */}
      </ul>
    </div>
  );
}