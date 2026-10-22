import { useState } from 'react'
import './App.css'
import HeaderPagina from './components/HeaderPagina'
import NavPagina from './components/NavPagina'
import MainPagina from './components/MainPagina'
import AsidePagina from './components/AsidePagina'
import FooterPagina from './components/FooterPagina'
import PanelPagina from './components/PanelPagina'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PanelPagina />
      <HeaderPagina
        titulo="Portal Académico"
        nombreInstitucion='Instituto de Educación Superior Público "Trujillo"'
      />
      <NavPagina />
      <MainPagina />
      <AsidePagina />
      <FooterPagina  
      anio={2026} 
      nombrePrograma="Diseño y Programación Web" 
      />
    </>
  )
}

export default App
