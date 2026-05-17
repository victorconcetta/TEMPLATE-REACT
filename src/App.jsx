import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/globalstyle.css'
import Home from './pages/home.jsx'
import MenuPrincipal from './pages/menu.jsx'
import Footer from './pages/footer.jsx'
import Subpagina from './pages/subpagina.jsx'
import ScrollToTop from "./components/ScrollToTop.jsx"
import SocialBar from "./components/SocialBar.jsx"  // ← importe aqui

function App() {
  return (
    <BrowserRouter>
      <div className="Container">
        <ScrollToTop />
        <MenuPrincipal />
        <SocialBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subpagina" element={<Subpagina />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App