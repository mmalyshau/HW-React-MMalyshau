import { Component } from "react";
import Cart from "@images/icons/cart.svg";
import { Button } from "@ui/button/button";

import style from "./cartBtn.module.scss";

export class CartBtn extends Component {
  render() {
    const { counter } = this.props;
    const totalCount = Object.values(counter).reduce((acc, qty) => acc + Number(qty), 0);

    return (
      <Button
        type="button"
        variant="primary"
        size="small"
        className={style.cart}
      >
        <img src={Cart} alt="cart" />
        <div className={style.counter}>
          <p className={style.counter__val}>{totalCount}</p>
        </div>
      </Button>
    );
  }
}
