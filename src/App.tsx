import './App.css'
import NavBar from './navBar/NavBar.tsx'
import { Route, Routes } from 'react-router-dom'
import ListadoPokes from './pages/listapokes/ListadoPokes.tsx'
import Fav from './pages/favoritos/Fav.tsx'
import Index from './pages/index/Index.tsx'

function App() {


  return (
    <>
    <NavBar />
    <Routes>
        <Route path="/ListaPokemones" element={<ListadoPokes />} />
        <Route path="/pokemon/:id" element={<h1>aun no se</h1>} />
        <Route path="/*" element={<h1>Not Found</h1>} />
        <Route path="/index" element={<Index />} />
        <Route path="/" element={<Index />} />
        <Route path="/Favoritos" element={<Fav/>} /> 
      </Routes>
      
      </>  )
}

export default App
