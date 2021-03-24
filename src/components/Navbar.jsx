import { Link } from 'react-router-dom'
export default function Navbar(props) {
    const loggedIn = (
        <>

            {/* Check to make sure all links are working */}

            <Link className="nav-link" to="users/${userId}/trips">
                <span>Trips</span>
                </Link>

            <Link className="nav-link" to='/'>
                <span onClick={props.handleLogout}>Log Out</span>
            </Link>

            <Link className="nav-link" to='users/${userId}/account'>
                <span>Account</span>
            </Link>  
        </>
    )

    const loggedOut = (
        <>
            <Link className="nav-link" to='/users/register'>
                <span>register link</span>
            </Link>

            <Link className="nav-link" to='/users/login'>
                <span>login link</span>
            </Link>
        </>
    )
    
    return(
        <nav>
           <Link className="nav-link" to='/about'>
                <span>About</span>
            </Link>

            {props.currentUser ? loggedIn : loggedOut}
        </nav>
    )
}

// Always: About
// Logged In: About, Trips, Account, Logout
// Logged Out: About, Register, Login
