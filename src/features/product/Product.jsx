import style from "./product.module.scss";

import { Button } from "@ui/button/button";
import { Input } from "@ui/input/input";

export const Product = ({ product}) => { 

  return (
    
      <div className={style.productCard}>
        <div className={style.productCard__container}>
          <img src={product.img} alt={product.alt} className={style.productCard__image} />
          <div className={style.productCard__details}>
            <div className={style.productCard__header}>
              <p className={style.productCard__title}>{product.name}</p>
              <p className={style.productCard__price}>$ {product.price} USD</p>
            </div>
            <p className={style.productCard__description}>{product.description}</p>
            <div className={style.productCard__actions}>
              <Input size="medium" type="number" min={0} max={99} />
              <Button variant="primary" size="medium" className={style.productCard__button}>
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>


  );

}