import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Personal from './pages/Personal/Personal'
import Footer from './components/Footer/Footer'
import ServicesPage from './pages/ServicesPage/ServicesPage'
import TariffsPage from './pages/TariffsPage/TariffsPage'
import BlogsPage from './pages/BlogsPage/BlogsPage'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Personal/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/tariffs' element={<TariffsPage/>}/>
        <Route path='/blogs' element={<BlogsPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
