import React from 'react'

const LandingPage = () => {
  return (
    <div>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"90vh"}} className='landing_page'>
            <a href="/admin"> <button style={{backgroundColor:"red"}}> Admin Login</button></a>
            <a href="/studentlogin"><button> Student Login</button></a>
            <a href="/studentsignup"><button> Student SignUp</button></a>
        </div>
    </div>
  )
}

export default LandingPage