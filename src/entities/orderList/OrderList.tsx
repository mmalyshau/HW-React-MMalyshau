import style from './orderList.module.scss';
import { OrderedProduct } from '@features/orderedProduct/OrderedProduct';
import { useAppSelector } from '@shared/hooks/useAppSelector';

export const OrderList= () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className={style.listWrapper}>
      {cart.length > 0 ? (
        cart.map((item: any) => <OrderedProduct key={item.Product.id} item={item} />)
      ) : (
        <p className="1">You haven't added anything to your cart</p>
      )}
    </div>
  );
};


