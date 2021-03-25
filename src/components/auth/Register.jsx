import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Redirect } from 'react-router-dom'
import Account from './Account'

export default function Register(props) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [city, setCity] = useState('')
    const [img, setImg] = useState('')
    const [trips, setTrips] = useState([])

    const handleSubmit = async (e) => {
        try {
          e.preventDefault()
          
          const requestBody = {
            username: username,
            email: email,
            password: password
          }

          const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/register`, requestBody)

          const { token } = response.data
          localStorage.setItem('jwtToken', token)
          const decoded = jwt_decode(token)
          props.setCurrentUser(decoded)
    


        } catch(error) {
          if(error.response.status === 400) {
            setMessage(error.response.data.msg)
          } else {
            console.log(error)
        }

    }
}

if(props.currentUser) return <Redirect to='/' component={ Account } currentUser={ props.currentUser } />

    return(
        <div>
            <h2>Registration page</h2>
            <p>{message}</p>

            <form onSubmit={ handleSubmit } >
                <label htmlFor='username-input'>Username:</label>

                <input
                    id='username-input'
                    type='text'
                    placeholder='your username'
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                />

                <label htmlFor='email-input'>email:</label>

                <input
                    id='email-input'
                    type='email'
                    placeholder='your Email'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />

                <label htmlFor='password-input'>password:</label>

                <input
                    id='password-input'
                    type='password'
                    placeholder='your password'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />

                <input
                    id='firstName-input'
                    type='hidden'
                    value={firstName}
                />
                <input
                    id='lastName-input'
                    type='hidden'
                    value={lastName}
                />
                <input
                    id='city-input'
                    type='hidden'
                    value={city}
                />
                <input
                    id='img-input'
                    type='hidden'
                    value={img}
                />
                <input
                    id='trips-input'
                    type='hidden'
                    value={trips}
                />
                <input 
                    type='submit'
                    value='Register'
                />
            </form>
        </div>
    )
}