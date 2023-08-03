import styles from '../styles/project.module.css'

const Project = ({ project }) => {
  return (
    <article className={`${styles.project} ${styles.projectVertical} shadow`}>
      <figure className={styles.project__image}>
        <img src={project.image} alt='Project image' />
      </figure>
      <div className={styles.project__info}>
        <div className={styles.tags}>
          {
            project.tags.map((tag, index) => {
              return <span key={index}>#{tag}</span>
            })
          }
        </div>
        <div className={styles.description}>
          <h3 className={styles.description__title}>{project.title}</h3>
          <p className={styles.description__paragraph}>{project.description}</p>
        </div>
        <div className={styles.btns}>
          <a href={project.links.demo} target='_blank' rel='noreferrer'><button className={styles.btns__demo}>Demo</button></a>
          <a href={project.links.code} target='_blank' rel='noreferrer'><button className={styles.btns__code}>Code</button></a>
        </div>
      </div>
    </article>
  )
}

export default Project
