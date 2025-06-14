import style from './orderForm.module.scss';
import { Button, Input } from '@ui';
import { useAppDispatch, useAppSelector, useForm, useValidation } from '@hooks';
import { clearCartItems } from '@features';

const OrderForm = () => {
  const street = useForm('');
  const streetValidation = useValidation(street.value, { isEmpty: true });

  const house = useForm('');
  const houseValidation = useValidation(house.value, { isEmpty: true });

  const user = useAppSelector((state) => state.auth.user);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    street.onBlur();
    house.onBlur();

    if (!user) {
      console.error('User is not authenticated.');
      return;
    }

    if (!streetValidation.isValid || !houseValidation.isValid) return;

    try {
      const response = await fetch(
        'https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/orders',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: user.uid,
            email: user.email,
            street: street.value,
            house: house.value,
            cart: cart.map((item) => ({
              productId: item.Product.id,
              amount: item.amount,
            })),
          }),
        }
      );

      if (!response.ok) throw new Error('Order placement failed.');

      dispatch(clearCartItems());
      street.reset();
      house.reset();
    } catch (error) {
      console.error('Failed to submit the form:', error);
    }
  };

  return (
  <form className={style.order__container} onSubmit={handleFormSubmit} noValidate>
    <div className={style.input__container}>
      <div className={style.row__container}>
        <div className={style.row}>
          <label className={style.label__wrapper}>
            Street
            <Input
              type="text"
              name="street"
              size="large"
              required
              value={street.value}
              onChange={street.onChange}
              onBlur={street.onBlur}
            />
          </label>
          {street.isDirty && streetValidation.isEmpty && (
            <span className={style.error}>Required</span>
          )}
        </div>

        <div className={style.row}>
          <label className={style.label__wrapper}>
            House
            <Input
              type="text"
              name="house"
              size="large"
              required
              value={house.value}
              onChange={house.onChange}
              onBlur={house.onBlur}
            />
          </label>
          {house.isDirty && houseValidation.isEmpty && (
            <span className={style.error}>Required</span>
          )}
        </div>
      </div>

      <div className={style.btn__container}>
        <Button type="submit" size="large">
          Place Order
        </Button>
      </div>
    </div>
  </form>
);

};

export default OrderForm;
