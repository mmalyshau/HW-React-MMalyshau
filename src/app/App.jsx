import { Layout } from '@features/layout/Layout.jsx';
import { AppRoutes } from '@router/appRoutes.jsx';
import { useState } from 'react';

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
      <Layout cart={cart}>
        <AppRoutes  addToCart ={addToCart}/>
      </Layout>
  );
}

export default App;
