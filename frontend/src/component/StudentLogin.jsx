import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const StudentLogin = ({Stutoken}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit =async (e)=>{
    e.preventDefault()

    const StudentUser = {
      username:username,
      password:password
    }
    try{
      const response = await axios.post('http://localhost:8000/student/login/',StudentUser)
      if(response.data.success){
       localStorage.setItem('access_token', response.data.access_token);
       localStorage.setItem('refresh_token', response.data.refresh_token);
       if(Stutoken === ""){
        navigate('/profile')
       }else{
        navigate("/courselist")
       }
      }
     
      else if (response.data.error) {
        setMessage(response.data.error);
      }
    }catch(er){
      setMessage('Login failed. Please try again.')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"90vh"}}>
        <div className='login_main'>
          <h2>Login</h2>
        <input type="text" placeholder='User Name' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit'>Login</button>
        {message && <p style={{ color: 'red' }}>{message}</p>}
        </div>
        </div>
      </form>
    </div>
  )
}

export default StudentLogin