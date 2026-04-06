import {Routes,Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import InterviewPrep from './pages/InterviewPrep'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

const App = () => {
  return (
   <Routes>
    <Route path='/'element={<LandingPage/>}/>
    <Route path='/signup'element={<SignUp/>}/>
    <Route path='/login'element={<Login/>}/>
    <Route path='/dashboard'element={<Dashboard/>}/>
    <Route path='/profile'element={<Profile/>}/>
    <Route path='/interview/:id'element={<InterviewPrep/>}/>
   </Routes>
  )
}

export default App
