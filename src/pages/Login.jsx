import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PasswordInput from '../components/input/PasswordInput';
import { validateEmail } from "../utils/emailHelper"
// import axiosInstance from '../utils/axiosInstance';
import { BASE_URL } from '../utils/constants'

const Login = () => {
    const navigate = useNavigate;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [error1, setError1] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError("Please Enter Valid Email");
            return;
        }
        if (!password) {
            setError1("Please Enter the Password")
            return;
        }
        setError("")
        setError1("")
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const data = await response.json();
        if (response.ok) {
            console.log(data)
            alert("Login Successfully");
            localStorage.setItem('token', data.token)
            navigate("/all")
        }
    }

    return (
        <div className='flex items-center justify-center mt-32'>
            <div className='border rounded w-96 bg-white px-7 py-10'>
                <form onSubmit={handleLogin}>
                    <div className='flex justify-center'>
                        <h4 className='text-2xl mb-5 bg-gradient-to-r from-blue-600 via-green-500 to-fuchsia-400 inline-block text-transparent bg-clip-text'>SignUp</h4>
                    </div>
                    <input
                        type="text"
                        placeholder='Email'
                        className='input-box'
                        autoComplete='off'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error && <p className='text-red-600 text-xs pb-3'>{error}</p>}
                    <PasswordInput
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error1 && <p className='text-red-600 text-xs pb-3'>{error1}</p>}
                    <button type='submit' className='btn-primary mb-3'>Login</button>
                    <p className='text-sm'>If Not Registered yet <Link to="/register" className='text-blue-700'>Create Account</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login