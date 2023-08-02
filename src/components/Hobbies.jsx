import styles from '../styles/hobbies.module.css'

const Hobbies = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Hobbies</h3>
      <div className={styles.list}>
        <article className={styles.card}>
          <figure className={styles.card__image}>
            <img src='https://cdn.pixabay.com/photo/2017/04/09/12/00/gaming-2215601_1280.jpg' alt='Hobbie Image' />
          </figure>
          <div>
            <h6 className={styles.card__title}>Gaming</h6>
            <p className={styles.card__description}>Quisque feugiat malesuada molestie.</p>
          </div>
        </article>
        <article className={styles.card}>
          <figure className={styles.card__image}>
            <img src='https://cdn.pixabay.com/photo/2021/06/10/12/22/bass-guitar-6325873_1280.jpg' alt='Hobbie Image' />
          </figure>
          <div>
            <h6 className={styles.card__title}>Play Bass</h6>
            <p className={styles.card__description}>Quisque feugiat malesuada molestie.</p>
          </div>
        </article>
        <article className={styles.card}>
          <figure className={styles.card__image}>
            <img src='https://cdn.pixabay.com/photo/2016/07/25/18/22/bike-1541037_1280.jpg' alt='Hobbie Image' />
          </figure>
          <div>
            <h6 className={styles.card__title}>Biking</h6>
            <p className={styles.card__description}>Quisque feugiat malesuada molestie.</p>
          </div>
        </article>
      </div>
    </section>
  )
}
export default Hobbies
