import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Switch from './components/Switch'
import Kohi from './pages/Kohi'
import TopScroll from "./TopScroll"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <TopScroll>
      <Routes>
        <Route exact path="/" element = {<Home/>}>
      </Route>
        <Route exact path="/kohi" element = {<Kohi/>}>
      </Route>
      </Routes>
      </TopScroll>
    </Router>
  )
}
export default App