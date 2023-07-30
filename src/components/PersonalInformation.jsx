import styles from '../styles/personalInformation.module.css'

const PersonalInformation = () => {
  return (
    <article className={`${styles.card} ${styles.cardVertical}`}>
      <figure className={styles.card__image}>
        <img src='./assets/images/profile.jpg' alt='Profile Photo' />
      </figure>
      <article className={styles.card__info}>
        <div className={styles.contact}>
          <div className={styles.contact__section}>
            <p className={styles.name}>Joseph Ryan</p>
            <p className={styles.occupation}>Front End Web Developer</p>
          </div>
          <div className={styles.contact__section}>
            {/* ToDo: Poner icono al principio de los datos de contacto */}
            <p className={styles.email}>josephrbb99@gmail.com</p>
            <p className={styles.phone}>(+00) 0000 0000</p>
          </div>
        </div>
        <div className={styles.description}>
          <p className={styles.description__paragraph}>More than 2 years of experience developing responsive web pages.</p>
          <p className={styles.description__paragraph}>During the first semester of 2023 I have focused on the development of SPA-type pages with the ReactJS library and the NextJS framework, having great performance creating reusable and responsive components.</p>
        </div>
      </article>
    </article>
  )
}
export default PersonalInformation
