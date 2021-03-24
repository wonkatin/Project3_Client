import { RouterBrowser as Router, Link } from 'react-router-dom'

export default function Welcome() {
    return(
        <Router>
            <div className="background">
                <div className="homepage-logo">
                    <img src="../img/App-logo.png" alt="trip tracker logo"/>
                </div>
                <div className="sign-up-buttons">
                    <Link to="/users/register" className="button">New User</Link>
                    <Link to="/users/login" className="button">Existing User</Link>
                </div>
                <div className="learn-link">
                    <Link to="/about">Learn More</Link>
                </div>
            </div>
        </Router>
    )
}