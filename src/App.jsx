import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from 'react-router-dom'
import { Footer, Header, Spinner } from './components'

const LandingPage = lazy(() => import('./pages/LandingPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))

const NotFound = lazy(() => import('./pages/NotFound'))

export const App = () => {
  let { location } = useParams()
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Router>
        <main className="flex-1">
          <div
            className="relative h-full w-full overflow-hidden bg-center bg-cover"
            style={{
              backgroundImage: `${location === 'about' ? 'url(AboutBackground.png)' : 'url(mainbackground.png)'}`,
            }}
          >
            <div className="h-[92vh] relative text-white">
              <Header />
              <Suspense fallback={<Spinner />}>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  )
}
