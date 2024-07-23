import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PasswordInput from '../components/input/PasswordInput';
import { validateEmail } from "../utils/emailHelper"
import { BASE_URL } from '../utils/constants';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error1, setError1] = useState(null);
    const [error2, setError2] = useState(null);
    const [error3, setError3] = useState(null);

    const handleRegister = async (e) => {
        const navigate = useNavigate;
        e.preventDefault();
        if (!name) {
            setError1("Please Enter the Name")
            return;
        }
        if (!validateEmail(email)) {
            setError2("Please Enter Valid Email");
            return;
        }
        if (!password) {
            setError3("Please Enter the Password")
            return;
        }
       

        const response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
        const data = await response.json()
        if (response.ok) {
            console.log(data)
            
            alert("User Register Successfully")
            setName("")
            setEmail("")
            setPassword("")
            navigate('/login')
            setError1("")
            setError2("")
            setError3("")
        }

    }



    return (
        <div className='flex items-center justify-center mt-32'>
            <div className='border rounded w-96 bg-white px-7 py-10'>
                <form onSubmit={handleRegister}>
                    <div className='flex justify-center'>
                        <h4 className='text-2xl mb-5 bg-gradient-to-r from-blue-600 via-green-500 to-fuchsia-400 inline-block text-transparent bg-clip-text'>SignUp</h4>
                    </div>

                    <input
                        type="text"
                        placeholder='Name'
                        className='input-box'
                        autoComplete='off'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {error1 && <p className='text-red-600 text-xs pb-3'>{error1}</p>}
                    <input
                        type="text"
                        placeholder='Email'
                        className='input-box'
                        autoComplete='off'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error2 && <p className='text-red-600 text-xs pb-3'>{error2}</p>}
                    <PasswordInput
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error3 && <p className='text-red-600 text-xs pb-3'>{error3}</p>}
                    <button type='submit' className='btn-primary mb-3'>Create Account</button>
                    <p className='text-sm'>Already Registered yet <Link to="/login" className='text-blue-700'>Please Login</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Signup