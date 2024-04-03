import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer, Spinner } from './components'

const LandingPage = lazy(() => import('./pages/LandingPage'))

const NotFound = lazy(() => import('./pages/NotFound'))

export const App = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Router>
        <main className="flex-1">
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </div>
  )
}
