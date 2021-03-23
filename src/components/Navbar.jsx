import { Link } from 'react-router-dom'
export default function Navbar(props) {
    const loggedIn = (
        <>
            <Link className="nav-link" to='/'>
                <span onClick={props.handleLogout}>log out</span>
            </Link>

            <Link className="nav-link" to='users/${userId}/account'>
                <span>account link</span>
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
           <Link className="nav-link" to='/'>
                <span>welcome link</span>
            </Link>

            {props.currentUser ? loggedIn : loggedOut}
        </nav>
    )
}
