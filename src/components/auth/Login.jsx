import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Redirect } from 'react-router-dom'
import Profile from './Profile'
import { Link } from 'react-router-dom'

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
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/user/login`, requestBody)
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
    //check to see if user is logged in and redirect to profile
    if(props.currentUser) return <Redirect to='/profile' component={ Profile } currentUser={ props.currentUser } />
    
    return(
        <div>
            <h3>login form:</h3>
            <p>{ message }</p>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="email-input">Email:</label>
                <input
                    id="email-input"
                    type="email"
                    placeholder="user@url.com"
                    onChange={ e => setEmail(e.target.value)}
                    value={email}
                />
                <label htmlFor="password-input">Password:</label>
                <input
                    id="password-input"
                    type="password"
                    placeholder="password..."
                    onChange={ e => setPassword(e.target.value)}
                    value={password}
                />
                <input type="submit" value="login" />

            </form>
        </div>
    )
}