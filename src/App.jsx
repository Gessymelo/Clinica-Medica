import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PacienteList from './pages/Paciente/PacienteList'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PacienteList/>} />
      <Route path="/listar-pacientes" element={<PacienteList/>} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
