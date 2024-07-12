import './App.css'
import { useContext } from 'react'
import { Nav } from './components/Navbar'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { AboutUs } from './views/AboutUs'
import { CreatePost } from './views/CreatePost'
import { Home } from './views/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserPosts } from './views/User/UserPosts'
import { PostsManagement } from './views/Admin/PostManagement'
import { Login } from './views/Login'
import { Authors } from './views/Authors'
import { Opinions } from './views/Opinions'
import { NotFound } from './views/NotFound'
import { UserContext } from './providers/UserProvider'
import UsersManagment from './views/Admin/UsersManagment'
import { CreateUser } from './views/Admin/CreateUser'

function App() {
  const { user } = useContext(UserContext)
  const { userData, token } = user

  return (
    <>
      <main>
        <Header />
        <Nav />
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
            path='/opinions'
            element={<Opinions />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />

          {/* Rutas Protegidas ⬇ */}

          <Route
            path='/create-post/:id'
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
            path='/create-user'
            element={
              token && userData.role_id === 1 ? (
                <CreateUser />
              ) : (
                <>
                  <Navigate to={'/login'} />
                </>
              )
            }
          />

          <Route
            path='/my-posts/:id'
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
            path='/posts-management'
            element={
              token && userData.role_id === 1 ? (
                <PostsManagement />
              ) : (
                <>
                  <Navigate to={'/login'} />
                </>
              )
            }
          />

          <Route
            path='/users-management'
            element={
              token && userData.role_id === 1 ? (
                <UsersManagment />
              ) : (
                <>
                  <Navigate to={'/login'} />
                </>
              )
            }
          />
        </Routes>

        {/* Rutas Protegidas ⬆ */}

        <Footer />
      </main>
    </>
  )
}

export default App
