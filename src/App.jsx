import PersonalInformation from './components/PersonalInformation.jsx'
import Skills from './components/Skills.jsx'
import Hobbies from './components/Hobbies.jsx'
import ProjectsContainer from './components/ProjectsContainer.jsx'

const App = () => {
  return (
    <div className='mainContainer'>
      <PersonalInformation />
      <Skills />
      <ProjectsContainer />
      <Hobbies />
    </div>
  )
}
export default App
