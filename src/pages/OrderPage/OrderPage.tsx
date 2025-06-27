import style from './orderPage.module.scss';
import { OrderForm } from '@shared/ui/orderForm/OrderForm';
import { OrderList } from '@entities/orderList/OrderList';

export const OrderPage = () => {
  return (
    <section className={style.orderPage__section}>
      <div className={style.orderPage__container}>
        <h1 className="h1">Finalize your order</h1>
        <OrderList />
        <OrderForm/>
      </div>
      </section>
  )
 }

