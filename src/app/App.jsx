import React, { useState } from 'react';

import { Layout } from '@features/layout/Layout.jsx';
import { HomePage } from "@pages/HomePage/HomePage.jsx";
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
        <HomePage />
      </Layout>
    </>
  );
}

export default App;
