import { useState } from 'react'
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

const filter = {
  all: 'All',
  html: 'HTML',
  css: 'CSS',
  js: 'JavaScript',
  reactjs: 'ReactJS',
  django: 'Django'
}

const ProjectsContainer = () => {
  const [filterCurrent, setFilterCurrent] = useState(filter.all)
  const [projectsShow, setProjectsShow] = useState(projects)

  const handleFilter = (newFilter) => {
    setFilterCurrent(newFilter)

    let newList = []

    switch (newFilter) {
      case filter.all:
        console.log('Entro a All')
        setProjectsShow(projects)
        break
      case filter.html:
        newList = projects.filter((project) => {
          const tags = project.tags
          const hasTag = tags.includes(filter.html)
          if (hasTag) {
            return project
          }
          return null
        })
        setProjectsShow(newList)
        break
      case filter.css:
        newList = projects.filter((project) => {
          const tags = project.tags
          const hasTag = tags.includes(filter.css)
          if (hasTag) {
            return project
          }
          return null
        })
        setProjectsShow(newList)
        break
      case filter.js:
        newList = projects.filter((project) => {
          const tags = project.tags
          const hasTag = tags.includes(filter.js)
          if (hasTag) {
            return project
          }
          return null
        })
        setProjectsShow(newList)
        break
      case filter.reactjs:
        newList = projects.filter((project) => {
          const tags = project.tags
          const hasTag = tags.includes(filter.reactjs)
          if (hasTag) {
            return project
          }
          return null
        })
        setProjectsShow(newList)
        break
      case filter.django:
        newList = projects.filter((project) => {
          const tags = project.tags
          const hasTag = tags.includes(filter.django)
          if (hasTag) {
            return project
          }
          return null
        })
        setProjectsShow(newList)
        break
      default:
        setProjectsShow(projects)
        break
    }
  }

  return (
    <section>
      <header className={`${styles.header} shadow`}>
        <h2 className={styles.header__title}>Projects <span>({projectsShow.length})</span></h2>
        <div className={styles.filter}>
          <button type='button' onClick={() => handleFilter(filter.all)} className={`${styles.filter__tag} ${filterCurrent === filter.all ? styles.selected : ''}`}>All</button>
          <button type='button' onClick={() => handleFilter(filter.css)} className={`${styles.filter__tag} ${(filterCurrent === filter.html || filterCurrent === filter.css) ? styles.selected : ''}`}>HTML | CSS</button>
          <button type='button' onClick={() => handleFilter(filter.js)} className={`${styles.filter__tag} ${filterCurrent === filter.js ? styles.selected : ''}`}>JavaScript</button>
          <button type='button' onClick={() => handleFilter(filter.reactjs)} className={`${styles.filter__tag} ${filterCurrent === filter.reactjs ? styles.selected : ''}`}>React</button>
          <button type='button' onClick={() => handleFilter(filter.django)} className={`${styles.filter__tag} ${filterCurrent === filter.django ? styles.selected : ''}`}>Django</button>
        </div>
      </header>
      <main className={styles.projectsList}>
        {
          projectsShow.length > 0
            ? projectsShow.map((project, index) => {
              return <Project key={index} project={project} />
            })
            : (
              <div className={styles.noProjects}>
                <p>There are no projects made with {filterCurrent}</p>
              </div>
              )
        }
      </main>
    </section>
  )
}
export default ProjectsContainer
