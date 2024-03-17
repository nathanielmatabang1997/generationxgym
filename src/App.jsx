import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomeScreen from './Pages/HomeScreen'
import UpperList from './Pages/UpperList'
import InstructorScreen from './Pages/InstructorScreen'
import AboutScreen from './Pages/AboutScreen'
import Aos from 'aos'
import LowerScreen from './Pages/LowerScreen'
import CoreScreen from './Pages/CoreScreen'
import FunctionScreen from './Pages/FunctionScreen'
import IsolationScreen from './Pages/IsolationScreen'
import CompoundScreen from './Pages/CompoundScreen'

function App() {
  Aos.init();
  return (
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/Upper' element={<UpperList/>}/>
      <Route path='/Lower' element={<LowerScreen/>}/>
      <Route path='/Core' element={<CoreScreen/>}/>
      <Route path='/Function' element={<FunctionScreen/>}/>
      <Route path='/Isolation' element={<IsolationScreen/>}/>
      <Route path='/Comp' element={<CompoundScreen/>}/>
      <Route path='/instructor' element={<InstructorScreen/>}/>
      <Route path='/about' element={<AboutScreen/>}/>
    </Routes>
  )
}

export default App
