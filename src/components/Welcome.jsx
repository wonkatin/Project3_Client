import { RouterBrowser as Router, Link, Route } from 'react-router-dom'

export default function Welcome() {
    return(
        <div className="background"> {/* Need to add Router tags */}
            <div className="homepage-logo">
                <img src="../img/App-logo.png" alt="trip tracker logo"/>
            </div>
            <div className="sign-up-buttons">
                <a href="./register.html" className="button">New User</a> {/* Need to add Link */}
                <a href="./login.html" className="button">Existing User</a> {/* Need to add Link */}
            </div>
            <div className="learn-link">
                <a href="./about.html">Learn More</a> {/* Need to add Link */}
            </div>
        </div>  
    )
}