import { ProductList } from "@entities";
import { Tooltip } from "@ui";

import style from "./menuPage.module.scss";

const MenuPage = () => {
  return (
    <section className={style.menu__section}>
      
          <div className={style.heading__container}>
            <h1 className="h1">Browse our menu</h1>
            <div className="primary__text">Use our menu to place an order online, or <Tooltip text='+123456789'>phone</Tooltip> our store to place a pickup order. Fast and fresh food.</div>
        </div>
       
      <ProductList />
       
        
        </section>
  );

 }

 export default MenuPage;