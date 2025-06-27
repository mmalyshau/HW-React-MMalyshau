import { useState, useMemo, useEffect } from "react";
import { Product } from '@features/product/Product';
import { Button } from "@ui/button/Button";
import { useFetch } from '@shared/hooks/useFetch';
import style from "./productList.module.scss";
import type { TProduct } from '@shared/types/TPtoduct';

 export const ProductList = () => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredItems, setFilteredItems] = useState<TProduct[]>([]);
  
  const { data: fetchedItems, error, loading } = useFetch<TProduct[]>(
    "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals"
  );

  useEffect(() => {
    if (fetchedItems) {
      setFilteredItems(fetchedItems);
    }
  }, [fetchedItems]);

  const categories = useMemo(() => {
    if (!fetchedItems) return [];
    const uniqueCategories: string[] = [];
    fetchedItems.forEach((item) => {
      if (!uniqueCategories.includes(item.category)) {
        uniqueCategories.push(item.category);
      }
    });
    return uniqueCategories;
  }, [fetchedItems]);

  const handleSeeMore = () => {
    setItemsPerPage((prev) => prev + 6);
  };

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setFilteredItems(fetchedItems || []);
    } else {
      setSelectedCategory(category);
      const filtered = (fetchedItems || []).filter(
        (item) => item.category === category
      );
      setFilteredItems(filtered);
    }
    setItemsPerPage(6);
  };

  if (loading) return <p>Data is being loaded...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className={style.productList__container}>
      <div className={style.category__container}>
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={selectedCategory === category ? "primary" : "secondary"}
            size="medium"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className={style.product__container}>
        {filteredItems.slice(0, itemsPerPage).map((product) => (
          <Product key={product.id} product={product} />
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

