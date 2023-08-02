import styles from '../styles/project.module.css'

// ToDo: debe recibir la informacion de cada proyecto por props caundo se renderice atraves de un map()
const Project = () => {
  return (
    <article className={`${styles.project} ${styles.projectVertical} shadow`}>
      <figure className={styles.project__image}>
        <img src='https://github.com/FlakoBB/interior-consultant/raw/main/images/screenshot.png' alt='Project image' />
      </figure>
      <div className={styles.project__info}>
        <div className={styles.tags}>
          <span>#HTML</span>
          <span>#CSS</span>
          <span>#JavaScript</span>
        </div>
        <div className={styles.description}>
          <h3 className={styles.description__title}>Interior Consultant</h3>
          <p className={styles.description__paragraph}>In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </p>
        </div>
        <div className={styles.btns}>
          <a href=''><button className={styles.btns__demo}>Demo</button></a>
          <a href=''><button className={styles.btns__code}>Code</button></a>
        </div>
      </div>
    </article>
  )
}

export default Project
