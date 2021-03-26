import { Link } from "react-router-dom";

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

        <div>
          <img src="" alt=""/>
          <p>
            Trip Tracker is an app for the modern traveler, the person who plans their trip
            through a series of emails, phone-memos, to-do lists, and post-it notes.
            We've built a platform to help you keep everything in one place, easily accessible, and easy to update.
            From your flight info to your packing list, Trip Tracker will help you stay organized
            and eliminate the dreaded feeling of leaving behind something important.
          </p>
         
          <Link to={`/users/${props.currentUser.id}/trips`} className="button">Get Trippin'!</Link>

          <h2>Frequently Asked Questions</h2>
          <p>FAQ info</p>

          <h2>The Team behind Trip Tracker</h2>
            <img src="" alt=""/>
            <p>Chris</p>

            <img src="" alt=""/>
            <p>Mariia</p>

            <img src="" alt=""/>
            <p>Gabe</p>
            
            <img src="" alt=""/>
            <p>Sarah</p>

          <footer>
            <a href="">Github</a>
            <a href="">Email</a>
          </footer>
        </div>
  )
}