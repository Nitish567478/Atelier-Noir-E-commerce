import { useState } from 'react'

export default function AddToCartButton({
  product,
  onAdd,
  className = '',
}) {
  const [adding, setAdding] = useState(false)

  function handleAdd() {
    if (!product) return

    setAdding(true)
    onAdd?.(product)
    window.setTimeout(() => setAdding(false), 250)
  }

  return (
    <button
      type="button"
      className={`add-to-cart-btn ${className}`}
      onClick={handleAdd}
      aria-label={product ? `Add ${product.name} to cart` : 'Add to cart'}
    >
      {adding ? 'ADDED ✓' : 'ADD TO CART'}
    </button>
  )
}

