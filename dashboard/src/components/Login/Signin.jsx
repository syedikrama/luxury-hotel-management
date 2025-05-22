import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('')
    const navigate = useNavigate();

    const Login = async () => {
        try {
            const res = await axios.post('http://localhost:3001/HMS/login', {
                email,
                password,
            });

            setMessage(`Login Success! Role: ${res.data.user.role}`);
            // Save token and role
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('role', res.data.user.role);
            localStorage.setItem('name', res.data.user.name);

            // Redirect based on role
            const role = res.data.user.role;
            if (role) {
                navigate('/dashboard');
            }
            //   else if (role === 'manager') {
            //     navigate('/dashboard');
            //   } else if (role === 'user') {
            //     navigate('/dashboard');
            //   }

        } catch (error) {
            setMessage(error.res?.data?.message || 'Login failed');
            console.error('Login Failed:', error);
            // alert("Login failed. Check credentials.");
        }
    };

    return (
        <div>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={Login}>Login</button>
            <p>{ message }</p>
        </div>
    );
}