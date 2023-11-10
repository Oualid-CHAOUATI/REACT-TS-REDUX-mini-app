import { useStoreSelector, useStoreDispatch } from "../store/hooks";
import { addToCart, removeFromCart } from "../store/slices/cart-slice";

export default function CartItems() {
  const cartItems = useStoreSelector((state) => state.cart.items);
  const dispatch = useStoreDispatch();

  const formattedTotalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div id="cart">
      <p>No items in cart!</p>

      <ul id="cart-items">
        {cartItems.map((item) => {
          const formattedPrice = `$${item.price.toFixed(2)}`;

          return (
            <li key={item.id}>
              <div>
                <span>{item.title}</span>
                <span> ({formattedPrice})</span>
              </div>
              <div className="cart-item-actions">
                <button
                  onClick={() => dispatch(removeFromCart({ id: item.id }))}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(addToCart(item))}>+</button>
              </div>
            </li>
          );
        })}
      </ul>

      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
