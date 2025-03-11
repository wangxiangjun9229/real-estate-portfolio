import { memo, lazy, Suspense } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import PropertyProvider from './components/PropertyProvider'

// Lazy load components
const Portfolio = lazy(() => import('./pages/Portfolio'))
const PropertyDetail = lazy(() => import('./pages/PropertyDetail'))
const NotFound = lazy(() => import('./pages/NotFound'))

const App = memo(function App() {
  return (
    <Router>
      <PropertyProvider>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
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