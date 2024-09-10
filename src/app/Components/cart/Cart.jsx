'use client';
import { useCart } from '../../context/CartContext';
import styles from '../cart/Cart.module.css'; 
import Image from 'next/image';

export default function Cart() {
  const { cartItems, removeFromCart, getTotalPrice } = useCart();

  // Log cart items to verify they're passed to the component
  console.log("Cart Items in UI:", cartItems);

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>

      {/* If cart is empty, show a message */}
      {cartItems.length === 0 ? (
        <p className={styles.emptyCart}>Your cart is empty.</p>
      ) : (
        <div className={styles.cartItems}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className={styles.cartItemImage}
              />
              <div className={styles.cartItemDetails}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p className={styles.oldPrice}>Old Price: ${item.oldPrice}</p>
                <button
                  className={styles.removeButton}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className={styles.totalPrice}>
            <h3>Total Price: ${getTotalPrice().toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

