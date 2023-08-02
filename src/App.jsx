import PersonalInformation from './components/PersonalInformation.jsx'
import Project from './components/Project.jsx'
import Skills from './components/Skills.jsx'
import Hobbies from './components/Hobbies.jsx'
import ProjectsContainer from './components/ProjectsContainer.jsx'

const App = () => {
  return (
    <div className='mainContainer'>
      <ProjectsContainer />
      <Hobbies />
      <Skills />
      <PersonalInformation />
      <Project />
    </div>
  )
}
export default App
