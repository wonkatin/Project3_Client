export default function Account() {
    return(
        <div class="background-trips">
            <div class="profile-card">
                <img src="../img/chris.jpg" alt="chris" class="profile-img"></img>
            <div class="account-name">
            <h1>Chris Spicer</h1>
            <h4>Portland, OR</h4>
            </div>
                 <img src="../img/App-logo.png" alt="trip tracker logo" class="small-logo"></img>
            </div>
            <div class="account-form">
                <form action="/html/trips.html" class="update-info">
                    <div>
                        <label for="first-name-input">First Name</label>
                        <input type="text" placeholder="First Name" id="first-name-input">
                        <label for="last-name-input">Last Name</label>
                        <input type="text" placeholder="Last Name" id="last-name-input">
                        <label for="username-input">Username</label>
                        <input type="text" placeholder="Username" id="username-input">
                        <label for="profile-image-input">Profile Image</label>
                        <input type="text" placeholder="Profile Image" id="profile-image-input">
                    </div>
                    <div>
                        <label for="email-input">Email Address</label>
                        <input type="text" placeholder="Email Address" id="email-input">
                        <label for="city-input">City</label>
                        <input type="text" placeholder="City" id="city-input">
                        <label for="dob-input">Date of Birth</label>
                        <input type="text" placeholder="Date of Birth" id="dob-input">
                        <p></p>
                        <input type="submit" value="Update Profile" id="update-button">
                    </div>
                </form>
                <form action="/html/homepage.html">
                    <input type="submit" value="Delete Account">
                </form>
            </div>
        </div>
    )
}