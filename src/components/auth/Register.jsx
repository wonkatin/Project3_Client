import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Redirect } from 'react-router-dom'
import Profile from './Profile'

export default function Register(props) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async e => {
        try {
          e.preventDefault()
    
          // post to the backed with our form submission
          const requestBody = {
            username: username,
            email: email,
            password: password
          }

          const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/register`, requestBody)

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

if(props.currentUser) return <Redirect to='/profile' component={ Profile } currentUser={ props.currentUser } />

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
                    type='submit'
                    value='Register'
                />
            </form>
        </div>
    )
}