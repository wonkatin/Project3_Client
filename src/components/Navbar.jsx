import { Link } from 'react-router-dom'
export default function Navbar(props) {
    
    return(
        <nav>
            <Link className="nav-link" to='/'>
                <span>welcome link</span>
            </Link>
            <Link className="nav-link" to='users/${userId}/account'>
                <span>account link</span>
            </Link>
            <Link className="nav-link" to='/users/register'>
                <span>register link</span>
            </Link>
            <Link className="nav-link" to='/users/login'>
                <span>login link</span>
            </Link>
            <Link className="nav-link" to='/'>
                <span onClick={props.handleLogout}>log out</span>
            </Link>
        </nav>
    )
}