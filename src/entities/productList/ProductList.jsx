import { useState, useEffect } from "react";

import { Product } from "@features/product/Product.jsx";
import { fetchItems } from "@utils/fetchItems";
import { Button } from "@ui/button/Button.jsx";

import style from "./productList.module.scss";

export const ProductList = ({ addToCart }) => {
  
  const [fetchedItems, setFetchItems] = useState([]);
  const [displayedItems, setDisplayItems] = useState(6);

  useEffect(() => {
    const fetchData = async () => { 
      try {
        const items = await fetchItems();
        setFetchItems(items);
       }
      catch (error) {
        console.error("Error fetching items:", error);
      }
    
    }
    fetchData();

  }, []);
    

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
         
        {fetchedItems.slice(0, displayedItems).map((product, index) => (
  <Product key={index} product={product} addToCart={addToCart} />
))}

      
  
          
{displayedItems < fetchedItems.length && (
  <Button
    variant="primary"
    size="medium"
    className={style.seeMore__button}
    onClick={() => setDisplayItems((prev) => prev + 6)}
  >
    See more
  </Button>
)}

          
        </div>
      </div>
    </>
  );
  
};