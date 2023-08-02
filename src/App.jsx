import PersonalInformation from './components/PersonalInformation.jsx'
import Project from './components/Project.jsx'
import Skills from './components/Skills.jsx'
import Hobbies from './components/Hobbies.jsx'

const App = () => {
  return (
    <div className='mainContainer'>
      <Hobbies />
      <Skills />
      <PersonalInformation />
      <Project />
    </div>
  )
}
export default App
