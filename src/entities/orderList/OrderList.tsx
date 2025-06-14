import style from './orderList.module.scss';
import { OrderedProduct } from '@features';
import { useAppSelector } from '@hooks';

const OrderList: React.FC = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className={style.listWrapper}>
      {cart.length > 0 ? (
        cart.map((item) => <OrderedProduct key={item.Product.id} item={item} />)
      ) : (
        <p className="1">You haven't added anything to your cart</p>
      )}
    </div>
  );
};

export default OrderList;
