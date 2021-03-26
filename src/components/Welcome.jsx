import { BrowserRouter as Router, Link } from 'react-router-dom'
import img from '../img/App-logo.png'


export default function Welcome() {
    return(
            <div className="background">
                <div className="homepage-logo">
                    <img src={img} alt="trip tracker logo"/>
                </div>
                
                <div className="sign-up-buttons">
                    <Link to="/users/register" className="button">New User</Link>
                    <Link to="/users/login" className="button">Existing User</Link>
                </div>
                <div className="learn-link">
                    <Link to="/about">Learn More</Link>
                </div>
            </div>
    )
}


// if(props.currentUser){}