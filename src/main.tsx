import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter , Routes ,Route } from 'react-router'
import './styles/index.css'
import Inicio from './pages/Inicio.tsx'
import Agenda from './pages/Agenda.tsx'
import Configuracoes from './pages/Configuracoes.tsx'
import Suporte from './pages/Suporte.tsx'
import NovoEvento from './pages/NovoEvento.tsx'
import EditarEvento from './pages/EditarEvento.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/agenda' element={<Agenda/>}/>
        <Route path='/configuracoes' element={<Configuracoes/>}/>
        <Route path='/suporte' element={<Suporte/>}/>
        <Route path='/novo-evento' element={<NovoEvento/>}/>
        <Route path='/editar-evento/:id' element={<EditarEvento/>}/>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
