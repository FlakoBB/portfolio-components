import Project from './Project.jsx'
import styles from '../styles/projectsContainer.module.css'

const projects = [
  {
    title: '404 Not Found',
    description: 'Responsive page 404',
    image: 'https://github.com/FlakoBB/404-not-found/raw/main/images/screenshot.png',
    links: {
      demo: 'https://flakobb.github.io/404-not-found/',
      code: 'https://github.com/FlakoBB/404-not-found'
    },
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Team Page',
    description: 'Responsive page Team Page',
    image: 'https://github.com/FlakoBB/team-page/raw/main/images/screenshot.png',
    links: {
      demo: 'https://flakobb.github.io/team-page/',
      code: 'https://github.com/FlakoBB/team-page'
    },
    tags: ['HTML', 'CSS']
  },
  {
    title: 'Interior Consultant',
    description: 'Responsive page Interior Consultant',
    image: 'https://github.com/FlakoBB/interior-consultant/raw/main/images/screenshot.png',
    links: {
      demo: 'https://flakobb.github.io/interior-consultant/',
      code: 'https://github.com/FlakoBB/interior-consultant'
    },
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Recipe Blog',
    description: 'Responsive page Recipe Blog',
    image: 'https://github.com/FlakoBB/recipe-blog/raw/main/assets/images/screenshot.png',
    links: {
      demo: 'https://flakobb.github.io/recipe-blog/',
      code: 'https://github.com/FlakoBB/recipe-blog'
    },
    tags: ['HTML', 'CSS']
  },
  {
    title: 'My Gallery',
    description: 'Responsive page My Gallery',
    image: 'https://github.com/FlakoBB/my-gallery/raw/main/images/screenshot.png',
    links: {
      demo: 'https://flakobb.github.io/my-gallery/',
      code: 'https://github.com/FlakoBB/my-gallery'
    },
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Checkout Page',
    description: 'Responsive page Checkout Page',
    image: 'https://github.com/FlakoBB/checkout-page/raw/main/images/screenshot.png',
    links: {
      demo: 'https://flakobb.github.io/checkout-page/',
      code: 'https://github.com/FlakoBB/checkout-page'
    },
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Edie Homepage',
    description: 'Responsive page Edie Homepage',
    image: 'https://github.com/FlakoBB/edie-homepage/raw/main/images/screenshot.png',
    links: {
      demo: 'https://flakobb.github.io/edie-homepage/',
      code: 'https://github.com/FlakoBB/edie-homepage'
    },
    tags: ['HTML', 'CSS']
  },
  {
    title: 'Portfolio Components',
    description: 'Responsive page Portfolio Components',
    image: '',
    links: {
      demo: 'https://portfolio-components.vercel.app/',
      code: 'https://github.com/FlakoBB/portfolio-components'
    },
    tags: ['HTML', 'CSS', 'JavaScript', 'ReactJS']
  }
]

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
        {
          projects.map((project, index) => {
            return <Project key={index} project={project} />
          })
        }
      </main>
    </section>
  )
}
export default ProjectsContainer
