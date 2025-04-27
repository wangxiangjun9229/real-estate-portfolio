import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { PropertyProvider } from './lib/PropertyContext'
import Portfolio from './pages/Portfolio'
import PropertyDetail from './pages/PropertyDetail'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'

const App = () => {
  return (
    <PropertyProvider>
      <Router basename="/real-estate-portfolio">
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link
                  to="/"
                  className="flex items-center px-2 py-2 text-gray-900 hover:text-gray-600"
                >
                  Home
                </Link>
              </div>
              <div className="flex">
                <Link
                  to="/contact"
                  className="flex items-center px-2 py-2 text-gray-900 hover:text-gray-600"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </PropertyProvider>
  )
}

export default App 