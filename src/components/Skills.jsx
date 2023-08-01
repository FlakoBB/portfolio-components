import styles from '../styles/skills.module.css'

const Skills = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Skills</h3>
      <table className={styles.tableSkills}>
        <tr>
          <td>JavaScript</td>
          <td>
            <div className={styles.progressBar}>
              <div style={{ width: '80%' }} className={styles.progressBar__value} />
            </div>
          </td>
        </tr>
        <tr>
          <td>HTML</td>
          <td>
            <div className={styles.progressBar}>
              <div style={{ width: '90%' }} className={styles.progressBar__value} />
            </div>
          </td>
        </tr>
        <tr>
          <td>CSS</td>
          <td>
            <div className={styles.progressBar}>
              <div style={{ width: '80%' }} className={styles.progressBar__value} />
            </div>
          </td>
        </tr>
        <tr>
          <td>ReactJS</td>
          <td>
            <div className={styles.progressBar}>
              <div style={{ width: '60%' }} className={styles.progressBar__value} />
            </div>
          </td>
        </tr>
      </table>
    </div>
  )
}
export default Skills
