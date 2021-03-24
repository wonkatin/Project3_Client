import Trip from '../trip-folder/Trip'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Account(props) {

    const [updateUser, setUpdateUser] = useState({
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        city: '',
        DOB: '',
        img: ''
    })

    const handleSubmit = async e => {
        e.preventDefault()
        setUpdateUser({
            username: props.currentUser.username,
            email: props.currentUser.email,
            firstName: props.currentUser.firstName,
            lastName: props.currentUser.lastName,
            city: props.currentUser.city,
            DOB: props.currentUser.DOB,
            img: props.currentUser.img
        })
    }

    const handleChange = e => {
        console.log(e.target.value)
    }

    return(
        <div className="background-trips">
            <div className="account-card">
                <img src="../img/chris.jpg" alt="chris" className="account-img"/>
            </div>

            <h1>{props.currentUser.username}</h1> 
            <h4>Portland, OR</h4> 

            <div>
                <img src="../img/App-logo.png" alt="trip tracker logo" className="small-logo"/>
            </div>

            <div className="account-form">
                <form onSubmit={handleSubmit} className="update-info"> 
                    <div>
                        <label for="first-name-input">First Name</label>
                        <input 
                            type="text" 
                            placeholder="First Name" 
                            id="first-name-input" 
                            value={ props.currentUser.firstName }
                            onChange={e => setUpdateUser({firstName: e.target.value})} 
                        />

                        <label for="last-name-input">Last Name</label>
                        <input 
                            type="text" 
                            placeholder="Last Name" 
                            id="last-name-input" 
                            value={ props.currentUser.lastName }
                            onChange={e => setUpdateUser({lastName: e.target.value})}
                        />

                        <label for="username-input">Username</label>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            id="username-input" 
                            value={ props.currentUser.username }
                            onChange={e => setUpdateUser({username: e.target.value})}
                        />

                        <label for="account-image-input">Account Image</label>
                        <input 
                            type="text" 
                            placeholder="Account Image" 
                            id="account-image-input" 
                            value={ props.currentUser.img }
                            onChange={e => setUpdateUser({img: e.target.value})}
                        />
                    </div>

                    <div>
                        <label for="email-input">Email Address</label>
                        <input 
                            type="text" 
                            placeholder="Email Address" 
                            id="email-input" 
                            value={ props.currentUser.email }
                            onChange={e => setUpdateUser({email: e.target.value})}
                        />

                        <label for="city-input">City</label>
                        <input 
                            type="text" 
                            placeholder="City" 
                            id="city-input" 
                            value={ props.currentUser.city }
                            onChange={e => setUpdateUser({city: e.target.value})}
                        />

                        <label for="dob-input">Date of Birth</label>
                        <input 
                            type="text" 
                            placeholder="Date of Birth" 
                            id="dob-input" 
                            value={ props.currentUser.DOB }
                            onChange={e => setUpdateUser({DOB: e.target.value})}
                        />
                        <p></p>

                        <input 
                            id="update-button"
                            type="submit" 
                            value="Update Account"
                        />
                    </div>
                </form>
                <form onSubmit={props.handleDelete}>
                    <input type="submit" value="Delete Account"/>
                </form>
            </div>
        </div>
    )
}