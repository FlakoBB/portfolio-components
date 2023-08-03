import styles from '../styles/skills.module.css'

const skills = [
  {
    name: 'HTML',
    level: 90
  },
  {
    name: 'CSS',
    level: 80
  },
  {
    name: 'JavaScript',
    level: 80
  },
  {
    name: 'ReactJS',
    level: 70
  },
  {
    name: 'MySQL',
    level: 60
  },
  {
    name: 'Django',
    level: 30
  }
]

const Skills = () => {
  return (
    <section className={`${styles.container} shadow`}>
      <h3 className={styles.title}>Skills</h3>
      <section className={styles.list}>
        {
          skills.map((skill, index) => {
            return (
              <div className={styles.skillContainer} key={index}>
                <span>{skill.name}</span>
                <div className={styles.progressBar}>
                  <div style={{ width: `${skill.level}%` }} className={styles.progressBar__value} />
                </div>
              </div>
            )
          })
        }
      </section>
    </section>
  )
}
export default Skills
