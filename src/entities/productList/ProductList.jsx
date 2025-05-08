import { useState, useEffect, useMemo } from "react";

import { Product } from "@features/product/Product.jsx";
import { Button } from "@ui/button/Button.jsx";
import { useFetch } from "@shared/hooks/useFetch";

import style from "./productList.module.scss";

export const ProductList = ({ addToCart }) => {
  const [fetchedItems, setFetchedItems] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const { fetchDataWithLogger } = useFetch();

  useEffect(() => {
    fetchDataWithLogger("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals").then(res => {
      setFetchedItems(res);
      setFilteredItems(res);
    })



  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = [];
    for (let i = 0; i < fetchedItems.length; i++) {
      const category = fetchedItems[i].category;
      if (!uniqueCategories.includes(category)) {
        uniqueCategories.push(category);
      }
    }
    return uniqueCategories;
  }, [fetchedItems]);



  const handleSeeMore = () => {
    setItemsPerPage((prev) => prev + 6); 
  };


  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setFilteredItems(fetchedItems);
    } else {
      
      setSelectedCategory(category);
      const filtered = fetchedItems.filter((item) => item.category === category);
      setFilteredItems(filtered);
    }
    setItemsPerPage(6); 
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
        {filteredItems.slice(0, itemsPerPage).map((product, index) => (
          <Product key={index} product={product} addToCart={addToCart}  />
        ))}

        {itemsPerPage < filteredItems.length && (
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
