import './App.css'
import { Aside } from './components/Aside'
import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'
import { AboutUs } from './views/AboutUs'
import { CreatePost } from './views/CreatePost'
import { Home } from './views/Home'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { UserPosts } from './views/User/UserPosts'
import { AllPosts } from './views/Admin/AllPosts'
import { Authors } from './views/Authors'
import { Opinions } from './views/Opinions'
import { NotFound } from './views/NotFound'
import { UserContext } from './providers/UserProvider'
import { useContext } from 'react'

function App() {
  const { user } = useContext(UserContext)
  const { userData, token } = user

  const location = useLocation()

  const showNotFound = () => {
    return (
      location.pathname !== '/' &&
      location.pathname !== '/about-us' &&
      location.pathname !== '/authors' &&
      location.pathname !== '/opinions' &&
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
                path='/about-us'
                element={<AboutUs />}
              />
              <Route
                path='/authors'
                element={<Authors />}
              />
              <Route
                path='/opinions'
                element={<Opinions />}
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
