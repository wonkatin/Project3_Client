import Trip from '../trip-folder/Trip'

export default function Account(props) {
    return(
        <div className="background-trips">
            <div className="account-card">
                <img src="../img/chris.jpg" alt="chris" className="account-img"/>
            </div>
            <h1>Chris Spicer</h1>
            <h4>Portland, OR</h4>
            <div>
                <img src="../img/App-logo.png" alt="trip tracker logo" className="small-logo"/>
            </div>
            <div className="account-form">
                <form onSubmit={handleUpdate} className="update-info">
                    <div>
                        <label for="first-name-input">First Name</label>
                        <input type="text" placeholder="First Name" id="first-name-input"/>
                        <label for="last-name-input">Last Name</label>
                        <input type="text" placeholder="Last Name" id="last-name-input"/>
                        <label for="username-input">Username</label>
                        <input type="text" placeholder="Username" id="username-input"/>
                        <label for="account-image-input">Account Image</label>
                        <input type="text" placeholder="Account Image" id="account-image-input"/>
                    </div>

                    <div>
                        <label for="email-input">Email Address</label>
                        <input type="text" placeholder="Email Address" id="email-input"/>
                        <label for="city-input">City</label>
                        <input type="text" placeholder="City" id="city-input"/>
                        <label for="dob-input">Date of Birth</label>
                        <input type="text" placeholder="Date of Birth" id="dob-input"/>
                        <p></p>
                        <input type="submit" value="Update Account" id="update-button"/>
                    </div>
                </form>
                <form onSubmit={handleDelete}>
                    <input type="submit" value="Delete Account"/>
                </form>
            </div>
        </div>
    )
}