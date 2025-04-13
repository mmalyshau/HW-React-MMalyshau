import { Component } from "react";

import { Layout } from "@features/layout/Layout.jsx";
import { MenuPage } from "@pages/MenuPage/MenuPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
    };
  }

  addToCart = (id, quantity) => {
    this.setState((prevState) => {
      const currentQty = prevState.cart[id] || 0;
      return {
        cart: {
          ...prevState.cart,
          [id]: currentQty + quantity,
        },
      };
    });
  };

  render() {
    const { cart } = this.state;

    return (
      <>
        <Layout cart={cart}>
          <MenuPage addToCart={this.addToCart} />
        </Layout>
      </>
    );
  }
}

export default App;
