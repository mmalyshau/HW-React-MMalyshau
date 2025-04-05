import Cart from "@images/icons/cart.svg";
import { Button } from "@ui/button/button";

import style from "./cartBtn.module.scss";

export const CartBtn = ({ val}) => {
  return (

      <Button
        type="button"
        variant="primary"
        size="small"
        className={style.cart}
      >
        <img src={Cart} alt="cart" />
        <div className={style.counter}>
        <p className={style.counter__val}>{ val}</p>
        </div>
      </Button>
 
  );
}