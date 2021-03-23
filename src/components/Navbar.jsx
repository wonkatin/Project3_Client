import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return(
        <nav>
            <Link to='/'>
                <h5>welcome link</h5>
            </Link>
            <Link to='/profile'>
                <h5>profile link</h5>
            </Link>
            <Link to='/register'>
                <h5>register link</h5>
            </Link>
            <Link to='/login'>
                <h5>login link</h5>
            </Link>

        </nav>
    )
}