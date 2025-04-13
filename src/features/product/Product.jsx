import { Component } from "react";

import style from "./product.module.scss";

import { Button } from "@ui/button/button";
import { Input } from "@ui/input/input";

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    };
  }

  handleQuantityChange = (event) => {
    this.setState({ quantity: Number(event.target.value) });
  };

  handleClick = () => {
    const { quantity } = this.state;
    const { product, addToCart } = this.props;

    if (quantity > 0) {
      addToCart(product.id, quantity);
      this.setState({ quantity: 0 });
    }
  };

  render() {
    const { product } = this.props;
    const { quantity } = this.state;

    return (
      <div className={style.productCard}>
        <div className={style.productCard__container}>
          <img src={product.img} className={style.productCard__image} />
          <div className={style.productCard__details}>
            <div className={style.productCard__header}>
              <p className={style.productCard__title}>{product.meal}</p>
              <p className={style.productCard__price}>$ {product.price} USD</p>
            </div>
            <p className={style.productCard__description}>
              {product.instructions.slice(0, 100)}
            </p>
            <div className={style.productCard__actions}>
              <Input
                size="medium"
                type="number"
                min={0}
                max={99}
                onChange={this.handleQuantityChange}
              />
              <Button
                variant="primary"
                size="medium"
                className={style.productCard__button}
                onClick={this.handleClick}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
