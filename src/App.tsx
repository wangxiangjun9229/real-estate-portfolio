import { memo, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { PropertyProvider } from './lib/PropertyContext'

// Lazy load components
const Portfolio = lazy(() => import('./pages/Portfolio'))
const PropertyDetail = lazy(() => import('./pages/PropertyDetail'))
const NotFound = lazy(() => import('./pages/NotFound'))

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
)

const App = memo(function App() {
  return (
    <Router>
      <PropertyProvider>
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route path="/property/:id" element={<PropertyDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </PropertyProvider>
    </Router>
  )
})

export default App 