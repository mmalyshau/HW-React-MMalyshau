import { Button } from '@shared/ui/button/Button';
import { Input } from '@shared/ui/input/Input';
import style from './orderedProduct.module.scss';

import { TCartItem } from '@shared/types/TCartItem';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { removeFromCart, updateCartItemAmount } from '@features/cartBtn/cartBtnSlice';

interface OrderedProductProps {
  item: TCartItem;
}

export const OrderedProduct = ({ item }: OrderedProductProps) => {
  const dispatch = useAppDispatch();

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseInt(e.target.value, 10);
    if (!isNaN(newAmount) && newAmount > 0) {
      dispatch(updateCartItemAmount({ productId: item.Product.id, amount: newAmount }));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.Product.id));
  };

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.info}>
          <img
            src={item.Product.img}
            alt={item.Product.meal}
            className={style.image}
          />
          <div className={style.details}>
            <p className={style.title}>{item.Product.meal}</p>
            <p className={style.price}>${item.Product.price} USD</p>
          </div>
        </div>

        <div className={style.actions}>
          <Input
            size="small"
            type="number"
            value={item.amount}
            onChange={handleAmountChange}
          />
          <Button
            variant="primary"
            size="small"
            className={style.remove}
            onClick={handleRemove}
          >
            X
          </Button>
        </div>
      </div>
    </div>
  );
};
