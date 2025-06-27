import { Button } from '@shared/ui/button/Button';
import CartIcon from '@images/icons/cart.svg';
import style from './cartBtn.module.scss';

import type { RootState } from '@store/store';
import { useAppSelector } from '@shared/hooks/useAppSelector';

import { TCartItem } from '@shared/types/TCartItem';
import { useNavigate } from 'react-router-dom';

export const CartBtn = () => {
  const cart = useAppSelector((state: RootState) => state.cart);
  const cartCount = cart.reduce((acc: number, item: TCartItem) => acc + item.amount, 0);
  const user = useAppSelector((state) => state.auth.user)
  const navigate = useNavigate();
     
  const handleCartBtnClick = () => {
      if (user) {
          navigate("/order");
      } 
  };
    return (
        <Button
            type="button"
            variant="primary"
            size="small"
            className={style.cart}
            onClick={handleCartBtnClick}
        >
            <img src={CartIcon} alt="cart" />
            {cartCount > 0 && (
                <div className={style.counter}>
                    <p className={style.counter__val}>{cartCount}</p>
                </div>
            )}
        </Button>
    );
};

