import { Component } from "react";
import { Header } from "@widgets/header/Header";
import { Footer } from "@widgets/footer/footer";

export class Layout extends Component {
  render() {
    const { children, cart } = this.props;

    return (
      <div className="layout">
        <Header cart={cart} />
        {children}
        <Footer />
      </div>
    );
  }
}
