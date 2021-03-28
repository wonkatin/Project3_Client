import { Link } from "react-router-dom";
import logo from '../img/App-logo.png'
import chris from '../img/chris.jpg'
import gabe from '../img/gabe.png'
import mariia from '../img/mariia.jpeg'
import sarah from '../img/sarah.jpeg'

export default function About(props) {
  return(

    // Needs:
      // classNames and styling
      // App Logo
    // Stretch:
      // FAQ info
      // Profile Pictures
      // Footer Links
      // Set up condition for trips button

        <div className="background-trips">
          <img src={logo} alt="trip tracker logo" className='about-logo'/>
          <p className="about-text">
            Trip Tracker is an app for the modern traveler, the person who plans their trip
            through a series of emails, phone-memos, to-do lists, and sticky notes.
            We've built a platform to help you keep everything in one place, easily accessible, and easy to update.
            From your flight-info to your packing list, Trip Tracker will help you stay organized
            and eliminate the dreaded feeling of leaving something important behind.
          </p>
         
          <div className="sign-up-buttons">
                    {props.currentUser
                    ? <>
                        <Link to={`users/${props.currentUser.id}/trips`} className="button">Get Trippin'!</Link>
                    </>
                    : <>
                    <Link to="/users/register" className="button">Sign Up</Link>
                    <Link to="/users/login" className="button">Log In</Link>
                    </>
                    }
          </div>



          {/* <Link to={`/users/${props.currentUser.id}/trips`} className="button">Get Trippin'!</Link> */}

          {/* <h2>Frequently Asked Questions</h2>
          <p>FAQ info</p> */}

          <h4 className="team-header">The Team behind Trip Tracker</h4>
          <div className="pic-container">
            <div className="pic-card">
            <img src={chris} alt={chris} className="bio-pic"/>
            <p>Chris</p>
            </div>
            <div className="pic-card">
            <img src={mariia} alt={mariia} className="bio-pic"/>
            <p>Mariia</p>
            </div>
            <div className="pic-card">
            <img src={gabe} alt={gabe} className="bio-pic"/>
            <p>Gabe</p>
            </div>
            <div className="pic-card">
            <img src={sarah} alt={sarah} className="bio-pic"/>
            <p>Sarah</p>
            </div>
          </div>

          {/* <footer>
            <a href="">Github</a>
            <a href="">Email</a>
          </footer> */}
        </div>
  )
}