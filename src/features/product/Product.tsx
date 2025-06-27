import  { useState, useEffect, ChangeEvent } from 'react';
import style from "./product.module.scss";
import { Button } from '@shared/ui/button/Button';
import { Input } from '@shared/ui/input/Input';
import type { TProduct } from "@shared/types/TPtoduct";

import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { addToCart } from '@features/cartBtn/cartBtnSlice';

interface ProductProps {
  product: TProduct;
}
 

export const Product = ({ product }: ProductProps) => {
  const dispatch = useAppDispatch();
   const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(0);
  }, [product.id]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setAmount(value >= 0 ? value : 0);
  };

  const handleAddToCart = () => {
    if (amount > 0) {
      dispatch(addToCart({product: product, amount }));
      setAmount(0);
    }
  };

  return (
    <div className={style.productCard}>
      <div className={style.productCard__container}>
        <img src={product.img} alt={product.meal} className={style.productCard__image} />
        <div className={style.productCard__details}>
          <div className={style.productCard__header}>
            <p className={style.productCard__title}>{product.meal}</p>
            <p className={style.productCard__price}>$ {product.price} USD</p>
          </div>
          <p className={style.productCard__description}>
            {product.instructions.slice(0, 100)}
          </p>
          <form className={style.productCard__actions}>
            <Input
              size="medium"
              type="number"
              value={amount}
              onChange={handleChange}
            />
            <Button
              variant="primary"
              size="medium"
              className={style.productCard__button}
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

