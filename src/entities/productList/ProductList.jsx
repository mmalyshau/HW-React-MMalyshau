import { Product } from "@features/product/Product.jsx";
import { productList } from "@lib/productList.js";
import { Button } from "@ui/button/Button.jsx";

import style from "./productList.module.scss";

export const ProductList = () => {
  return (
    <>
      <div className={style.productList__container}>
        <div className={style.category__container}>
          {['Desserts', 'Dinner', 'Breakfast'].map((category, index) => (
            <Button key={index} variant="secondary" size="medium">
              {category}
            </Button>
          ))}
        </div>
  
        <div className={style.product__container}>
         
          {productList.map((product, index) => (
            <Product key={index} product={product} />
          ))}
      
  
          
            <Button
              variant="primary"
              size="medium"
              className={style.seeMore__button}
            >
              See more
            </Button>
          
        </div>
      </div>
    </>
  );
  
};