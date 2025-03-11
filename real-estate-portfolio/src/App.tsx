import React, { memo, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

console.log('App component is loading...')

const Portfolio = lazy(() => {
  console.log('Loading Portfolio component...')
  return import('./pages/Portfolio')
})

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-lg text-gray-600">Loading...</div>
  </div>
)

const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <h2 className="text-xl font-semibold text-red-600">Something went wrong</h2>
      <p className="mt-2 text-gray-600">{error.message}</p>
    </div>
  </div>
)

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error!} />
    }

    return this.props.children
  }
}

const PlaceholderPage = memo(({ text }: { text: string }) => {
  console.log('Rendering PlaceholderPage:', text)
  return <div className="text-center py-12">{text}</div>
})

PlaceholderPage.displayName = 'PlaceholderPage'

const App = memo(function App() {
  console.log('Rendering App component')

  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route
              index
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <Portfolio />
                </Suspense>
              }
            />
            <Route
              path="performance"
              element={<PlaceholderPage text="Performance metrics coming soon..." />}
            />
            <Route
              path="gallery"
              element={<PlaceholderPage text="Property gallery coming soon..." />}
            />
            <Route
              path="about"
              element={<PlaceholderPage text="About page coming soon..." />}
            />
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  )
})

export default App
