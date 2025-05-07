import { useState, useEffect, useCallback } from "react";

import { Product } from "@features/product/Product.jsx";
import { fetchItems } from "@utils/fetchItems";
import { Button } from "@ui/button/Button.jsx";

import style from "./productList.module.scss";

export const ProductList = ({ addToCart }) => {
  const [fetchedItems, setFetchedItems] = useState([]);
  const [displayedItems, setDisplayedItems] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await fetchItems();
        setFetchedItems(items);
        setFilteredItems(items); 
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchData();
  }, []);

  const handleSeeMore = () => {
    setDisplayedItems((prev) => prev + 6);
  };

  const getUniqueCategories = () => {
    const categories = [];
  
    for (let i = 0; i < fetchedItems.length; i++) {
      const category = fetchedItems[i].category;
      if (!categories.includes(category)) {
        categories.push(category);
      }
    }
  
    return categories;
  };

  const categories = getUniqueCategories();

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setFilteredItems(fetchedItems);
    } else {
      
      setSelectedCategory(category);
      const filtered = fetchedItems.filter((item) => item.category === category);
      setFilteredItems(filtered);
    }
    setDisplayedItems(6); 
  };

  return (
    <div className={style.productList__container}>
      <div className={style.category__container}>
        {categories.map((category, index) => (
          <Button key={index} variant= {selectedCategory == category ? 'primary' : 'secondary'} size="medium" onClick={() => handleCategoryClick(category)}>
            {category}
          </Button>
        ))}
      </div>

      <div className={style.product__container}>
        {filteredItems.slice(0, displayedItems).map((product, index) => (
          <Product key={index} product={product} addToCart={addToCart}  />
        ))}

        {displayedItems < filteredItems.length && (
          <Button
            variant="primary"
            size="medium"
            className={style.seeMore__button}
            onClick={handleSeeMore}
          >
            See more
          </Button>
        )}
      </div>
    </div>
  );
};
