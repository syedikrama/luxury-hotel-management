// import React from 'react'
// import LoginForm from './LoginForm'

// export default function Login() {
//   return (
//     <div>
//         <LoginForm />
//     </div>
//   )
// }




// import React, { useState } from 'react';
// import axios from 'axios';

// export default function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const Login = async () => {
//     try {
//       const response = await axios.post('http://localhost:3001/HMS/login', {
//         email,
//         password
//       });

//       // JWT token localStorage mein save kar lena
//       localStorage.setItem('token', response.data.token);

//       setMessage(`Login Success! Role: ${response.data.user.role}`);
//       console.log('User Info:', response.data.user);
//     } catch (error) {
//       console.error('Login Failed:', error);
//       setMessage(error.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <div style={{ padding: '20px', maxWidth: '400px' }}>
//       <h2>Login</h2>

//       <div style={{ marginBottom: '10px' }}>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//         />
//       </div>

//       <div style={{ marginBottom: '10px' }}>
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter your password"
//         />
//       </div>

//       <button onClick={Login}>Login</button>

//       {message && <p style={{ marginTop: '10px' }}>{message}</p>}
//     </div>
//   );
// }












import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('')
  const navigate = useNavigate();

  const Login = async () => {
    try {
      const res = await axios.post('http://localhost:3001/hms/login', {
        email,
        password,
      });

      setMessage(`Login Success! Role: ${res.data.user.role}`);
      // Save token and role
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.user.role);

      // Redirect based on role
      const role = res.data.user.role;
      if (role === 'admin') {
        navigate('/admin-dashboard');
      } else if (role === 'manager') {
        navigate('/manager-dashboard');
      } else if (role === 'user') {
        navigate('/user-dashboard');
      }

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
    </div>
  );
}
