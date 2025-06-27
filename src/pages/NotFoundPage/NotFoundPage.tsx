import styles from './notFoundPage.module.scss';

export const NotFoundPage = () => {
  return (
    <section className={styles.notFoundPage__section}>
      <div className={styles.notFoundPage__container}>
        <h1 className='h1'>404</h1>
        <p className='h1'>Page Not Found</p>
      </div>
    </section>
  );
}

