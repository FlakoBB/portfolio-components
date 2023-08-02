import styles from '../styles/skills.module.css'

const Skills = () => {
  return (
    <section className={`${styles.container} shadow`}>
      <h3 className={styles.title}>Skills</h3>
      <section className={styles.list}>
        <div className={styles.skillContainer}>
          <span>JavaScript</span>
          <div className={styles.progressBar}>
            <div style={{ width: '80%' }} className={styles.progressBar__value} />
          </div>
        </div>
        <div className={styles.skillContainer}>
          <span>ReactJS</span>
          <div className={styles.progressBar}>
            <div style={{ width: '60%' }} className={styles.progressBar__value} />
          </div>
        </div>
      </section>
    </section>
  )
}
export default Skills
