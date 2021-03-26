import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import './App.css';
import Welcome from './components/Welcome'
import Navbar from './components/Navbar'
import Login from './components/auth/Login'
import Account from './components/auth/Account'
import Register from './components/auth/Register'
import About from './components/About'
import TripDetail from './components/trip-folder/TripDetail'
import TripContainer from './components/trip-folder/TripContainer';

function App() {
  
  const [currentUser, setCurrentUser] = useState(null)
  const [tripId, setTripId] = useState([])
  
  useEffect(() => {
    const token = localStorage.getItem('jwtToken')
    if(token) {
      const decoded = jwt_decode(token)
      setCurrentUser(decoded)
      // console.log(currentUser, '🌈');
    } else {
      setCurrentUser(null)
    }
  }, [])

  const handleLogout = () => {
    console.log('logging user out')
    if(localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken')
      setCurrentUser(null)
    }
  }

  return (
      <Router>
        <header>
          <Navbar currentUser={ currentUser } handleLogout={ handleLogout } />
        </header>
          
        <div className="App">
          <Switch>
            <Route exact path='/' component={ Welcome } />
            
            <Route 
              path='/users/register'
              render={ (props) => <Register {...props} currentUser={ currentUser } setCurrentUser={ setCurrentUser } /> }
            />

            <Route
              path="/users/login"
              render={ (props) => <Login {...props} currentUser={ currentUser } setCurrentUser={ setCurrentUser } /> }
            />

            <Route 
                path='/about'
                render={ (props) => <About {...props} currentUser={ currentUser } setCurrentUser={ setCurrentUser } /> }
            />
            

            {currentUser &&
             <Route 
              path={`/users/${currentUser.id}/account`}
              render={ (props) =>
                <Account {...props} handleLogout={ handleLogout } currentUser={ currentUser } setCurrentUser={ setCurrentUser } /> 
              }
            />
            }

            {currentUser &&
             <Route 
             
              exact path={`/users/${currentUser.id}/trips`}
              render={ (props) =>
                <TripContainer {...props} handleLogout={ handleLogout } currentUser={ currentUser } setCurrentUser={ setCurrentUser } /> 
              }
            />
            }
            {currentUser &&
             <Route 
              path={`/users/${currentUser.id}/trips/${tripId}`}
              render={ (props) =>
                <TripDetail {...props} handleLogout={ handleLogout } currentUser={ currentUser } setCurrentUser={ setCurrentUser } /> 
              }
            />
            }

          </Switch>
        </div>
      </Router>
  )
}

export default App;
