export default function LikeButton({ count, onLike }) {
  return <button onClick={onLike}>{count}</button>;
}

