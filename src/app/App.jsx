import React, { useState } from 'react';

import { Layout } from '@features/layout/Layout.jsx';
import { MenuPage } from '@pages/MenuPage/MenuPage';

function App() {
  const [cart, setCart] = useState({});

  function addToCart(id, quantity) {
    setCart((prevCart) => {
      const currentQty = prevCart[id] || 0;
      return {
        ...prevCart,
        [id]: currentQty + quantity,
      };
    });
  }

  return (
    <>
      <Layout cart={cart}>
        <MenuPage addToCart={addToCart} />
      </Layout>
    </>
  );
}

export default App;
