// Update current user in state?

import { useState } from 'react'
import axios from 'axios'
import chrisImg from '../../img/chris.jpg'
import imgLogo from '../../img/App-logo.png'
import { Redirect } from 'react-router'

export default function Account(props) {
    const [shouldRedir, setShouldRedir] = useState(false)
    const [username, setUsername] = useState(props.currentUser.username)
    const [email, setEmail] = useState(props.currentUser.email)
    const [firstName, setFirstName] = useState(props.currentUser.firstName)
    const [lastName, setLastName] = useState(props.currentUser.lastName)
    const [city, setCity] = useState(props.currentUser.city)
    const [img, setImg] = useState(props.currentUser.img)

    const handleSubmit = async e => {
        e.preventDefault()
        try{
            const requestBody = {
                username: username,
                email: email,
                firstName: firstName,
                lastName: lastName,
                city: city,
                img: img
            }
            // get our jwt from local storage
            const token = localStorage.getItem('jwtToken')
            // make some Auth headers
            const authHeaders = {
                'Authorization': token
            }

            await axios.put(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/account`, requestBody, { headers: authHeaders} )
            setShouldRedir(true)

        } catch(err){
            console.log(err);
        }
    }

    const handleDelete = async e => {
        e.preventDefault()
        // get our jwt from local storage
        const token = localStorage.getItem('jwtToken')
        // make some Auth headers
        const authHeaders = {
            'Authorization': token
        }
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/account`, { headers: authHeaders})
        localStorage.removeItem('jwtToken')
        setShouldRedir(true)
    }

    return(
        shouldRedir ? <Redirect to={`/users/${props.currentUser.id}/trips`}/> : <div className="background-trips">

            <div className="account-card">
                <img src={chrisImg} alt="chris img" className="account-img"/>
            </div>

            <h1>Hello {props.currentUser.username} !</h1> 
            {/* <h4>Portland, OR</h4>  */}

            <div>
                <img src={imgLogo} alt="trip tracker logo" className="small-logo" />
            </div>

            <div className="account-form">
                <form onSubmit={handleSubmit} className="update-info"> 
                    <div>
                        <label htmlFor="first-name-input">First Name</label>
                        <input 
                            type="text" 
                            placeholder="First Name" 
                            id="first-name-input" 
                            value={ firstName }
                            onChange={e => setFirstName(e.target.value)} 
                        />

                        <label htmlFor="last-name-input">Last Name</label>
                        <input 
                            type="text" 
                            placeholder="Last Name" 
                            id="last-name-input" 
                            value={ lastName }
                            onChange={e => setLastName(e.target.value)}
                        />

                        <label htmlFor="username-input">Username</label>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            id="username-input" 
                            value={ username }
                            onChange={e => setUsername(e.target.value)}
                        />

                        <label htmlFor="account-image-input">Account Image</label>
                        <input 
                            type="text" 
                            placeholder="Account Image" 
                            id="account-image-input" 
                            value={ img }
                            onChange={e => setImg(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="email-input">Email Address</label>
                        <input 
                            type="text" 
                            placeholder="Email Address" 
                            id="email-input" 
                            value={ email }
                            onChange={e => setEmail(e.target.value)}
                        />

                        <label htmlFor="city-input">City</label>
                        <input 
                            type="text" 
                            placeholder="City" 
                            id="city-input" 
                            value={ city }
                            onChange={e => setCity(e.target.value)}
                        />

                        <input 
                            id="update-button"
                            type="submit" 
                            value="Update Account"
                        />
                    </div>
                </form>
                <form onSubmit={handleDelete}>
                    <input type="submit" value="Delete Account"/>
                </form>
            </div>
        </div>
    )
}