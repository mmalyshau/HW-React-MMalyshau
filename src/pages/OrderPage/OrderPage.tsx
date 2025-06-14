import style from './orderPage.module.scss';
import { OrderForm } from '@ui';
import { OrderList } from '@entities';

const OrderPage = () => {
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

export default OrderPage;