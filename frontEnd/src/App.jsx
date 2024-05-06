import './App.css'
import { Aside } from './components/Aside'
import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'
import { AboutUs } from './views/AboutUs'
import { CreatePost } from './views/CreatePost'
import { Home } from './views/Home'
import { Login } from './views/Login'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { UserPosts } from './views/User/UserPosts'
import { AllPosts } from './views/Admin/AllPosts'
import { Authors } from './views/Authors'
import { Initiative } from './views/Initiative'
import { Opinions } from './views/Opinions'
import { LegalAdvisor } from './views/LegalAdvisor'
import { UserTerms } from './views/UserTerms'
import { PrivacyPolitics } from './views/PrivacyPolitics'
import { NotFound } from './views/NotFound'

function App() {
  let token
  let userData

  const location = useLocation()

  const showNotFound = () => {
    return (
      location.pathname !== '/' &&
      location.pathname !== '/login' &&
      location.pathname !== '/about-us' &&
      location.pathname !== '/authors' &&
      location.pathname !== '/initiative' &&
      location.pathname !== '/initiative' &&
      location.pathname !== '/opinions' &&
      location.pathname !== '/legal-advisor' &&
      location.pathname !== '/user-terms' &&
      location.pathname !== '/privacy-politics' &&
      !location.pathname.startsWith('/create-post') &&
      !location.pathname.startsWith('/my-posts') &&
      !location.pathname.startsWith('/all-post')
    )
  }

  return (
    <>
      {showNotFound() ? (
        <NotFound />
      ) : (
        <main className='grid-container'>
          <header>
            <Navigation />
          </header>

          <aside>
            <Aside />
          </aside>

          <section className='main-content'>
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/login'
                element={<Login />}
              />
              <Route
                path='/about-us'
                element={<AboutUs />}
              />
              <Route
                path='/authors'
                element={<Authors />}
              />
              <Route
                path='/initiative'
                element={<Initiative />}
              />
              <Route
                path='/opinions'
                element={<Opinions />}
              />
              <Route
                path='/legal-advisor'
                element={<LegalAdvisor />}
              />
              <Route
                path='/user-terms'
                element={<UserTerms />}
              />
              <Route
                path='/privacy-politics'
                element={<PrivacyPolitics />}
              />

              {/* Rutas Protegidas */}

              <Route
                path='/create-post'
                element={
                  token && userData ? (
                    <CreatePost />
                  ) : (
                    <>
                      <Navigate to={'/login'} />
                    </>
                  )
                }
              />

              <Route
                path='/my-posts'
                element={
                  token && userData ? (
                    <UserPosts />
                  ) : (
                    <>
                      <Navigate to={'/login'} />
                    </>
                  )
                }
              />

              <Route
                path='/all-post'
                element={
                  token && userData ? (
                    <AllPosts />
                  ) : (
                    <>
                      <Navigate to={'/login'} />
                    </>
                  )
                }
              />
            </Routes>
          </section>

          <footer>
            <Footer />
          </footer>
        </main>
      )}
    </>
  )
}

export default App
