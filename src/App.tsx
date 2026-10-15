import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicos/:slug" element={<ServicePage />} />
    </Routes>
  )
}
