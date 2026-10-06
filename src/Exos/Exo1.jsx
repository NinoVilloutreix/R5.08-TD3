import {useState} from "react";
import LikeButton from "../components/LikeButton";

export default function Exo1(){

const [count, setCount] = useState(0);
const handleLike = () => {
  setCount((prev) => prev +1) ;
}
<>
      <h1>Exo 1</h1>
      <LikeButton count={likes} onLike={handleLike}/>
    </>
}