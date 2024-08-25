import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext.js'

// pages and components
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Create from './pages/create/Create'
import Project from './pages/project/Project'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import OnlineUsers from './components/OnlineUsers.jsx'
// styles
import './App.css'

function App() {
  const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <Router>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/">
                {!user && <Redirect to="/login" />}
                {user && <Dashboard />}
              </Route>
              <Route exact path="/create">
                {!user && <Redirect to="/login" />}
                {user && <Create />}
              </Route>
              <Route exact path="/projects/:id">
                {!user && <Redirect to="/login" />}
                {user && <Project />}
              </Route>
              <Route exact path="/login">
                {!user && <Login />}
                {user && <Redirect to="/" />}
              </Route>
              <Route exact path="/signup">
                {!user && <Signup />}
                {user && <Redirect to="/" />}
              </Route>
            </Switch>
          </div>
          {user && <OnlineUsers />}
        </Router>
      )}
    </div>
  )
}

export default App
