import { useState } from "react";

// Constante hors du composant : elle ne change jamais
const PRODUCTS = [
  { id: 1, name: "Café", price: 3 },
  { id: 2, name: "Croissant", price: 2 },
  { id: 3, name: "Jus d'orange", price: 4 },
];

// Premier enfant : il ÉCRIT dans le state du parent (via une fonction)
function ProductCatalog({ onAddToCart }) {
  return (
    <div className="rounded border p-4">
      <h2 className="mb-2 font-bold">Produits</h2>
      {PRODUCTS.map((product) => (
        <div
          key={product.id}
          className="mb-1 flex items-center justify-between"
        >
          <span>
            {product.name} — {product.price} €
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="rounded bg-green-500 px-2 py-1 text-sm text-white"
          >
            Ajouter
          </button>
        </div>
      ))}
    </div>
  );
}

// Second enfant (frère) : il LIT le state du parent (via une donnée)
function CartSummary({ items }) {
  const total = items.reduce((sum, item) => sum + item.price, 0); // donnée dérivée

  return (
    <div className="rounded border p-4">
      <h2 className="mb-2 font-bold">Panier ({items.length})</h2>
      {items.length === 0 ? (
        <p className="text-sm text-gray-400">Panier vide</p>
      ) : (
        <ul className="mb-2 text-sm">
          {items.map((item) => (
            <li key={item.cartItemId}>
              {item.name} — {item.price} €
            </li>
          ))}
        </ul>
      )}
      <p className="font-semibold">Total : {total} €</p>
    </div>
  );
}

// Le parent détient le state et le distribue : une fonction d'un côté, la donnée de l'autre
export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // cartItemId unique : deux « Café » ont des key différentes
    const cartItem = { ...product, cartItemId: crypto.randomUUID() };
    setCart((current) => [...current, cartItem]);
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-8">
      <ProductCatalog onAddToCart={addToCart} />
      <CartSummary items={cart} />
    </div>
  );
}