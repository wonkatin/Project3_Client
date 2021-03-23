import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Redirect } from 'react-router-dom'
import Profile from './Profile'

export default function Login() {
    // app state for sign in form
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //message for log-in problems
    const [message, setMessage] = useState('')
    const handleSubmit = async (e) => {
        try {

        } catch (error) {
            console.log(error.response.data)
        }
    }
    return(
        <div>
            Hello from Login
        </div>
    )
}