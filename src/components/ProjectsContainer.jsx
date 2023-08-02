import Project from './Project.jsx'
import styles from '../styles/projectsContainer.module.css'

const ProjectsContainer = () => {
  return (
    <section>
      <header className={`${styles.header} shadow`}>
        <h2 className={styles.header__title}>Projects <span>(3)</span></h2>
        <div className={styles.filter}>
          {/* // ToDo: funcion que filtre proyectos y agregar la clase 'selected' cuando se seleccione el tag */}
          <button className={`${styles.filter__tag} ${styles.selected}`}>React</button>
          <button className={styles.filter__tag}>Django</button>
          <button className={styles.filter__tag}>Vue</button>
        </div>
      </header>
      <main className={styles.projectsList}>
        {/* // ToDo: Renderizar proyectos cun map() de un arreglo */}
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </main>
    </section>
  )
}
export default ProjectsContainer
