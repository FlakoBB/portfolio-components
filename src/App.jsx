import PersonalInformation from './components/PersonalInformation.jsx'
import Project from './components/Project.jsx'
import Skills from './components/Skills.jsx'

const App = () => {
  return (
    <div className='mainContainer'>
      <Skills />
      <PersonalInformation />
      <Project />
    </div>
  )
}
export default App
