import { Link } from 'react-router-dom'
export default function Navbar(props) {
    


    // const loggedIn = (
    //     <>

            {/* Check to make sure all links are working */}

            {/* <Link className="nav-link" to={`/users/${props.currentUser.id}/trips`}>
                <span>Trips</span>
                </Link> */}

            {/* <Link className="nav-link" to='/'>
                <span onClick={props.handleLogout}>Log Out</span>
            </Link> */}

            {/* <Link className="nav-link" to={`/users/${props.currentUser.id}/account`}>
                <span>Account</span>
            </Link>   */}
    //     </>
    // )

    // const loggedOut = (
    //     <>
    //         <Link className="nav-link" to='/users/register'>
    //             <span>register link</span>
    //         </Link>

    //         <Link className="nav-link" to='/users/login'>
    //             <span>login link</span>
    //         </Link>
    //     </>
    // )
    
    return(
        <nav>
           <Link className="nav-link" to='/about'>
                <span>About</span>
            </Link>

            {/* Check to make sure all links are working */}


            {props.currentUser 
            ?  <>
                <Link className="nav-link" to={`/users/${props.currentUser.id}/trips`}>
                    <span>Trips</span>
                </Link>

                <Link className="nav-link" to='/'>
                    <span onClick={props.handleLogout}>Log Out</span>
                </Link>

                <Link className="nav-link" to={`/users/${props.currentUser.id}/account`}>
                    <span>Account</span>
                </Link>  
              </> 

            : <>
                <Link className="nav-link" to='/users/register'>
                    <span>Register</span>
                </Link>

                <Link className="nav-link" to='/users/login'>
                    <span>Login</span>
                </Link>
              </>
            }
        </nav>
    )
}

// Always: About
// Logged In: About, Trips, Account, Logout
// Logged Out: About, Register, Login
