import { Aside } from './components/Aside'
import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'
import { AboutUs } from './views/AboutUs'
import { CreatePost } from './views/CreatePost'
import { Home } from './views/Home'
import { Login } from './views/Login'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserPosts } from './views/User/UserPosts'
import { AllPosts } from './views/Admin/AllPosts'

export function App() {
  let token
  let userData

  return (
    <main>
      <header>
        <Navigation />
      </header>

      <aside>
        <Aside />
      </aside>

      <section>
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
        </Routes>

        {token && userData ? (
          <>
            <Route
              path='create-post'
              element={<CreatePost />}
            />
            <Route
              path='my-posts'
              element={<UserPosts />}
            />
            <Route />
            {userData.role_id === 1 ? (
              <Route
                path='all-post'
                element={<AllPosts />}
              />
            ) : null}
          </>
        ) : (
          <Navigate to='/login' />
        )}
      </section>

      <footer>
        <Footer />
      </footer>
    </main>
  )
}
