import React, { useState } from 'react';

const MenuPage = () => {
  // State to manage quantities of menu items
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Plain Dosa', quantity: 0 },
    { id: 2, name: 'Masala Dosa', quantity: 0 },
    { id: 3, name: 'Set Dosa', quantity: 0 }
  ]);

  // Function to handle incrementing quantity
  const incrementQuantity = (id) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to handle decrementing quantity
  const decrementQuantity = (id) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Calculate total number of items in the cart
  const totalItems = menuItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <h1>Menu</h1>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <span>{item.name}</span>
            <button onClick={() => incrementQuantity(item.id)}>+1</button>
            <span>{item.quantity}</span>
            <button onClick={() => decrementQuantity(item.id)}>-1</button>
          </div>
        ))}
      </div>
      <div className="cart-icon">
        <span role="img" aria-label="Cart">
          🛒
        </span>
        <span>{totalItems}</span>
      </div>
    </div>
  );
};

export default MenuPage;
