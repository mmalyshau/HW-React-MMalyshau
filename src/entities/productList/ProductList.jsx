import { Component } from "react";

import { Product } from "@features/product/Product.jsx";
import { fetchItems } from "@utils/fetchItems";
import { Button } from "@ui/button/Button.jsx";

import style from "./productList.module.scss";

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedItems: [],
      displayedItems: 6,
    };
  }

  async componentDidMount() {
    try {
      const items = await fetchItems();
      this.setState({ fetchedItems: items });
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }

  handleSeeMore = () => {
    this.setState((prevState) => ({
      displayedItems: prevState.displayedItems + 6,
    }));
  };

  getUniqueCategories() {
    const { fetchedItems } = this.state;
    const categories = [];

    for (let i = 0; i < fetchedItems.length; i++) {
      const category = fetchedItems[i].category;
      if (!categories.includes(category)) {
        categories.push(category);
      }
    }

    return categories;
  }

  render() {
    const { addToCart } = this.props;
    const { fetchedItems, displayedItems } = this.state;

    const categories = this.getUniqueCategories();

    return (
      <>
        <div className={style.productList__container}>
          <div className={style.category__container}>
            {categories.map((category, index) => (
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
                onClick={this.handleSeeMore}
              >
                See more
              </Button>
            )}
          </div>
        </div>
      </>
    );
  }
}
