import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/navbar'
import Home from '../pages/home'
import Privacy from '../pages/privacy'
import Contact from '../pages/contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 bg-red-400!">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App