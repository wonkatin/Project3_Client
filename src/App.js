import './App.css';
import Welcome from './components/Welcome'
import Navbar from './components/Navbar'
import Login from './components/auth/Login'
import Profile from './components/auth/Profile'
import Register from './components/auth/Register'
import Trip from './components/trip-folder/Trip'

function App() {
  return (
    <div className="App">
      <Welcome />
      <Navbar />
      <Login />
      <Profile />
      <Register />
      <Trip />
    </div>
  );
}

export default App;
