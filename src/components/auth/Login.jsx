import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Redirect } from 'react-router-dom'
import TripContainer from '../trip-folder/TripContainer'

export default function Login(props) {
    // app state for sign in form
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //message for log-in problems
    const [message, setMessage] = useState('')
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const requestBody = {
                email: email,
                password: password
            }
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/login`, requestBody)
            const { token } = response.data
            //save the response jwt in local storage
            localStorage.setItem('jwtToken', token)
            //decode jwt and set app state
            const decoded = jwt_decode(token)
            props.setCurrentUser(decoded)
        } catch (error) {
           if(error.response.status === 400) {
               setMessage(error.response.data.msg)
           } else {
               console.error(error)
           }
        }
    }
    //check to see if user is logged in and redirect to account
    if(props.currentUser) return <Redirect to={`/users/${props.currentUser.id}/trips`} component={ TripContainer } currentUser={ props.currentUser } />
    
    return(
        <div className="background-trips">
            <div className="register-form">
                <h2>Login to Your Account</h2>
                <p>{ message }</p>
                <form onSubmit={ handleSubmit } className="register-info">
                    <div className="register-input">
                    <label htmlFor="email-input">Email: </label>
                    <input
                        id="email-input"
                        type="email"
                        placeholder="user@url.com"
                        onChange={ e => setEmail(e.target.value)}
                        value={email}
                    />
                    </div>
                    <div className="register-input">
                    <label htmlFor="password-input">Password: </label>
                    <input
                        id="password-input"
                        type="password"
                        placeholder="password..."
                        onChange={ e => setPassword(e.target.value)}
                        value={password}
                    />
                    </div>
                    <div>
                        <input type="submit" value="Login" />
                    </div>

                </form>
            </div>
        </div>
    )
}