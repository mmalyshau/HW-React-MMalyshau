import React from 'react';
import { useCart } from '@hooks';
import { Button } from '@ui';
import CartIcon from '@images/icons/cart.svg';
import style from './cartBtn.module.scss';

const CartBtn: React.FC = () => {
    const { cart } = useCart();

    const cartCount = cart.reduce((acc, item) => acc + item.amount, 0);

    return (
        <Button
            type="button"
            variant="primary"
            size="small"
            className={style.cart}
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

export default CartBtn;