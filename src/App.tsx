import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import DiferenciaisPage from './pages/DiferenciaisPage'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos/:slug" element={<ServicePage />} />
        <Route path="/diferenciais" element={<DiferenciaisPage />} />
      </Routes>
      <WhatsAppButton />
    </>
  )
}
