import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css';
import Welcome from './components/Welcome'
import Navbar from './components/Navbar'
import Login from './components/auth/Login'
import Profile from './components/auth/Profile'
import Register from './components/auth/Register'
import Trip from './components/trip-folder/Trip'

function App() {
  return (
      <Router>
        <header>
          <Navbar />
        </header>

        <div className="App">
          <Switch>
            <Route exact path='/' component={ Welcome } />
            
            <Route 
              path='/register'
              render={ (props) => <Register {...props} currentUser={ currentUser } setCurrentUser={ setCurrentUser } /> }
            />

            <Route
              path="/login"
              render={ (props) => <Login {...props} currentUser={ currentUser } setCurrentUser={ setCurrentUser } /> }
            />

            <Route
              path="/profile"
              render={ (props) => <Profile {...props} currentUser={ currentUser } setCurrentUser={ setCurrentUser } /> }
            />
          </Switch>
        </div>
      </Router>
  )
}

export default App;
